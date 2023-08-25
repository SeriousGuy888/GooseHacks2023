<script>
  import { heartRate, heartRateHistory } from "$lib/store";
</script>

<section class="p-4 bg-slate-300 rounded-md">
  <h1>Heart Rate Input</h1>
  <p>Current heartrate: {$heartRate}</p>
  <input
    type="range"
    value={$heartRate}
    min="0"
    max="200"
    step="1"
    class="w-full"
    on:input={(e) => {
      const target = e.target;

      // @ts-ignore
      heartRate.set(target?.valueAsNumber);
    }}
  />
  <br />
  <p>
    {$heartRateHistory.join(", ")}
  </p>
</section>
