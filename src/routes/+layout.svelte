<script>
  import Footer from "../components/Footer.svelte";
  import NavigationBar from "../components/NavigationBar.svelte";
  import "../app.css";
</script>

<svelte:head>
  <!-- <meta property="og:title" content="Muhtalip Dede" />
  <meta name="description" content="Muhtalip Dede's personal website" />
  <meta property="og:description" content="Muhtalip Dede's personal website" />
  <meta property="og:url" content="https://muhtalipdede.github.io" />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width, initial-scale=1" /> -->
</svelte:head>

<div class="app">
  <div class="no-print">
    <NavigationBar />
  </div>
  <main>
    <slot />
  </main>
  <div class="no-print">
    <Footer />
  </div>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: -8px;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media print {
    .no-print,
    .no-print {
      display: none !important;
    }
  }
</style>
