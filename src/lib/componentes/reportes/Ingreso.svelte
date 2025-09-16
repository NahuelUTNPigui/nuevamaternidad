<script>
    import InputDate from "../Formulario/InputDate.svelte";
    import InputSelect from "../Formulario/InputSelect.svelte";
    import InputText from "../Formulario/InputText.svelte";
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
        gestaciondesde = $bindable(""),
        gestacionhasta = $bindable(""),
        rciu = $bindable(""),
        temperatura_ingreso = $bindable(""),
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
        <InputSelect
            idetiqueta="fapgar1"
            etiqueta="APGAR 1 MIN"
            modoedicion={true}
            bind:value={apgar_1}
            lista={opciones.APGAR_RANGO}
            cambiar={cambiarFiltro}
        />
        <InputSelect
            idetiqueta="fapgar5"
            etiqueta="APGAR 5 MIN"
            modoedicion={true}
            bind:value={apgar_5}
            lista={opciones.APGAR_RANGO}
            cambiar={cambiarFiltro}
        />
        <InputSelect
            idetiqueta="fapgar10"
            etiqueta="APGAR 10 MIN"
            modoedicion={true}
            bind:value={apgar_10}
            lista={opciones.APGAR_RANGO}
            cambiar={cambiarFiltro}
        />
        <!-- Edad gestacional -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <InputText
            idetiqueta="gestacionaledaddesde"
            etiqueta="Gestacional desde"
            modoedicion={true}
            bind:value={gestaciondesde}
            cambiar={cambiarFiltro}
            escribir={cambiarFiltro}
        />
        <InputText
            idetiqueta="gestacionaledadhasta"
            etiqueta="Gestacional hasta"
            modoedicion={true}
            bind:value={gestacionhasta}
            cambiar={cambiarFiltro}
            escribir={cambiarFiltro}
        />
    </div>
</div>

<!-- T Ingreso y RCIU -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Detalles Clínicos</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- T Ingreso -->
        <InputSelect
            idetiqueta="ftingreso"
            etiqueta="Temperatura"
            modoedicion={true}
            bind:value={temperatura_ingreso}
            lista={opciones.TEMPERATURA_RANGO}
            cambiar={cambiarFiltro}
        />
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
