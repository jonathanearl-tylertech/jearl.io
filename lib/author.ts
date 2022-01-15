import FMLoader from './fm-loader';
import { FrontMatterResult } from 'front-matter';

class Author {
  author: FrontMatterResult<any>;

  constructor() {
    const author = FMLoader.loadFolder('_profiles');
    this.author = author[0];
  }

  getMe() {
    return this.author;
  }
}

export default new Author();