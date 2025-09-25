<script>
    import opciones from "$lib/opciones";
    let {
        areas = $bindable([]),
        unidadesrows = $bindable([]),
        area = $bindable(""),
        unidad = $bindable(""),
        identificacion = $bindable(""),
        codigo = $bindable(""),
        nombrebebe = $bindable(""),
        dnibebe = $bindable(""),
        hcbebe = $bindable(""),
        fechanacimientobebe = $bindable(""),
        fechaingresobebe = $bindable(""),
        tipoingreso = $bindable(""),
        edadingreso = $bindable(""),
        sexo = $bindable(""),
        pesoingresobebe = $bindable(""),
        temperaturaingreso = $bindable(""),
        edad_gestacional=$bindable("")
    } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Columna 1 -->
    <div class="space-y-3">
        <div class="form-control">
            <fieldset class="fieldset">
                <legend class="fieldset-legend">Area</legend>
                <select class="select" bind:value={area}>
                    <option value="">Ninguna</option>
                    {#each areas as a}
                        <option value={a.id}>{a.nombre}</option>
                    {/each}
                </select>
            </fieldset>
        </div>
        <div class="form-control">
            <label class="label" for="identificacion">
                <span class="label-text font-semibold">Identificación</span>
            </label>
            <input
                type="text"
                name="identificacion"
                placeholder="ID único"
                class="input input-bordered w-full"
                bind:value={identificacion}
            />
        </div>

        <div class="form-control">
            <label class="label" for="dni_rn">
                <span class="label-text font-semibold">DNI RN</span>
            </label>
            <input
                type="text"
                name="dni_rn"
                placeholder="DNI del recién nacido"
                class="input input-bordered w-full"
                bind:value={dnibebe}
            />
        </div>

        <div class="form-control">
            <label class="label" for="nombre_rn">
                <span class="label-text font-semibold">Nombre RN</span>
            </label>
            <input
                type="text"
                name="nombre_rn"
                placeholder="Nombre completo"
                class="input input-bordered w-full"
                bind:value={nombrebebe}
            />
        </div>
    </div>

    <!-- Columna 2 -->

    <div class="space-y-3">
        <div class="form-control">
            <fieldset class="fieldset">
                <legend class="fieldset-legend">Unidad</legend>
                <select class="select" bind:value={unidad}>
                    <option value="">Ninguna</option>
                    {#each unidadesrows as a}
                        <option value={a.id}>{a.nombre}</option>
                    {/each}
                </select>
            </fieldset>
        </div>
        <div class="form-control">
            <label class="label" for="codigo">
                <span class="label-text font-semibold">Código</span>
            </label>
            <input
                type="text"
                name="codigo"
                placeholder="Código interno"
                class="input input-bordered w-full"
                bind:value={codigo}
            />
        </div>

        <div class="form-control">
            <label class="label" for="hc_rn">
                <span class="label-text font-semibold">N° HC RN</span>
            </label>
            <input
                type="text"
                name="hc_rn"
                placeholder="Número de historia clínica"
                class="input input-bordered w-full"
                bind:value={hcbebe}
            />
        </div>

        <div class="form-control">
            <label class="label" for="fecha_nacimiento">
                <span class="label-text font-semibold">Fecha Nacimiento</span>
            </label>
            <input
                type="date"
                name="fecha_nacimiento"
                class="input input-bordered w-full"
                bind:value={fechanacimientobebe}
            />
        </div>
    </div>
    <!-- Columna 1 -->
    <div class="space-y-3">
        <div class="form-control">
            <label class="label" for="fecha_ingreso">
                <span class="label-text font-semibold">Fecha Ingreso</span>
            </label>
            <input
                type="date"
                name="fecha_ingreso"
                class="input input-bordered w-full"
                bind:value={fechaingresobebe}
            />
        </div>

        <div class="form-control">
            <label class="label" for="edad_ingreso">
                <span class="label-text font-semibold">Edad Ingreso</span>
            </label>
            <input
                type="text"
                name="edad_ingreso"
                class="input input-bordered w-full"
                bind:value={edadingreso}
            />
        </div>

        <div class="form-control">
            <label class="label" for="peso_ingreso">
                <span class="label-text font-semibold">Peso Ingreso (g)</span>
            </label>
            <input
                type="number"
                name="peso_ingreso"
                placeholder="Gramos"
                min="0"
                class="input input-bordered w-full"
                bind:value={pesoingresobebe}
            />
        </div>
        <div class="form-control">
            <label class="label" for="temperatura_ingreso">
                <span class="label-text font-semibold"
                    >Edad gestacional </span
                >
            </label>
            <input
                type="text"
                name="edad_gestacional"
                
                class="input input-bordered w-full"
                bind:value={edad_gestacional}
            />
        </div>
    </div>

    <!-- Columna 2 -->
    <div class="space-y-3">
        <div class="form-control">
            <label class="label" for="tipo_ingreso">
                <span class="label-text font-semibold">Tipo Ingreso</span>
            </label>
            <select
                name="tipo_ingreso"
                class="select select-bordered w-full"
                bind:value={tipoingreso}
            >
                {#each opciones.INGRESOS as fila}
                    <option value={fila.id}>{fila.nombre}</option>
                {/each}
            </select>
        </div>

        <div class="form-control">
            <label class="label" for="sexo">
                <span class="label-text font-semibold">Sexo</span>
            </label>
            <select
                name="sexo"
                class="select select-bordered w-full"
                bind:value={sexo}
            >
                {#each opciones.SEXO as fila}
                    <option value={fila.id}>{fila.nombre}</option>
                {/each}
            </select>
        </div>
        <div class="form-control">
            <label class="label" for="edad_gestacional">
                <span class="label-text font-semibold"
                    >Temperatura Ingreso (°C)</span
                >
            </label>
            <input
                type="number"
                name="temperatura_ingreso"
                step="0.1"
                placeholder="Ej: 36.5"
                class="input input-bordered w-full"
                bind:value={temperaturaingreso}
            />
        </div>
        
        
    </div>
</div>
