import styles from '../styles/BlogList.module.css';
import Icon from './Icon';
import Link from 'next/link';

const BlogListItem = ({ post, url }: any) => {
  const title = post.attributes.title;
  const date = new Date(post.attributes.date);
  const month = date.toLocaleString('default', { month: 'long' }).substring(0, 3);
  const day = date.getDate();
  const year = date.getFullYear();
  console.log(month)
  const icon = post.attributes.icon;
  const image = post.attributes?.image;
  return (
    <li className={styles.row}>
      <Link href={url}>
        <article>
          <section className={styles.authorSection}>
            <Icon icon={'🙎‍♂️'} size={24}/>
            <span className={styles.authorUsername}>{post.attributes.author.username}</span>
            <span className={styles.spacer}>·</span>
            <span className={styles.itemDate}>{`${month} ${day}, ${year}`}</span>
          </section>
          <section className={styles.itemContainer}>
            <div>
              <h3 className={styles.itemTitle}>{title}</h3>
            </div>
            <img src="https://via.placeholder.com/56" alt="placeholder" style={{marginLeft: '24px'}}/>
          </section>
        </article>
      </Link>
      {/* <div className={styles.itemIcon}>
          <Icon icon={icon} />
        </div>
        <div className={styles.itemTitleContainer}>
          <a className={styles.itemTitle}>{title}</a>
          <span className={styles.itemDate}>{date}</span>
        </div> */}
    </li>
  );
}
export default BlogListItem;
