<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import opciones from "$lib/opciones";
        let {
        emh = $bindable(""),
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
        } = $props()
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
                />
                <!-- Número de dosis de surfactante (condicional) -->
                <!-- Apneas -->
                <InputSelect
                        idetiqueta="fapena"
                        etiqueta="Apnea"
                        modoedicion={true}
                        bind:value={apena}
                        lista={opciones.SINO}    
                />
                <!-- Neumotórax -->
                <InputSelect
                        idetiqueta="fneumo"
                        etiqueta="Neumotórax"
                        modoedicion={true}
                        bind:value={neumotorax}
                        lista={opciones.SINO}    
                />
                <!-- Taquipnea Transitoria -->
                <InputSelect
                        idetiqueta="Taquipnea"
                        etiqueta="Taquipnea Transitoria"
                        modoedicion={true}
                        bind:value={taquipnea}
                        lista={opciones.SINO}    
                />
                <!-- Hipertensión Pulmonar -->
                <InputSelect
                        idetiqueta="Hipertensión"
                        etiqueta="Hipertensión Pulmonar"
                        modoedicion={true}
                        bind:value={hipertension}
                        lista={opciones.SINO}    
                />
                <!-- Enfermedad Intersticial -->
                <InputSelect
                        idetiqueta="Intersticial"
                        etiqueta="Enfermedad Intersticial"
                        modoedicion={true}
                        bind:value={interstecial}
                        lista={opciones.SINO}    
                />
        </div>
        
        <h3 class="font-medium mb-3 text-base-content">
                Evaluación a las 36 semanas
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- DBP --> 
                <InputSelect
                        idetiqueta="Intersticial"
                        etiqueta="Enfermedad Intersticial"
                        modoedicion={true}
                        bind:value={interstecial}
                        lista={opciones.SINO}    
                />       
                <!-- O2 a las 36 semanas -->
                <InputSelect
                        idetiqueta="fo2"
                        etiqueta="O2 a las 36 semanas"
                        modoedicion={true}
                        bind:value={oxigeno}
                        lista={opciones.O2_36SEM}    
                />
                <!-- FiO2 ±30% -->
        </div>
        <h3 class="font-medium mb-3 text-base-content">
                Soportes Respiratorios
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Surfactante -->
                <InputSelect
                        idetiqueta="Surfactante"
                        etiqueta="Surfactante"
                        modoedicion={true}
                        bind:value={surfactante}
                        lista={opciones.SINO}    
                />
                <!-- ARM -->
                <InputSelect
                        idetiqueta="ARM"
                        etiqueta="ARM"
                        modoedicion={true}
                        bind:value={arm}
                        lista={opciones.SINO}    
                />
                <!-- Intubado desde UTPR -->
                <InputSelect
                        idetiqueta="UTPR"
                        etiqueta="Intubado desde UTPRl"
                        modoedicion={true}
                        bind:value={intubado}
                        lista={opciones.SINO}    
                />
                <!-- VAFO -->
                <InputSelect
                        idetiqueta="VAFO"
                        etiqueta="VAFO"
                        modoedicion={true}
                        bind:value={vafo}
                        lista={opciones.SINO}    
                />
                <!-- CPAP -->
                <InputSelect
                        idetiqueta="CPAP"
                        etiqueta="CPAP"
                        modoedicion={true}
                        bind:value={cpap}
                        lista={opciones.SINO}    
                />
                <!-- OAF -->
                <InputSelect
                        idetiqueta="OAF"
                        etiqueta="OAF"
                        modoedicion={true}
                        bind:value={oaf}
                        lista={opciones.SINO}    
                />
                <!-- CBF -->
                <InputSelect
                        idetiqueta="CBF"
                        etiqueta="CBF"
                        modoedicion={true}
                        bind:value={cbf}
                        lista={opciones.SINO}    
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
                />
                <!-- Aminofilina -->
                <InputSelect
                        idetiqueta="Aminofilina"
                        etiqueta="Aminofilina"
                        modoedicion={true}
                        bind:value={aminofilina}
                        lista={opciones.SINO}    
                />
                <!-- Corticoide Inhalado -->
                <InputSelect
                        idetiqueta="Corticoide Inhalado"
                        etiqueta="Corticoide Inhalado"
                        modoedicion={true}
                        bind:value={corticoidepostnatal}
                        lista={opciones.SINO}    
                />
                <!-- Corticoide Postnatal -->
                <InputSelect
                        idetiqueta="Corticoide Postnatal"
                        etiqueta="Corticoide Postnatal"
                        modoedicion={true}
                        bind:value={corticoidepostnatal}
                        lista={opciones.SINO}    
                />
                <!-- Óxido Nítrico -->
                <InputSelect
                        idetiqueta="Óxido Nítrico"
                        etiqueta="Óxido Nítrico"
                        modoedicion={true}
                        bind:value={oxidonitrico}
                        lista={opciones.SINO}    
                />
        </div>
</div>

