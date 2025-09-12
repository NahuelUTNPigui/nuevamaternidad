<script>
  import InputText from "../Formulario/InputText.svelte";
  import InputMas from "../Formulario/InputMas.svelte";
  let {
    modoedicion=$bindable(false),
    diagnostico = $bindable("")
  } = $props()
</script>
<div
  class={`
    dark:bg-gray-900 bg-whitea  
    tab-content rounded-md p-4 space-y-4
  `}
>
<!-- Sección: Diagnostico -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
    Diagnostico
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Diagnostico -->
    <InputMas
      bind:value={diagnostico}
      etiqueta="Diagnostico"
      idetiqueta="diagnostico"
      bind:modoedicion
    />
  </div>
</div>
</div>
