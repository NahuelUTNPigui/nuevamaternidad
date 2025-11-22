<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import InputText from "../Formulario/InputText.svelte";
        import Rangos from "../Formulario/Rangos.svelte";
        import opciones from "$lib/opciones";
        let {
                cambiarFiltro,
                tempranoestado = $bindable(""),
                tempranogermen = $bindable(""),
                tempranoantibiotico = $bindable(""),
                tempranoatb = $bindable(""),
                tempranoatbhasta = $bindable(""),
                tardeestado = $bindable(""),
                tardegermen = $bindable(""),
                tardeantibiotico = $bindable(""),
                tardeatb = $bindable(""),
                tardeatbhasta = $bindable(""),
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
                <div class="hidden">
                        <InputText
                                idetiqueta="fantibioticotemprano"
                                etiqueta="Antibiotico"
                                modoedicion={true}
                                bind:value={tempranoantibiotico}
                                escribir={cambiarFiltro}
                        />
                </div>
                <!-- Duración como rango -->
                <div class="col-span-1 md:col-span-2">
                        <Rangos
                                idetiqueta="fantibioticotempano"
                                etiquetadesde="Duración desde"
                                idetiquetahasta="fantibioticotempano hasta"
                                etiquetahasta="Duración hasta"
                                escribirdesde={cambiarFiltro}
                                escribirhasta={cambiarFiltro}
                                bind:valuedesde={tempranoatb}
                                bind:valuehasta={tempranoatbhasta}
                        />
                </div>
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
                <div class="hidden">
                        <InputText
                                idetiqueta="fantibioticotarde"
                                etiqueta="Antibiotico"
                                modoedicion={true}
                                bind:value={tardeantibiotico}
                                escribir={cambiarFiltro}
                        />
                </div>
                <!-- Duración como rango -->
                <div class="col-span-1 md:col-span-2">
                        <Rangos
                                idetiqueta="fantibioticotarde"
                                etiquetadesde="Duración desde"
                                idetiquetahasta="fantibioticotardehasta"
                                etiquetahasta="Duración hasta"
                                escribirdesde={cambiarFiltro}
                                escribirhasta={cambiarFiltro}
                                bind:valuedesde={tardeatb}
                                bind:valuehasta={tardeatbhasta}
                        />
                </div>
        </div>
</div>
