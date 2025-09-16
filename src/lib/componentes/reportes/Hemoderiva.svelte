<script>
    import InputSelect from "../Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        tgr = $bindable(""),
        plasma = $bindable(""),
        inmunoglobina = $bindable(""),
        transfusion = $bindable(""),
    } = $props();
</script>

<!-- Hemoderivados -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Hemoderivados</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- TGR (Concentrado de Glóbulos Rojos) -->
        <InputSelect
            idetiqueta="TGR"
            etiqueta="TGR"
            modoedicion={true}
            bind:value={tgr}
            lista={opciones.TGR}
            cambiar={cambiarFiltro}
        />
        <!-- Plasma -->
        <InputSelect
            idetiqueta="Plasma"
            etiqueta="Plasma"
            modoedicion={true}
            bind:value={plasma}
            lista={opciones.PLASMA}
            cambiar={cambiarFiltro}
        />
        <!-- Inmunoglobulina (Gamma) -->
        <InputSelect
            idetiqueta="Inmunoglobulina (Gamma)"
            etiqueta="Inmunoglobulina (Gamma)"
            modoedicion={true}
            bind:value={inmunoglobina}
            lista={opciones.GAMMAGLOBULINA}
            cambiar={cambiarFiltro}
        />
        <!-- Exanguinotransfusión -->
        <InputSelect
            idetiqueta="Exanguinotransfusión"
            etiqueta="Exanguinotransfusión"
            modoedicion={true}
            bind:value={tgr}
            lista={opciones.SINO}
            cambiar={cambiarFiltro}
        />
    </div>
</div>
