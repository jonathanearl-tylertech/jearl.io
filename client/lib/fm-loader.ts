import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

class FMLoader {

    loadFolder(folderName: 'posts' | 'profiles') {
        const root = process.cwd();
        const folderPath = path.join(root, "..", "datsa", folderName);
        const files = fs.readdirSync(folderPath);
        const frontMatter = files.map(filename => {
            const file = fs.readFileSync(path.join(folderPath, filename), 'utf-8')
            const content = fm<any>(file);
            content.attributes.slug = this.getSlug(content.attributes.title);
            return content;
        });
        return frontMatter;
    }

    private getSlug(title: string): string {
        if (!title) {
            return ''
        }
        return title.toLowerCase().replaceAll(' ', '-');
    }
}

export default new FMLoader();
