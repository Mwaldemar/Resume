"use client"
import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from './navbar.module.scss'
import { ChevronRight, Menu, Search, X } from "lucide-react";
import { ProjectMetadata } from "@/components/ProjectMetadata";
import { Sidepanel } from "../sidepanel/sidepanel";

type NavbarProps = {
    projects: ProjectMetadata[];
    mobile?: boolean,
    desktop?: boolean,
}

export const Navbar = ({ projects, mobile, desktop }: NavbarProps) => {
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

    const pages = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <div className={styles.navigation}>
            {mobile && (
                <div className={styles.mobileMenu}>
                    <Sidepanel
                        className={styles.mobileSidepanel}
                        id={"MenuSidepanel"}
                        SVG={<X />}
                        trigger={
                            <div
                                id="menu-sidepanel-trigger"
                                className={styles.menuTrigger}
                            >
                                <Menu className={styles.burgerIcon} />
                            </div>
                        }
                    >
                        <ul className={styles.mobileLinkContainer}>
                            {pages.map((page) => (
                                <li key={page.path} className={styles.mobileNavItem}>
                                    <Link
                                        href={page.path}
                                        className={clsx(styles.mobileLink)}
                                        onClick={() => {
                                            const closeButton = document.getElementById("menu-sidepanel-trigger");
                                            if (closeButton) {
                                                closeButton.click();
                                            }
                                        }}
                                    >
                                        <p className={styles.mobileLinkText}>{page.name}</p>
                                        <ChevronRight />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Sidepanel>
                </div>
            )}
            {desktop && (
                <div className={styles.desktopMenu}>
                    <ul className={styles.linkContainer}>
                        {pages.map((page) => (
                            <li key={page.path} className={styles.navItem}>
                                <Link href={page.path} className={clsx(styles.link)}>
                                    <p className={styles.linkText}>{page.name}</p>
                                </Link>
                            </li>
                        ))}
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
            )}

        </div>
    )
}