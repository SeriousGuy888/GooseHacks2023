<script>
  import { points } from "$lib/store";
  import { Enemy, enemies } from "./Enemy";
  import Healthbar from "./Healthbar.svelte";

  /** @type {Enemy} */
  let enemy = enemies.normal;
  let enemyHealth = enemy.maxHealth;

  let isEnemyDying = false;

  /**
   * @param {number} damage
   */
  function dealDamage(damage) {
    enemyHealth -= damage;

    if (enemyHealth <= 0) {
      enemyDeath();
    }
  }

  function enemyDeath() {
    // Add points
    points.update((p) => p + 1);

    // Play death animation
    isEnemyDying = true;
    setTimeout(() => {
      isEnemyDying = false;

      spawnNewEnemy();
    }, 500);
  }

  function spawnNewEnemy() {
    const key = Object.keys(enemies)[Math.floor(Math.random() * Object.keys(enemies).length)];

    // @ts-ignore
    enemy = enemies[key];
    enemyHealth = enemy.maxHealth;

    console.log(`New enemy: ${key}`);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article class="rounded-md cursor-pointer" on:click={() => dealDamage(5)}>
  <!-- https://learn.svelte.dev/tutorial/bind-this -->
  <Healthbar health={enemyHealth} maxHealth={enemy.maxHealth} />
  <div
    id="enemy"
    class="sprite"
    class:death-animation={isEnemyDying}
    style="background-image: url('{enemy.getSpriteSrc()}');"
  />
  <div id="player" class="sprite" />
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

  #enemy {
    // background-color: orange;
    width: 20%;
    aspect-ratio: 4/5;

    // Center horizontally
    left: 50%;
    translate: -50% 0;

    bottom: 25%;
  }

  #player {
    // background-color: green;
    background-image: url("/sprites/player.png");

    width: 7%;
    aspect-ratio: 1/2;

    // Center horizontally
    left: 50%;
    translate: -50% 0;

    // Place at bottom of screen
    bottom: 0;
  }

  .sprite {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    image-rendering: pixelated;
  }

  .death-animation {
    animation: death 500ms;
  }

  @keyframes death {
    0% {
      transform: scale(1);
      opacity: 1;
      rotate: 0deg;
    }
    100% {
      transform: scale(0);
      opacity: 0;
      rotate: 90deg;
    }
  }
</style>
