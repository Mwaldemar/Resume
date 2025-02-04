import React from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from './navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={styles.navigation}>
            <ul className={styles.linkContainer}>
                <li className={styles.navItem}>
                    <Link href="/" className={clsx(styles.link)}>
                        <p className={styles.linkText}>Home</p>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/projects" className={clsx(styles.link)}>
                        <p className={styles.linkText}>Projects</p>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact" className={clsx(styles.link)}>
                        <p className={styles.linkText}>Contact</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}