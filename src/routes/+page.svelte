<script>
    import { user } from "$lib/user";

    function login() {
        user.login();
    }
</script>

<nav>
    <a href="/">
        <img src="/logotype.svg" alt="Appwrite logo">
    </a>
</nav>

<section class="u-flex-vertical">
    <div class="container u-flex-vertical">
        <div class="card u-flex-vertical">
            <img class="u-width-140" src="/init.svg" alt="Init logo">
            <h1 class="heading-level-1 u-margin-16">Giveaway</h1>
        </div>

        <img src="/tshirt.png" alt="Init tshirt">

        <p class="heading-level-6 u-margin-32">Login with Discord and get a change to win an Init_ t-shirt!</p>

        <button class="button is-big u-margin-32" on:click={login}>
            <span class="icon-discord"></span>
            Sign in with Discord
        </button>
    </div>
</section>

<style>
    section {
        height: 100%;
        width: 100%;
        bottom: 0;
        position: absolute;
    }
</style>