<script>
  import "../app.css";
  import Nav from "../modules/Nav/Nav.svelte";
</script>

<main class="flex [&>*]:flex-grow justify-center">
  <Nav />
  <slot />
</main>
