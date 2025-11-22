<script>
    import InputSelect from "$lib/componentes/Formulario/InputSelect.svelte";
    import Rangos from "$lib/componentes/Formulario/Rangos.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        talla_rn = $bindable(""),
        talla_7 = $bindable(""),
        talla_14 = $bindable(""),
        talla_21 = $bindable(""),
        talla_28 = $bindable(""),
        talla_36 = $bindable(""),
        talla_rnhasta = $bindable(""),
        talla_7hasta = $bindable(""),
        talla_14hasta = $bindable(""),
        talla_21hasta = $bindable(""),
        talla_28hasta = $bindable(""),
        talla_36hasta = $bindable(""),
    }=$props()
</script>
<!-- Talla -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Talla (cm)</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Talla RN -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="ftallarn"
                etiquetadesde="Talla RN desde"
                idetiquetahasta="ftallarnhasta"
                etiquetahasta="Talla RN hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={talla_rn}
                bind:valuehasta={talla_rnhasta}
            />
        </div>
        
        <!-- Talla 7 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="ftala7"
                etiquetadesde="Talla 7 días desde"
                idetiquetahasta="ftala7hasta"
                etiquetahasta="Talla 7 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={talla_7}
                bind:valuehasta={talla_7hasta}
            />
        </div>
        
        <!-- Talla 14 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="ftalla14"
                etiquetadesde="Talla 14 días desde"
                idetiquetahasta="ftalla14hasta"
                etiquetahasta="Talla 14 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={talla_14}
                bind:valuehasta={talla_14hasta}
            />
        </div>
        
        <!-- Talla 21 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="ftalla21"
                etiquetadesde="Talla 21 días desde"
                idetiquetahasta="ftalla21hasta"
                etiquetahasta="Talla 21 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={talla_21}
                bind:valuehasta={talla_21hasta}
            />
        </div>
        
        <!-- Talla 28 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="ftalla28"
                etiquetadesde="Talla 28 días desde"
                idetiquetahasta="ftalla28hasta"
                etiquetahasta="Talla 28 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={talla_28}
                bind:valuehasta={talla_28hasta}
            />
        </div>
        
        <!-- Talla 36 Semanas -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="ftallasem"
                etiquetadesde="Talla 36 semanas desde"
                idetiquetahasta="ftallasemhasta"
                etiquetahasta="Talla 36 semanas hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={talla_36}
                bind:valuehasta={talla_36hasta}
            />
        </div>
    </div>
</div>