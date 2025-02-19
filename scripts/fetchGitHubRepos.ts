import fetch from 'node-fetch';
import fs from 'fs';

const GITHUB_USERNAME = 'Mwaldemar';
const ORG_NAME = 'Bachelor-Project-SW8'; 
const PERSONAL_REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed`;
const ORG_REPOS_URL = `https://api.github.com/orgs/${ORG_NAME}/repos?sort=pushed`;

async function fetchGitHubRepos() {
  try {
    const [personalResponse, orgResponse] = await Promise.all([
      fetch(PERSONAL_REPOS_URL),
      fetch(ORG_REPOS_URL)
    ]);

    if (!personalResponse.ok) throw new Error(`GitHub API error (personal repos): ${personalResponse.status}`);
    if (!orgResponse.ok) throw new Error(`GitHub API error (org repos): ${orgResponse.status}`);

    const personalRepos = await personalResponse.json() as unknown[];
    const orgRepos = await orgResponse.json() as unknown[];

    // Merge and sort by last pushed date (pushed_at)
    const allRepos = [...personalRepos, ...orgRepos]

    fs.writeFileSync('./public/github-repos.json', JSON.stringify(allRepos, null, 2));

    console.log("GitHub repositories updated!");
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
  }
}

fetchGitHubRepos();
