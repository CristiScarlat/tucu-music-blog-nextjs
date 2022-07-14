import AppHeader from '../appHeader/appHeader';
// import Footer from './footer'
import Head from 'next/head';
import { useRouter } from 'next/router';
import CookieConsent from 'react-cookie-consent';
import Script from 'next/script';

export default function Layout({ children }) {
  const router = useRouter();

  const backgroundImageStyle = {
    backgroundImage: 'url(images/tucu_poza_buna_crop.jpeg)',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'contain',
    flex: 'auto'
  };

  return (
    <>
      <Head>
        <title>Tucu Bleich</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="favicon_io/favicon.ico" />
      </Head>
      <AppHeader brandName="Tucu Bleich" expand="lg" />
      <div style={backgroundImageStyle}>{children}</div>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EWP3ZVNGX3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EWP3ZVNGX3');
        `}
      </Script>
      <CookieConsent
        location=""
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        disableStyles={false}
        //style={cookieConstentStyle}
        //buttonStyle={cookieConstentButtonStyle}
      >
        {/* This website uses cookies to enhance the user experience.{' '} */}
        Acest site foloseste cookie-uri. Continuarea navigarii implica acceptarea lor. 
        <a href="https://ro.wikipedia.org/wiki/Cookie" className="ms-2" style={{textDecoration: "underline"}} target="__blank">Mai multe despre cookie-uri.</a>
      </CookieConsent>
      <footer style={{textAlign: "center", position: "fixed", bottom: 0, width: "100%"}}>
        Copyright © 2022 Tucubleich.com Sauvage Timișoara
      </footer>
      {/* {router.pathname !== "/player" && <audio src="/music/9.Takitic.mp3" autoPlay loop controls>
                <p>If you are reading this, it is because your browser does not support the audio element.</p>
            </audio>} */}
    </>
  );
}
