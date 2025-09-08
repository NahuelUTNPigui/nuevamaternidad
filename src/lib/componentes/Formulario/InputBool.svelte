<script>
    import Modoedicion from "../bebe/Modoedicion.svelte";

    let {
        idetiqueta,
        etiqueta,
        modoedicion = $bindable(false),
        value = $bindable(false),
        getNombre = (v) => {
            return v ? "Sí" : "No";
        },
    } = $props();
</script>

<div class="form-control">
    <label class="label" for={idetiqueta}>
        <span class="label-text font-medium">{etiqueta}</span>
    </label>

    <!-- Vista (solo lectura) -->
    {#snippet childrenview()}
        <p class="bg-transparent font-medium m-1">
            {getNombre(value)}
        </p>
    {/snippet}

    <!-- Edición (select) -->
    {#snippet childrenedit()}
        <select
            id={idetiqueta}
            class="select select-bordered w-full font-medium"
            bind:value
        >
            <option value={false}>
                {"No"}
            </option>
            <option value={true}>
                {"Sí"}
            </option>
        </select>
    {/snippet}

    <!-- Control de modo: vista vs edición -->
    <Modoedicion bind:modoedicion {childrenview} {childrenedit} />
</div>
