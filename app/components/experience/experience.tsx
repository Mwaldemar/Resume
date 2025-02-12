import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from './experience.module.scss'
import { Accordion } from "../accordion/accordion";

type ExperienceProps = {
    className?: string,
    id: string,
    position: string,
    place: string,
    type: string,
    year: string,
    duration: string,
    description?: ReactNode,
}

export const Experience = ({ className, id, position, type, year, duration, description, place }: ExperienceProps) => {
    return (
        <div className={clsx(styles.experienceContainer, className)}>
            <div className={styles.expHeader}>{place}</div>
            <div>{type}</div>
            <div>{position}</div>
            <div>{year} ({duration})</div>
            {description && (
                <Accordion
                    className={styles.accordion}
                    trigger={
                        <div className={styles.description}>
                            <div>Description:</div>
                            <svg className={styles.icon} viewBox="0 0 24 24" width="24" height="24">
                                <path className={styles.horizontalLine} d="M6 12h12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path className={styles.verticalLine} d="M12 6v12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    }
                    id={id}
                >
                    <div className={styles.content}>{description}</div>
                </Accordion>
            )}
        </div>
    )
}