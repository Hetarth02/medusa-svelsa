<script>
    import Medusa from "@medusajs/medusa-js"
    import { cart } from "../../store";

    let total;

    let baseUrl = "http://localhost:9000";

    const medusa = new Medusa({ baseUrl: baseUrl, maxRetries: 3 })

    cart.subscribe((cartVal) => {
        let tTotal = 0

        for (const pid in cartVal) {
            for (const vid in cartVal[pid]) {
                tTotal += cartVal[pid][vid]['prices'][1]['amount'] * cartVal[pid][vid]['quantity']
            }
        }

        total = tTotal
    })

    const usRegionId = "reg_01GFRDGDD7DBP6JNVDG58RMNFW"

    async function checkout() {
        const cartResponse = await medusa.carts.create({
            region_id: usRegionId
        })

        for (const pid in $cart) {
            for (const vid in $cart[pid]) {
                await medusa.carts.lineItems.create(cartResponse.cart.id, {
                    variant_id: vid,
                    quantity: $cart[pid][vid]['quantity']
                })
            }
        }

        const customerResponse = await medusa.customers.create({
            first_name: 'Alec',
            last_name: 'Reynolds',
            email: 'user@example.com',
            password: 'supersecret'
        })

        await medusa.carts.update(cartResponse.cart.id, {
            customer_id: customerResponse.customer.id,
            shipping_address: {
                first_name: "Arno",
                last_name: "Willms",
                address_1: "14433 Kemmer Court",
                address_2: "Suite 369",
                city: "South Geoffreyview",
                country_code: "us",
                province: "Kentucky",
                postal_code: "72093",
                phone: "16128234334802"
            },
        })

        medusa.carts.createPaymentSessions(cartResponse.cart.id)
            .then(({ cart }) => {
                console.log(cart.payment_sessions)

                medusa.carts.complete(cart.id)
                    .then(({ type, data }) => {
                        console.log(type, data);
                    })
            })
    }
</script>

<section>
    <h1 class="sr-only">Checkout</h1>

    <div class="relative mx-auto max-w-screen-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="bg-gray-50 py-12 md:py-24">
                <div class="mx-auto max-w-lg px-4 lg:px-8">
                    <div class="flex items-center">
                        <span class="h-10 w-10 rounded-full bg-blue-900" />

                        <h2 class="ml-4 font-medium">BambooYou</h2>
                    </div>

                    <div class="mt-8">
                        <p class="text-2xl font-medium tracking-tight">${total}</p>
                        <p class="mt-1 text-sm text-gray-500">For the purchase of</p>
                    </div>

                    <div class="mt-12">
                        <div class="flow-root">
                            <ul class="-my-4 divide-y divide-gray-200">
                                {#each Object.values($cart) as product}
                                    {#each Object.values(product) as variant}
                                        <li class="flex items-center justify-between py-4">
                                            <div class="flex items-start">
                                                <img
                                                    alt="Trainer"
                                                    src="{variant.product.thumbnail}"
                                                    class="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                                                />

                                                <div class="ml-4">
                                                    <p class="text-sm">{variant.product.title}</p>

                                                    <dl class="mt-1 space-y-1 text-xs text-gray-500">
                                                        <div>
                                                            <dt class="inline">Size / Color:</dt>
                                                            <dd class="inline">{variant.title}</dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>

                                            <div>
                                                <p class="text-sm">
                                                    ${variant.prices[1].amount * variant.quantity}
                                                    <small class="text-gray-500">x{variant.quantity}</small>
                                                </p>
                                            </div>
                                        </li>
                                    {/each}
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white py-12 md:py-24">
                <div class="mx-auto max-w-lg px-4 lg:px-8">
                    <form class="grid grid-cols-6 gap-4">
                        <div class="col-span-3">
                            <label class="mb-1 block text-sm text-gray-600" for="first_name">
                                First Name
                            </label>

                            <input
                                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                type="text"
                                id="first_name"
                            />
                        </div>

                        <div class="col-span-3">
                            <label class="mb-1 block text-sm text-gray-600" for="last_name">
                                Last Name
                            </label>

                            <input
                                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                type="text"
                                id="last_name"
                            />
                        </div>

                        <div class="col-span-6">
                            <label class="mb-1 block text-sm text-gray-600" for="email">
                                Email
                            </label>

                            <input
                                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                type="email"
                                id="email"
                            />
                        </div>

                        <div class="col-span-6">
                            <label class="mb-1 block text-sm text-gray-600" for="phone">
                                Phone
                            </label>

                            <input
                                class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                type="tel"
                                id="phone"
                            />
                        </div>

                        <fieldset class="col-span-6">
                            <legend class="mb-1 block text-sm text-gray-600">
                                Billing Address
                            </legend>

                            <div class="-space-y-px rounded-lg bg-white shadow-sm">
                                <div>
                                    <label class="sr-only" for="country">Country</label>

                                    <select
                                        class="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                                        id="country"
                                        name="country"
                                        autocomplete="country-name"
                                    >
                                        <option>England</option>
                                        <option>Wales</option>
                                        <option>Scotland</option>
                                        <option>France</option>
                                        <option>Belgium</option>
                                        <option>Japan</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="sr-only" for="postal-code"> ZIP/Post Code </label>

                                    <input
                                        class="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autocomplete="postal-code"
                                        placeholder="ZIP/Post Code"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        <div class="col-span-6">
                            <button
                                class="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                                type="button"
                                on:click={checkout}
                            >
                                Pay Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
