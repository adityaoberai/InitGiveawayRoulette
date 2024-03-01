<script>
	import '../app.css';
	import '@appwrite.io/pink';
	import '@appwrite.io/pink-icons';
</script>

<section class="u-flex-vertical">
	<slot />
</section>

<style>
	section {
		height: 100%;
		width: 100%;
		z-index: 2;
	}

	section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/shine.png');
		background-size: 100% 100%;
		opacity: 0.6;
		z-index: -1;
	}

</style>
