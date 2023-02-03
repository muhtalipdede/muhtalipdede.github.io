<script>
</script>

<div class="navbar__content">
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
  <a href="/projects">Projects</a>
  <a href="/about">About</a>
</div>

<style>
  .navbar__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  }

  .navbar__content > a {
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }

  @media (min-width: 600px) {
    .navbar__content {
      width: 60%;
    }
  }

  @media (min-width: 800px) {
    .navbar__content {
      width: 40%;
    }
  }
</style>
