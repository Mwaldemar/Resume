import React from "react";
import { ProjectPreview } from '@/components/ProjectPreview';
import { getProjectMetadata } from '@/components/getProjectMetadata';
import styles from './projects.module.scss'

const Projects = () => {
    const projectMetadata = getProjectMetadata();
    const projectPreviews = projectMetadata.map((project) => (
        <ProjectPreview key={project.slug} {...project} />
    ));

    return (
        <div className={styles.container}>
            <div className={styles.projectContainer}>
                <div className={styles.projectPreview}>
                    {projectPreviews}
                </div>
            </div>
        </div>
    )
}

export default Projects;