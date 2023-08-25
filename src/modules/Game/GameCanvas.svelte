<script>
  import { onMount } from "svelte";

  /**
   * @type {HTMLDivElement}
   */
  let enemyHealthbar;

  /**
   * @type {HTMLDivElement}
   */
  let enemyHealthbarContent;

  /**
   * @type {HTMLDivElement}
   */
  let enemy;

  /**
   * @type {HTMLDivElement}
   */
  let player;

  /**
   * @type {number}
   */
  let enemyHealth = 100;

  $: {
    if (enemyHealthbarContent) {
      enemyHealthbarContent.style.width = `${enemyHealth}%`;
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article class="rounded-md cursor-pointer" on:click={() => enemyHealth--}>
  <!-- https://learn.svelte.dev/tutorial/bind-this -->
  <div bind:this={enemyHealthbar} id="enemy-healthbar">
    <div bind:this={enemyHealthbarContent} id="healthbar-content" />
  </div>
  <div bind:this={enemy} id="enemy" />
  <div bind:this={player} id="player" />
</article>

<style lang="scss">
  article {
    background-color: white;
    width: 100%;
    aspect-ratio: 16/9;

    position: relative;
    overflow: clip;

    & > * {
      position: absolute;
    }
  }

  #enemy-healthbar {
    background-color: white;
    border: 2px solid black;

    width: 50%;
    height: 5%;

    // Place at top of screen
    top: 2.5%;

    // Center horizontally
    left: 0;
    right: 0;
    margin: auto;

    // make rectangle into right leaning parallelogram
    transform: skew(-45deg);

    #healthbar-content {
      background-color: red;
      height: 100%;
    }
  }

  #enemy {
    background-color: orange;
    width: 20%;
    aspect-ratio: 4/5;

    // Center horizontally
    left: 50%;
    translate: -50% 0;

    bottom: 25%;
  }

  #player {
    background-color: green;
    width: 7%;
    aspect-ratio: 1/2;

    // Center horizontally
    left: 50%;
    translate: -50% 0;

    // Place at bottom of screen
    bottom: 0;
  }
</style>
