import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EndOrlandoTraffic.org</title>
        <meta name="description" content="Cars kill" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.splash}>
          <h1 className={styles.title}>
           Put the <span style={{textShadow: "0 0 7px #FF7168", color: "#E8584F"}}>brakes</span> on traffic.
          </h1>

          <p className={styles.description}>
            Fewer cars on the road.
            <br />
            More ways to get around.
          </p>
        </div>

        <h1 className={styles.time}>
          It&apos;s time to do something about Orlando&apos;s traffic problems.
        </h1>

        <div className={styles.grid}>
          <Link href="/facts">
            <div className={styles.card}>
              <h2>Facts &rarr;</h2>
              <p>What&apos;s so bad about traffic?</p>
            </div>
          </Link>

          <Link href="/action">
            <div className={styles.card}>
              <h2>Action &rarr;</h2>
              <p>Let&apos;s do something about it.</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Bing bong.
        </a>
      </footer>
    </div>
  )
}
