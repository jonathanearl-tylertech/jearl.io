import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import ProfileDetail from '../components/ProfileDetail';
import BlogList from '../components/BlogList';
import styles from '../styles/Home.module.css'
import BlogSummary from '../components/BlogSummary';
import Footer from '../components/Footer';
import Posts from '../lib/posts';
import Author from '../lib/author';

const Home: NextPage = ({ posts, author }: any) => {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>posts | jearl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={author.attributes.username} />
      <main className={styles.main}>
        <ProfileDetail
          username={author.attributes.username}
          name={author.attributes.name}
          picture={author.attributes.picture}
          excerpt={author.attributes.excerpt} />
        <BlogSummary />
        <BlogList posts={posts} />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const posts = Posts.getAllPosts();
  const author = Author.getAuthor();
  return {
    props: {
      posts,
      author
    }
  }
}

export default Home
