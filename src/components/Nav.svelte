<script>
    import { cart } from "../store";

    let cartCount = 0;

    cart.subscribe((cartVal) => {
        let tCount = 0;

        for (const pid in cartVal) {
            for (const vid in cartVal[pid]) {
                tCount += cartVal[pid][vid]["quantity"];
            }
        }

        cartCount = tCount;
    });
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Svelsa</a>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <i class="text-xl bi bi-cart" />
                    <span class="badge badge-sm indicator-item">{cartCount}</span>
                </div>
            </button>
            <div class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div class="card-body">
                    <span class="font-bold text-lg">{cartCount} Items</span>
                    <div class="card-actions">
                        {#if cartCount > 0}
                            <a href="/cart" class="btn btn-primary btn-block">View cart</a>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
        <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="https://avatars.dicebear.com/api/micah/1.svg" alt="Img" />
                </div>
            </button>
        </div>
    </div>
</div>
