<script>
  import { heartRate, heartRateHistory, points } from "$lib/store";
  import HeartRateInput from "../../routes/HeartRateInput.svelte";
  import GameCanvas from "./GameCanvas.svelte";

  let gameStarted = false;
  let timeStarted = 0;

  /** @type {GameCanvas|undefined} */
  let canvas;

  function startGame() {
    points.set(0);
    timeStarted = Date.now();
    now = timeStarted;

    gameStarted = true;
  }

  setInterval(tickSecond, 1000);
  function tickSecond() {
    if (!gameStarted) return;

    now = Date.now();
    $heartRateHistory = [...$heartRateHistory, $heartRate];

    if (canvas) {
      const dmg = Math.round($heartRate / 10);
      canvas.dealDamage(dmg);
    }
  }

  let now = Date.now();
  $: secondsSinceStart = Math.floor((now - timeStarted) / 1000);

  // TODO: remove this (for testing)
  // startGame();
</script>

<section class="rounded-md overflow-clip grid gap-2">
  {#if gameStarted}
    <GameCanvas bind:this={canvas} />
    <HeartRateInput />
  {:else}
    <div class="p-4 bg-slate-300">
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        on:click={startGame}
      >
        Start Workout
      </button>
    </div>
  {/if}
</section>
