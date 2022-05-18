import { Link } from "react-router-dom";

export default function SectionsHours({ sectionId, sectionHour }){

    return(
        <Link to={`/assentos/${sectionId}`}>
            <button key={sectionId} className="sectionButton">{sectionHour}</button>
        </Link>
    )
}