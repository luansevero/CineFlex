import { useState } from "react"

import styled from "styled-components";

export default function AllSeats({ seatId, seatNumber, isAvailable, setSeatsSelected, seatsSelected }){
    const [stillAvailable, setStillAvailable] = useState(true);
    const [seatIsAvailable, setSeatIsAvailable] = useState(isAvailable)

    function isSeatAvailable(seatIsAvailable, stillAvailable, seatId){
        if(!seatIsAvailable){
            alert(`Esse assento não está disponível`)
        } else {
            setStillAvailable(!stillAvailable);
            (stillAvailable) 
            ? setSeatsSelected([...seatsSelected, seatId])
            : setSeatsSelected(seatsSelected.filter((e) => e !== seatId));
        }
    }

    return(
        <SeatButton key={seatId} id={seatId} onClick={() => isSeatAvailable(seatIsAvailable, stillAvailable, seatId)} seatColor={stillAvailable} seatIsAvailable={seatIsAvailable}>
            <p>{seatNumber}</p>
        </SeatButton>
    )
}
const SeatButton = styled.button`
    background-color: #${props => props.seatIsAvailable ? (props.seatColor ? "C3CFD9" : "1AAE9E") : "FBE192"};
    border: 1px solid #${props => props.seatIsAvailable ? (props.seatColor ? "808F9D" : "45BDB0") : "F7C52B"};

    p{
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;
        color: #000000;
    }
`