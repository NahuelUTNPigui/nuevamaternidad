<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import Rangos from "../Formulario/Rangos.svelte";
        import opciones from "$lib/opciones";

        let {
                cambiarFiltro,
                protectorgastrico = $bindable(""),
                inhibidor = $bindable(""),
                probiotico = $bindable(""),
                eritromicina = $bindable(""),
                fentanilo = $bindable(""),
                morfina = $bindable(""),
                midozolam = $bindable(""),
                precedex = $bindable(""),
                metadona = $bindable(""),
                vecuronio = $bindable(""),
                prostaglandinas = $bindable(""),
                protectorgastricohasta = $bindable(""),
                inhibidorhasta = $bindable(""),
                probioticohasta = $bindable(""),
                eritromicinahasta = $bindable(""),
                fentanilohasta = $bindable(""),
                morfinahasta = $bindable(""),
                midozolamhasta = $bindable(""),
                precedexhasta = $bindable(""),
                metadonahasta = $bindable(""),
                vecuroniohasta = $bindable(""),
                prostaglandinashasta = $bindable(""),
        } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Protector Gástrico -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Protector Gástrico"
                        etiquetadesde="Protector Gástrico desde"
                        idetiquetahasta="Protector Gástricohasta"
                        etiquetahasta="Protector Gástrico hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={protectorgastrico}
                        bind:valuehasta={protectorgastricohasta}
                />
        </div>

        <!-- Inhibidor de la Bomba de Protones -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Inhibidor de la Bomba de Protones"
                        etiquetadesde="Inhibidor de la Bomba de Protones desde"
                        idetiquetahasta="Inhibidor de la Bomba de Protoneshasta"
                        etiquetahasta="Inhibidor de la Bomba de Protones hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={inhibidor}
                        bind:valuehasta={inhibidorhasta}
                />
        </div>

        <!-- Probiótico -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Probiótico"
                        etiquetadesde="Probiótico desde"
                        idetiquetahasta="Probióticohasta"
                        etiquetahasta="Probiótico hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={probiotico}
                        bind:valuehasta={probioticohasta}
                />
        </div>

        <!-- Eritromicina -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Eritromicina"
                        etiquetadesde="Eritromicina desde"
                        idetiquetahasta="Eritromicinhasta"
                        etiquetahasta="Eritromicina hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={eritromicina}
                        bind:valuehasta={eritromicinahasta}
                />
        </div>

        <!-- Fentanilo -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Fentanilo"
                        etiquetadesde="Fentanilo desde"
                        idetiquetahasta="Fentanilohasta"
                        etiquetahasta="Fentanilo hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={fentanilo}
                        bind:valuehasta={fentanilohasta}
                />
        </div>

        <!-- Morfina -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Morfina"
                        etiquetadesde="Morfina desde"
                        idetiquetahasta="Morfinhasta"
                        etiquetahasta="Morfina hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={morfina}
                        bind:valuehasta={morfinahasta}
                />
        </div>

        <!-- Midazolam -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Midazolam"
                        etiquetadesde="Midazolam desde"
                        idetiquetahasta="Midazolamhasta"
                        etiquetahasta="Midazolam hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={midozolam}
                        bind:valuehasta={midozolamhasta}
                />
        </div>

        <!-- Precedex (Dexmedetomidina) -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Precedex"
                        etiquetadesde="Precedex desde"
                        idetiquetahasta="Precedexhasta"
                        etiquetahasta="Precedex hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={precedex}
                        bind:valuehasta={precedexhasta}
                />
        </div>

        <!-- Metadona -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Metadona"
                        etiquetadesde="Metadona desde"
                        idetiquetahasta="Metadonahasta"
                        etiquetahasta="Metadona hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={metadona}
                        bind:valuehasta={metadonahasta}
                />
        </div>

        <!-- Vecuronio -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Vecuronio"
                        etiquetadesde="Vecuronio desde"
                        idetiquetahasta="Vecuroniohasta"
                        etiquetahasta="Vecuronio hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={vecuronio}
                        bind:valuehasta={vecuroniohasta}
                />
        </div>

        <!-- Prostaglandinas (PGE1) -->
        <div class="col-span-1 md:col-span-2">
                <Rangos
                        idetiqueta="Prostaglandinas"
                        etiquetadesde="Prostaglandinas desde"
                        idetiquetahasta="Prostaglandinashasta"
                        etiquetahasta="Prostaglandinas hasta"
                        escribirdesde={cambiarFiltro}
                        escribirhasta={cambiarFiltro}
                        bind:valuedesde={prostaglandinas}
                        bind:valuehasta={prostaglandinashasta}
                />
        </div>
        
</div>
