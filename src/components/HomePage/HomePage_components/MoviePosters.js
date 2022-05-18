import { Link } from "react-router-dom";

export default function MoviePosters({ id, title , posterSource }) {
    return (
        <li key={id} className="moviePoster">
            <Link to={`/sessoes/${id}`}>
                {posterSource ? (
                    <img src={posterSource} alt={title} />
                ) : (
                    "Carregando Poster"
                )}
            </Link>
        </li>
    )
}