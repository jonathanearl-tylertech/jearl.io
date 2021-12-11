import styles from '../styles/BlogList.module.css';
import Icon from './Icon';
import Link from 'next/link';

const ListItem = ({ post }: any) => {
  const title = post.attributes.title;
  const date = new Date(post.attributes.date).toLocaleDateString();
  const icon = post.attributes.icon;
  const url = `/blog/${post.attributes.slug}`;
  return (
    <Link href={url} passHref={true}> 
      <li className={styles.item}>
        <div className={styles.itemIcon}>
          <Icon icon={icon} />
        </div>
        <div className={styles.itemTitleContainer}>
          <a className={styles.itemTitle}>{title}</a>
          <span className={styles.itemDate}>{date}</span>
        </div>
      </li>
    </Link>
  );
}
export default ListItem;
