import styles from './Footer.module.css'

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>EndOrlandoTraffic.org</span><br />
      EndOrlandoTraffic.org is unaffiliated with Orange County, FL.
    </footer>
  )
}
