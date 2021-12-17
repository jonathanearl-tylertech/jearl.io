import styles from '../styles/BlogList.module.css';
import ListItem from './ListItem';

const ProjectList = ({ projects }: any) => {
  const items = projects.map((post: any) => {
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
    .map((project: any) => (
      <ListItem key={project.attributes.slug} page={project} url={`/project/${project.attributes.slug}`}/>
    ));


  return (
    <section className={styles.container}>
      <ol className={styles.list} >
        {items}
      </ol>
    </section>
  );
}
export default ProjectList;