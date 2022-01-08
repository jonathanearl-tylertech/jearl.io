import FMLoader from './fm-loader';
import { FrontMatterResult } from 'front-matter';

class Projects {
  private projects: FrontMatterResult<any>[];

  constructor() {
    this.projects = FMLoader.loadFolder('_projects');
  }

  getAll(): FrontMatterResult<any>[] {
    return this.projects;
  }

  get(slug: string): FrontMatterResult<any> {
    const post = this.projects.filter((p: any) => p.attributes.slug === slug)[0];
    return post;
  }
}

export default new Projects();
