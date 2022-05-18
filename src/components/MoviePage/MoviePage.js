import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import axios from "axios";
import "./style.css"

import SubHeader from "../../shared/SubHeader/SubHeader";
import MovieSections from "./MovieSections";
import PageFooter from "../../shared/pageFooter/PagesFooter";

export default function MoviePage(){

    const { idFilme } = useParams();
    const [sections, setSections] = useState({});
    const [days, setDays] = useState([]);
    const sectionDescription = false

    useEffect(() =>{
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promisse.then((res) => {
            setSections(res.data);
            setDays(res.data.days)
        })
    }, [])
    
    return(
        <main className="sectionPage">
            <SubHeader headerClass="subHeader" headerTitle="Selecione o horário" />
            <section className="allSections">
                <ul className="sectionList">
                    {days.map((sect) =>
                        <MovieSections dayId={sect.id} weekday={sect.weekday} date={sect.date} showtimes={sect.showtimes} />
                    )}
                </ul>
            </section>
            <PageFooter sectionSelected={sectionDescription} posterTitle={sections.title} posterSource={sections.posterURL} />
        </main>
    )
}
