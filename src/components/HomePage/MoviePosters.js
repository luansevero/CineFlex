import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MoviePosters({ movieId, title , posterSource }) {
    return (
        <Poster>
            <Link to={`/sessoes/${movieId}`}>
                {posterSource ? (
                    <img src={posterSource} alt={title} />
                ) : (
                    "Carregando Poster"
                )}
            </Link>
        </Poster>
    )
}

const Poster = styled.li`
    margin: 0 15px 10px 15px;
    height: 209px;
    width: 145px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 8px;

    img{
        width: 100%;
        height: 100%;
    }
`