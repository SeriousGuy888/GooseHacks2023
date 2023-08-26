<script>
  import { onMount } from "svelte";
  import Game from "../modules/Game/Game.svelte";
  import { browser } from "$app/environment";

  onMount(() => {
    if (browser && window.DeviceOrientationEvent) {
      // @ts-ignore
      const gyroscope = new Gyroscope({ frequency: 60 });

      gyroscope.addEventListener("reading", (/** @type {any} */ _) => {
        console.log("Angular velocity along the X-axis " + gyroscope.x);
        console.log("Angular velocity along the Y-axis " + gyroscope.y);
        console.log("Angular velocity along the Z-axis " + gyroscope.z);
      });

      gyroscope.start();
    }
  });
</script>

<Game />
