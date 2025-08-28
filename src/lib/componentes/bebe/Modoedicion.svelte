<script>
    let {
        modoedicion = $bindable(false),
        childrenview,
        childrenedit,
    } = $props();
</script>

{#if !modoedicion}
    {@render childrenview()}
{:else}
    {@render childrenedit()}
{/if}
