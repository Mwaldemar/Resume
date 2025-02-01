import React from "react";
import { ProjectPreview } from '@/components/ProjectPreview';
import { getProjectMetadata } from '@/components/getProjectMetadata';

const Projects = () => {
    const postMetadata = getProjectMetadata();
    const postPreviews = postMetadata.map((post) => (
        <ProjectPreview key={post.slug} {...post} />
    ));

    return <div>{postPreviews}</div>
}

export default Projects;