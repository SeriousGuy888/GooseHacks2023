<script>
  // @ts-nocheck

  import { gold, upgrades, multipliers, upgradeCosts } from "$lib/store";

  const availableUpgrades = Object.keys($upgrades);

  const upgradeInfo = {
    gold: {
      title: "Extra Gold",
      description: "Increase the amount of gold dropped by enemies.",
    },
    damage: {
      title: "Extra Damage",
      description: "Increase the amount of damage you deal to enemies.",
    },
    critChance: {
      title: "Criticals",
      description: "Increase the chance of critical hits.",
    },
  };

  /**
   * @param {string} upgradeKey
   */
  function buyUpgrade(upgradeKey) {
    if ($gold < $upgradeCosts[upgradeKey]) {
      return;
    }

    gold.update((g) => g - $upgradeCosts[upgradeKey]);
    upgrades.update((u) => ({ ...u, [upgradeKey]: u[upgradeKey] + 1 }));
  }
</script>

<div class="m-4 max-w-screen-lg grid gap-4">
  <section class="mb-4">
    <h1 class="text-2xl font-bold">Upgrades Shop</h1>
    <p class="text-lg">You have <strong>{$gold}</strong> gold.</p>
  </section>

  <section class="grid gap-3">
    {#each availableUpgrades as upgradeKey}
      <div class="p-4 bg-gray-200 rounded-md">
        <h2 class="font-bold">
          {upgradeInfo[upgradeKey]?.title}
          <span class="text-sm">
            ({$upgrades[upgradeKey]} &middot; {$multipliers[upgradeKey]}x)</span
          >
        </h2>
        <p class="text-gray-700">
          {upgradeInfo[upgradeKey]?.description}
        </p>

        <div class="flex justify-end">
          <button
            class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
            on:click={() => buyUpgrade(upgradeKey)}
            disabled={$gold < $upgradeCosts[upgradeKey]}
          >
            Buy for {$upgradeCosts[upgradeKey]} gold
          </button>
        </div>
      </div>
    {/each}
  </section>
</div>
