interface GithubProject {
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    open_issues_count: number;
    created_at: number;
    updated_at: number;
    html_url: string;
    fork: boolean;
}

export default GithubProject;