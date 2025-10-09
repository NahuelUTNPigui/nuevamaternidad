<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import opciones from "$lib/opciones";
        import InputText from "../Formulario/InputText.svelte";
        import InputOpcionalText from "../Formulario/InputOpcionalText.svelte";
        let {
                cambiarFiltro,
                emh = $bindable(""),
                ndosissurfactante = $bindable(""),
                salam = $bindable(""),
                apena = $bindable(""),
                neumotorax = $bindable(""),
                taquipnea = $bindable(""),
                hipertension = $bindable(""),
                interstecial = $bindable(""),
                dbp = $bindable(""),
                oxigeno = $bindable(""),
                surfactante = $bindable(""),
                arm = $bindable(""),
                intubado = $bindable(""),
                vafo = $bindable(""),
                cpap = $bindable(""),
                oaf = $bindable(""),
                cbf = $bindable(""),
                cafeina = $bindable(""),
                aminofilina = $bindable(""),
                corticoideinhalado = $bindable(""),
                corticoidepostnatal = $bindable(""),
                oxidonitrico = $bindable(""),
        } = $props();
</script>

<!-- Diagnósticos Respiratorios -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Diagnósticos Respiratorios
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- EMH -->
                <InputSelect
                        idetiqueta="femh"
                        etiqueta="EMH"
                        modoedicion={true}
                        bind:value={emh}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />

                <!-- SALAM -->
                <InputSelect
                        idetiqueta="fsalam"
                        etiqueta="SALAM"
                        modoedicion={true}
                        bind:value={salam}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Número de dosis de surfactante (condicional) -->
                <!-- Apneas -->
                <InputSelect
                        idetiqueta="fapena"
                        etiqueta="Apnea"
                        modoedicion={true}
                        bind:value={apena}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Neumotórax -->
                <InputSelect
                        idetiqueta="fneumo"
                        etiqueta="Neumotórax"
                        modoedicion={true}
                        bind:value={neumotorax}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Taquipnea Transitoria -->
                <InputSelect
                        idetiqueta="Taquipnea"
                        etiqueta="Taquipnea Transitoria"
                        modoedicion={true}
                        bind:value={taquipnea}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Hipertensión Pulmonar -->
                <InputSelect
                        idetiqueta="Hipertensión"
                        etiqueta="Hipertensión Pulmonar"
                        modoedicion={true}
                        bind:value={hipertension}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Enfermedad Intersticial -->
                <InputSelect
                        idetiqueta="Intersticial"
                        etiqueta="Enfermedad Intersticial"
                        modoedicion={true}
                        bind:value={interstecial}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
        </div>

        <h3 class="font-medium mb-3 text-base-content">
                Evaluación a las 36 semanas
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- DBP -->
                <InputSelect
                        idetiqueta="DBP"
                        etiqueta="DBP"
                        modoedicion={true}
                        bind:value={dbp}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- O2 a las 36 semanas -->
                <InputSelect
                        idetiqueta="fo2"
                        etiqueta="O2 a las 36 semanas"
                        modoedicion={true}
                        bind:value={oxigeno}
                        lista={opciones.O2_36SEM}
                        cambiar={cambiarFiltro}
                />
                <!-- FiO2 ±30% -->
        </div>
        <h3 class="font-medium mb-3 text-base-content">
                Soportes Respiratorios
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Surfactante -->
                <InputSelect
                        lista={opciones.SINO}
                        idetiqueta="Surfactante"
                        etiqueta="Surfactante"
                        modoedicion={true}
                        bind:value={surfactante}
                        cambiar={cambiarFiltro}
                />
                <!-- Dosis surfactante -->
                <InputText
                        idetiqueta="fndosissurfactanteh"
                        etiqueta="Dosis surfactante "
                        modoedicion={true}
                        bind:value={ndosissurfactante}
                        escribir={cambiarFiltro}
                />
                <!-- ARM -->
                <InputOpcionalText
                        idetiqueta="ARM"
                        etiqueta="ARM"
                        modoedicion={true}
                        bind:value={arm}
                        cambiar={cambiarFiltro}
                />
                <!-- Intubado desde UTPR -->
                <InputSelect
                        idetiqueta="UTPR"
                        etiqueta="Intubado desde UTPRl"
                        modoedicion={true}
                        bind:value={intubado}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- VAFO -->
                <InputSelect
                        lista={opciones.SINO}
                        idetiqueta="VAFO"
                        etiqueta="VAFO"
                        modoedicion={true}
                        bind:value={vafo}
                        cambiar={cambiarFiltro}
                />
                <!-- CPAP -->
                <InputSelect
                        lista={opciones.SINO}
                        idetiqueta="CPAP"
                        etiqueta="CPAP"
                        modoedicion={true}
                        bind:value={cpap}
                        cambiar={cambiarFiltro}
                />
                <!-- OAF -->
                <InputSelect
                        lista={opciones.SINO}
                        idetiqueta="OAF"
                        etiqueta="OAF"
                        modoedicion={true}
                        bind:value={oaf}
                        cambiar={cambiarFiltro}
                />
                <!-- CBF -->
                <InputSelect
                        lista={opciones.SINO}
                        idetiqueta="CBF"
                        etiqueta="CBF"
                        modoedicion={true}
                        bind:value={cbf}
                        cambiar={cambiarFiltro}
                />
        </div>
        <h3 class="font-medium mb-3 text-base-content">Medicamentos</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Cafeína -->
                <InputSelect
                        idetiqueta="Cafeína"
                        etiqueta="Cafeína"
                        modoedicion={true}
                        bind:value={cafeina}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Aminofilina -->
                <InputSelect
                        idetiqueta="Aminofilina"
                        etiqueta="Aminofilina"
                        modoedicion={true}
                        bind:value={aminofilina}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Corticoide Inhalado -->
                <InputSelect
                        idetiqueta="Corticoide Inhalado"
                        etiqueta="Corticoide Inhalado"
                        modoedicion={true}
                        bind:value={corticoidepostnatal}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Corticoide Postnatal -->
                <InputSelect
                        lista={opciones.SINO}
                        idetiqueta="Corticoide Postnatal"
                        etiqueta="Corticoide Postnatal"
                        modoedicion={true}
                        bind:value={corticoidepostnatal}
                        cambiar={cambiarFiltro}
                />
                <!-- Óxido Nítrico -->
                <InputSelect
                        idetiqueta="Óxido Nítrico"
                        etiqueta="Óxido Nítrico"
                        modoedicion={true}
                        bind:value={oxidonitrico}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
        </div>
</div>
