import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css"

import MoviePosters from "./MoviePosters";
import SubHeader from "../../shared/SubHeader/SubHeader";

export default function HomePage() {

    const [moviePoster, setMoviePoster] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then(response => {
            setMoviePoster(response.data)
        });
    }, []);

    return (
        <main className="homePage">
            <SubHeader headerClass="subHeader" headerTitle="Selecione o filme" />
            <section className="allMovies">
                <ul className="movieList">
                    {moviePoster.map((poster) => 
                        <MoviePosters movieId={poster.id} title={poster.title} posterSource={poster.posterURL} />
                    )}
                </ul>
            </section>
        </main>
    )
}