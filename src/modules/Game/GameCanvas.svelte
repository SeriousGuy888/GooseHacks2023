<script>
  import { points } from "$lib/store";

  /**
   * @type {HTMLDivElement}
   */
  let enemyHealthbar;

  /**
   * @type {HTMLDivElement}
   */
  let enemyHealthbarContent;

  /**
   * @type {number}
   */
  let enemyHealth = 100;

  $: {
    if (enemyHealthbarContent) {
      enemyHealthbarContent.style.width = `${enemyHealth}%`;
    }
  }

  /**
   * @param {number} damage
   */
  function dealDamage(damage) {
    enemyHealth -= damage;

    if (enemyHealth <= 0) {
      enemyDeath();
      spawnNewEnemy();
    }
  }

  function enemyDeath() {
    points.update((p) => p + 1);
  }

  function spawnNewEnemy() {
    enemyHealth = 100;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article class="rounded-md cursor-pointer" on:click={() => dealDamage(5)}>
  <!-- https://learn.svelte.dev/tutorial/bind-this -->
  <div bind:this={enemyHealthbar} id="enemy-healthbar">
    <div bind:this={enemyHealthbarContent} id="healthbar-content" />
  </div>
  <div id="enemy" />
  <div id="player" />
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
