import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Author from '../lib/author';
import styles from '../styles/About.module.css';
import ReactMarkdown from 'react-markdown';

const Home: NextPage = ({ author }: any) => {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>about | jearl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={author.attributes.username} />
      <main className={styles.main}>
        <ReactMarkdown>{author.body}</ReactMarkdown>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const author = Author.getMe();
  return {
    props: {
      author
    }
  }
}

export default Home
