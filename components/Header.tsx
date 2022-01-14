import Link from 'next/link';
import styles from '../styles/Header.module.css'

const Header = ({ title }: { title: string }) => {
  return (
    <header className={styles.container}>
      <span className={styles.title}>{title}</span>
    </header>
  )
}

export default Header;
