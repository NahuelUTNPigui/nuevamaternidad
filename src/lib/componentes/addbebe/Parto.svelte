<script>
    import opciones from "$lib/opciones";
    let {
        tipo_parto = $bindable(""),
        rem = $bindable(""),
        parto_domicilio = $bindable(""),
        liquido_meconial = $bindable(""),
        apgar_1 = $bindable(""),
        apgar_5 = $bindable(""),
        apgar_10 = $bindable(""),
    } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Columna 1 -->
    <div class="space-y-3">
        <div class="form-control">
            <label class="label" for="tipo_parto">
                <span class="label-text font-semibold">Tipo de Parto</span>
            </label>
            <select
                name="tipo_parto"
                class="select select-bordered w-full"
                bind:value={tipo_parto}
            >
                {#each opciones.TIPOPARTO as fila}
                    <option value={fila.id}>{fila.nombre}</option>
                {/each}
            </select>
        </div>

        <div class="form-control">
            <label class="label" for="parto_domiciliario">
                <span class="label-text font-semibold">Parto Domiciliario</span>
            </label>
            <select
                name="parto_domiciliario"
                class="select select-bordered w-full"
                bind:value={parto_domicilio}
            >
                {#each opciones.DOMICLIARIO as fila}
                    <option value={fila.id}>{fila.nombre}</option>
                {/each}
            </select>
        </div>
    </div>

    <!-- Columna 2 -->
    <div class="space-y-3">
        <div class="form-control">
            <label class="label" for="rem">
                <span class="label-text font-semibold">REM</span>
            </label>
            <select
                name="rem"
                class="select select-bordered w-full"
                bind:value={rem}
            >
                {#each opciones.REM as fila}
                    <option value={fila.id}>{fila.nombre}</option>
                {/each}
            </select>
        </div>

        <div class="form-control">
            <label class="label" for="liquido_meconial">
                <span class="label-text font-semibold">Líquido Meconial</span>
            </label>
            <select
                name="liquido_meconial"
                class="select select-bordered w-full"
                bind:value={liquido_meconial}
            >
                {#each opciones.LIQUIDO as fila}
                    <option value={fila.id}>{fila.nombre}</option>
                {/each}
            </select>
        </div>
    </div>
</div>

<!-- APGAR -->
<div class="form-control mt-4">
    <label class="label" for="nada">
        <span class="label-text font-semibold">APGAR</span>
    </label>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
            <label class="label" for="apgar_1min">
                <span class="label-text">1 min</span>
            </label>
            <input
                type="number"
                name="apgar_1min"
                min="0"
                max="10"
                class="input input-bordered w-full"
                bind:value={apgar_1}
            />
        </div>
        <div>
            <label class="label" for="apgar_5min">
                <span class="label-text">5 min</span>
            </label>
            <input
                type="number"
                name="apgar_5min"
                min="0"
                max="10"
                class="input input-bordered w-full"
                bind:value={apgar_5}
            />
        </div>
        <div>
            <label class="label" for="apgar_10min">
                <span class="label-text">10 min</span>
            </label>
            <input
                type="number"
                name="apgar_10min"
                bind:value={apgar_10}
                class="input input-bordered w-full"
            />
        </div>
    </div>
</div>
