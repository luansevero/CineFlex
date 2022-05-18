import { BrowserRouter, Routes, Route } from "react-router-dom";

import PagesHeader from "./shared/PageHeader/PagesHeader";
import PageFooter from "./shared/pageFooter/PagesFooter";
import HomePage from "./components/HomePage/HomePage";
export default function App(){
    return(
        <BrowserRouter>
            <PagesHeader />
            <Routes>
                <Route path="/" element ={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

                /* <Route path="/" element ={} />
                <Route path="/" element ={} /> */