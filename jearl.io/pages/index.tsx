import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Root = () => {
  const router = useRouter();
  useEffect(() => { router.push('/blog') }, [router])
  return (<div>loading</div>)
}
export default Root;
