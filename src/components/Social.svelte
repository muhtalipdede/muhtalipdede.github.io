<script>
    export let social;
</script>

<div class="social">
    <div>
        <a href={social.twitter}><i class="fa-brands fa-twitter"></i></a>
        <a href={social.linkedin}><i class="fa-brands fa-linkedin"></i></a>
        <a href={social.github}><i class="fa-brands fa-github"></i></a>
        <a href={social.medium}><i class="fa-brands fa-medium"></i></a>
        <a href={social.website}><i class="fa-solid fa-user-astronaut"></i></a>
    </div>
</div>

<style>
    .social {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .social > div > a {
        align-items: center;
        justify-content: center;
        font-family: Lato, sans-serif;
        font-size: 1rem;
        font-weight: 300;
        color: #000;
        text-decoration: none;
    }
</style>
