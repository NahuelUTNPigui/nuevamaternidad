<script>
    import opciones from "$lib/opciones";
    let {
        reanimacion = $bindable(""),
        fallece = $bindable(0),
        rciu = $bindable(""),
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
        <div class="form-control">
            <label class="label" for="fallece_sala_parto">
                <span class="label-text font-semibold"
                    >Fallece en Sala de Parto</span
                >
            </label>
            <select
                name="fallece_sala_parto"
                class="select select-bordered w-full"
                bind:value={fallece}
            >
                {#each opciones.FALLECE as fila}
                    <option value={fila.id}>{fila.nombre}</option>
                {/each}
            </select>
        </div>
    </div>
</div>

<!-- RCIU -->
<div class="form-control mt-4">
    <label class="label" for="rciu_tipo">
        <span class="label-text font-semibold">RCIU</span>
    </label>
    <div class="flex items-center gap-4">
        <input
            type="text"
            name="rciu_tipo"
            placeholder="Especificar tipo"
            class="input input-bordered flex-1"
            bind:value={rciu}
        />
    </div>
</div>
