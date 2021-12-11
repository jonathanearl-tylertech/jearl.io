import Link from 'next/link';
import styles from '../styles/Header.module.css'

const Header = ({ title }: { title: string }) => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/" passHref={true}>
          <span className={styles.back}>jearl.io</span>
        </Link>
      </nav>
      <span className={styles.title}>{title}</span>
      <section className={styles.profile}>placeholder</section>
    </header>
  )
}

export default Header
