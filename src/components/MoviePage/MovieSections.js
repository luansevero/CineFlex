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