<script>
    import { cart } from "../../../store";

    export let data;
    let productDetail = data;
    let selected = 0;

    function addToCart() {
        let vid = productDetail.variants[selected].id;

        const newCartVal = { ...$cart };

        if (newCartVal[productDetail.id]) {
            if (newCartVal[productDetail.id][vid]) {
                newCartVal[productDetail.id][vid]["quantity"] += 1;
            } else {
                newCartVal[productDetail.id][vid] = {
                    ...productDetail.variants[selected],
                    product: {
                        title: productDetail.title,
                        thumbnail: productDetail.thumbnail,
                    },
                    quantity: 1,
                };
            }
        } else {
            newCartVal[productDetail.id] = {
                [vid]: {
                    ...productDetail.variants[selected],
                    product: {
                        title: productDetail.title,
                        thumbnail: productDetail.thumbnail,
                    },
                    quantity: 1,
                },
            };
        }

        cart.set(newCartVal);
    }
</script>

<section>
    <div class="relative mx-auto max-w-screen-xl px-4 py-8">
        <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img
                    alt={productDetail.title}
                    src={productDetail.thumbnail}
                    class="aspect-square w-full rounded-xl object-cover"
                />

                <div class="grid grid-cols-2 gap-4 lg:mt-4">
                    {#each productDetail.images as image}
                        <img
                            alt="Product"
                            src={image.url}
                            class="aspect-square w-full rounded-xl object-cover"
                        />
                    {/each}
                </div>
            </div>

            <div class="sticky top-0">
                <div class="mt-8 flex justify-between">
                    <div class="max-w-[35ch]">
                        <h1 class="text-2xl font-bold">{productDetail.title}</h1>
                    </div>

                    <p class="text-lg font-bold">
                        ${#if productDetail.variants.length}
                            {productDetail.variants[selected].prices[1].amount}
                        {:else}
                            0
                        {/if}
                    </p>
                </div>

                <div class="group relative mt-4">
                    <div class="block">
                        <div class="prose max-w-none group-open:hidden">
                            <p>{productDetail.description}</p>
                        </div>
                    </div>
                </div>

                <div class="mt-8">
                    <div class="mt-4">
                        <legend class="mb-1 text-sm font-medium">Size / Color</legend>
                        ${#if productDetail.variants.length}
                            {productDetail.variants[selected].prices[1].amount}
                        {:else}
                            0
                        {/if}

                        <div class="flow-root mt-3">
                            <div class="-m-0.5 flex flex-wrap">
                                {#each productDetail.variants as variant, idx}
                                    <label for={variant.title} class="cursor-pointer p-1">
                                        <input
                                            type="radio"
                                            name="size"
                                            bind:group={selected}
                                            id={variant.title}
                                            class="peer sr-only"
                                            value={idx}
                                        />

                                        <span
                                            class="group inline-flex h-12 w-12 items-center justify-center text-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            {variant.title}
                                        </span>
                                    </label>
                                {/each}
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 flex">
                        <button
                            on:click={addToCart}
                            type="button"
                            class="block rounded bg-green-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-500"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
