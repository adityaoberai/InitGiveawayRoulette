<script>
	import { user } from '$lib/user';
	import InitHeading from '../components/InitHeading.svelte';
	import NavBar from '../components/NavBar.svelte';

	function login() {
		user.login();
	}
</script>

<NavBar />
<section class="u-flex-vertical">
	<div class="container u-flex-vertical">
		<InitHeading heading="Giveaway" />

		<img src="/giveaway.png" alt="Plain black T-shirt with the text Init and a keyboard branded with the Appwrite logo on the Escape key" />

		<p class="heading-level-6 u-margin-32">
			Login with Discord and get a chance to win some amazing gifts!
		</p>

		<button class="button is-big u-margin-32" on:click={login}>
			<span class="icon-discord"></span>
			Sign in with Discord
		</button>
	</div>
</section>

<style>
	section {
		width: 100%;
		z-index: 0;
		position: relative;
		top: 0;
		width: fit-content;
		height: min-content;
		margin: auto;
		text-align: center;
	}

	img {
		border-radius: var(--border-radius-medium);
	}

	@media (max-width: 768px) {
		img {
			max-width: 90%;
		}
	}

	@media (min-width: 768px) {
		img {
			max-width: 75%;
		}
	}
</style>
