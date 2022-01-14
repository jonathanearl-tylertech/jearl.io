import Head from 'next/head';
import BlogList from '../../components/BlogList';
import Header from '../../components/Header';
import Posts from '../../lib/posts';

const Blog = ({ posts }: any) => {
  console.log(posts);
  return (<>
    <Head>
      <title>Blog | jearl</title>
      <link rel="icon" href="/favicons/blog/favicon.ico" />
    </Head>
    <Header title="Blog" />
    <main>
      <BlogList posts={posts}></BlogList>
    </main>
  </>)
}

export async function getStaticProps() {
  const posts = Posts.getAll();
  console.log(posts);
  return { props: { posts } };
}

export default Blog;