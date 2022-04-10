import Head from 'next/head';
import Header from '../../../client/components/Header';
import styles from '../../styles/BlogList.module.css';
import BlogListItem from '../../../client/components/BlogListItem';
import Posts from '../../../client/lib/posts';
import { Post } from '../../../client/interfaces/post.interface';

const Blog = ({ posts }: any) => {
  const blogListItems = posts
    .map((post: any) => ({ ...post, attributes: { ...post.attributes, date: new Date(post.attributes.date) } }))
    .sort((a: Post, b: Post) => (a.attributes.date.getDate() - b.attributes.date.getDate()))
    .map((post: Post) => (<BlogListItem key={post.attributes.slug} post={post} url={`/blog/${post.attributes.slug}`} />));

  return (<>
    <Head>
      <title>Blog | jearl</title>
      <link rel="icon" href="/favicons/blog/favicon.ico" />
    </Head>
    <Header title="Blog" back={false} />
    <main>
      <ol className={styles.list} >
        {blogListItems}
      </ol>
    </main>
  </>)
}
export default Blog;

export async function getStaticProps() {
  const posts = Posts.getAll();
  return { props: { posts } };
}