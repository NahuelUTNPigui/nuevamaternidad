<script>
  import InputText from "../Formulario/InputText.svelte";
  import Modoedicion from "./Modoedicion.svelte";
  let {
    modoedicion = $bindable(false),
    malformacionescongenitas = $bindable(""),
    cirugias = $bindable(""),
    complicaciones = $bindable(""),
  } = $props();
</script>
<!-- Sección: Información Adicional -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
    Datos Clínicos Adicionales
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Malformaciones Congénitas -->
    <InputText
      bind:value={malformacionescongenitas}
      etiqueta="Malformaciones Congénitas"
      idetiqueta="malformacionescongenitas"
      bind:modoedicion
      
    />

    <!-- Cirugías Realizadas -->
    <InputText
      bind:value={cirugias}
      etiqueta="Cirugías Realizadas"
      idetiqueta="cirugias"
      bind:modoedicion
      
    />

    <!-- Complicaciones Generales -->
    <InputText
      bind:value={complicaciones}
      etiqueta="Complicaciones Generales"
      idetiqueta="complicaciones"
      bind:modoedicion
      
    />
  </div>
</div>