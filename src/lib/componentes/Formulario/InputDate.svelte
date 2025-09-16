<script>
    import Modoedicion from "../bebe/Modoedicion.svelte";
    let {
        idetiqueta,
        etiqueta,
        modoedicion = $bindable(false),
        value = $bindable(""),
        cambiar=()=>{},
        escribir=()=>{},
    } = $props();
</script>

<div class="form-control">
    <label class="label" for={idetiqueta}>
        <span class="label-text font-medium">{etiqueta}</span>
    </label>
    {#snippet childrenview()}
        <p class="bg-transparent font-medium m-1">
            {new Date(value).toLocaleDateString()}
        </p>
    {/snippet}
    {#snippet childrenedit()}
        <input
            type="date"
            id={idetiqueta}
            class="input input-bordered w-full"
            bind:value
            onchange={cambiar}
            oninput={escribir}
        />
    {/snippet}
    <Modoedicion bind:modoedicion {childrenview} {childrenedit} />
</div>
