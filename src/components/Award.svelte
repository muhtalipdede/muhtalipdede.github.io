<script>
    export let awards;
</script>

<div class="award">
    <span>Awards</span>
    {#each awards as award}
        <div>
            <a href="{award.url}"><span>{award.name} | {award.description}</span></a>
        </div>
    {/each}
</div>

<style>
    .award {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0rem 1rem;
        margin: 0rem 1rem;
    }

    .award > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 1rem;
    }

    .award > div > a {
        font-family: Lato, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        margin-top: 5px;
        text-align: justify;
        color: #000;
        text-decoration: none;
    }

    .award > div > a > span {
        font-family: Lato, sans-serif;
        font-size: 1rem;
        font-weight: 300;
        margin-top: 5px;
        text-align: justify;
    }

    .award > span {
        font-family: Lato, sans-serif;
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 5px;
        text-align: justify;
        padding: 1rem;
        text-decoration: underline;
    }
</style>