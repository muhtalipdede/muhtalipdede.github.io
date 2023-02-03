<script>
  import data from "../data/resume";

  const awards = data.awards;
</script>

<div class="award__title">Awards</div>
<div class="award">
  {#each awards as award}
    <div>
      <a href={award.url}><span>{award.name} | {award.description}</span></a>
    </div>
  {/each}
</div>

<style>
  .award__title {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: justify;
    width: 100%;
  }

  .award {
    display: flex;
    flex-direction: column;
  }

  .award > div {
    padding: 1rem 0;
  }

  .award > div > a {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 5px;
    text-align: justify;
    color: #000;
    text-decoration: none;
  }

  .award > div > a > span {
    font-size: 1rem;
    font-weight: 300;
    margin-top: 5px;
    text-align: justify;
  }
</style>
