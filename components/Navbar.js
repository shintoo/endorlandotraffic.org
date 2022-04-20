import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

export default function Navbar(props) {
  const router = useRouter()
  const navbarRef = useRef(null)
  const [ scrolled, setScrolled ] = useState(false)

  useEffect(_ => {
    window.addEventListener('scroll', _ => {
      setScrolled(window.scrollY >= 73)
    })
  }, [])
  let navbarClasses = [styles.navbar]

  if (scrolled) {
    navbarClasses.push(styles.sticky)
  }

  return (
    <div className={navbarClasses.join(" ")} ref={navbarRef}>
      <Link href="/"><div className={styles.logo}>EndOrlandoTraffic.org</div></Link>
      <Link href="facts"><div className={[styles.navlink, router.pathname=="/facts" && styles.highlight].join(" ")}>Facts</div></Link>
      <Link href="/action"><div className={[styles.navlink, router.pathname=="/action" && styles.highlight].join(" ")}>Action</div></Link>
      <Link href="/about"><div className={[styles.navlink, router.pathname=="/about" && styles.highlight].join(" ")}>About</div></Link>
    </div>
  )
}
