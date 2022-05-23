import styled from 'styled-components';
export default function SubHeader({ textColor, headerTitle }){
    return(
        <Header color={textColor}>
            <h1>{headerTitle}</h1>
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
        width: ${props => props.color ? "200px" : ""};
        text-align: center;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #${props => props.color ? "247A6B" : "293845"};
    }

`;