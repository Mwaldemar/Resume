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
                        Home
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/projects" className={clsx(styles.link)}>
                        Projects
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact" className={clsx(styles.link)}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}