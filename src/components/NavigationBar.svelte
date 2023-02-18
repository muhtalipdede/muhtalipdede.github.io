<script>
  
</script>

<div class="navbar__content">
  <a href="/">Home</a>
  <a href="/projects">Projects</a>
  <a href="/about">About</a>
</div>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .navbar__content {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    animation: fadeIn 0.5s ease-in-out;
  }

  .navbar__content > a {
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }

</style>
