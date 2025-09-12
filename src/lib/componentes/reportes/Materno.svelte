<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import opciones from "$lib/opciones";
        let {
                edad_materna = $bindable(""),
                niveleducativo = $bindable(""),
                paridad = $bindable(""),
                gemelos = $bindable(""),
                controlparental = $bindable(""),
                tabaquismo = $bindable(""),
                adiccion = $bindable(""),
                egb = $bindable(""),
                crioaminintis = $bindable(""),
                colestasis = $bindable(""),
                sulfato = $bindable(""),
                diabetes = $bindable(""),
                colico = $bindable(""),
                congenita = $bindable(""),
                itu = $bindable(""),
                desprendimiento = $bindable(""),
                ht = $bindable(""),
                hie = $bindable(""),
                preeclampisa = $bindable(""),
                eclampsia = $bindable(""),
        } = $props();
</script>

<!-- Edad Materna y Nivel Educativo -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Información Demográfica
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputSelect
                        idetiqueta="fedadm"
                        etiqueta="Edad materna"
                        modoedicion={true}
                        bind:value={edad_materna}
                        lista={opciones.EDAD_MADRE}
                />
                <InputSelect
                        idetiqueta="feducacionm"
                        etiqueta="Educación materna"
                        modoedicion={true}
                        bind:value={niveleducativo}
                        lista={opciones.NIVEL_EDUCACION}
                />
        </div>
</div>

<!-- Paridad y Gemelos -->
<div>
        <h3 class="font-medium mb-3 text-base-content">Embarazo y Parto</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Paridad -->
                <InputSelect
                        idetiqueta="fparidad"
                        etiqueta="Paridad"
                        modoedicion={true}
                        bind:value={paridad}
                        lista={opciones.PARIDAD_MADRE}
                />

                <!-- Gemelos -->
                <InputSelect
                        idetiqueta="fGEMELO"
                        etiqueta="Gemelos"
                        modoedicion={true}
                        bind:value={gemelos}
                        lista={opciones.GEMELO}
                />
        </div>
</div>

<!-- Control Prenatal, Tabaquismo, Adicción -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Factores de Riesgo Conductuales
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Control Prenatal -->
                <InputSelect
                        idetiqueta="fcontrol"
                        etiqueta="Control parental"
                        modoedicion={true}
                        bind:value={controlparental}
                        lista={opciones.SINO}
                />
                <!-- Tabaquismo -->
                <InputSelect
                        idetiqueta="ftaba"
                        etiqueta="Tabaquismo"
                        modoedicion={true}
                        bind:value={tabaquismo}
                        lista={opciones.SINO}
                />
                <!-- Adicción -->
                <InputSelect
                        idetiqueta="fadiccion"
                        etiqueta="Adicción (Droga/Alcohol)"
                        modoedicion={true}
                        bind:value={adiccion}
                        lista={opciones.SINO}
                />
        </div>
</div>

<!-- Infecciones e Inmunización -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Infecciones y Condiciones
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- EGB -->
                <InputSelect
                        idetiqueta="fegb"
                        etiqueta="EGB"
                        modoedicion={true}
                        bind:value={egb}
                        lista={opciones.SINO}
                />
                <!-- Sulfato de Magnesio -->
                <InputSelect
                        idetiqueta="fsulfato"
                        etiqueta="Sulfato de Magnesio"
                        modoedicion={true}
                        bind:value={sulfato}
                        lista={opciones.SINO}
                />
                <!-- Diabetes -->
                <InputSelect
                        idetiqueta="fdiabetes"
                        etiqueta="Diabetes"
                        modoedicion={true}
                        bind:value={diabetes}
                        lista={opciones.SINO}
                />
                <!-- Criomaninitis -->
                <InputSelect
                        idetiqueta="fcrioaminitis"
                        etiqueta="Criomaninitis"
                        modoedicion={true}
                        bind:value={crioaminintis}
                        lista={opciones.SINO}
                />
                <!-- Infección Congénita -->
                <InputSelect
                        idetiqueta="finfeccion"
                        etiqueta="Infección Congénita"
                        modoedicion={true}
                        bind:value={congenita}
                        lista={opciones.SINO}
                />
                <!-- ITU -->
                <InputSelect
                        idetiqueta="fitu"
                        etiqueta="ITU"
                        modoedicion={true}
                        bind:value={itu}
                        lista={opciones.SINO}
                />
        </div>
</div>

<!-- Complicaciones Obstétricas -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Complicaciones Obstétricas
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!--Desprendimiento-->
                <InputSelect
                        idetiqueta="fDesprendimiento"
                        etiqueta="Desprendimiento"
                        modoedicion={true}
                        bind:value={desprendimiento}
                        lista={opciones.SINO}
                />
                <!--HT Crónica-->
                <InputSelect
                        idetiqueta="fHT"
                        etiqueta="HT Crónica"
                        modoedicion={true}
                        bind:value={ht}
                        lista={opciones.SINO}
                />
                <!--HIE (Hipertensión Inducida por Embarazo)-->
                <InputSelect
                        idetiqueta="fHIE"
                        etiqueta="HIE"
                        modoedicion={true}
                        bind:value={hie}
                        lista={opciones.SINO}
                />
                <!--Preeclampsia-->
                <InputSelect
                        idetiqueta="fPreeclampsia"
                        etiqueta="Preeclampsia"
                        modoedicion={true}
                        bind:value={preeclampisa}
                        lista={opciones.SINO}
                />
                <!--Eclampsia-->
                <InputSelect
                        idetiqueta="fEclampsia"
                        etiqueta="Eclampsia"
                        modoedicion={true}
                        bind:value={eclampsia}
                        lista={opciones.SINO}
                />
                <!--Colestasis-->
                <InputSelect
                        idetiqueta="fColestasis"
                        etiqueta="Colestasis"
                        modoedicion={true}
                        bind:value={colestasis}
                        lista={opciones.SINO}
                />
        </div>
</div>
