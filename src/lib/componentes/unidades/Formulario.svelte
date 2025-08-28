<script>
  import { darker } from "$lib/stores/oscuro.svelte";
  import { toDark } from "$lib/string/string";
  let oscuro = $derived(darker.oscurostate);
  let {
    id = $bindable(""),
    nombre = $bindable(""),
    area = $bindable(""),
    activa = $bindable(true),
    areas = $bindable([]),
    bebe = $bindable(""),
    bebes,
    cancelar,
    guardar,
    eliminar,
  } = $props();
  function td(oscuro, o1, o2) {
    return toDark(oscuro, o1, o2);
  }
</script>

<!-- Modal Formulario Agregar Unidad - Dark Mode & Mobile Responsive -->
<div
  class={`
    dark:bg-gray-900 bg-white
    
    w-full max-w-md mx-auto rounded-xl shadow-lg p-6 space-y-4
  `}
>
  <div class="flex items-center space-x-2">
    {#if id == ""}
      <h2
        class={`
              dark:text-gray-100 text-gray-800
              
              text-lg font-semibold 
            `}
      >
        Agregar Nueva Unidad
      </h2>
    {:else}
      <h2
        class={`
              dark:text-gray-100 text-gray-800
              
              text-lg font-semibold 
            `}
      >
        Modificar Unidad
      </h2>
    {/if}
  </div>
  <div class="space-y-2">
    <label
      for="unombre"
      class={`
        dark:text-gray-300 text-gray-700
        
        block text-sm font-medium 
      `}>Nombre</label
    >
    <input
      id="unombre"
      type="text"
      placeholder="Nombre de la unidad"
      bind:value={nombre}
      class={`
        w-full px-3 py-2 border rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500
        dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
        text-gray-900 bg-white border-gray-300
        
      `}
    />
  </div>
  <div class="space-y-2">
    <label
      for="area"
      class={`
        dark:text-gray-300 text-gray-700
        
        block text-sm font-medium 
      `}>Area</label
    >
    <select
      class={`select
          w-full px-3 py-2 border rounded-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
          text-gray-900 bg-white border-gray-300
          
        `}
      bind:value={area}
    >
      {#each id == "" ? areas.filter((a) => a.active) : areas as r}
        <option value={r.id}>{r.nombre}</option>
      {/each}
    </select>
  </div>
  <div class="space-y-2">
    <label
      for="urol"
      class={`
        dark:text-gray-300 text-gray-700
        
        block text-sm font-medium 
      `}>Bebé</label
    >
    <select
      class={`select
          w-full px-3 py-2 border rounded-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
          text-gray-900 bg-white border-gray-300
          
        `}
      bind:value={bebe}
    >
      <option value="">Vacia</option>
      {#each bebes.filter((b) => b.id == bebe || b.unidad == "") as r}
        <option value={r.id}>{r.nombrebebe}</option>
      {/each}
    </select>
  </div>
  <div class="space-y-2">
    <label
      for="urol"
      class={`
      dark:text-gray-300 text-gray-700
        
        block text-sm font-medium 
      `}>Activa</label
    >
    <select
      class={`select
          w-full px-3 py-2 border rounded-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
          text-gray-900 bg-white border-gray-300
          
        `}
      bind:value={activa}
    >
      <option value={true}>Activa</option>
      <option value={false}>Desactiva</option>
    </select>
  </div>
  <div class="flex justify-end gap-3 pt-4">
    <button
      onclick={cancelar}
      class={`
        cursor-pointer
        px-4 py-2 rounded-md 
        dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
        bg-gray-100 text-gray-800 hover:bg-gray-200
        
      `}>Cancelar</button
    >
    {#if id != ""}
      <button
        onclick={eliminar}
        class={`
        cursor-pointer    
        px-4 py-2 rounded-md 
        dark:bg-red-700 dark:text-gray-200 dark:hover:bg-red-600
        bg-red-100 text-gray-800 hover:bg-red-200
        
      `}>Eliminar</button
      >
    {/if}

    <button
      onclick={guardar}
      class={`
        cursor-pointer
        px-4 py-2 rounded-md 

        bg-blue-600 text-white 
        hover:bg-blue-700 transition-colors
      `}>Guardar</button
    >
  </div>
</div>
