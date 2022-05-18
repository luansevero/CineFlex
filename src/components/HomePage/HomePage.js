import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css"

import MoviePosters from "./HomePage_components/MoviePosters";

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
            <header className="homePageHeader">
                <h1 className="headerTitle">Selecione o filme</h1>
            </header>
            <section className="allMovies">
                <ul className="movieList">
                    {moviePoster.map((poster) => 
                        <MoviePosters id={poster.id} title={poster.title} posterSource={poster.posterURL} />
                    )}
                </ul>
            </section>

        </main>
    )
}