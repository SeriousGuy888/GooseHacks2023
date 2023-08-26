<script>
  import NavLink from "./NavLink.svelte";

  import { Home, ChevronUp } from "lucide-svelte";
</script>

<nav class="grid grid-flow-col z-40 bg-red-900 text-white py-4">
  <NavLink href="/" name="Home">
    <Home />
  </NavLink>
  <NavLink href="/upgrades" name="Upgrades">
    <ChevronUp />
  </NavLink>
</nav>

<style lang="scss">
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    box-shadow: 0 -2px 4px #0004;
  }
</style>
