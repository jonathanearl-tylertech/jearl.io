import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Root = () => {
  return (<div>loading</div>)
}
export default Root;

export async function getStaticProps() {
  const router = useRouter();
  router.push('/blog');
}

