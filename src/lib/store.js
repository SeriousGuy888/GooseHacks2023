/*
  This is the store used to store global state data, such as the heart rate.
  It is used to pass data between components.

  Docs (how to use): https://svelte.dev/docs/svelte-store
  
  When importing this store, you can use the following syntax:
    import { heartRate } from "lib/store.js";
    heartRate.set(100); // Sets the heart rate to 100
    $heartRate // automatically update when the store is updated.
*/

import { derived, writable } from "svelte/store";

export const heartRate = writable(80);
export const heartRateHistory = writable([]);

export const points = writable(0);

// the currency used for upgrades
export const gold = writable(1000);

// The number of each upgrade already purchased
export const upgrades = writable({
  gold: 0,
  damage: 0,
  critChance: 0,
});

// Multipliers derived from upgrades
export const multipliers = derived(upgrades, ($upgrades) => ({
  gold: Math.round((1 + $upgrades.gold * 0.1) * 10) / 10,
  damage: Math.round((1 + $upgrades.damage * 0.1) * 10) / 10,
  critChance: Math.round((0 + $upgrades.critChance * 0.01) * 100) / 100,
}));

// Costs derived from upgrades
export const upgradeCosts = derived(upgrades, ($upgrades) => ({
  gold: Math.round(10 * Math.pow(1.1, $upgrades.gold)),
  damage: Math.round(10 * Math.pow(1.1, $upgrades.damage)),
  critChance: Math.round(10 * Math.pow(1.1, $upgrades.critChance)),
}));
