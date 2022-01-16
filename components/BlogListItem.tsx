import styles from '../styles/BlogList.module.css';
import Icon from './Icon';
import Link from 'next/link';

const BlogListItem = ({ post, url }: any) => {
  const title = post.attributes.title;
  const date = new Date(post.attributes.date);
  const month = date.toLocaleString('default', { month: 'long' }).substring(0, 3);
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <li className={styles.row}>
      <Link href={url} passHref={true}>
        <article>
          <section className={styles.authorSection}>
            <Icon icon={'🙎‍♂️'} size={24}/>
            <span className={styles.authorUsername}>{post.attributes.author.username}</span>
            <span className={styles.spacer}>·</span>
            <span className={styles.itemDate}>{`${month} ${day}, ${year}`}</span>
          </section>
          <a className={styles.itemContainer}>
            <div>
              <h3 className={styles.itemTitle}>{title}</h3>
            </div>
            <img src="https://via.placeholder.com/56" alt="placeholder" style={{marginLeft: '24px'}}/>
          </a>
        </article>
      </Link>
    </li>
  );
}
export default BlogListItem;
