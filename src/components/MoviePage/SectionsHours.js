import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SectionsHours({ sectionId, sectionHour }){

    return(
        <Link to={`/assentos/${sectionId}`}>
            <ButtonHour key={sectionId}>{sectionHour}</ButtonHour>
        </Link>
    )
}

const ButtonHour = styled.button`
    margin: 4px;
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
`