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

		<img src="/tshirt.png" alt="Plain black T-shirt with the text Init" />

		<p class="heading-level-6 u-margin-32">
			Login with Discord and get a chance to win an Init_ T-shirt!
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
	}

	@media (max-width: 768px) {
		img {
			max-width: 80%;
		}
	}

	@media (min-width: 768px) {
		img {
			max-width: 60%;
		}
	}
</style>
