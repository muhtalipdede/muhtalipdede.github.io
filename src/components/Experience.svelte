<script>
    export let experience;
</script>

<div class="experience">
    <span><i class="fa-solid fa-briefcase"></i>Experiences</span>
    <div>
        {#each experience as item}
            <span class="title">{item.company} - {item.position}</span>
            <span class="date">{item.start} - {item.end}</span>
        {/each}
    </div>
</div>

<style>
    .experience {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0rem 1rem;
        margin: 0rem 1rem;
    }
    .experience > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 1rem;
    }
    .experience > div > .title {
        font-family: Lato, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        margin-top: 5px;
        text-align: justify;
    }
    .experience > div > .date {
        font-family: Lato, sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
        text-align: justify;
    }
    .experience > span {
        font-family: Lato, sans-serif;
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 5px;
        text-align: justify;
        padding: 1rem;
        text-decoration: underline;
    }
    .experience > span > i {
        margin-right: 5px;
    }
</style>
