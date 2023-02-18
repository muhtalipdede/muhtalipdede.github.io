<script>
  import photo from "$lib/assets/profile.jpeg";
    import Spacer from "../components/Spacer.svelte";
</script>

<div class="home__content">
  <Spacer height={2} />
  <img src={photo} alt="Muhtalip Dede" class="home__content__photo" />
  <h1>Hi, I'm Muhtalip Dede</h1>
  <p>
    I'm a software engineer who is passionate about making open-source more
    accessible, creating technology to elevate people, and building community.
  </p>

  <Spacer height={2} />

  <p>
    You can visit my Medium Account at
    <a href="https://medium.com/@muhtalipdede">
      https://medium.com/@muhtalipdede
    </a>
  </p>

  <Spacer height={2} />

  <p>
    You can visit my GitHub Account at
    <a href="https://github.com/muhtalipdede">
      https://github.com/muhtalipdede
    </a>
  </p>

  <Spacer height={2} />

  <p>
    You can visit my LinkedIn Account at
    <a href="https://www.linkedin.com/in/muhtalipdede/">
      https://www.linkedin.com/in/muhtalipdede/
    </a>
  </p>

  <Spacer height={2} />

  <p>
    You can visit my Twitter Account at
    <a href="https://twitter.com/muhtalipdede">
      https://twitter.com/muhtalipdede
    </a>
  </p>

  <Spacer height={2} />

  <p>
    You can visit my Instagram Account at
    <a href="https://www.instagram.com/muhtalipdede5/">
      https://www.instagram.com/muhtalipdede5/
    </a>
  </p>
</div>

<style>
  .home__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home__content p {
    margin: 0;
    text-align: center;
  }

  .home__content a {
    color: #000;
    text-decoration: underline;
    font-weight: bold;
    text-align: justify;
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
