<script>
	import { user } from '$lib/user';
	import { db } from '$lib/database';
	import { onMount } from 'svelte';
	import NavBar from '../../components/NavBar.svelte';

	let userId = '';

	async function getUserId() {
		var currentUser = await user.get();
		await db.add(currentUser.name, currentUser.email);
	}

	onMount(() => {
		getUserId();
	});
</script>

<NavBar />

<div class="container u-flex-vertical">
	<h1 class="heading-level-1 u-margin-32 u-normal">Success!</h1>
	<p class="body-text-1 u-margin-32 u-normal">Thanks for participating in the giveaway, {userId}</p>
</div>
