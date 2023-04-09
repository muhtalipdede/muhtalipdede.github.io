<script>
  
</script>

<div class="navbar__content">
  <a href="/">Home</a>
  <a href="/projects">Projects</a>
  <a href="/about">About</a>
</div>

<style>
  .navbar__content {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid #000;
    border-radius: 5px;
    z-index: 1;
  }

  .navbar__content > a {
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }

  .navbar__content > a:hover {
    color: #000;
    text-decoration: underline;
  }
</style>
