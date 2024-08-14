<script>
    export let heading = '';
</script>

<div class="card">
	<img class="u-margin-block-start-auto u-normal" src="/init.svg" alt="Init logo" />
	<h2 class="heading-level-2 u-margin-block-start-auto u-normal">{heading}</h2>
</div>

<style>
	.card {
		align-items: center;
		background-color: transparent;
		border: 0;
		text-align: center;
	}

	@media (max-width: 768px) {
		.card {
			width: 95%;
			margin: 0 auto;		
		}
	}
</style>