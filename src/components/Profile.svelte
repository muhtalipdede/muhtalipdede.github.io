<script>
    import Social from "./Social.svelte";

    export let profile;
    export let social;
</script>

<div class="profile">
    <div class="profile__info__container">
        <span class="profile__info__name">
            {profile.name} {profile.surname} | {profile.title}
        </span>
        <span class="profile__info__aboutme">{profile.aboutme}</span>
    </div>
    <div class="profile__image__container">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
            class="profile__image"
            src={'./build/assets/user.png'}
            alt="Muhtalip Dede - Software Engineer"
        />
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
</div>

<style>
    .profile {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        padding: 1rem;
        margin: 1rem;
    }
    .profile__info__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 1rem;
    }
    .profile__info__name {
        font-weight: bold;
        font-family: Lato, sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: justify;
    }
    .profile__info__aboutme {
        font-family: Lato, sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
        margin-top: 20px;
        text-align: justify;
    }
    .profile__image__container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1rem;
    }
    .profile__image__container > span {
        font-family: Lato, sans-serif;
        font-size: 1rem;
        font-weight: 300;
    }
    .profile__image__container > span > a {
        color: #000;
        text-decoration: none;
    }
    .profile__image {
        border-radius: 50%;
        width: 7rem;
        height: 7rem;
    }
</style>
