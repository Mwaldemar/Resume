import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

import { getProjectMetadata } from '@/components/getProjectMetadata';

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
            <h2>{post.data.title}</h2>
            <Markdown>{post.content}</Markdown>
        </div>
    );
};

export default PostPage;