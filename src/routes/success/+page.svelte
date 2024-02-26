<script>
    import { user } from "$lib/user";
    import { db } from "$lib/database";
	import { onMount } from "svelte";
    
    let userId = '';

    async function getUserId() {
        userId = (await user.get()).name;
        await db.add(userId);
    }

    onMount(() => {
        getUserId();
    });
</script>

<nav>
    <a href="/">
        <img src="/logotype.svg" alt="Appwrite logo">
    </a>
</nav>

<div class="container u-flex-vertical">
    <h1 class="heading-level-1 u-margin-32 u-normal">Success!</h1>
    <p class="body-text-1 u-margin-32 u-normal">Thanks for participating in the giveaway, {userId}</p>
</div>