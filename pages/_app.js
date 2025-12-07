import '../styles/global.css';
import Navbar from '../composants/Navbar';
import Footer from '../composants/Footer';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ZestUp !</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
