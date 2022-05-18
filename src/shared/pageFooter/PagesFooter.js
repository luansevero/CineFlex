import { useState } from "react"
import "./style.css"

export default function PageFooter( { sectionSelected, posterTitle, posterSource, posterSection } ){

    return(
        <footer className="pageFooter">
            <div className="imgMold">
                <img src={posterSource} alt={posterTitle} />
            </div>
            <h2 className="movieName">{posterTitle}</h2>
            {sectionSelected ? (
                <h2 className="movieSection">{posterSection}</h2>
            ) : (
                ""
            )}
        </footer>
    )
}