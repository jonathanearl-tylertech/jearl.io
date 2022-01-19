import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

class FMLoader {

    loadFolder(folderName: '_posts' | '_profiles' | '_projects') {
        const root = process.cwd();
        const folderPath = path.join(root, folderName);
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
        try {
            console.log('title', title)
            return title.toLowerCase().replaceAll(' ', '-');
        } catch (err) {
            console.error(err);
            return '';
        }
    }
}

export default new FMLoader();
