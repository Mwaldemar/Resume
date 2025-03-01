import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import styles from './project.module.scss'
import { getProjectMetadata } from '@/components/getProjectMetadata';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const getProjectContent = (slug: string) => {
    const folder = "projects/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const projects = getProjectMetadata();
    return projects.map((project) => ({
        slug: project.slug,
    }));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectPage = (props: any) => {
    const slug = props.params.slug;
    const project = getProjectContent(slug);
    return (
        <div>
            <Link href={"/projects"} className={styles.projectGoBack}>
                <ChevronLeft />
                <p>Go back</p>
            </Link>
            <div className={styles.contentContainer}>
                <h2>{project.data.title}</h2>
                <Markdown>{project.content}</Markdown>
            </div>
        </div>
    );
};

export default ProjectPage;