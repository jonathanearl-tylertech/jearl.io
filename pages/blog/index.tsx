import Head from 'next/head';
import Header from '../../components/Header';
import styles from '../../styles/BlogList.module.css';
import BlogListItem from '../../components/BlogListItem';
import Posts from '../../lib/posts';
import { Post } from '../../interfaces/post.interface';

const Blog = ({ posts }: any) => {
  const blogListItems = posts
    .map((post: any) => ({...post, attributes: { ...post.attributes, date: new Date(post.attributes.date)}}))
    .sort((a: Post, b: Post) => (a.attributes.date.getDate() - b.attributes.date.getDate()))
    .map((post: Post) => (<BlogListItem key={post.attributes.slug} post={post} url={`/blog/${post.attributes.slug}`} />));

  return (<>
    <Head>
      <title>Blog | jearl</title>
      <link rel="icon" href="/favicons/blog/favicon.ico" />
    </Head>
    <Header title="Blog" />
    <main>
    <section className={styles.container}>
      <ol className={styles.list} >
        {blogListItems}
      </ol>
    </section>
    </main>
  </>)
}
export default Blog;

export async function getStaticProps() {
  const posts = Posts.getAll();
  return { props: { posts } };
}