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

<div id="healthbar-container" class="z-10">
  <div class="grid grid-cols-2 select-none whitespace-nowrap">
    <span class="ml-4 uppercase font-bold tracking-wide opacity-75 text-left">{name}</span>
    <span class="text-right text-black">{health}/{maxHealth} HP</span>
  </div>
  <div id="healthbar">
    <div bind:this={healthbarContent} id="healthbar-content" />
  </div>
</div>

<style lang="scss">
  #healthbar-container {
    width: clamp(50%, 300px, 80%);
    height: 2rem;
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
