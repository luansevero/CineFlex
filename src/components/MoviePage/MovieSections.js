import styled from "styled-components";

import SectionsHours from "./SectionsHours"

export default function MovieSections({ dayId, weekday, date, showtimes }){
    
    return(
        <li key={dayId} className="section">
            <h2 className="sectionDate">{weekday} - {date}</h2>
            {showtimes.map((btn) =>
                <SectionsHours sectionId={btn.id} sectionHour={btn.name}/>
            )}
        </li>
    )
}

const MovieSection = styled.li`
    padding: 0 19px 19px 19px;

    h2{
        margin: 0 0 16px 4px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #293845; 
    }
`