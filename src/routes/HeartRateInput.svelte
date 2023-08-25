<script>
  import { heartRate } from "$lib/store";
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
    on:input={(e) => {
      const target = e.target;

      // @ts-ignore
      heartRate.set(target?.value);
    }}
  />
</section>
