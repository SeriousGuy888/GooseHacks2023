<script>
  /** @type {number} */ export let health;
  /** @type {number} */ export let maxHealth;

  /** @type {HTMLDivElement} */
  let healthbarContent;

  $: {
    if (healthbarContent) {
      healthbarContent.style.width = `${(health / maxHealth) * 100}%`;
    }
  }
</script>

<div id="healthbar">
  <div bind:this={healthbarContent} id="healthbar-content" />
</div>

<style lang="scss">
  #healthbar {
    position: absolute;

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
</style>
