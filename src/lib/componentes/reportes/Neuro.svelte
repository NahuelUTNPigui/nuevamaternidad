<script>
    import InputSelect from "../Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        hiv = $bindable(""),
        convulsiones = $bindable(""),
        ehi = $bindable(""),
        hipo = $bindable(""),
    } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <!-- HIV - Hemorragia Intraventricular -->
    <InputSelect
        idetiqueta="HIV - Hemorragia Intraventricular"
        etiqueta="HIV "
        modoedicion={true}
        bind:value={hiv}
        lista={opciones.HIV}
        cambiar = {cambiarFiltro}
    />
    <!-- Convulsiones -->
    <InputSelect
        idetiqueta="Convulsiones"
        etiqueta="Convulsiones"
        modoedicion={true}
        bind:value={convulsiones}
        lista={opciones.CONVULSIONES}
        cambiar = {cambiarFiltro}
    />
    <!-- EHI - Encefalopatía Hipóxico-Isquémica -->
    <InputSelect
        idetiqueta="EHI - Encefalopatía Hipóxico-Isquémica"
        etiqueta="EHI"
        modoedicion={true}
        bind:value={ehi}
        lista={opciones.EHI}
        cambiar = {cambiarFiltro}
    />
    <!-- Hipotermia -->
    <InputSelect
        idetiqueta="Hipotermia"
        etiqueta="Hipotermia"
        modoedicion={true}
        bind:value={hipo}
        lista={opciones.HIPOTERMIA}
        cambiar = {cambiarFiltro}
    />
</div>
