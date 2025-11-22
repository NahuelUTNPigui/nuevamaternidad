<script>
    import InputSelect from "$lib/componentes/Formulario/InputSelect.svelte";
    import Rangos from "$lib/componentes/Formulario/Rangos.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        peso_actual=$bindable(""),
        peso_rn = $bindable(""),
        peso_7 = $bindable(""),
        peso_14 = $bindable(""),
        peso_21 = $bindable(""),
        peso_28 = $bindable(""),
        peso_36 = $bindable(""),
        peso_actualhasta=$bindable(""),
        peso_rnhasta = $bindable(""),
        peso_7hasta = $bindable(""),
        peso_14hasta = $bindable(""),
        peso_21hasta = $bindable(""),
        peso_28hasta = $bindable(""),
        peso_36hasta = $bindable(""),
    }= $props()
</script>
<!-- Peso -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Peso (gramos)</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpesoactual"
                etiquetadesde="Peso actual desde"
                idetiquetahasta="fpesoactualhasta"
                etiquetahasta="Peso actual hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={peso_actual}
                bind:valuehasta={peso_actualhasta}
            />
        </div>
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpesorn"
                etiquetadesde="Peso RN desde"
                idetiquetahasta="fpesornhasta"
                etiquetahasta="Peso RN hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={peso_rn}
                bind:valuehasta={peso_rnhasta}
            />
        </div>
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpeso7"
                etiquetadesde="Peso 7 días desde"
                idetiquetahasta="fpeso7hasta"
                etiquetahasta="Peso 7 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={peso_7}
                bind:valuehasta={peso_7hasta}
            />
        </div>
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpeso14"
                etiquetadesde="Peso 14 días desde"
                idetiquetahasta="fpeso14hasta"
                etiquetahasta="Peso 14 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={peso_14}
                bind:valuehasta={peso_14hasta}
            />
        </div>
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpeso21"
                etiquetadesde="Peso 21 días desde"
                idetiquetahasta="fpeso21hasta"
                etiquetahasta="Peso 21 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={peso_21}
                bind:valuehasta={peso_21hasta}
            />
        </div>
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpeso28"
                etiquetadesde="Peso 28 días desde"
                idetiquetahasta="fpeso28hasta"
                etiquetahasta="Peso 28 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={peso_28}
                bind:valuehasta={peso_28hasta}
            />
        </div>
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpesosem"
                etiquetadesde="Peso 36 semanas desde"
                idetiquetahasta="fpesosemhasta"
                etiquetahasta="Peso 36 semanas hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={peso_36}
                bind:valuehasta={peso_36hasta}
            />
        </div>


    </div>
</div>