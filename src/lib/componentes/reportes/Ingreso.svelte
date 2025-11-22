<script>
    import InputDate from "../Formulario/InputDate.svelte";
    import InputSelect from "../Formulario/InputSelect.svelte";
    import InputText from "../Formulario/InputText.svelte";
    import Rangos from "../Formulario/Rangos.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        tipoingreso = $bindable(""),
        ingresodesde = $bindable(""),
        ingresohasta = $bindable(""),
        tipoparto = $bindable(""),
        partodomicilio = $bindable(""),
        apgar_1 = $bindable(""),
        apgar_5 = $bindable(""),
        apgar_10 = $bindable(""),
        apgar_1hasta = $bindable(""),
        apgar_5hasta = $bindable(""),
        apgar_10hasta = $bindable(""),
        gestacion = $bindable(""),
        gestaciondesde = $bindable(""),
        gestacionhasta = $bindable(""),
        rciu = $bindable(""),
        temperatura_ingreso = $bindable(""),
        temperatura_ingresohasta = $bindable(""),
        rem = $bindable(""),
        reanimacion = $bindable(""),
        liquido = $bindable(""),
        fallece = $bindable(""),
    } = $props();
</script>

<!-- Tipo de Ingreso y Sexo -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Origen y Características</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!--Ingreso desde-->
        <InputDate
            idetiqueta="ingresodesde"
            etiqueta="Ingreso desde"
            modoedicion={true}
            bind:value={ingresodesde}
            cambiar={cambiarFiltro}
            escribir={cambiarFiltro}
        />
        <!--Ingreso hasta-->
        <InputDate
            idetiqueta="ingresohasta"
            etiqueta="Ingreso hasta"
            modoedicion={true}
            bind:value={ingresohasta}
            cambiar={cambiarFiltro}
            escribir={cambiarFiltro}
        />

        <!-- Tipo de Ingreso -->
        <InputSelect
            idetiqueta="tipoingreso"
            etiqueta="Tipo ingreso"
            modoedicion={true}
            bind:value={tipoingreso}
            lista={opciones.INGRESOS}
            cambiar={cambiarFiltro}
        />
    </div>
</div>

<!-- Tipo de Parto y Parto Domiciliario -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Parto</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Tipo de Parto -->
        <InputSelect
            idetiqueta="ftipoparto"
            etiqueta="Tipo parto"
            modoedicion={true}
            bind:value={tipoparto}
            lista={opciones.TIPOPARTO}
            cambiar={cambiarFiltro}
        />
        <!-- Domiciliario -->
        <InputSelect
            idetiqueta="fdomiciliario"
            etiqueta="Parto domiciliario"
            modoedicion={true}
            bind:value={partodomicilio}
            lista={opciones.DOMICILIARIO}
            cambiar={cambiarFiltro}
        />
    </div>
</div>

<!-- APGAR y Edad Gestacional -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Evaluación Neonatal</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
        <!-- APGAR -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fapgar1"
                etiquetadesde="APGAR 1 MIN desde"
                idetiquetahasta="fapgar1hasta"
                etiquetahasta="APGAR 1 MIN hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={apgar_1}
                bind:valuehasta={apgar_1hasta}
            />
        </div>
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fapgar5"
                etiquetadesde="APGAR 5 MIN desde"
                idetiquetahasta="fapgar5hasta"
                etiquetahasta="APGAR 5 MIN hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={apgar_5}
                bind:valuehasta={apgar_5hasta}
            />
        </div>
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fapgar10"
                etiquetadesde="APGAR 10 MIN desde"
                idetiquetahasta="fapgar10hasta"
                etiquetahasta="APGAR 10 MIN hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={apgar_10}
                bind:valuehasta={apgar_10hasta}
            />
        </div>

        <!-- Edad gestacional -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="gestaciondesde"
                etiquetadesde="Edad gestacional desde"
                idetiquetahasta="gestacionhasta"
                etiquetahasta="Edad gestacional hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={gestaciondesde}
                bind:valuehasta={gestacionhasta}
            />
        </div>
    </div>
</div>

<!-- T Ingreso y RCIU -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Detalles Clínicos</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- T Ingreso -->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiquetadesde="ftingreso desde"
                etiquetadesde="Temperatura desde"
                idetiquetahasta="ftingreso hasta"
                etiquetahasta="Temperatura hasta"
                bind:valuedesde = {temperatura_ingreso}
                bind:valuehasta = {temperatura_ingresohasta}
                
                escribirdesde = {cambiarFiltro}
                escribirhasta = {cambiarFiltro}
            />
        </div>
        
        
        <!-- RCIU -->
        <InputSelect
            idetiqueta="frciu"
            etiqueta="RCIU"
            modoedicion={true}
            bind:value={rciu}
            lista={opciones.RCIU}
            cambiar={cambiarFiltro}
        />
    </div>
</div>

<!-- REM, Reanimación, Líquido Meconial, Fallece en Sala de Parto -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Eventos Críticos</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- REM -->
        <InputSelect
            idetiqueta="frem"
            etiqueta="REM"
            modoedicion={true}
            bind:value={rem}
            lista={opciones.REM}
            cambiar={cambiarFiltro}
        />
        <!-- Reanimación -->
        <InputSelect
            idetiqueta="freanimacion"
            etiqueta="Reanimación"
            modoedicion={true}
            bind:value={reanimacion}
            lista={opciones.REANIMACION}
            cambiar={cambiarFiltro}
        />
        <!-- Líquido Meconial -->
        <InputSelect
            idetiqueta="fliquido"
            etiqueta="Líquido Meconial"
            modoedicion={true}
            bind:value={liquido}
            lista={opciones.LIQUIDO}
            cambiar={cambiarFiltro}
        />
        <!-- Fallece en Sala de Parto -->
        <InputSelect
            idetiqueta="ffallece"
            etiqueta="Fallece en sala de parto"
            modoedicion={true}
            bind:value={fallece}
            lista={opciones.FALLECE}
            cambiar={cambiarFiltro}
        />
    </div>
</div>
