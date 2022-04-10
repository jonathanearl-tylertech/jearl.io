import Head from 'next/head';
import BlogListItem from 'components/BlogListItem';
import { meta } from 'pages/post/2022/4/first-post.mdx';

export const FirstPageListItem = () => <BlogListItem meta={meta}/>

export default () => {
  return (<>
    <Head>
      <title>Blog | jearl</title>
      <link rel="icon" href="/favicons/blog/favicon.ico" />
    </Head>
    <main>
      <h1>blog</h1>
      <section id="intro">
        <p>heyo welcome and stay for a while, this is easy listening hour with the power hour of the earl pearl</p>
      </section>

      <section id="posts">
        <FirstPageListItem/>
      </section>
    </main>
  </>);
}