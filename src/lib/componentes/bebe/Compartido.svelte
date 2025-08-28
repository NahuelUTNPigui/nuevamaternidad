<script>
  import { darker } from "$lib/stores/oscuro.svelte";
  import { toDark } from "$lib/string/string";
  let oscuro = $derived(darker.oscurostate);
  let {
    nombre = $bindable(""),
    birthDate = $bindable(""),
    madre = $bindable(""),
    peso = $bindable(""),
    edadGestacional = $bindable(""),
    sexo = $bindable(""),
    clinicNumber = $bindable(""),
    modoedicion = $bindable(false),
    guardar,
    closeEditar,
    openEditar,
  } = $props();
</script>

<!-- Etiquetas -->
<div class="flex flex-wrap gap-2 mb-4 text-sm">
  <span
    class="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full"
    >HC: {clinicNumber}</span
  >
  <span
    class="bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 px-2 py-0.5 rounded-full"
    >{sexo}</span
  >
  <span
    class="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-purple-100 px-2 py-0.5 rounded-full"
    >EG: {edadGestacional} semanas</span
  >
</div>
<div class="flex flex-col sm:flex-row sm:justify-start gap-2 mb-3 w-full">
  {#if !modoedicion}
    <button
      id="btnEditar"
      type="button"
      class="
      cursor-pointer
      inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium
           bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2
           focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
      aria-label="Editar perfil"
      onclick={openEditar}
    >
      Editar
    </button>
  {:else}
    <button
      id="btnEditar"
      type="button"
      class="
      cursor-pointer
      inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium
           bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2
           focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
      aria-label="Editar perfil"
      onclick={guardar}
    >
      Guardar
    </button>
  {/if}

  <button
    id="btnCancelar"
    type="button"
    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium
           bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100
           dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2
           focus:ring-gray-400 dark:focus:ring-offset-gray-900 hidden"
    aria-label="Cancelar edición"
    onclick={closeEditar}
  >
    Cancelar
  </button>
</div>
<!-- Resumen superior -->
<div
  class={`
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 
        p-4 rounded-md shadow mb-4 text-sm
        dark:bg-gray-800 bg-white
        
    `}
>
  <div class="flex items-center gap-2">
    <div>
      <p class="text-xs text-gray-500">Nombre</p>
      <p class="font-semibold">{nombre}</p>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <div>
      <p class="text-xs text-gray-500">Fecha de Nacimiento</p>
      <p class="font-semibold">{new Date(birthDate).toLocaleDateString()}</p>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <div>
      <p class="text-xs text-gray-500">Madre</p>
      <p class="font-semibold">{madre}</p>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <div>
      <p class="text-xs text-gray-500">Peso</p>
      <p class="font-semibold">{peso} g</p>
    </div>
  </div>
</div>
