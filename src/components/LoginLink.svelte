<script>
  import user from "../stores/user";
  import globalStore from "../stores/globalStore";
</script>

{#if $user.jwt}
  <a
    href="/"
    class="logout-btn"
    on:click={() => {
      globalStore.toggleItem('sidebar', false);
    }}>
    logout
  </a>
{:else}
  <a
    href="/Login"
    on:click={() => {
      globalStore.toggleItem('sidebar', false);
    }}>
    login
  </a>
{/if}
