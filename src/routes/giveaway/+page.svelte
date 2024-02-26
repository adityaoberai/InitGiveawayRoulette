<script>
	// @ts-nocheck
  
    import { Wheel } from 'spin-wheel';
	import { onMount } from 'svelte';
    import * as easing from 'easing-utils';
	
    let winner = '';

    export let data;

	var props = {
        items: data.entries,
        itemLabelRadiusMax: 0.5
    }

    let wheel = null;

    async function spin() {

        var winningIndex = Math.floor(Math.random() * props.items.length);
        var duration = 5000;
        var spinToCenter = false;
        var numberOfRevolutions = 5;
        var direction = 1;
        var easingFunction = easing.easeOutCubic;

        //wheel.spin(700);

        wheel.spinToItem(winningIndex, duration, spinToCenter, numberOfRevolutions, direction, easingFunction)

        wheel.onRest = (e) => {
            winner = props.items[wheel.getCurrentIndex()].label;
            document.querySelector('.winnerHeading').innerHTML = `Congratulations to the winner: ${winner}!`;
        };
    }

    onMount(() => {
        var container = document.querySelector('.wheel-container');

        wheel = new Wheel(container, props);
        wheel.radius = 0.95;
        wheel.isInteractive = false;
        wheel.overlayImage = '/picker.png';
    });
</script>

<div class="container u-flex-vertical u-margin-auto u-gap-32">
    <h1 class="winnerHeading heading-level-1">Find the winner!</h1>
    <div class="wheel u-flex-vertical">
        <div class="wheel-container u-flex-vertical">
        </div>
    </div>
    <button class="button is-big u-margin-16" on:click={spin}>Spin The Wheel</button>
</div>

<style>

    .wheel {
        height: 70%;
        width: 80%;
        align-items: center;
    }

    .wheel img {
        height: 10%;
    }
    
    .wheel .wheel-container {
        height: 90%;
        width: 100%;
    }

    .container {
        width: 70%;
        height: 70%;
    }

</style>