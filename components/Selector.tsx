import React, { useState } from 'react';
import styles from '../styles/Selector.module.css';

const Selector = ({ postCount, projectCount, setShow } : any) => {
  return (
    <section className={styles.container}>
      <div className={styles.summaryItem} onClick={() => setShow('post')}>
        <div className={styles.summaryCount}>{postCount}</div>
        <div className={styles.summaryTitle}>posts</div>
      </div>
      <div className={styles.summaryItem} onClick={() => setShow('project')}>
        <div className={styles.summaryCount}>{projectCount}</div>
        <div className={styles.summaryTitle}>projects</div>
      </div>
      <div className={styles.summaryItem} onClick={() => console.log('hi')}>
        <div className={styles.summaryCount}>1</div>
        <div className={styles.summaryTitle}>following</div>
      </div>
    </section>
  );
}
export default Selector;