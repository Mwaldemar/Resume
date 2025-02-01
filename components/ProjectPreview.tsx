import Link from "next/link";
import { ProjectMetadata } from "./ProjectMetadata";

export const ProjectPreview = (props: ProjectMetadata) => {
    return (
        <Link href={`/projects/${props.slug}`}>
            <div>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
        </Link>
    )
};