<script>
	// @ts-nocheck
  
    import { Wheel } from 'spin-wheel';
	import { onMount } from 'svelte';
    import InitHeading from '../../components/InitHeading.svelte';
    import * as easing from 'easing-utils';
	
    let heading = 'Find the winner';

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

        wheel.spinToItem(winningIndex, duration, spinToCenter, numberOfRevolutions, direction, easingFunction)

        wheel.onRest = (e) => {
            var winner = props.items[wheel.getCurrentIndex()].label;
            heading = `Congratulations to the winner: ${winner}!`;
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
        <InitHeading heading={heading} />
        <div class="wheel u-flex-vertical u-gap-32">
            <div class="wheel-container u-flex-vertical">
            </div>
        </div>
        <button class="button is-big u-margin-32" on:click={spin}>Spin The Wheel</button>
</section>

<style>
    section {
        height: 80%;
        width: 100%;
        margin: auto;
        align-items: center;
    }

    .wheel {
        height: 70%;
        width: 70%;
        align-items: center;
    }
    
    .wheel .wheel-container {
        height: 100%;
        width: 100%;
    }

</style>