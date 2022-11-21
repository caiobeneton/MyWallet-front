import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Signin(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <StyledContainer>
            <StyledWrapper>
                <Logo>
                    <h1>MyWallet</h1>
                </Logo>
                <Form>
                    <input type='text' placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <input type='text' placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)}></input>
                    <button>Entrar</button>
                </Form>

                <Link to={`/signup`}>
                    <LinkCad>Não tem uma conta? Cadastre-se!</LinkCad>
                </Link>
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
    padding-top: 130px;
`;

const Logo = styled.div`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 26px;
    color: #FFFFFF;
    text-align: center;
`;

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 400;
        padding-left: 15px;
        margin-bottom: 6px;
        &::placeholder {
            color: #000000;
        }
    }
    button {
        width: 303px;
        height: 45px;
        margin-top: 15px;
        background: #A328D6;
        border: none;
        border-radius: 5px;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const LinkCad = styled.div`
    font-family: 'Raleway', sans-serif;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 25px;
`;