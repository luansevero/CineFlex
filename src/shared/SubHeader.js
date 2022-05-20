import styled from 'styled-components';
export default function SubHeader({ textColor, headerTitle }){
    return(
        <Header>
            <h1 sucess={textColor}>{headerTitle}</h1>
        </Header>
    )
}

const Header = styled.header`
    margin-top: 67px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #${props => props.sucess ? "247A6B" : "293845"};
    }

`;