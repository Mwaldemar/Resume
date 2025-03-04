import fs from 'fs';
import matter from 'gray-matter';
import { ProjectMetadata } from './ProjectMetadata';

export const getProjectMetadata = (): ProjectMetadata[] => {
    const folder = "projects/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`projects/${fileName}`, "utf-8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      };
    });
  
    return posts;
  };