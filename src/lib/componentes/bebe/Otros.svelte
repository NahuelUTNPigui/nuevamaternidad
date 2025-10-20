<script>
  import InputText from "../Formulario/InputText.svelte";
  import InputMas from "../Formulario/InputMas.svelte";
  import InputTextArea from "../Formulario/InputTextArea.svelte";
  import Modoedicion from "./Modoedicion.svelte";

  let {
    modoedicion = $bindable(false),
    malformacionescongenitas = $bindable(""),
    cirugias = $bindable(""),
    complicaciones = $bindable(""),
    observacion = $bindable(""),
  } = $props();
</script>

<div
  class={`
    tab-content rounded-md p-4 space-y-4
    dark:bg-gray-900 bg-white
    
  `}
>
  <!-- Sección: Información Adicional -->
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
    Datos Clínicos Adicionales
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Malformaciones Congénitas -->
    <InputMas
      bind:value={malformacionescongenitas}
      etiqueta="Malformaciones Congénitas"
      idetiqueta="malformacionescongenitas"
      bind:modoedicion
    />

    <!-- Cirugías Realizadas -->
    <InputMas
      bind:value={cirugias}
      etiqueta="Cirugías Realizadas"
      idetiqueta="cirugias"
      bind:modoedicion
    />

    <!-- Complicaciones Generales -->
    <InputMas
      bind:value={complicaciones}
      etiqueta="Complicaciones Generales"
      idetiqueta="complicaciones"
      bind:modoedicion
    />
    <!-- Observacion -->
    <InputTextArea
      idetiqueta="observaciones"
      etiqueta="Observación"
      bind:value={observacion}
      bind:modoedicion
    />
  </div>
</div>
