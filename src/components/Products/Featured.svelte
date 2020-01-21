<script>
  import products, {featuredStore} from "../../stores/defaultProducts.js";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";

  export let title = "title";
  //$: featured = $products.filter(product => product.featured === true);
</script>

{#if $featuredStore.length === 0}
  <Loading />
{:else}
  <section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
      {#each $featuredStore as product (product.id)}
        <Product {product} />
      {:else}
        <Loading />
      {/each}
    </div>

  </section>
{/if}
