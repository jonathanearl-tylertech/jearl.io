import { NextPage } from "next";
import styles from '../styles/BlogSummary.module.css';


const BlogSummary: NextPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.summaryItem}>
        <div className={styles.summaryCount}>1</div>
        <div className={styles.summaryTitle}>posts</div>
      </div>
      <div className={styles.summaryItem}>
        <div className={styles.summaryCount}>1</div>
        <div className={styles.summaryTitle}>followers</div>
      </div>
      <div className={styles.summaryItem}>
        <div className={styles.summaryCount}>1</div>
        <div className={styles.summaryTitle}>following</div>
      </div>
    </section>
  );
}
export default BlogSummary;