<script>
  import links from "../../constants/links";
  import globalStore from "../../stores/globalStore";
  import { fly, fade } from "svelte/transition";
  import LoginLink from "../LoginLink.svelte";

  let closeSidebar = globalStore.toggleItem;
</script>

<div class="sidebar-container" transition:fly={{ x: -1000 }}>
  <div class="sidebar" transition:fade={{ delay: 400 }}>
    <div class="sidebar-header">
      <button
        class="btn-close"
        on:click={() => {
          closeSidebar('sidebar', false);
        }}>
        <i class="fas fa-window-close" />
      </button>
    </div>
    <img
      src="/assets/images/logo.svg"
      alt="razors logo"
      class="logo sidebar-logo" />
    <ul class="sidebar-links">
      {#each links as sideLink}
        <li>
          <a
            href={sideLink.url}
            on:click={() => {
              closeSidebar('sidebar', false);
            }}>
            {sideLink.text}
          </a>
        </li>
      {/each}
      <li>
        <LoginLink />
      </li>
    </ul>
  </div>
</div>
