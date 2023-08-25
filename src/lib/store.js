/*
  This is the store used to store global state data, such as the heart rate.
  It is used to pass data between components.

  Docs: https://svelte.dev/docs/svelte-store
*/

import { writable } from "svelte/store";

export const heartRateStore = writable(0);
