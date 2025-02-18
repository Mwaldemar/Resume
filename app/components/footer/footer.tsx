import React from "react";
import styles from './footer.module.scss'
import { Linkedin, Github } from 'lucide-react';
import Link from "next/link";


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                <div className={styles.socials}>
                    <a href="https://www.linkedin.com/in/mikkel-w-johannessen" target="_blank" rel="noopener noreferrer">
                        <Linkedin />
                        <div>Linkedin</div>
                    </a>
                    <a href="https://github.com/Mwaldemar" target="_blank" rel="noopener noreferrer">
                        <Github />
                        <div>Github</div>
                    </a>
                </div>
            </div>
            <div className={styles.copyrightContainer}>
                <p>© {new Date().getFullYear()} Mikkel W. Johannessen | Global Business Engineer</p>
                <p>Specialization in Software</p>
            </div>
        </footer>
    )
}