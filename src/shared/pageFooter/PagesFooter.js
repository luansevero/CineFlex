import { useState } from "react"
import "./style.css"

export default function PageFooter(){
    const [section, setSection] = useState(false)  

    return(
        <footer className="pageFooter">
            <img src="" alt="" />
            <h2 className="movieName"></h2>
            {section ? (
                <h2 className="movieSection"></h2>
            ) : (
                ""
            )}
        </footer>
    )
}