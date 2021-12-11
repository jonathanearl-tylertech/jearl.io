import fs from 'fs';
import path from 'path';
import fm, { FrontMatterResult} from 'front-matter';

class Projects {
  private projects: FrontMatterResult<any>[];

  constructor() {
    const root = process.cwd();
    const files = fs.readdirSync(path.join(root, '_projects'));
    const projects = files.map(filename => {
      const file = fs.readFileSync(path.join(root, '_projects', filename), 'utf-8')
      const content = fm<any>(file);
      content.attributes.slug = this.getSlug(content.attributes.title);
      return content;
    });
    this.projects = projects;
  }

  getAllProjects(): FrontMatterResult<any>[] {
    return this.projects;
  }

  getProject(slug: string): FrontMatterResult<any> {
    const post = this.projects.filter((p: any) => p.attributes.slug === slug)[0];
    return post;
  }

  private getSlug(title: string): string {
    return title.toLowerCase().replaceAll(' ', '-');
  }
}

export default new Projects();