import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css'

const he1der = ({ title, back }: { title: string, back: boolean }) => {
  const router = useRouter();

  return (
    <header className={styles.header} onClick={() => router.push('/blog')}>
      {back ? <span className={styles.back}>👈</span> : null}
      <span className={styles.title}>{title}</span>
    </header>
  )
}

export default he1der;
