<script>
  import data from "../data/resume";
  import Social from "../components/Social.svelte";

  import photo from "$lib/assets/profile.jpeg";

  const profile = data.profile;
  const social = data.social;
</script>

<div class="profile__image__container">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <img class="profile__image" src={photo} />
  <span>Age: {profile.age}</span>
  <span>
    <a href="mailto:{profile.email}">{profile.email}</a>
  </span>
  <span>
    <a href="tel:{profile.phone}">{profile.phone}</a>
  </span>
  <span>{profile.location.city} {profile.location.country}</span>
  <Social {social} />
</div>

<div class="profile">
  <div class="profile__info__container">
    <span class="profile__info__name">
      {profile.name}
      {profile.surname} | {profile.title}
    </span>
    <span class="profile__info__aboutme">{profile.aboutme}</span>
  </div>
</div>

<style>
  .profile__image__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 300;
    margin-top: 20px;
    text-align: justify;
  }

  .profile__image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  .profile__image__container span a {
    color: #000;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .profile__image {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 480px) {
    .profile__image {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 320px) {
    .profile__image {
      width: 80px;
      height: 80px;
    }
  }

  .profile {
    display: flex;
    flex-direction: row;
  }
  .profile__info__container {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }
  .profile__info__name {
    font-weight: bold;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
  .profile__info__aboutme {
    font-size: 0.9rem;
    font-weight: 300;
    margin-top: 20px;
    text-align: justify;
  }
</style>
