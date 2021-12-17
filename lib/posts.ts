import FMLoader from './fm-loader';
import { FrontMatterResult } from 'front-matter';
import { IAttributes } from '../interfaces/front-matter.interface';

class Posts {
  private posts: FrontMatterResult<IAttributes>[];

  constructor() {
    this.posts = FMLoader.loadFolder('_posts');
  }

  getAll(): FrontMatterResult<IAttributes>[] {
    return this.posts;
  }

  get(slug: string): FrontMatterResult<IAttributes> {
    const post = this.posts.filter((p: any) => p.attributes.slug === slug)[0];
    return post;
  }
}

export default new Posts();
