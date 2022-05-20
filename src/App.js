import { BrowserRouter, Routes, Route } from "react-router-dom";


import PagesHeader from "./shared/PagesHeader";
import HomePage from "./components/HomePage/HomePage";
import MoviePage from "./components/MoviePage/MoviePage";

export default function App(){
    return(
        <BrowserRouter>
            <PagesHeader />
            <Routes>
                <Route path="/" element ={<HomePage />} />
                <Route path="/sessoes/:idFilme" element ={<MoviePage />} />
            </Routes>
        </BrowserRouter>
    )
}

                /* <Route path="/" element ={} />
                <Route path="/" element ={} /> */