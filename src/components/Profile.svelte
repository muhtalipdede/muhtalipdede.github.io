<script>
    export let profile;
</script>

<div class="profile">
    <div class="profile__info__container">
        <span class="profile__info__name">
            {profile.name} {profile.surname} | {profile.title}
        </span>
        <span class="profile__info__aboutme">{profile.aboutme}</span>
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
</style>
