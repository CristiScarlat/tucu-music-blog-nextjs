import AppHeader from '../appHeader/appHeader';
// import Footer from './footer'
import Head from 'next/head';
import { useRouter } from 'next/router';


export default function Layout({ children }) {

    const router = useRouter();

    console.log(router.pathname)

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
            <AppHeader brandName="Tucu Bleich" expand="lg" />
            <div style={backgroundImageStyle}>{children}</div>
            {/* {router.pathname !== "/player" && <audio src="/music/9.Takitic.mp3" autoPlay loop controls>
                <p>If you are reading this, it is because your browser does not support the audio element.</p>
            </audio>} */}
        </>
    )
}