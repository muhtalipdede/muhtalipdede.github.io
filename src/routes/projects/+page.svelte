<script lang="ts">
    import type GithubProject from "../../interfaces/github-project";

    async function fetchGithubRepos() {
        const response = await fetch(
            "https://api.github.com/users/muhtalipdede/repos"
        );
        const data = await response.json();
        return data;
    }

    let data: GithubProject[] = [];
    fetchGithubRepos().then((response: GithubProject[]) => {
        data = response
            .filter((item) => item.fork === false)
            .sort((a, b) => {
                return b.updated_at - a.updated_at;
            });
    });
</script>

<div class="projects__container">
    {#each data as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="projects__container__item"
            on:click={() => window.open(item.html_url)}
        >
            <h1>Project Name: {item.name}</h1>
            {#if item.description}
                <p>Description: {item.description}</p>
            {/if}
            {#if item.language}
                <span>Language: {item.language}</span>
            {/if}

            {#if item.stargazers_count}
                <span>Stargazers Count: {item.stargazers_count}</span>
            {/if}

            {#if item.watchers_count}
                <span>Watchers Count: {item.watchers_count}</span>
            {/if}

            {#if item.forks_count}
                <span>Fork Count: {item.forks_count}</span>
            {/if}

            {#if item.open_issues_count}
                <span>Open Issues Count: {item.open_issues_count}</span>
            {/if}

            {#if item.created_at}
                <span
                    >Created At: {new Date(
                        item.created_at
                    ).toLocaleDateString()}</span
                >
            {/if}

            {#if item.updated_at}
                <span
                    >Last Update: {new Date(
                        item.updated_at
                    ).toLocaleDateString()}</span
                >
            {/if}
        </div>
    {/each}
</div>

<style>
    .projects__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .projects__container__item {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px;
        border: 0.5px solid #ccc;
        min-height: 200px;
        cursor: pointer;
        padding: 20px;
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .projects__container__item:hover {
        animation: fadeInDown 0.5s ease-in-out;
    }
</style>
