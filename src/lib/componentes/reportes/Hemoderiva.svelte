<script>
    import InputSelect from "../Formulario/InputSelect.svelte";
    import Rangos from "../Formulario/Rangos.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        tgr = $bindable(""),
        plasma = $bindable(""),
        plaqueta = $bindable(""),
        inmunoglobina = $bindable(""),
        tgrhasta = $bindable(""),
        plasmahasta = $bindable(""),
        plaquetahasta = $bindable(""),
        inmunoglobinahasta = $bindable(""),
        transfusion = $bindable(""),
    } = $props();
</script>

<!-- Hemoderivados -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Hemoderivados</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- TGR (Concentrado de Glóbulos Rojos) -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="TGR"
                etiquetadesde="TGR desde"
                idetiquetahasta="TGRhasta"
                etiquetahasta="TGR hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={tgr}
                bind:valuehasta={tgrhasta}
            />
        </div>

        <!-- Plasma -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="Plasma"
                etiquetadesde="Plasma desde"
                idetiquetahasta="Plasmahasta"
                etiquetahasta="Plasma hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={plasma}
                bind:valuehasta={plasmahasta}
            />
        </div>

        <!-- Plaqueta -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="Plaqueta"
                etiquetadesde="Plaqueta desde"
                idetiquetahasta="Plaquetahasta"
                etiquetahasta="Plaqueta hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={plaqueta}
                bind:valuehasta={plaquetahasta}
            />
        </div>

        <!-- Gamma -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="Gamma"
                etiquetadesde="Gamma desde"
                idetiquetahasta="Gammahasta"
                etiquetahasta="Gamma hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={inmunoglobina}
                bind:valuehasta={inmunoglobinahasta}
            />
        </div>
        
       
        <!-- Exanguinotransfusión -->
        <InputSelect
            idetiqueta="Exanguinotransfusión"
            etiqueta="Exanguino Transfusión"
            modoedicion={true}
            bind:value={transfusion}
            lista={opciones.SINO}
            cambiar={cambiarFiltro}
        />
    </div>
</div>
