export interface Post {
  attributes: {
    title: string,
    icon: string,
    excerpt: string,
    date: Date,
    author: {
      username: string
    },
    slug: string,
  },
  body: string,
  bodyBegin: number,
}