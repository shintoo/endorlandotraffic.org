import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <Link href="/"><div className={styles.logo}>EndOrlandoTraffic.org</div></Link>
      <Link href="facts"><div className={styles.navlink}>Facts</div></Link>
      <Link href="/action"><div className={styles.navlink}>Action</div></Link>
      <Link href="/about"><div className={styles.navlink}>About</div></Link>
    </div>
  )
}
