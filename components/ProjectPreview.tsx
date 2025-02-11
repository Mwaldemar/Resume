import Link from "next/link";
import { ProjectMetadata } from "./ProjectMetadata";
import styles from './projectPreview.module.scss'
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

export const ProjectPreview = (props: ProjectMetadata) => {
    return (
        <Link href={`/projects/${props.slug}`}>
            <div className={styles.previewContainer}>
                <h2 className={clsx(styles.title, styles.titleContent)}>
                    <div className={styles.titleWrapper}>
                        {props.title}
                    </div>
                    <div className={clsx(styles.showOnHover)}>
                        <div>See More</div>
                        <ArrowRight />
                    </div>
                </h2>
                <div className={styles.content}>
                    <p className={clsx(styles.subTitle, styles.hideOnHover)}>{props.subtitle}</p>
                </div>
            </div>
        </Link>
    )
};
