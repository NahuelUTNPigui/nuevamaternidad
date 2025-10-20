<script>
  import Modoedicion from "./Modoedicion.svelte";
  import InputText from "../Formulario/InputText.svelte";
  import InputOpcionalText from "../Formulario/InputOpcionalText.svelte";
  import InputDate from "../Formulario/InputDate.svelte";
  import InputBool from "../Formulario/InputBool.svelte";
  import InputMas from "../Formulario/InputMas.svelte";
  import opciones from "$lib/opciones";
  let {
    modoedicion = $bindable(false),
    conalta = $bindable(""),
    altafecha = $bindable(""),
    altadiagnosticos = $bindable(""),
    altacondiciones = $bindable(""),
  } = $props();
</script>

<div
  class={`
    tab-content rounded-md p-4 space-y-4
    dark:bg-gray-900 bg-white
    
  `}
>
  <!-- Sección: Alta -->
  <div class="mb-8">
    <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-success">
      Estado de Alta
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- ¿Dado de Alta? -->
      <InputBool
        bind:value={conalta}
        etiqueta="¿Dado de Alta?"
        idetiqueta="conalta"
        bind:modoedicion
      />

      <!-- Fecha de Alta -->
      <InputDate
        bind:value={altafecha}
        etiqueta="Fecha de Alta"
        idetiqueta="altafecha"
        bind:modoedicion
      />
    </div>
  </div>
</div>
