<script>
  import photo from "$lib/assets/profile.jpeg";
  import Spacer from "../components/Spacer.svelte";
</script>

<svelte:head>
  <title>Muhtalip Dede | Software Engineer</title>
  <meta property="og:title" content="Muhtalip Dede" />
  <meta property="og:description" content="Software Engineer" />
</svelte:head>

<div class="home__content">
  <Spacer height={2} />
  <a href="/" class="home__content__logo">
    <img src={photo} alt="Muhtalip Dede" class="home__content__photo" />
  </a>
  <h1>Hi, I'm Muhtalip Dede</h1>

  <Spacer height={2} />

  <div class="socials">
    <a href="https://twitter.com/muhtalipdede" class="socials__item">
      <i class="fa-brands fa-twitter" />
    </a>
    <a href="https://medium.com/@muhtalipdede" class="socials__item">
      <i class="fa-brands fa-medium" />
    </a>
    <a href="https://github.com/muhtalipdede" class="socials__item">
      <i class="fa-brands fa-github" />
    </a>
    <a href="https://www.linkedin.com/in/muhtalipdede/" class="socials__item">
      <i class="fa-brands fa-linkedin" />
    </a>
    <a href="https://www.instagram.com/muhtalipdede5/" class="socials__item">
      <i class="fa-brands fa-instagram" />
    </a>
    <a href="https://open.spotify.com/artist/68ecCED778FRppsxzpn1Gx?si=fDaiWsTmSASUgicEZ2Zmiw" class="socials__item">
      <i class="fa-brands fa-spotify" />
    </a>
  </div>

  <Spacer height={2} />
  <iframe
    src="https://github.com/sponsors/muhtalipdede/card"
    title="Sponsor muhtalipdede"
    width="100%"
    height="200px"
    class="home__content__sponsor"
  />
</div>

<style>
  .home__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home__content a {
    color: #000;
    text-decoration: underline;
    font-weight: bold;
    text-align: justify;
  }

  .home__content__sponsor {
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .socials__item {
    margin: 0 0.5rem;
    font-size: 2.5rem;
    color: #000;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .home__content__photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;

    animation: fadeInDown 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    .home__content__photo {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 480px) {
    .home__content__photo {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 320px) {
    .home__content__photo {
      width: 80px;
      height: 80px;
    }
  }
</style>
