<script>
  import { heartRate, heartRateHistory, isGameRunning, points } from "$lib/store";
  import GameCanvas from "./GameCanvas.svelte";
  let timeStarted = 0;

  /** @type {GameCanvas|undefined} */
  let canvas;

  function startGame() {
    points.set(0);
    timeStarted = Date.now();
    now = timeStarted;

    isGameRunning.set(true);
  }

  setInterval(tickSecond, 1000);
  function tickSecond() {
    if (!$isGameRunning) return;

    now = Date.now();
    $heartRateHistory = [...$heartRateHistory, $heartRate];

    if (canvas) {
      const dmg = Math.round($heartRate / 10);
      canvas.dealDamage(dmg);
    }
  }

  let now = Date.now();
  $: secondsSinceStart = Math.floor((now - timeStarted) / 1000);
</script>

<section class="w-screen h-screen">
  {#if $isGameRunning}
    <GameCanvas bind:this={canvas} />
    <!-- <HeartRateInput /> -->
  {:else}
    <div class="grid place-items-center py-16 px-8">
      <button
        class="bg-green-500 hover:bg-green-700 text-white text-4xl font-bold py-8 px-16 rounded-xl"
        on:click={startGame}
      >
        Start Workout
      </button>
    </div>
  {/if}
</section>
