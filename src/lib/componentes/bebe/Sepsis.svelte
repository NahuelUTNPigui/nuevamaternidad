<script>
  import InputText from "../Formulario/InputText.svelte";
  import Modoedicion from "./Modoedicion.svelte";
  import InputSelect from "../Formulario/InputSelect.svelte";
  import opciones from "$lib/opciones";
  let {
    modoedicion = $bindable(false),
    sepsistemprana = $bindable(""),
    sepsistempranagermen = $bindable(""),
    sepsistempranaatbdias = $bindable(""),
    sepsistardia = $bindable(""),
    sepsistardiagermen = $bindable(""),
    sepsistardiaatbdias = $bindable(""),
  } = $props();
</script>

<!-- Sección: Sepsis Temprana -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-error">
    {"Sepsis Temprana (≤ 72 horas)"}
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Presentó Sepsis Temprana -->
    <InputSelect
      lista={opciones.SEPSIS_TARDIA}
      bind:value={sepsistemprana}
      etiqueta="Presentó Sepsis Temprana"
      idetiqueta="sepsistemprana"
      bind:modoedicion
    />

    <!-- Germen Identificado -->
    <InputText
      bind:value={sepsistempranagermen}
      etiqueta="Germen Identificado"
      idetiqueta="sepsistempranagermen"
      bind:modoedicion
    />

    <!-- Días de Antibióticos Recibidos -->
    <InputText
      bind:value={sepsistempranaatbdias}
      etiqueta="Días de Antibióticos Recibidos"
      idetiqueta="sepsistempranaatbdias"
      bind:modoedicion
      class="md:col-span-2"
    />
  </div>
</div>

<!-- Sección: Sepsis Tardía -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-warning">
    {"Sepsis Tardía (> 72 horas)"}
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Presentó Sepsis Tardía -->
    <InputSelect
      lista={opciones.SEPSIS_TARDIA}
      bind:value={sepsistardia}
      etiqueta="Presentó Sepsis Tardía"
      idetiqueta="sepsistardia"
      bind:modoedicion
    />

    <!-- Germen Identificado -->
    <InputText
      bind:value={sepsistardiagermen}
      etiqueta="Germen Identificado"
      idetiqueta="sepsistardiagermen"
      bind:modoedicion
    />

    <!-- Días de Antibióticos Recibidos -->
    <InputText
      bind:value={sepsistardiaatbdias}
      etiqueta="Días de Antibióticos Recibidos"
      idetiqueta="sepsistardiaatbdias"
      bind:modoedicion
      class="md:col-span-2"
    />
  </div>
</div>
