import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

export default function Navbar(props) {
  const router = useRouter()
  return (
    <div className={styles.navbar}>
      <Link href="/"><div className={styles.logo}>EndOrlandoTraffic.org</div></Link>
      <Link href="facts"><div className={[styles.navlink, router.pathname=="/facts" && styles.highlight].join(" ")}>Facts</div></Link>
      <Link href="/action"><div className={[styles.navlink, router.pathname=="/action" && styles.highlight].join(" ")}>Action</div></Link>
      <Link href="/about"><div className={[styles.navlink, router.pathname=="/about" && styles.highlight].join(" ")}>About</div></Link>
    </div>
  )
}
