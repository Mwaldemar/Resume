import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import styles from './project.module.scss'
import { getProjectMetadata } from '@/components/getProjectMetadata';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const getPostContent = (slug: string) => {
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

const PostPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const post = getPostContent(slug);
    return (
        <div>
            <Link href={"/projects"} className={styles.projectGoBack}>
                <ChevronLeft />
                <p>Go back</p>
            </Link>
            <h2>{post.data.title}</h2>
            <Markdown>{post.content}</Markdown>
        </div>
    );
};

export default PostPage;