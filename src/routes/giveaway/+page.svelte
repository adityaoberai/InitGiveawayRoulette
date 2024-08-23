<script>
	// @ts-nocheck

	import { Wheel } from 'spin-wheel';
	import { onMount } from 'svelte';
	import PageHeading from '../../components/PageHeading.svelte';
	import * as easing from 'easing-utils';
	import { client } from '$lib/appwrite';
	import { DATABASE_NAME, COLLECTION_NAME } from '$lib/constants';

	export let data;

	let wheel = null;

	var wheelContainer = null;

	var props = {
		items: data.entries,
		itemLabelRadiusMax: 0.5
	};

	let heading = `${props.items.length} people are registered!`;

	var unsubscribe = null;

	async function spin() {
		unsubscribe();
		var winningIndex = Math.floor(Math.random() * props.items.length);
		var duration = 5000;
		var spinToCenter = false;
		var numberOfRevolutions = 5;
		var direction = 1;
		var easingFunction = easing.easeOutCubic;

		wheel.spinToItem(
			winningIndex,
			duration,
			spinToCenter,
			numberOfRevolutions,
			direction,
			easingFunction
		);

		wheel.onRest = (e) => {
			var winner = props.items[wheel.getCurrentIndex()].label;
			heading = `Congratulations to the winner: ${winner}!`;
		};
	}

	function removeWheel() {
		while (wheelContainer.hasChildNodes()) {
			wheelContainer.removeChild(wheelContainer.firstChild);
		}
	}

	function createWheel() {
		wheel = new Wheel(wheelContainer, props);
		wheel.radius = 0.95;
		wheel.isInteractive = false;
		wheel.overlayImage = '/picker.png';
		wheel.itemBackgroundColors = ['#27272A'];
		wheel.itemLabelColors = ['#FFFFFF'];
		wheel.itemLabelFont = 'sans-serif';
		wheel.itemLabelFontSize = 20;
		wheel.borderColor = '#3d3d3f';
		wheel.lineColor = '#3d3d3f';
	}

	function subscribe() {
		return client.subscribe(
			`databases.${DATABASE_NAME}.collections.${COLLECTION_NAME}.documents`,
			(response) => {
				if(response.events.includes(`databases.${DATABASE_NAME}.collections.${COLLECTION_NAME}.documents.*.create`)) {
					props.items.push({ label: response.payload.discordName });
				} 
				
				if(response.events.includes(`databases.${DATABASE_NAME}.collections.${COLLECTION_NAME}.documents.*.delete`)) {
					props.items = props.items.filter((item) => item.label !== response.payload.discordName);
				}
				
				heading = `${props.items.length} people are registered!`;
				removeWheel();
				createWheel();				
			}
		);
	}

	onMount(() => {
		if(unsubscribe === null) {
			unsubscribe = subscribe();
		}
		wheelContainer = document.querySelector('.wheel-container');
		createWheel();
	});
</script>

<section class="u-flex-vertical u-gap-16">
	<PageHeading {heading} />
	<div class="wheel u-flex-vertical">
		<div class="wheel-container u-flex-vertical"></div>
	</div>
	<button class="button is-big" on:click={spin}>Spin The Wheel</button>
</section>

<style>
	section {
		height: 90vh;
		width: 100vw;
		margin: auto;
		align-items: center;
		justify-content: space-evenly;
	}

	.wheel {
		height: fit-content;
		width: 55vw;
		align-items: center;
		justify-content: center;
	}

	.wheel .wheel-container {
		height: 55vh;
		width: 55vw;
	}
</style>
