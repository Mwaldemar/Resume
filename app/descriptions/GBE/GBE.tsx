import React from "react";
import styles from './gbe.module.scss'

export const GBE = () => {
    return (
        <div className={styles.container}>
            <div>Courses regarding Software Development:</div>
            <ul>
                <li>Web development: React.js, TypeScript, JavaScript, HTML, CSS/SCSS, UX & Usability Design</li>
                <li>Database management: PostgreSQL & SQLite</li>
                <li>Software development: Java & C# with .NET</li>
                <li>Machine Learning & AI</li>
                <li>Git</li>
            </ul>

            <div>Courses regarding Economics and Business Administration:</div>
            <ul>
                <li>Project Management</li>
                <li>Marketing</li>
                <li>Economics</li>
                <li>Financial Control Management</li>
                <li>Communication</li>
            </ul>

            <p>All semesters, courses were combined to do interdisciplinary projects.</p>

            <p>Study abroad at University of Nicosia, Cyprus.</p>

            <p>Internship as Frontend Software Engineer in Trendhim.</p>
        </div>
    );
};
