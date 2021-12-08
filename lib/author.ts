import fs from 'fs';
import path from 'path';
import fm, { FrontMatterResult} from 'front-matter';


class Author {
  author: FrontMatterResult<any>;

  constructor() {
    const root = process.cwd();
    const authorFile = fs.readFileSync(path.join(root, '_profiles', 'whattheearl.md'), 'utf-8');
    const author = fm(authorFile);
    this.author = author;
  }

  getAuthor() {
    return this.author;
  }
}

export default new Author();