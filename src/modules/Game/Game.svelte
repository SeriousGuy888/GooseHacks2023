<script>
  import { heartRate, points } from "$lib/store";
    import GameCanvas from "./GameCanvas.svelte";

  let gameStarted = false;
  let timeStarted = 0;

  function startGame() {
    points.set(0);
    timeStarted = Date.now();
    now = timeStarted;

    gameStarted = true;
  }

  let now = Date.now();
  setInterval(() => {
    now = Date.now();
  }, 1000);

  $: secondsSinceStart = Math.floor((now - timeStarted) / 1000);
</script>

<section class="p-4 bg-slate-300 rounded-md">
  <h1>This is the game part</h1>

  <div class="grid mt-4 gap-2">
    {#if gameStarted}
      <p>reading the heartrate from a different component: {$heartRate}</p>
      <p>Points: {$points}</p>
      <p>Seconds since start: {secondsSinceStart}</p>
      <hr />
      <GameCanvas />
    {:else}
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        on:click={startGame}
      >
        Start Workout
      </button>
    {/if}
  </div>
</section>
