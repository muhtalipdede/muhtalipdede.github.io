<script>
    import Social from "./Social.svelte";
    export let profile;
    export let social;
    export let skills;
</script>

<div class="sidebar__container">
    <div class="profile__image__container">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <img
                class="profile__image"
                src={'./build/assets/user.png'}
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
    .sidebar__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .profile__image__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: Lato, sans-serif;
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

</style>