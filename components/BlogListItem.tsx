import styles from '../styles/BlogList.module.css';
import Icon from './Icon';
import Link from 'next/link';

const BlogListItem = ({ post }: any) => {
  const title = post.attributes.title;
  const date = new Date(post.attributes.date).toLocaleDateString();
  const icon = post.attributes.icon;
  const url = `/blog/${post.attributes.slug}`;
  return (
    <Link href={url}>
      <li className={styles.item}>
        <div className={styles.itemIcon}>
          <Icon icon={icon} />
        </div>
        <div className={styles.itemTitleContainer}>
          <h1 className={styles.itemTitle}>{title}</h1>
          <span className={styles.itemDate}>{date}</span>
        </div>
      </li>
    </Link>
  );
}
export default BlogListItem;
