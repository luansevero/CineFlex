import { useState } from "react";
import styled from "styled-components";

export default function SeatsForm({ reservSeats, setCustomerCPF, setCustomerName, customerName, customerCPF }) {

    return (
        <Form onSubmit={reservSeats}>
            <label for="nameInput">Nome do comprador:</label>
            <input type="text" id="nameInput" placeholder="Digite seu nome..." value={customerName} onChange={e => {
                setCustomerName(e.target.value)
                }} />
            <label for="cpfInput">Cpf do comprador:</label>
            <input type="number" id="cpfInput" placeholder="Digite seu CPF..." value={customerCPF} onChange={e => {
                setCustomerCPF(e.target.value)
                }}/>
                <button type="submit" >Reservar assento(s)</button>
        </Form>
    )
}

const Form = styled.form`
    margin: 0 auto;
    width: 327px;
    display: flex;
    flex-direction: column;
    align-items: center;
    label{
        width: 100%;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }
    input{
        all: unset;
        box-sizing: border-box;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        width: 100%;
        height: 51px;
        padding-left: 18px;
        margin-bottom: 7px;
        &:last-of-type{
            margin-bottom: 0px;
        }
    }
    button{
        margin-top: 57px;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
    }

`
