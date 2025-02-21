import clsx from "clsx";
import styles from "./githubRepos.module.scss";
import { MoveUpRight } from "lucide-react";
import { formatDate } from "../githubActivity/githubActivity";

export type GitHubRepo = {
    id: number,
    name: string,
    html_url: string,
    description: string,
    updated_at: string,
    languages_url: string,
    languages?: string[],
};

type GitHubReposProps = {
    className?: string,
    repos: GitHubRepo[],
};

export default function GitHubRepos({ repos, className }: GitHubReposProps) {
    if (!repos || repos.length === 0) {
        return <div>No repositories to show.</div>;
    }

    const languageColors: Record<string, string> = {
        "C#": styles.cSharp,
        "TypeScript": styles.typeScript,
        "SCSS": styles.scss,
        "JavaScript": styles.javaScript,
        "CSS": styles.css,
        "HTML": styles.html,
        "Python": styles.python
    };

    return (
        <div className={clsx(styles.repoWrapper, className)}>
            <div className={styles.repoHeader}>My GitHub Repositories</div>
            <ul className={styles.repoList}>
                {repos.map((repo) => (
                    <li className={styles.repoItem} key={repo.id}>
                        <div className={styles.repo}>
                            <a className={styles.repoLink} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                <div className={styles.repoName}>{repo.name}</div>
                                <div className={styles.repoDescription}>{repo.description || "No description available"}</div>
                                <div className={styles.updated}>Updated: {formatDate(repo.updated_at)}</div>
                                <div className={styles.languageContainer}>
                                    {repo.languages?.map(lang => (
                                        <div key={lang} className={clsx(styles.language, languageColors[lang])}>
                                            {lang}
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.seeOnHover}>
                                    <div className={styles.hoverText}>Open in GitHub <MoveUpRight /></div>
                                </div>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
