import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

export default function Home() {
    return (
            <Container>
                <Head>
                    <title>Juan Vitor Freitas</title>
                    <link rel="icon" href="/portfolio.ico" />
            </Head>
            <GlobalStyle />
                <BgImg>
                    <BgGradient />
            </BgImg>
            </Container>
    )
}

const Title = styled.h1`
    display:flex;
    align-items: center;
    justify-content: center;
    color: black;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const BgImg  = styled.div`
    background-image: url("code.png");
    width: 100vw;
    height: 50vh;
`;

const BgGradient = styled.div`
    width: 1920px;
    height: 100%;
    
    background: linear-gradient(0deg ,#2e384d,rgba(2,0,36,0) 50%); 
`;

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background-color: #2e384d;
    }
`;