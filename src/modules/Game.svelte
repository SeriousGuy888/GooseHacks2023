<script>
  import { heartRateStore } from "$lib/store";

  let heartRate = 0;
  heartRateStore.subscribe((value) => {
    heartRate = value;
  });
</script>

<section class="p-4 bg-slate-300 rounded-md">
  <h1>Game</h1>
  <p>reading the heartrate from a different component: {heartRate}</p>
</section>
