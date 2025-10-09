<script>
  import Modoedicion from "./Modoedicion.svelte";
  import InputText from "../Formulario/InputText.svelte";
  import InputOpcionalText from "../Formulario/InputOpcionalText.svelte";
  import InputSelect from "../Formulario/InputSelect.svelte";
  import opciones from "$lib/opciones";
  let {
    modoedicion = $bindable(false),
    emh = $bindable(""),
    ndosissurfactante = $bindable(""),
    salam = $bindable(""),
    apneas = $bindable(""),
    neumotorax = $bindable(""),
    taquipneatransitoria = $bindable(""),
    hipertpulmonar = $bindable(""),
    enfermedadintersticial = $bindable(""),
    bql = $bindable(""),
    dbp36sem = $bindable(""),
    o236sem = $bindable(""),
    surfactante = $bindable(""),
    arm = $bindable(""),
    intubadodesdeutpr = $bindable(""),
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

<!-- Sección: Estado del Sistema Respiratorio -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
    Estado del Sistema Respiratorio
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <InputSelect
      lista={opciones.SINO}
      etiqueta="EMH (Enfermedad de Membrana Hialina)"
      idetiqueta="emh"
      bind:modoedicion
      bind:value={emh}
    />
    <InputSelect
      bind:value={salam}
      etiqueta="SALAM"
      idetiqueta="salam"
      lista={opciones.SINO}
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={apneas}
      etiqueta="Apneas"
      idetiqueta="apneas"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={neumotorax}
      etiqueta="Neumotórax"
      idetiqueta="neumotorax"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={taquipneatransitoria}
      etiqueta="Taquipnea Transitoria"
      idetiqueta="taquipneatransitoria"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={hipertpulmonar}
      etiqueta="Hipertensión Pulmonar"
      idetiqueta="hipertpulmonar"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={enfermedadintersticial}
      etiqueta="Enfermedad Intersticial"
      idetiqueta="enfermedadintersticial"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={bql}
      etiqueta="Bajo Flujo de Gas (BQL)"
      idetiqueta="bql"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={dbp36sem}
      etiqueta="DBP a 36 semanas"
      idetiqueta="dbp36sem"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.O2_36SEM}
      bind:value={o236sem}
      etiqueta="O₂ a 36 semanas"
      idetiqueta="o236sem"
      bind:modoedicion
    />
  </div>
</div>

<!-- Sección: Tratamientos e Intervenciones Respiratorias -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-secondary">
    Tratamientos e Intervenciones Respiratorias
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <InputSelect
      lista = {opciones.SINO}
      bind:value={surfactante}
      etiqueta="Surfactante"
      idetiqueta="surfactante"
      bind:modoedicion
    />

    <InputText
      bind:value={ndosissurfactante}
      etiqueta="Número de Dosis de Surfactante"
      idetiqueta="ndosissurfactante"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={arm}
      etiqueta="ARM (Asistencia Respiratoria Mecánica)"
      idetiqueta="arm"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={intubadodesdeutpr}
      etiqueta="Intubado desde UTPR"
      idetiqueta="intubadodesdeutpr"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={vafo}
      etiqueta="VAFO (Ventilación de Alta Frecuencia Oscilatoria)"
      idetiqueta="vafo"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={cpap}
      etiqueta="CPAP"
      idetiqueta="cpap"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={oaf}
      etiqueta="Oxigenoterapia de Alto Flujo (OAF)"
      idetiqueta="oaf"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={cbf}
      etiqueta="CBF (CPAP de Bajo Flujo)"
      idetiqueta="cbf"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={cafeina}
      etiqueta="Cafeína"
      idetiqueta="cafeina"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={aminofilina}
      etiqueta="Aminofilina"
      idetiqueta="aminofilina"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={corticoideinhalado}
      etiqueta="Corticoides Inhalados"
      idetiqueta="corticoideinhalado"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={corticoidepostnatal}
      etiqueta="Corticoides Postnatales"
      idetiqueta="corticoidepostnatal"
      bind:modoedicion
    />

    <InputSelect
      lista={opciones.SINO}
      bind:value={oxidonitrico}
      etiqueta="Óxido Nítrico"
      idetiqueta="oxidonitrico"
      bind:modoedicion
    />
  </div>
</div>
