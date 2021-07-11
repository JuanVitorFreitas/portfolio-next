import Head from 'next/head';
import { Title, BgImg, BgGradient, Container, GlobalStyle } from '../src/styles'

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

