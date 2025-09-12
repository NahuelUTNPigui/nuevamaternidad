<script>
    import InputSelect from "../Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let {
hiv = $bindable(""),
convulsiones = $bindable(""),
ehi = $bindable(""),
hipo = $bindable(""),
    }=$props()
</script>


<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <!-- HIV - Hemorragia Intraventricular -->
    <InputSelect
        idetiqueta="HIV - Hemorragia Intraventricular"
        etiqueta="HIV "
        modoedicion={true}
        bind:value={hiv}
        lista={opciones.HIV}
    />
    <!-- Convulsiones -->
    <InputSelect
        idetiqueta="Convulsiones"
        etiqueta="Convulsiones"
        modoedicion={true}
        bind:value={convulsiones}
        lista={opciones.CONVULSIONES}
    />
<!-- EHI - Encefalopatía Hipóxico-Isquémica -->
    <InputSelect
        idetiqueta="EHI - Encefalopatía Hipóxico-Isquémica"
        etiqueta="EHI"
        modoedicion={true}
        bind:value={ehi}
        lista={opciones.EHI}
    />
    <!-- Hipotermia -->
    <InputSelect
        idetiqueta="Hipotermia"
        etiqueta="Hipotermia"
        modoedicion={true}
        bind:value={hipo}
        lista={opciones.HIPOTERMIA}
    />
</div>
