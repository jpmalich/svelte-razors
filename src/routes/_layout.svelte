<script>
  import Navbar from "../components/Navbar/Navbar.svelte";
	import Sidebar from "../components/Navbar/Sidebar.svelte";
	import Cart from "../components/Cart/Cart.svelte";
  import globalStore from "../stores/globalStore";

  export let segment;
</script>

<!-- <style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style> -->

<Navbar {segment} />
{#if $globalStore.sidebar}
  <Sidebar />
{/if}

{#if $globalStore.cart}
  <Cart />
{/if}

<main>
  <slot />
</main>
