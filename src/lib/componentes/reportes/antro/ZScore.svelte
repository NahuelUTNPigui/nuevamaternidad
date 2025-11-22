<script>
    import InputSelect from "$lib/componentes/Formulario/InputSelect.svelte";
    import Rangos from "$lib/componentes/Formulario/Rangos.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        scorez_rn = $bindable(""),
        scorez_7 = $bindable(""),
        scorez_14 = $bindable(""),
        scorez_21 = $bindable(""),
        scorez_28 = $bindable(""),
        scorez_36 = $bindable(""),
        scorez_rnhasta = $bindable(""),
        scorez_7hasta = $bindable(""),
        scorez_14hasta = $bindable(""),
        scorez_21hasta = $bindable(""),
        scorez_28hasta = $bindable(""),
        scorez_36hasta = $bindable(""),
    }=$props()
</script>
<!-- Score Z -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Score Z</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Score Z RN -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fscorern"
                etiquetadesde="Score Z RN desde"
                idetiquetahasta="fscorernhasta"
                etiquetahasta="Score Z RN hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={scorez_rn}
                bind:valuehasta={scorez_rnhasta}
            />
        </div>
        
        <!-- Score Z 7 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fscore7"
                etiquetadesde="Score Z 7 días desde"
                idetiquetahasta="fscore7hasta"
                etiquetahasta="Score Z 7 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={scorez_7}
                bind:valuehasta={scorez_7hasta}
            />
        </div>
        
        <!-- Score Z 14 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fscore14"
                etiquetadesde="Score Z 14 días desde"
                idetiquetahasta="fscore14hasta"
                etiquetahasta="Score Z 14 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={scorez_14}
                bind:valuehasta={scorez_14hasta}
            />
        </div>
        
        <!-- Score Z 21 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fscore21"
                etiquetadesde="Score Z 21 días desde"
                idetiquetahasta="fscore21hasta"
                etiquetahasta="Score Z 21 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={scorez_21}
                bind:valuehasta={scorez_21hasta}
            />
        </div>
        
        <!-- Score Z 28 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fscore28"
                etiquetadesde="Score Z 28 días desde"
                idetiquetahasta="fscore28hasta"
                etiquetahasta="Score Z 28 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={scorez_28}
                bind:valuehasta={scorez_28hasta}
            />
        </div>
        
        <!-- Score Z 36 Semanas -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fscoresem"
                etiquetadesde="Score Z 36 semanas desde"
                idetiquetahasta="fscoresemhasta"
                etiquetahasta="Score Z 36 semanas hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={scorez_36}
                bind:valuehasta={scorez_36hasta}
            />
        </div>
    </div>
</div>