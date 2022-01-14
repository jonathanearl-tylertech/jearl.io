import styles from '../styles/BlogList.module.css';
import BlogListItem from './BlogListItem';

const BlogList = ({ posts }: any) => {
  const items = posts.map((post: any) => {
    const result = {
      ...post,
      attributes: {
        ...post.attributes,
        date: new Date(post.attributes.date)
      }
    };
    return result;
  })
    .sort((a: any, b: any) => (a.attributes.date.getDate() - b.attributes.date.getDate()))
    .map((post: any) => (
      <BlogListItem post={post} key={post.attributes.slug} url={`/blog/${post.attributes.slug}`}/>
    ));


  return (
    <section className={styles.container}>
      <ol className={styles.list} >
        {items}
      </ol>
    </section>
  );
}
export default BlogList;