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
        wheel.itemBackgroundColors = ['#27272A'];
        wheel.itemLabelColors = ['#FFFFFF'];
        wheel.itemLabelFont = 'sans-serif';
        wheel.itemLabelFontSize = 20;
        wheel.borderColor = '#3d3d3f';
        wheel.lineColor = '#3d3d3f';
    });
</script>

<section class="u-flex-vertical">
    <div class="container u-flex-vertical u-gap-32">
        <div class="card u-flex-vertical">
            <img class="u-width-140" src="/init.svg" alt="Init logo">
            <h1 class="winnerHeading heading-level-1 u-margin-block-start-32">Find the winner</h1>
        </div>
        <div class="wheel u-flex-vertical u-gap-32">
            <div class="wheel-container u-flex-vertical">
            </div>
        </div>
        <button class="button is-big u-margin-16" on:click={spin}>Spin The Wheel</button>
    </div>
</section>

<style>
    section {
        height: 100%;
        width: 100%;
        top: 0;
        position: absolute;
    }

    .wheel {
        height: 80%;
        width: 80%;
        align-items: center;
    }
    
    .wheel .wheel-container {
        height: 90%;
        width: 100%;
    }

    .container {
        max-width: 70%;
        height: 70%;
        background-color: transparent;
        border: 0;
    }

</style>