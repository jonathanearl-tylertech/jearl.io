import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function({ back }: { back: boolean }) {
  const router = useRouter();
  const goBack = () => router.push('/');

  return (
    <Header>
      {/* {back ? <BackButton className={styles.back} onClick={goBack}>👈</BackButton> : null} */}
      <Logo>jearl.io | blog</Logo>
    </Header>
  )
}

const Header = styled.header`
  position: relative;
  font-size: 20px;
  width: var(--max-width);
  border-bottom: 1px solid rgb(219,219,219);
  padding: 8px 0;
  margin: 0 0 12px 0;
`;

const BackButton = styled.button`
  position: absolute;
  font-size: 20px;
  left: -12px;
  cursor: pointer;
  border: none;
  background-color: inherit;
`;

const Logo = styled.span`
  font-size: 18px;
  font-weight: 600;
`;