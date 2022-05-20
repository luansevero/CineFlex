import styled from "styled-components";

export default function PagesHeader(){
    return(
        <Header>
            <h1>CINEFLEX</h1>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 67px;
    top: 0;
    left: 0;
    background-color: #c3cfd9;

    h1{
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A; 
    }
`