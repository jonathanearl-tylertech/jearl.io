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
          <a className={styles.itemContainer}>
            <div>
              <div className={styles.authorSection}>
                <Icon icon={'🙎‍♂️'} size={16} />
                <h4 className={styles.authorUsername}>{post.attributes.author.username}</h4>
              </div>
              <h3 className={styles.itemTitle}>{title}</h3>
              <div className={styles.itemDate}>{`${month} ${day}, ${year}`}</div>
            </div>
            <img src="https://via.placeholder.com/100" alt="placeholder" style={{ maxHeight: '100px', marginLeft: '24px' }} />
          </a>
        </article>
      </Link>
    </li>
  );
}
export default BlogListItem;
