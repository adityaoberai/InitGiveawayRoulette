<script>
	import { user } from '$lib/user';
	import PageHeading from '../components/PageHeading.svelte';
	import NavBar from '../components/NavBar.svelte';

	function login() {
		user.login();
	}
</script>

<NavBar />
<section id="giveaway" class="u-flex-vertical">
	<div class="container container-transparent u-flex-vertical">
		<PageHeading heading="Giveaway" />

		<img
			src="/giveaway.png"
			alt="Init swags"
		/>

		<p class="heading-level-6">
			Login with Discord and get a chance to win some amazing gifts!
		</p>

		<button class="button is-big" on:click={login}>
			<span class="icon-discord"></span>
			Sign in with Discord
		</button>
	</div>
</section>

<style>
	#giveaway {
		height: 100vh;
		width: 100vw;
		padding: 20% 0;
		position: relative;
		top: 0;
		text-align: center;
		justify-content: center;
	}

	div {
		align-self: center;
		padding: 2rem;
	}

	img {
		max-width: 70%;
	}

	p, button {
		margin: 2rem;
	}

	@media (max-width: 768px) {
		img {
			max-width: 90%;
		}

		div {
			padding: 1rem;
		}

		p, button {
			margin: 1.5rem auto;
		}

	}
</style>