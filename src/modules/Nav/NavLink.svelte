<script>
  import { browser } from "$app/environment";
  import { page } from "$app/stores";

  /** @type {string} */ export let href;
  /** @type {string} */ export let name;

  function isActive() {
    return $page.url.pathname === href;
  }
</script>

<a {href}>
  <div class="px-4 flex flex-col items-center flex-1" class:active={isActive()}>
    <!-- icon -->
    <slot />
    <span class="text-sm">
      {name}
    </span>
  </div>
</a>

<style>
  div {
    opacity: 0.5;
  }

  div.active {
    opacity: 1;
  }
</style>
