<script>
    export let education;
</script>

<div class="education">
    <span><i class="fa-solid fa-book"></i>Education</span>
    <div>
        {#each education as item}
            <span class="title">{item.university} - {item.department}</span>
            <span class="description">{item.description}</span>
            <span class="date">{item.start} - {item.end}</span>
        {/each}
    </div>
</div>

<style>
    .education {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 1rem;
        margin: 1rem;
    }

    .education > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 1rem;
    }

    .education > div > .title {
        font-family: Lato, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        margin-top: 5px;
        text-align: justify;
    }

    .education > div > .description {
        font-family: Lato, sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
        text-align: justify;
    }

    .education > div > .date {
        font-family: Lato, sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
        text-align: justify;
    }

    .education > span {
        font-family: Lato, sans-serif;
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 5px;
        text-align: justify;
        padding: 1rem;
        text-decoration: underline;
    }

    .education > span > i {
        margin-right: 5px;
    }
</style>
