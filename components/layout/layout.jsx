import AppHeader from '../appHeader/appHeader';
// import Footer from './footer'
import Head from 'next/head';

export default function Layout({ children }) {

    const backgroundImageStyle = {
        backgroundImage: "url(images/tucu_poza_buna_crop.jpeg)",
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "contain",
        flex: "auto"
    }

    return (
        <>
            <Head>
                <title>Tucu Bleich</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="favicon_io/favicon.ico" />
            </Head>
            <AppHeader brandName="Tucu Bleich" expand="lg"/>
            <div style={backgroundImageStyle}>{children}</div>
            {/* <Footer /> */}
        </>
    )
}