import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";

import SubHeader from "../../shared/SubHeader"
import Loading from "../../shared/Loading"
import AllSeats from "./AllSeats";
import PageFooter from "../../shared/PagesFooter"
import SeatsForm from "./SeatsForm";

export default function SectionPage(){
    const { idSessao } = useParams();
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [seats, setSeats] = useState([])
    const [movieInfos, setMovieInfos] = useState([])
    const [seatsSelected, setSeatsSelected] = useState([]);
    const [customerCPF, setCustomerCPF] = useState("");
    const [customerName, setCustomerName] = useState("");
    
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promisse.then((res) => {
            setMovieInfos({
                poster: res.data.movie.posterURL,
                title: res.data.movie.title,
                weekday: res.data.day.weekday,
                date: res.data.day.date,
                hour: res.data.name
                });
            setSeats(res.data.seats)
            setIsLoading(false)
        })
    }, [])

    function isAllowToBuy(){
        if(seatsSelected.length && customerName.length > 0 && String(customerCPF).length == 11){
            return true
        } else {
            return false
        }
    }

    function reservSeats(event){
        event.preventDefault();
        if(isAllowToBuy()){
            const sucessData = {
                movie: movieInfos.title,
                weekday: movieInfos.weekday,
                date: movieInfos.date,
                hour: movieInfos.hour,
                seats: seatsSelected,
                name: customerName,
                cpf: customerCPF
            }
            const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
                ids: seatsSelected,
                name: customerName,
                cpf: String(customerCPF)
            });
            promisse.then(
                history("/sucesso", {state: {receipt: sucessData}})
            )
        }
    }

    return(
        <Main>
            {isLoading 
            ? <Loading />
            :<>
            <SubHeader headerClass="subHeader" headerTitle="Selecione o(s) assento(s)" />
            <Section>
                <SeatsContainer>
                    {seats.map((seat) =>
                        <AllSeats seatId={seat.id} seatNumber={seat.name} isAvailable={seat.isAvailable} setSeatsSelected={setSeatsSelected} seatsSelected={seatsSelected}/>
                    )}
                </SeatsContainer>
                <SeatInfo>
                        <div>
                            <Circle color="8DD7CF" borderColor="1AAE9E"></Circle>
                            <h2>Selecionado</h2>
                        </div>
                        <div>
                            <Circle color="C3CFD9" borderColor="7B8B99"></Circle>
                            <h2>Disponível</h2>
                        </div>
                        <div>
                            <Circle color="FBE192" borderColor="F7C52B"></Circle>
                            <h2>Indisponível</h2>
                        </div>
                </SeatInfo>
            </Section>
            <Section>
                <SeatsForm reservSeats={reservSeats} setCustomerCPF={setCustomerCPF} setCustomerName={setCustomerName} customerName={customerName} customerCPF={customerCPF}/>
            </Section>
            <PageFooter sectionSelected={true} posterTitle={movieInfos.title} posterSource={movieInfos.poster} movieSectionDay={movieInfos.weekday} movieSectionHour={movieInfos.hour}/>
            </>
            }
            
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
`

const Section = styled.section`
    width: 100%;
    padding: 0 24px;
    margin-bottom: 150px;
    &:first-of-type {
        margin-bottom: 40px;
        padding: 0 21px;
    }
`
const SeatsContainer = styled.div`
    max-width: 330px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    button{
        width: 26px;
        height: 26px;
        margin: 0 3.5px 18px 3.5px;
        border-radius: 12px;
        text-align: center;
    }
`
const SeatInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    width: 327px;
    margin: 0 auto;
    
    > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60px;
    }
    h2{
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`
const Circle = styled.div`
    width: 25px;
    height: 25px;
    background: #${props => props.color};
    border: 1px solid #${props => props.borderColor};
    border-radius: 17px;
`
