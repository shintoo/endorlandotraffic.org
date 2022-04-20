import Link from 'next/link'
import styles from './Banner.module.css'

export default function Banner(props) {
  return (
    <Link href="/action#hearing">
      <div className={styles.banner}>
        EVENT (4/26): Board of County Commissioners Public Hearing and Vote >>>
      </div>
    </Link>
  )
}
