<script>
    import { user } from "$lib/user";
    import { db } from "$lib/database";
    
    let userId = '';

    async function getUserId() {
        userId = (await user.get()).name;
        await db.add(userId);
    } getUserId();
</script>

<div class="container u-flex-vertical">
    <h1 class="heading-level-1 u-margin-32">Success!</h1>
    <p class="body-text-1 u-bold u-margin-32">Thanks for participating in the giveaway, {userId}</p>
</div>