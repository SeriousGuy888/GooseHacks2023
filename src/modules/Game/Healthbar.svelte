<script>
  /** @type {number} */ export let health;
  /** @type {number} */ export let maxHealth;
  /** @type {string} */ export let name;

  /** @type {HTMLDivElement} */
  let healthbarContent;

  $: {
    if (healthbarContent) {
      healthbarContent.style.width = `${(health / maxHealth) * 100}%`;
    }
  }
</script>

<div id="healthbar-container">
  <div class="grid grid-cols-2 select-none">
    <span class="ml-4 uppercase font-bold tracking-wide text-lg opacity-75 text-left">{name}</span>
    <span class="text-right">{health}/{maxHealth} HP</span>
  </div>
  <div id="healthbar">
    <div bind:this={healthbarContent} id="healthbar-content" />
  </div>
</div>

<style lang="scss">
  #healthbar-container {
    position: relative;

    // Place at top of screen
    top: 2.5%;

    // Center horizontally
    left: 0;
    right: 0;
    margin: auto;

    width: 50%;
    height: 5%;
  }

  #healthbar {
    width: 100%;
    height: 100%;

    background-color: white;
    border: 2px solid black;

    // make rectangle into right leaning parallelogram
    transform: skew(-45deg);
  }

  #healthbar-content {
    background-color: red;
    height: 100%;
  }
</style>
