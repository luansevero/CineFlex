
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SubHeader from "../../shared/SubHeader";

export default function SucessPage(){

    const location = useLocation();
    const sucessData = location.state.receipt;

    return(
        <Main>
            <SubHeader headerTitle={"Pedido feito com sucesso!"} textColor="green"/>
            <Section>
                <h1>Filme e Sessão</h1>
                <h2>{sucessData.movie}</h2>
                <h2>{sucessData.date} {sucessData.hour}</h2>
            </Section>
            <Section>
                <h1>Ingressos</h1>
                {sucessData.seats.map((seat) =>
                    <h2>Assento {(seat % 50)}</h2>
                )}
            </Section>
            <Section>
                <h1>Comprador</h1>
                <h2>Nome: {sucessData.name}</h2>
                <h2>CPF: {sucessData.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</h2>
            </Section>
            <ButtonContainer>
                <Link to={"/"}><Button>Voltar para Home</Button></Link>
            </ButtonContainer>
        </Main>
    )
}
const Main = styled.main`
    display: flex;
    flex-direction: column;
`
const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 29px;
    margin-bottom : 30px;

    h1, h2{
        letter-spacing: 0.04em;
        color: #293845;
    }
    h1{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;      
        margin-bottom: 10px;    
    }
    h2{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 5px;

    }
`
const ButtonContainer = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    margin-top: 60px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
`