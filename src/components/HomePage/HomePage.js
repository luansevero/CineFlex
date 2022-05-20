import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import MoviePosters from "./MoviePosters";
import SubHeader from "../../shared/SubHeader"

export default function HomePage() {

    const [moviePoster, setMoviePoster] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then(response => {
            setMoviePoster(response.data)
        });
    }, []);

    return (
        <Main>
            <SubHeader headerClass="subHeader" headerTitle="Selecione o filme" />
            <Section>
                <ListOfMovies>
                    {moviePoster.map((poster) => 
                        <MoviePosters movieId={poster.id} title={poster.title} posterSource={poster.posterURL} />
                    )}
                </ListOfMovies>
            </Section>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
`
const Section = styled.section`
    width: 100%;
    padding: 0 12.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;  
`
const ListOfMovies = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;

`