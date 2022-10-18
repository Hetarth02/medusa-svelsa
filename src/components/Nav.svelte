<script>
    export let items;
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">SvelteKit</a>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <i class="text-xl bi bi-cart" />
                    <span class="badge badge-sm indicator-item">{items ?? 0}</span>
                </div>
            </button>
            <div class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div class="card-body">
                    <span class="font-bold text-lg">{items ?? 0} Items</span>
                    <div class="card-actions">
                        <a href="/cart" class="btn btn-primary btn-block">View cart</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="/" alt="Img" />
                </div>
            </button>
            <ul
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <a href="/" class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                </li>
                <li><a href="/">Settings</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
        </div>
    </div>
</div>
