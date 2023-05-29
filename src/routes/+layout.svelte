<script>
  import Footer from "../components/Footer.svelte";
  import NavigationBar from "../components/NavigationBar.svelte";
</script>

<svelte:head>
  <title>Muhtalip Dede</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    .no-print * {
      display: none !important;
    }
  }
</style>
