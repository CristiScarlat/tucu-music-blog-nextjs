import { useEffect } from 'react';
import Layout from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/home.css';
import '../styles/lyrics.css';
import '../styles/artists.css';
// import 'photoswipe/dist/photoswipe.css'
// import 'photoswipe/dist/default-skin/default-skin.css'
import '../styles/imagesAndStories.css';
import '../styles/shop.css';


function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
