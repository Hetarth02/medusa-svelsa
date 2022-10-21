<script>
    export let productData;
</script>

<a href="/products/{productData.id}" class="block">
    <div class="flex justify-center">
        {#if productData.created_at == new Date()}
            <strong class="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                New
            </strong>
        {/if}
    </div>

    <img
        alt={productData.title}
        src={productData.thumbnail}
        class="-mt-3 h-96 w-full object-cover"
    />
    <h3 class="m-4 text-lg">{productData.title}</h3>
</a>

<style>
    a {
        box-shadow: none;
        transition: 300ms ease;
    }

    a:hover {
        box-shadow: 5px 5px 0px 3px;
    }
</style>
