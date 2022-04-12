import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components';

const P = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
`;

const OL = styled.ol`
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
`;

const H1 = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin: 69px 0 0 0;
`;

const MDXH1 = (props: any) => {
  const { children } = props;
  const slug = children.split(' ').join('-');

  return (<H1 id={slug}>{children}</H1>)
}

const components = {
  h1: MDXH1,
  p: P,
  ol: OL,
}

export default function MDX(props: any) {
  const { children } = props;

  return (<MDXProvider components={components}>{children}</MDXProvider>);
}
