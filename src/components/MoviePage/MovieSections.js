import styled from "styled-components";

import SectionsHours from "./SectionsHours"

export default function MovieSections({ dayId, weekday, date, showtimes }){
    
    return(
        <MovieSection>
            <h2 className="sectionDate">{weekday} - {date}</h2>
            {showtimes.map((btn) =>
                <SectionsHours sectionId={btn.id} sectionHour={btn.name}/>
            )}
        </MovieSection>
    )
}

const MovieSection = styled.li`
    padding: 10px 20px;
    :frist-of-type{
        padding-top: 0;
    }

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