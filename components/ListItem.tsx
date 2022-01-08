import styles from '../styles/BlogList.module.css';
import Icon from './Icon';
import Link from 'next/link';

const ListItem = ({ page, url }: any) => {
  const title = page.attributes.title;
  const date = new Date(page.attributes.date).toLocaleDateString();
  const icon = page.attributes.icon;
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
