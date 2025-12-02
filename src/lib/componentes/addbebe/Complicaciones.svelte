<script>
    import opciones from "$lib/opciones";
    import InputSelect from "../Formulario/InputSelect.svelte";
    let {
        reanimacion = $bindable(""),
        fallece = $bindable(0),
        rciu = $bindable(""),
        fechacomplicacion = $bindable(""),
    } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Columna 1 -->
    <div class="space-y-3">
        <div class="form-control">
            <label class="label" for="reanimacion">
                <span class="label-text font-semibold"
                    >Necesitó Reanimación</span
                >
            </label>
            <select
                name="reanimacion"
                class="select select-bordered w-full"
                bind:value={reanimacion}
            >
                {#each opciones.REANIMACION as fila}
                    <option value={fila.id}>{fila.nombre}</option>
                {/each}
            </select>
        </div>
    </div>

    <!-- Columna 2 -->
    <div class="space-y-3">
        <InputSelect
            idetiqueta="fallece"
            ,
            etiqueta="Fallece parto"
            modoedicion={true}
            bind:value={fallece}
            lista={opciones.FALLECE}
        />
    </div>
    <div class="space-y-3">
        <label class="label" for="fecha_nacimiento">
            <span class="label-text font-semibold">Fecha óbito</span>
        </label>
        <input
            type="date"
            name="fecha_nacimiento"
            class="input input-bordered w-full"
            bind:value={fechacomplicacion}
        />
    </div>
</div>

<!-- RCIU -->
<div class="form-control mt-4">
    <InputSelect
        idetiqueta="rciutipo"
        ,
        etiqueta="RCIU"
        modoedicion={true}
        bind:value={rciu}
        lista={opciones.RCIU}
    />
</div>
