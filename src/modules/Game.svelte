<script>
  import { heartRate, points } from "$lib/store";
</script>

<section class="p-4 bg-slate-300 rounded-md">
  <h1>This is the game part</h1>
  <p>reading the heartrate from a different component: {$heartRate}</p>
  <p>Points: {$points}</p>
</section>
