import React from 'react';
import styles from './progressBar.module.scss';

type ProgressBarProps = {
    skill: string;
    level: number;
};

const ProgressBar = ({ skill, level }: ProgressBarProps) => {
    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressLabel}>{skill}</div>
            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${level}%` }}
                >
                    {level}%
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;