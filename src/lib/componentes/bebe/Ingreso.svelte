<script>
  import Modoedicion from "./Modoedicion.svelte";
  import InputText from "../Formulario/InputText.svelte";
  import InputOpcionalText from "../Formulario/InputOpcionalText.svelte";
  import InputDate from "../Formulario/InputDate.svelte";
  import InputSelect from "../Formulario/InputSelect.svelte";
  import opciones from "$lib/opciones";
  let {
    modoedicion = $bindable(false),
    //ingreso basico
    fechaingresobebe = $bindable(""),
    tipoingreso=$bindable(""),
    edad_gestacional=$bindable(""),
    pesoingresobebe = $bindable(""),
    temperatura_ingreso = $bindable(""),
    //parto
    tipo_parto = $bindable(""),
    parto_domiciliario = $bindable(""),
    liquido_meconial = $bindable(""),
    rem = $bindable(""),
    apgar_1 = $bindable(""),
    apgar_5 = $bindable(""),
    apgar_10 = $bindable(""),
    //reanimacion
    reanimacion = $bindable(""),
    fallece = $bindable(""),
    rciu = $bindable(""),
  } = $props();
</script>

<div
  class={`
    dark:bg-gray-900 bg-whitea  
    tab-content rounded-md p-4 space-y-4
  `}
>
  <!-- Sección: Ingreso -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
    Información de Ingreso
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Fecha de Ingreso -->
    <InputDate
      bind:value={fechaingresobebe}
      etiqueta="Fecha de Ingreso"
      idetiqueta="fechaingresobebe"
      bind:modoedicion
    />
    <!--Tipo ingreso-->
    <InputSelect
      bind:value={tipoingreso}
      lista={opciones.INGRESOS}
      etiqueta="Tipo de ingreso"
      idetiqueta="tipo_ingreso"
      bind:modoedicion
    />
    <!-- Peso al Ingreso (kg) -->
    <InputText
      bind:value={pesoingresobebe}
      etiqueta="Peso al Ingreso (kg)"
      idetiqueta="pesoingresobebe"
      bind:modoedicion
    />

    <!-- Temperatura al Ingreso (°C) -->
    <InputText
      bind:value={temperatura_ingreso}
      etiqueta="Temperatura al Ingreso (°C)"
      idetiqueta="temperatura_ingreso"
      bind:modoedicion
    />
    <!--Edad gestacional-->
    <InputText
      bind:value={edad_gestacional}
      etiqueta="Edad gestacional"
      idetiqueta="edad_gestacional"
      bind:modoedicion
    />
  </div>
</div>

<!-- Sección: Parto -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
    Detalles del Parto
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Tipo de Parto -->
    <InputSelect
      bind:value={tipo_parto}
      lista={opciones.TIPOPARTO}
      etiqueta="Tipo de Parto"
      idetiqueta="tipo_parto"
      bind:modoedicion
    />

    <!-- Parto Domiciliario -->
    <InputSelect
      bind:value={parto_domiciliario}
      lista={opciones.SINO}
      etiqueta="Parto Domiciliario"
      idetiqueta="parto_domiciliario"
      bind:modoedicion
    />

    <!-- Líquido Meconial -->
    <InputSelect
      bind:value={liquido_meconial}
      lista={opciones.SINO}
      etiqueta="Líquido Meconial"
      idetiqueta="liquido_meconial"
      bind:modoedicion
    />

    <!-- REM -->
    <InputSelect
      lista={opciones.REM}
      bind:value={rem}
      etiqueta="REM"
      idetiqueta="rem"
      bind:modoedicion
    />
    <!-- RCIU -->
    <InputSelect
      bind:value={rciu}
      lista={opciones.RCIU}
      etiqueta="RCIU"
      idetiqueta="RCIU"
      bind:modoedicion
    />
    <!-- Apgar 1 minuto -->
    <InputText
      bind:value={apgar_1}
      etiqueta="Apgar 1 minuto"
      idetiqueta="apgar_1"
      bind:modoedicion
    />

    <!-- Apgar 5 minutos -->
    <InputText
      bind:value={apgar_5}
      etiqueta="Apgar 5 minutos"
      idetiqueta="apgar_5"
      bind:modoedicion
    />

    <!-- Apgar 10 minutos -->
    <InputText
      bind:value={apgar_10}
      etiqueta="Apgar 10 minutos"
      idetiqueta="apgar_10"
      bind:modoedicion
    />
  </div>
</div>

<!-- Sección: Complicaciones -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-error">
    Complicaciones
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Reanimación -->
    <InputSelect
    lista = {opciones.REANIMACION}
      bind:value={reanimacion}
      etiqueta="Reanimación"
      idetiqueta="reanimacion"
      bind:modoedicion
    />

    <!-- Fallece (Horas después) -->
    <InputSelect
    lista = {opciones.SINO}
      bind:value={fallece}
      etiqueta="Fallece (Horas después)"
      idetiqueta="fallece"
      bind:modoedicion
    />

    <!-- RCIU -->
    <InputSelect
      lista = {opciones.RCIU}
      bind:value={rciu}
      etiqueta="RCIU (Retraso de Crecimiento Intrauterino)"
      idetiqueta="rciu"
      bind:modoedicion
    />
  </div>
</div>
</div>
