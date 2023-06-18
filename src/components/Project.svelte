<script>
  import data from "../data/resume";

  const projects = data.projects;
</script>

<div class="project__title">Projects</div>
<div class="project">
  <div class="project__container">
    {#each projects as project}
    <span class="title"><i class="fa-solid fa-terminal"></i>{project.name} | {project.company}</span>
      <span class="description">{project.description}</span>
      <div class="stack__container">
        {#each project.stacks as stack}
          <span class="stack">{"#" + stack}</span>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .project__title {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: justify;
    width: 100%;
  }

  .project {
    display: flex;
    flex-direction: column;
  }

  .project__container {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 1rem;
    font-weight: 400;
    text-align: justify;
    margin-top: 3rem;
  }

  .title i {
    margin-right: 5px;
  }

  .description {
    font-size: 0.9rem;
    font-weight: 300;
    text-align: justify;
    margin-top: 1rem;
  }

  .stack__container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .stack {
    font-size: 0.9rem;
    font-weight: 300;
    text-align: justify;
    margin: 5px;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
  }
</style>
