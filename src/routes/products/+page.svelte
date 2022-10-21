<script>
    import Product from "../../components/Product.svelte";
    import { products } from "../../store";

    export let data;

    if ($products.length == 0) {
        products.set(data)
    }
</script>

<section>
    <div class="mx-auto max-w-screen-xl px-4 py-8">
        <div>
            <span class="inline-block h-1 w-12 bg-red-700" />

            <h2 class="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
                Products
            </h2>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            {#each data.products as result}
                <Product productData={result} />
            {/each}
        </div>
    </div>
</section>
