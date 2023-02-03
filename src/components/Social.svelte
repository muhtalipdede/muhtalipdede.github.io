<script>
  import data from "../data/resume";

  const social = data.social;
</script>

<div class="social">
  <div>
    <a href={social.twitter}>Twitter</a>
    <a href={social.linkedin}>LinkedIn</a>
    <a href={social.github}>GitHub</a>
    <a href={social.medium}>Medium</a>
    <a href={social.website}>Website</a>
  </div>
</div>

<style>
  .social > div > a {
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 300;
    color: #000;
    text-decoration: none;
    margin: 5px;
  }
</style>
