<script>
//   import { onMount, onDestroy } from "svelte";
  import products from "../../stores/defaultProducts.js";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";

  export let title = "title";

  //getting the store object vs just the data with $products
  // let localProducts = [];
  //   let unsubscribe;

  //   onMount(() => {
  //     unsubscribe = products.subscribe(data => {
  //       localProducts = data;
  //       console.log(data);
  //     });
  //   });

  //   onDestroy(() => {
  //     unsubscribe();
  //   });
  
</script>

<section class="section">
  <h2 class="section-title">{title}</h2>
  <div class="products-center">
    {#each $products as product (product.id)}
      <Product {product} />
    {:else}
      <Loading />
    {/each}
  </div>

</section>
