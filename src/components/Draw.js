import { useState } from 'react';
import styled from 'styled-components';

export default function Draw(){
    const [desc, setDesc] = useState("")
    const [value, setValue] = useState("") 

    function submit() {

    }

    return (
        <StyledContainer>
            <StyledWrapper>
                <StyledHeader>
                    <h1>Nova Saída</h1>
                </StyledHeader>

                <Form>
                    <input type='text' placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}></input>
                    <input type='text' placeholder="Descrição" value={desc} onChange={e => setDesc(e.target.value)}></input>
                    <button type='submit' onClick={submit}>Salvar saída</button>
                </Form>
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
    padding-top: 30px;
`;

const StyledHeader = styled.div`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
    padding: 0 10px;
`;

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
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
        font-weight: 700;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;