import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import PagesHeader from "./shared/PagesHeader";
import HomePage from "./components/HomePage/HomePage";
import MoviePage from "./components/MoviePage/MoviePage";
import SectionPage from "./components/SectionPage/SectionPage";
import SucessPage from "./components/SucessPage/SucessPage";

export default function App(){



    return(
        <BrowserRouter>
            <PagesHeader />
            <Routes>
                <Route path="/" element ={<HomePage />} />
                <Route path="/sessoes/:idFilme" element ={<MoviePage />} />
                <Route path="/assentos/:idSessao" element={<SectionPage />} />
                <Route path="/sucesso" element={<SucessPage />} />
            </Routes>
        </BrowserRouter>
    )
}

                /* <Route path="/" element ={} />
                <Route path="/" element ={} /> */