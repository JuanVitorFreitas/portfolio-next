import styled, { createGlobalStyle } from 'styled-components';


export const Title = styled.h1`
    display:flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const BgImg  = styled.div`
    background-image: url("/code.png");
    width: 100vw;
    height: 50vh;
`;

export const BgGradient = styled.div`
    width: 100vw;
    height: 100%;
    
    background: linear-gradient(0deg ,#2e384d,rgba(2,0,36,0) 50%); 
`;

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background-color: #2e384d;
    }
`;