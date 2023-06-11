<script>
</script>

<div class="navbar__content">
  <a href="/" class="content__logo">
    <i class="fa-solid fa-house" /> 
  </a>
  <a href="/blog" class="content__logo">
    <i class="fa-solid fa-blog" /> 
  </a>
  <a href="/projects" class="content__logo">
    <i class="fa-solid fa-briefcase" /> 
  </a>
  <a href="/music" class="content__logo">
    <i class="fa-brands fa-spotify"></i>
  </a>
  <a href="/about" class="content__logo">
    <i class="fa-solid fa-user" /> 
  </a>
</div>

<style>
  .navbar__content {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #011633;
    border: 1px solid #000;
    z-index: 1;
  }

  .navbar__content > a {
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  .navbar__content > a:hover {
    color: #98bbeb;
  }

  .content__logo {
    margin: 0 0.5rem;
    font-size: 1.5rem;
    color: #000;
  }
</style>
