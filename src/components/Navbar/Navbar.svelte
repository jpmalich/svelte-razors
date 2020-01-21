<script>
  import SmallNavbar from "./SmallNavbar.svelte";
  import BigNavbar from "./BigNavbar.svelte";
  import globalStore from "../../stores/globalStore";

  let closeSidebar = globalStore.toggleItem;
  export let segment;
  let screenWidth;
  $: if (screenWidth > 992){
    closeSidebar('sidebar',false)
  }
</script>

<!-- <style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style> -->
<svelte:window bind:innerWidth={screenWidth} />
{#if screenWidth > 992}
  <BigNavbar />
{:else}
  <SmallNavbar />
{/if}

<!-- <nav class="navbar">
  <a class:selected={segment === undefined} href=".">home</a>
  <a class:selected={segment === 'About'} href="About">about</a>
  <a rel="prefetch" class:selected={segment === 'Products'} href="Products">
    products
  </a> -->
<!-- <ul>
    <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li>
    <li>
      <a class:selected={segment === 'About'} href="About">about</a>
    </li>


    <li>
      <a rel="prefetch" class:selected={segment === 'Products'} href="Products">
        products
      </a>
    </li>

  </ul> -->
<!-- </nav> -->
