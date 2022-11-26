<script>
    export let projects;
</script>

<div class="project">
    <span>Projects</span>
    <div>
        {#each projects as project}
            <span class="title">{project.name} | {project.company}</span>
            <span class="description">{project.description}</span>
            <div class="stack__container" >
                {#each project.stacks as stack}
                    <span class="stack">{"#" + stack}</span>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .project {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 1rem;
        margin: 1rem;
    }

    .project > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 1rem;
    }

    .project > div > .title {
        font-family: Lato, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        margin-top: 10px;
        text-align: justify;
    }

    .project > div > .description {
        font-family: Lato, sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
        text-align: justify;
    }

    .project > div > .stack__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-top: 10px;
        margin-bottom: 50px;

    }

    .project > div > .stack__container > .stack {
        font-family: Lato, sans-serif;
        font-size: 0.5rem;
        font-weight: 300;
        text-align: justify;
        margin-right: 5px;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        padding: 0.5rem;
    }
    .project > span {
        font-family: Lato, sans-serif;
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 5px;
        text-align: justify;
        padding: 1rem;
        text-decoration: underline;
    }
</style>
