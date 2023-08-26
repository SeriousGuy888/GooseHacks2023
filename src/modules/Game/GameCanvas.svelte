<script>
  import { gold, isGameRunning, multipliers, points } from "$lib/store";
  import { Enemy, enemies } from "./Enemy";
  import GameInfoDisplay from "./GameInfoDisplay.svelte";
  import Healthbar from "./Healthbar.svelte";

  /** @type {Enemy} */
  let enemy = enemies.zombie;
  let enemyHealth = enemy.maxHealth;

  let isEnemyDying = false;

  /**
   * @param {number} damage
   */
  export function dealDamage(damage) {
    if (isEnemyDying) {
      return;
    }

    const critBonus = Math.random() < $multipliers.critChance ? 2 : 1;
    const trueDmg = Math.round(damage * $multipliers.damage) * critBonus;

    enemyHealth = Math.max(0, enemyHealth - trueDmg);

    if (enemyHealth <= 0) {
      enemyDeath();
    }
  }

  function enemyDeath() {
    const { drops } = enemy;

    // Add points and gold
    points.update((p) => p + drops.points);
    gold.update((g) => g + drops.gold * $multipliers.gold);

    console.log(`Updated gold: ${drops.gold} ${$gold}`);

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

<article class="w-full h-full overflow-hidden">
  <div class="absolute w-full h-full bg-white opacity-40" />

  <section class="flex justify-center mt-8">
    <Healthbar health={enemyHealth} maxHealth={enemy.maxHealth} name={enemy.name} />
  </section>

  <section id="battlefield">
    <div
      id="enemy"
      class="sprite"
      class:death-animation={isEnemyDying}
      class:floating-animation={!isEnemyDying}
      style="background-image: url('{enemy.getSpriteSrc()}');"
    />
    <div id="player" class="sprite" />
  </section>

  <section class="absolute inset-x-4 bottom-4 flex justify-between items-end">
    <GameInfoDisplay />
    <button
      class="px-4 py-2 bg-red-800 text-white rounded-md shadow-md"
      on:click={() => isGameRunning.set(false)}
    >
      End Workout
    </button>
  </section>
</article>

<style lang="scss">
  article {
    // background-color: white;
    // from https://unsplash.com/photos/LhlxYMfnTF0
    background-image: url("/sprites/canvas_background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  #battlefield {
    position: relative;
    width: 100%;
    height: 80%;

    & > * {
      position: absolute;
    }

    #enemy {
      // background-color: orange;
      width: max(20%, 200px);
      aspect-ratio: 1;

      // Center horizontally
      left: 50%;
      translate: -50% 0;

      bottom: 25%;
    }

    #player {
      // background-color: green;
      background-image: url("/sprites/player.png");

      width: max(20%, 100px);
      aspect-ratio: 1;

      // Center horizontally
      left: 50%;
      translate: -50% 0;

      // Place at bottom of screen
      bottom: 0;
    }
  }

  .sprite {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
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

  .floating-animation {
    animation: floating 2s ease-in-out infinite;
  }

  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
