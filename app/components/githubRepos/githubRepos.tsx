import clsx from "clsx";
import styles from "./githubRepos.module.scss";
import { MoveUpRight } from "lucide-react";

export type GitHubRepo = {
    id: number,
    name: string,
    html_url: string,
    description: string,
    pushed_at: string,
};

type GitHubReposProps = {
    className?: string,
    hover: string,
    repos: GitHubRepo[],
};

export default function GitHubRepos({ repos, className, hover }: GitHubReposProps) {
    if (!repos || repos.length === 0) {
        return <div>No repositories to show.</div>;
    }

    return (
        <div className={clsx(styles.repoWrapper, className)}>
            <div className={styles.repoHeader}>My GitHub Repositories</div>
            <ul className={styles.repoList}>
                {repos.map((repo) => (
                    <a className={styles.repoLink} key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <li className={styles.repoItem}>
                            <div className={styles.repo}>
                                <div className={styles.repoName}>{repo.name}</div>
                                <div className={styles.repoDescription}>{repo.description || "No description available"}</div>
                                <div className={styles.seeOnHover}>
                                    {hover && (
                                        <div className={styles.hoverText}>{hover} <MoveUpRight /></div>
                                    )}
                                </div>
                            </div>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
}
