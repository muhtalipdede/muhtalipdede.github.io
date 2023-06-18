<script>
  import data from "../data/resume";

  const education = data.educations;
</script>

<div class="education__title">Education</div>

<div class="education">
  <div class="education__item">
    {#each education as item}
      <span class="title"><i class="fa-solid fa-school"></i>{item.school} - {item.department}</span>
      <span class="description">{item.description}</span>
      <span class="date">{item.start} - {item.end}</span>
    {/each}
  </div>
</div>

<style>
  .education__title {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: justify;
    width: 100%;
  }

  .education {
    display: flex;
    flex-direction: column;
  }

  .education__item {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  .title {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 5px;
    text-align: justify;
    margin-top: 1rem;
  }

  .title i {
    margin-right: 5px;
  }

  .description {
    font-size: 0.9rem;
    font-weight: 300;
    text-align: justify;
  }

  .date {
    font-size: 0.9rem;
    font-weight: 300;
    text-align: justify;
  }
</style>
