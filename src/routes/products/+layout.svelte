<script>
    import Nav from "../../components/Nav.svelte";
    export let theme;
</script>

<div data-theme={theme ?? "light"}>
    <Nav bind:new_theme={theme} />

    <slot />
</div>
