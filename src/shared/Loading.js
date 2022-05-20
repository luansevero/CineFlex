import styled from "styled-components";

import loading from "../assets/gif/CineFlexLoading.gif"

export default function Loading() {
    return (
        <Section >
            <img src={loading} alt="Loading.gif" />
            <h2>Carregando...</h2>
        </Section>
    )
}


const Section = styled.section`
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    alin-itens: center;
    justify-content: center;
    img{
      width: 150px;
      height: 150px;
      margin-bottom: 20px;
    }
    h2{
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #E8833A;
    }

`