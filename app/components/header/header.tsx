import React from "react";
import { Navbar } from "../navbar/navbar";
import styles from './header.module.scss'
import Link from "next/link";
import { getProjectMetadata } from '@/components/getProjectMetadata';

export const Header = () => {
    const projects = getProjectMetadata();
    return (
        <>
            <div className={styles.headerContainer}>
                <Link href="/" className={styles.headerLink}>
                    <h1 className={styles.headerTitle}>Mikkel W. Johannessen - CV</h1>
                </Link>
            </div>
            <Navbar
                mobile
                desktop
                projects={projects}
            />
        </>
    )
}