import fs from 'fs';
import path from 'path';
import fm, { FrontMatterResult} from 'front-matter';
import { IAttributes } from '../interfaces/front-matter.interface';

class Posts {
  posts: FrontMatterResult<IAttributes>[];

  constructor() {
    const root = process.cwd();
    const files = fs.readdirSync(path.join(root, '_posts'));
    const posts = files.map(filename => {
      const file = fs.readFileSync(path.join(root, '_posts', filename), 'utf-8')
      const content = fm<IAttributes>(file);
      content.attributes.slug = this.getSlug(content.attributes.title);
      return content;
    });
    this.posts = posts;
  }

  getAllPosts(): FrontMatterResult<IAttributes>[] {
    return this.posts;
  }

  getPost(slug: string): FrontMatterResult<IAttributes> {
    const post = this.posts.filter((p: any) => p.attributes.slug === slug)[0];
    return post;
  }

  private getSlug(title: string): string {
    return title.toLowerCase().replaceAll(' ', '-');
  }
}

export default new Posts();