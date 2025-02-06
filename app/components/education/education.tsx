import React from "react";
import styles from './education.module.scss'
import clsx from "clsx";

type EducationProps = {
    year: string,
    level: string,
    educationName: string,
    specialization?: string,
    school: string,
    className?: string,
}

export const Education = ({ year, level, educationName, specialization, school, className }: EducationProps) => {
    return (
        <div className={clsx(className, styles.educationContainer)}>
            <div>{year}</div>
            <div>{level} in {educationName}</div>
            {specialization && (
                <div>with specialization in {specialization}</div>
            )}
            <div>{school}</div>
        </div>
    )
}