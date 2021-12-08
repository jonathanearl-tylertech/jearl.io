import Image from 'next/image'
import styles from '../styles/ProfileDetail.module.css';


const ProfileDetail = ({ picture, username, name, excerpt }: any) => {
  return (
    <>
      <section className={styles.avatarSection}>
        <Image className={styles.avatar} src={picture} alt="me" width="77" height="77" />
        <div className={styles.username}>{username}</div>
      </section>
      <section className={styles.summarySection}>
        <div className={styles.name}>{name}</div>
        <div>{excerpt}</div>
      </section>
    </>
  )
}
export default ProfileDetail;