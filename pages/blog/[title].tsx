
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import styles from '../../styles/BlogPost.module.css';
import Header from '../../components/Header';
import Author from '../../lib/author';
import Posts from '../../lib/posts';
// import BlogHeader from '../../components/BlogHeader';

const Post = ({ author, post }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.attributes.title} | jearl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={post.attributes.title}/>
      {/* <BlogHeader title={post.attributes.title} date={post.attributes.date} icon={post.attributes.icon} username={author.attributes.username}/> */}
      <main className={styles.main}>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </main>
    </div>
  );
}
export default Post;

export async function getStaticPaths() {
  const slugs = Posts.getAll().map(p => p.attributes.slug);
  return {
    paths: slugs.map((slug: string) => ({
      params: {
        title: slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { title: string } }) {
  const post = Posts.get(params.title);
  const author = Author.getMe();
  return { props: { post, author } };
}