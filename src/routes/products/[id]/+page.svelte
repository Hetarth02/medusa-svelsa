<script>
    let selected;
    export let data;
    let productDetail = data;
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

                    <p class="text-lg font-bold">${selected ?? 0}</p>
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
                        {selected}
                        <div class="flow-root">
                            <div class="-m-0.5 flex flex-wrap">
                                {#each productDetail.variants as variant}
                                    <label for={variant.title} class="cursor-pointer p-0.5">
                                        <input
                                            type="radio"
                                            name="size"
                                            bind:group={selected}
                                            id={variant.title}
                                            class="peer sr-only"
                                            value={variant.prices[1].amount}
                                        />

                                        <span
                                            class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
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
                            type="button"
                            class="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
