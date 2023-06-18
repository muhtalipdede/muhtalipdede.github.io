<script>
  import data from "../data/resume";

  const languages = data.languages;
</script>

<div class="language__title">Languages</div>
<div class="language">
  <div class="language__item">
    {#each languages as language}
      <span class="title"><i class="fa-solid fa-language"></i>{language.name}</span>
    {/each}
  </div>
</div>

<style>
  .language__title {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: justify;
    width: 100%;
  }

  .language {
    display: flex;
    flex-direction: column;
  }

  .language__item {
    display: flex;
    flex-direction: column;
  }

  .language > div > .title {
    font-size: 1rem;
    font-weight: 400;
    text-align: justify;
    margin-top: 5px;
  }

  .language > div > .title > i {
    margin-right: 5px;
  }
</style>
