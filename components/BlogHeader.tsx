import styles from '../styles/BlogHeader.module.css';
import Image from 'next/image'


const BlogHeader = ({ title, date, username, icon }: any) => {
  return (
    <>
      <section className={styles.titleContainer}>
        <h1 className={styles.title}>{icon}{title}</h1>
      </section>

      <section className={styles.info}>
        <Image className={styles.avatar} src={'/assets/profile/whattheearl.jpg'} alt="me" width="28" height="28" />
        <div className={styles.username}>{username}</div>
        <div className={styles.date}>{date}</div>
      </section>
    </>
  )
}
export default BlogHeader;