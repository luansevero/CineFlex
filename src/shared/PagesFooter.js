import { useState } from "react"
import styled from "styled-components";

export default function PageFooter( { sectionSelected, posterTitle, posterSource, posterSection } ){

    return(
        <Footer>
            <PosterFrame>
                <img src={posterSource} alt={posterTitle} />
            </PosterFrame>
            <h2>{posterTitle}</h2>
            {sectionSelected ? (
                <h2>{posterSection}</h2>
            ) : (
                ""
            )}
        </Footer>
    )
}

const Footer = styled.footer`
    position: fixed;
    width: 100%;
    height: 117px;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    padding: 14px 10px;

    h2{
        margin-left: 14px;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845; 
    }
`

const PosterFrame = styled.div`
    width: 64px;
    height: 89px;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 8px;

    img{
        width: 100%;
        height: 100%;
    }
`