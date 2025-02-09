import React, { ReactNode } from "react";
import styles from './education.module.scss'
import clsx from "clsx";
import { Accordion } from "../accordion/accordion";

type EducationProps = {
    className?: string,
    id: string,
    year: string,
    level?: string,
    degree?: string,
    specialization?: string,
    school: string,
    description?: ReactNode,
}

export const Education = ({ className, id, year, level, degree, specialization, school, description }: EducationProps) => {
    return (
        <div className={clsx(className, styles.educationContainer)}>
            <h4 className={styles.eduHeader}>{school}</h4>
            <div>{level}</div>
            <div>{degree}
                {specialization && (
                    <span className={styles.specialization}> with a specialization in {specialization}</span>
                )}
            </div>
            <div>{year}</div>
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
                    <div>{description}</div>
                </Accordion>
            )}
        </div>
    )
}