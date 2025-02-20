import fetch from 'node-fetch';
import * as fs from 'fs';
import { GitHubRepo } from '@/app/components/githubRepos/githubRepos';

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

    const personalRepos = await personalResponse.json() as GitHubRepo[];
    const orgRepos = await orgResponse.json() as GitHubRepo[];
    const allRepos = [...personalRepos, ...orgRepos];

    for (const repo of allRepos) {
      const languageResponse = await fetch(repo.languages_url);
      if (!languageResponse.ok) continue;

      const languages = await languageResponse.json() as Record<string, number>;
      repo.languages = Object.keys(languages);
    }

    fs.writeFileSync('./public/github-repos.json', JSON.stringify(allRepos, null, 2));

    console.log("GitHub repositories updated with languages!");
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
  }
}

fetchGitHubRepos();
