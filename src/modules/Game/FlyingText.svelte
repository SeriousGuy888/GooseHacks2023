<script>
  /** @type {string} */ export let text;
</script>

<div class="text absolute text-red-800 text-5xl font-bold select-none">
  {text}
</div>

<style>
  .text {
    position: absolute;

    top: 0;
    left: 50%;
    translate: -50% -125%;

    animation: fly-up 1s ease-out forwards;
  }

  @keyframes fly-up {
    from {
      opacity: 1;
      transform: translate(0, 0);
    }
    to {
      opacity: 0;
      transform: translate(25%, -150%) rotate(25deg);
    }
  }
</style>
