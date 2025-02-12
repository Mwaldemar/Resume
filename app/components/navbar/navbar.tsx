"use client"
import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from './navbar.module.scss'
import { ChevronRight, Search, X } from "lucide-react";
import { ProjectMetadata } from "@/components/ProjectMetadata";

type NavbarProps = {
    projects: ProjectMetadata[];
}

export const Navbar = ({ projects }: NavbarProps) => {
    const [query, setQuery] = useState('');
    const [filteredProjects, setFilteredProjects] = useState<ProjectMetadata[]>([]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);

        // Filter projects based on search query
        const matches = projects.filter((project) =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProjects(matches);
    };

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
            <div className={styles.searchBar}>
                <div className={styles.search}>
                    <Search />
                    <input
                        value={query}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                        type="search"
                        placeholder="Search..."
                    />
                    {query && (
                        <X className={styles.clearIcon} onClick={() => setQuery("")} />
                    )}
                </div>
                {query && (
                    <div className={styles.searchResultsContainer}>
                        <ul className={styles.searchResults}>
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <li key={project.slug}>
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className={styles.searchResultLink}
                                            onClick={() => setQuery('')}
                                        >
                                            <div className={styles.projectLink}>
                                                {project.title}
                                                <ChevronRight />
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <li className={styles.noMatches}>No matches</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}