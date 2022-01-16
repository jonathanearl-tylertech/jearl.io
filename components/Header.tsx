import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css'

const Header = ({ title, back }: { title: string, back: boolean }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <header className={styles.header} onClick={() => router.push('/blog')}>
        {back ? <span className={styles.back}>👈</span> : null}
        <span className={styles.title}>{title}</span>
      </header>
    </div>
  )
}

export default Header;
