<script>
    import { user } from "$lib/user";

    function login() {
        user.login();
    }
</script>

<div class="container u-flex-vertical">
    <div class="card u-width-140">
        <img src="/logo.png" alt="Appwrite logo">
    </div>

    <h1 class="heading-level-1 u-margin-32">Init Giveaway!</h1>

    <p class="body-text-1 u-bold u-margin-32">Login with Discord and get a change to win an Init_ t-tshirt!</p>

    <button class="button is-big u-margin-32" on:click={login}>Sign in with Discord</button>
</div>