export interface IAuthor {
  name: string;
  picture: string;
}

export interface IOgImage {
  url: string;
}

export interface IAttributes {
  title: string;
  slug: string;
  date: Date;
  tags: string[];
  draft: boolean;
  excerpt: string;
  coverImage: '/assets/blog/hello-world/cover.jpg';
  author: IAuthor;
  ogImage: IOgImage;
}
