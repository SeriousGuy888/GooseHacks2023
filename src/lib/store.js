/*
  This is the store used to store global state data, such as the heart rate.
  It is used to pass data between components.

  Docs (how to use): https://svelte.dev/docs/svelte-store
  
  When importing this store, you can use the following syntax:
    import { heartRate } from "lib/store.js";
    heartRate.set(100); // Sets the heart rate to 100
    $heartRate // automatically update when the store is updated.
*/

import { writable } from "svelte/store";

export const heartRate = writable(0);
export const points = writable(0);
