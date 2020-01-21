<script context="module">
  export function preload(page) {
    return { productId: page.params.id };
  }
</script>

<script>
  import { onDestroy, onMount } from "svelte";
  import products from "../../stores/defaultProducts.js";
  import Loading from "../../components/Loading.svelte";
  import globalStore from "../../stores/globalStore";
  import { addToCart } from "../../stores/cart";
  export let productId;
  let product;

  $: console.log(`productId: ${productId}`);
  onMount(() => {
    console.log(`onMount: ${productId}`);
    product = $products.find(item => item.id === parseInt(productId));
  });
</script>

<svelte:head>

  <title>{!product ? 'single product' : product.title}</title>

</svelte:head>

{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <a href="/Products" class="btn btn-primary">Back to Products</a>

    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            addToCart(product);
            globalStore.toggleItem('cart', true);
          }}>
          add to cart
        </button>
      </article>

    </div>
  </section>
{/if}
}
