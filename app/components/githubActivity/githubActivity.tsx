import clsx from "clsx";
import React from "react";
import styles from './githubActivity.module.scss'
import { Clock, Pin } from "lucide-react";

export type GitHubEventProps = {
    id: string,
    type: string,
    repo: { name: string },
    created_at: string,
};

type GitHubActivityProps = {
    className?: string,
    activities: GitHubEventProps[],
}

export const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(new Date(dateString)).replace(',', ' at');
};

export default function GitHubActivity({ activities, className }: GitHubActivityProps) {
    if (!activities || activities.length === 0) {
        return <div>No recent activity to show.</div>;
    }

    return (
        <div className={clsx(styles.eventWrapper, className)}>
            <div className={styles.eventHeader}>Recent GitHub Activity</div>
            <ul className={styles.eventList}>
                {activities.map((event) => (
                    <li key={event.id} className={styles.events}>
                        <div className={styles.event}>
                            <div className={styles.eventType}>
                                <Pin />
                                {event.type} in:
                            </div>
                            <div className={styles.repoName}>
                                {event.repo.name}
                            </div>
                        </div>
                        <div className={styles.date}>
                            <Clock />
                            {formatDate(event.created_at)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
