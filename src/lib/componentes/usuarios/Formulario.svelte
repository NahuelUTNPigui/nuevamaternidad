<script>
  import { darker } from "$lib/stores/oscuro.svelte";
  import { toDark } from "$lib/string/string";
  import { roles } from "$lib/roles";
  let oscuro = $derived(darker.oscurostate);
  let {
    id = $bindable(""),
    nombre = $bindable(""),
    apellido = $bindable(""),
    correo = $bindable(""),
    rol = $bindable(""),
    guardar,
    cancelar
  } = $props();
  function td(oscuro,o1,o2){
    return toDark(oscuro,o1,o2)
  }
</script>

<!-- Modal Formulario Agregar Usuario - Dark Mode & Mobile Responsive -->
<div
  class={`
    ${td(oscuro,"bg-gray-900","bg-white")}
    w-full max-w-md mx-auto rounded-xl shadow-lg p-6 space-y-4
  `}
>
  <div class="flex items-center space-x-2">
    <svg
      class={`
        ${td(oscuro,"text-blue-400","text-blue-500")}
        w-5 h-5
      `}
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5.121 17.804A4 4 0 017.172 17h9.656a4 4 0 012.828 1.172M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
    {#if id == ""}
      <h2 class={`
            ${td(oscuro,"text-gray-100","text-gray-800")}
            text-lg font-semibold 
          `}
      >
        Agregar Nuevo Usuario
      </h2>
    {:else}
      <h2 class={`
            ${td(oscuro,"text-gray-100","text-gray-800")}
            text-lg font-semibold 
          `}
      >
        Modificar Usuario
      </h2>
    {/if}
  </div>
  <div class="space-y-2">
    <label
      for="ucorreo"
      class={`
        ${td(oscuro,"text-gray-300","text-gray-700")}
        block text-sm font-medium 
      `}
      
      >Correo</label
    >
    <input
      id="ucorreo"
      type="text"
      placeholder="Nombre del usuario"
      bind:value={correo}
      class={`
        w-full px-3 py-2 border rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500
        ${td(oscuro,"bg-gray-800 text-gray-100 border-gray-600","text-gray-900 bg-white border-gray-300")}
      `}
    />
  </div>
  <div class="space-y-2">
    <label
      for="unombre"
      class={`
        ${td(oscuro,"text-gray-300","text-gray-700")}
        block text-sm font-medium 
      `}
      >Nombre</label
    >
    <input
      id="unombre"
      type="text"
      placeholder="Nombre del usuario"
      bind:value={nombre}
      class={`
        w-full px-3 py-2 border rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500
        ${td(oscuro,"bg-gray-800 text-gray-100 border-gray-600","text-gray-900 bg-white border-gray-300")}
      `}
    />
  </div>

  <div class="space-y-2">
    <label
      for="uapellido"
      class={`
        ${td(oscuro,"text-gray-300","text-gray-700")}
        block text-sm font-medium 
      `}
      >Apellido</label
    >
    <input
      id="uapellido"
      type="text"
      placeholder="Apellido del médico"
      bind:value={apellido}
      class={`
        w-full px-3 py-2 border rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500
        ${td(oscuro,"bg-gray-800 text-gray-100 border-gray-600","text-gray-900 bg-white border-gray-300")}
      `}
    />
  </div>

  <div class="space-y-2">
    <label
      for="urol"
      class={`
        ${td(oscuro,"text-gray-300","text-gray-700")}
        block text-sm font-medium 
      `}
      >Rol</label
    >
    <select 
        class={`select
          w-full px-3 py-2 border rounded-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${td(oscuro,"bg-gray-800 text-gray-100 border-gray-600","text-gray-900 bg-white border-gray-300")}
        `}
        bind:value={rol}
    >
      {#each roles as r}
        <option value={r.id} >{r.nombre}</option>
      {/each}
    </select>
  </div>

  <div class="flex justify-end gap-3 pt-4">
    <button
      onclick={cancelar}
      class={`
        cursor-pointer
        px-4 py-2 rounded-md 
        ${td(oscuro,"bg-gray-700 text-gray-200 hover:bg-gray-600","bg-gray-100 text-gray-800 hover:bg-gray-200" )} 
      `}
      >Cancelar</button
    >
    <button
        onclick={guardar}
      class={`
        cursor-pointer
        px-4 py-2 rounded-md 
        bg-blue-600 text-white 
        hover:bg-blue-700 transition-colors
      `}
      >Agregar</button
    >
  </div>
</div>
