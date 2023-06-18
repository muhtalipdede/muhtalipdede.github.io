<script>
  import data from "../data/resume";

  const experience = data.experiences;
</script>

<div class="experience__title">Experiences</div>
<div class="experience">
  <div class="experience__item">
    {#each experience as item}
      <span class="title"><i class="fa-solid fa-code-commit"></i>{item.company} - {item.position}</span>
      <span class="date">{item.start} - {item.end}</span>
    {/each}
  </div>
</div>

<style>
  .experience__title {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: justify;
    width: 100%;
  }

  .experience {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .experience__item {
    display: flex;
    flex-direction: column;
  }

  .experience > div > .title {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 5px;
    text-align: justify;
  }

  .experience > div > .title i {
    margin-right: 5px;
  }
  
  .experience > div > .date {
    font-size: 0.9rem;
    font-weight: 300;
    text-align: justify;
  }
</style>
