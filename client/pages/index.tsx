import Head from 'next/head';
import Link from 'next/link';

export default () => {
  return (<>
    <Head>
      <title>Blog | jearl</title>
      <link rel="icon" href="/favicons/blog/favicon.ico" />
    </Head>
    <main>
      <h1>Jons blog</h1>
      <section id="intro">
        <h2>intro</h2>
        <p>heyo welcome and stay for a while, this is easy listening hour with the power hour of the earl pearl</p>
      </section>

      <section id="posts">
        <h2>posts</h2>
        <Link href="./post/2022/4/first-post">first post</Link>
      </section>
    </main>
  </>);
}