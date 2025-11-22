<script>
    import InputSelect from "$lib/componentes/Formulario/InputSelect.svelte";
    import Rangos from "$lib/componentes/Formulario/Rangos.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        cefalico_rn = $bindable(""),
        cefalico_7 = $bindable(""),
        cefalico_14 = $bindable(""),
        cefalico_21 = $bindable(""),
        cefalico_28 = $bindable(""),
        cefalico_36 = $bindable(""),
        cefalico_rnhasta = $bindable(""),
        cefalico_7hasta = $bindable(""),
        cefalico_14hasta = $bindable(""),
        cefalico_21hasta = $bindable(""),
        cefalico_28hasta = $bindable(""),
        cefalico_36hasta = $bindable(""),
    }=$props()
</script>
<!-- Perímetro Cefálico (PC) -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Perímetro Cefálico (cm)</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">

        <!-- Perímetro RN -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fperrn"
                etiquetadesde="Perímetro RN desde"
                idetiquetahasta="fperrnhasta"
                etiquetahasta="Perímetro RN hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={cefalico_rn}
                bind:valuehasta={cefalico_rnhasta}
            />
        </div>
        
        <!-- Perímetro 7 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpero7"
                etiquetadesde="Perímetro 7 días desde"
                idetiquetahasta="fpero7hasta"
                etiquetahasta="Perímetro 7 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={cefalico_7}
                bind:valuehasta={cefalico_7hasta}
            />
        </div>
        
        <!-- Perímetro 14 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpero14"
                etiquetadesde="Perímetro 14 días desde"
                idetiquetahasta="fpero14hasta"
                etiquetahasta="Perímetro 14 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={cefalico_14}
                bind:valuehasta={cefalico_14hasta}
            />
        </div>
        
        <!-- Perímetro 21 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpero21"
                etiquetadesde="Perímetro 21 días desde"
                idetiquetahasta="fpero21hasta"
                etiquetahasta="Perímetro 21 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={cefalico_21}
                bind:valuehasta={cefalico_21hasta}
            />
        </div>
        
        <!-- Perímetro 28 Días -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fpero28"
                etiquetadesde="Perímetro 28 días desde"
                idetiquetahasta="fpero28hasta"
                etiquetahasta="Perímetro 28 días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={cefalico_28}
                bind:valuehasta={cefalico_28hasta}
            />
        </div>
        
        <!-- Perímetro 36 Semanas -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fperosem"
                etiquetadesde="Perímetro 36 semanas desde"
                idetiquetahasta="fperosemhasta"
                etiquetahasta="Perímetro 36 semanas hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={cefalico_36}
                bind:valuehasta={cefalico_36hasta}
            />
        </div>
    </div>
</div>