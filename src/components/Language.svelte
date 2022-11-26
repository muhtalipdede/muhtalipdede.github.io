<script>
    export let languages;
</script>

<div class="language">
    <span>Languages</span>
    <div>
        {#each languages as language}
            <span class="title">{language.name}</span>
        {/each}
    </div>
</div>

<style>
    .language {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0rem 1rem;
        margin: 0rem 1rem;
    }

    .language > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .language > div > .title {
        font-family: Lato, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        text-align: justify;
        margin-top: 5px;
        margin: 0rem 1rem;
    }

    .language > span {
        font-family: Lato, sans-serif;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: justify;
        padding: 1rem;
        text-decoration: underline;
    }
</style>