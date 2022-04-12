import Head from 'next/head';
import Header from 'components/Header';
import styled from 'styled-components';
import MDX from 'components/MDX';

export default function PostLayout(props: any) {
  const { meta, children } = props;
  return (<>
    <Head>
      <title>{meta.title} | jearl</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header back={true} />
    <Main>
      {meta.icon ? <Icon>{meta.icon}</Icon> : null}
      {meta.title ? <Title>{meta.title}</Title> : null}
      {meta.subtitle ? <Subtitle>{meta.subtitle}</Subtitle> : null}
      {meta.img ? <img src={meta.src} /> : null}
      <MDX>{children}</MDX>
    </Main>
  </>);
}

const Icon = styled.span`
  font-size: 50px;
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  margin: 20px 0 0 0;
  text-transform: capitalize;
`;

const Subtitle = styled.p`
  font-size: 22px;
  line-height: 32px;
  color: rgb(117, 117, 117);
  margin: 0;
  text-transform: capitalize;
`;

const Main = styled.section`
  max-width: 650px;
  margin-bottom: 4em;
`


