<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import InputText from "../Formulario/InputText.svelte";
        import opciones from "$lib/opciones";
        let {
                cambiarFiltro,
                tempranoestado = $bindable(""),
                tempranogermen = $bindable(""),
                tempranoantibiotico = $bindable(""),
                tempranoatb = $bindable(""),
                tardeestado = $bindable(""),
                tardegermen = $bindable(""),
                tardeantibiotico = $bindable(""),
                tardeatb = $bindable(""),
        } = $props();
</script>

<!-- Sepsis Temprana -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Sepsis Temprana (≤72 h)
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputSelect
                        idetiqueta="festadotemprano"
                        etiqueta="Estado"
                        modoedicion={true}
                        bind:value={tempranoestado}
                        lista={opciones.ESTADO_INFECCION}
                        cambiar={cambiarFiltro}
                />
                <InputText
                        idetiqueta="fgermentemprano"
                        etiqueta="Germen"
                        modoedicion={true}
                        bind:value={tempranogermen}
                        escribir={cambiarFiltro}
                />
                <InputText
                        idetiqueta="fantibioticotemprano"
                        etiqueta="Antibiotico"
                        modoedicion={true}
                        bind:value={tempranoantibiotico}
                        escribir={cambiarFiltro}
                />
                <InputSelect
                        idetiqueta="fantibioticotempano"
                        etiqueta="Duracion "
                        modoedicion={true}
                        bind:value={tempranoantibiotico}
                        lista={opciones.DURACION_TEMPRANA}
                        cambiar={cambiarFiltro}
                />
        </div>
</div>

<!-- Sepsis Tardía -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Sepsis Tardía (>72 h)
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputSelect
                        idetiqueta="festadotardio"
                        etiqueta="Estado"
                        modoedicion={true}
                        bind:value={tardeestado}
                        lista={opciones.ESTADO_INFECCION}
                        cambiar={cambiarFiltro}
                />
                <InputText
                        idetiqueta="fgermentardio"
                        etiqueta="Germen"
                        modoedicion={true}
                        bind:value={tardegermen}
                        escribir={cambiarFiltro}
                />
                <InputText
                        idetiqueta="fantibioticotarde"
                        etiqueta="Antibiotico"
                        modoedicion={true}
                        bind:value={tardeantibiotico}
                        escribir={cambiarFiltro}
                />
                <InputSelect
                        idetiqueta="fantibioticotarde"
                        etiqueta="Duracion "
                        modoedicion={true}
                        bind:value={tardeantibiotico}
                        lista={opciones.DURACION_TARDIA}
                        cambiar={cambiarFiltro}
                />
        </div>
</div>
