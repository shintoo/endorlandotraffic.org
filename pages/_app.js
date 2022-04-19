import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const subtitle = router.pathname ? "- " + router.pathname.charAt(1).toUpperCase() + router.pathname.slice(2) : ""
  return (<>
    <Head>
      <title>EndOrlandoTraffic.org</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@OrlandoTraffic" />
      <meta name="twitter:title" content="EndOrlandoTraffic.org" />
      <meta name="twitter:description" content="Take action on Orange County transit" />
      <meta name="twitter:image" content="https:/www.endorlandotraffic.org/card.png" />
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
