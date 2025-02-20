import fetch from 'node-fetch';
import * as fs from 'fs';

const GITHUB_USERNAME = 'Mwaldemar';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/events`;

async function fetchGitHubActivity() {
  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${process.env.GH_TOKEN}`,
      },
    });

    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

    const data = await response.json() as unknown[];
    const latestActivities = data.slice(0, 10);

    fs.writeFileSync('./public/github-activity.json', JSON.stringify(latestActivities, null, 2));

    console.log("GitHub activity updated!");
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
  }
}

fetchGitHubActivity();
