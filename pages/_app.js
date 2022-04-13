import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const subtitle = router.pathname.charAt(1).toUpperCase() + router.pathname.slice(2)
  return (<>
    <Head>
      <title>EndOrlandoTraffic.org - {subtitle}</title>
      <meta name="description" content="How we can improve Orlando transportation" />
      <link rel="icon" href="/favicon.ico" />
    </Head>


    <div>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  </>)
}

export default MyApp
