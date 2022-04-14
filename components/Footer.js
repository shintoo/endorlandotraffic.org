import styles from './Footer.module.css'

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>EndOrlandoTraffic.org</span><br />
      <div className={styles.contact}>
        <a href="endorlandotraffic@gmail.com">endorlandotraffic@gmail.com</a>&nbsp;|&nbsp;
        <a href="https://twitter.com/orlandotraffic">@OrlandoTraffic</a> <br/>
      </div>
      EndOrlandoTraffic.org is unaffiliated with Orange County, FL.
    </footer>
  )
}
