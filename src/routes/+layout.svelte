<script>
    import NavigationBar from "../components/NavigationBar.svelte";


</script>

<div class="app">
  <main>
    <NavigationBar />
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
