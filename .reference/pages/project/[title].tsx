
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import styles from '../../styles/BlogPost.module.css';
import Header from '../../components/Header';
import Author from '../../lib/author';
import Projects from '../../lib/projects';
import BlogHeader from '../../components/BlogHeader';

const Project = ({ author, project }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{project.attributes.title} | jearl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={project.attributes.title}/>
      <BlogHeader title={project.attributes.title} date={project.attributes.date} icon={project.attributes.icon} username={author.attributes.username}/>
      <main className={styles.main}>
        <ReactMarkdown>{project.body}</ReactMarkdown>
      </main>
    </div>
  );
}
export default Project;

export async function getStaticPaths() {
  const slugs = Projects.getAll().map(p => p.attributes.slug);
  console.log(slugs)
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
  const project = Projects.get(params.title);
  const author = Author.getMe();
  return { props: { project, author } };
}