<script>
  import Profile from "../../components/Profile.svelte";
  import Experience from "../../components/Experience.svelte";
  import Education from "../../components/Education.svelte";
  import Award from "../../components/Award.svelte";
  import Language from "../../components/Language.svelte";
  import Project from "../../components/Project.svelte";
  import Spacer from "../../components/Spacer.svelte";

  function download() {
    window.print();
  }
</script>

<svelte:head>
  <title>Resume | Muhtalip Dede</title>
  <meta property="og:title" content="Resume | Muhtalip Dede" />
</svelte:head>

<div class="download no-print" on:click={() => download()}>
  <i class="fa-solid fa-download" />
</div>

<Profile />
<Spacer height={2} />
<Experience />
<Spacer height={2} />
<Project />
<Spacer height={2} />
<Education />
<Spacer height={2} />
<Language />
<Spacer height={2} />
<Award />

<style>
  .download {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: #000;
    cursor: pointer;
    text-align: right;
    text-decoration: none;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    background-color: #fff;
    z-index: 999;
  }

  @media print {
    .no-print,
    .no-print * {
      display: none !important;
    }
  }
</style>
