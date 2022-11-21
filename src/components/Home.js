import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Home(){
    return (
        <StyledContainer>
            <StyledWrapper>
                <StyledHeader>
                    <h1>Olá, Fulano!</h1>
                    <ion-icon name="enter-outline"></ion-icon>
                </StyledHeader>

                <Display>

                </Display>

                <StyledOptions>
                    <Link to={`/add`}>
                        <StyledButton>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <p>Nova entrada</p>
                        </StyledButton>
                    </Link>
                    
                    <Link to={`/draw`}>
                        <StyledButton>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <p>Nova saída</p>
                        </StyledButton>
                    </Link>

                </StyledOptions>
            </StyledWrapper>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 414px;
    height: 670px;
    background-color: #8c11be;
    padding-top: 20px;
`;

const StyledHeader = styled.div`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 20px;
    ion-icon {
        color: #FFFFFF;
        font-size: 40px;
    }
`;

const Display = styled.div`
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 0 auto;
`;

const StyledOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px auto;
    padding: 0 20px;
    a:link, a:visited, a:hover, a:active {
        text-decoration: none;
    }
`;

const StyledButton = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
    padding: 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ion-icon {
        color: #FFFFFF;
        font-size: 26px;
    }
`;