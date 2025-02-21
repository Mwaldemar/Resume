import GitHubActivity, { GitHubEventProps } from '../components/githubActivity/githubActivity';
import fs from 'fs';
import path from 'path';
import styles from './repos.module.scss'
import GitHubRepos, { GitHubRepo } from '../components/githubRepos/githubRepos';

const fetchGitHubActivity = (): GitHubEventProps[] => {
    const filePath = path.join(process.cwd(), 'public/github-activity.json');
    let activities = [];

    try {
        const fileData = fs.readFileSync(filePath, 'utf-8');
        activities = JSON.parse(fileData);
    } catch (error) {
        console.error('Error reading or parsing the file:', error);
    }

    return activities;
};

const fetchGitHubRepos = (): GitHubRepo[] => {
    const filePath = path.join(process.cwd(), "public/github-repos.json");
    let repos = [];

    try {
        const fileData = fs.readFileSync(filePath, "utf-8");
        repos = JSON.parse(fileData);
    } catch (error) {
        console.error("Error reading or parsing the file:", error);
    }

    return repos;
};

export default function GitHubPage() {
    const activities = fetchGitHubActivity();
    const repos = fetchGitHubRepos()

    return (
        <div className={styles.container}>
            <div className={styles.githubWrapper}>
                <GitHubRepos className={styles.reposWrapper} repos={repos} />
                <GitHubActivity className={styles.activityWrapper} activities={activities} />
            </div>
        </div>
    );
}
