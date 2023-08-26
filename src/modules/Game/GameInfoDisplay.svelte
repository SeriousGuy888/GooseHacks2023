<script>
  import { gold, heartRate, points } from "$lib/store";
</script>

<div class="p-4 bg-gray-200 rounded-md bg-opacity-50">
  <p>Points: <strong>{$points}</strong></p>
  <p>Gold: <strong>{$gold}</strong></p>
  <br />
  <p>
    BPM: <input
      type="number"
      bind:value={$heartRate}
      min="10"
      max="220"
      class="max-w-[3rem] px-2 py-1 rounded-sm"
    />
    <br>
    <span class="text-sm">(for demo)</span>
  </p>
</div>
