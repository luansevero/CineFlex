import { Link } from "react-router-dom";

export default function MoviePosters({ movieId, title , posterSource }) {
    return (
        <li key={movieId} className="moviePoster">
            <Link to={`/sessoes/${movieId}`}>
                {posterSource ? (
                    <img src={posterSource} alt={title} />
                ) : (
                    "Carregando Poster"
                )}
            </Link>
        </li>
    )
}