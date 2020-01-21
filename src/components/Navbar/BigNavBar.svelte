<script>
  import CartButton from "../Cart/CartButton.svelte";
  import links from "../../constants/links";
  import LoginLink from "../LoginLink.svelte";
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <!-- nav links -->
      <ul class="nav-links">
        {#each links as navlink}
          <li>
            <a href={navlink.url}>{navlink.text}</a>
          </li>
        {/each}
      </ul>
      <a href="/" class="nav-logo big-logo">
        <img src="/assets/images/logo.svg" class="logo" alt="razors logo" />
      </a>
      <div class="nav-aside">
        <LoginLink />
        <CartButton />
      </div>
    </div>
  </div>

</nav>
