<script>
  import CartButton from "../Cart/CartButton.svelte";
  import globalStore from "../../stores/globalStore";

  let openSidebar = globalStore.toggleItem;
</script>

<nav class="navbar">
  <div class="nav-center">

    <!-- sidebar toggle -->
    <button
      class="btn-sidebar-toggle"
      on:click={() => {
        openSidebar('sidebar', true);
      }}>
      <i class="fas fa-bars" />
    </button>
    <a href="/" class="nav-logo">
      <img src="/assets/images/logo.svg" alt="logo" class="logo" />
    </a>

    <!-- cart button -->
    <CartButton />

  </div>
</nav>
