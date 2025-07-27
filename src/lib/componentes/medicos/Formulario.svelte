<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<!-- Modal Formulario Agregar Médico - Dark Mode & Mobile Responsive -->
<div class="w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-4">
  <div class="flex items-center space-x-2">
    <svg class="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2"
      viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M5.121 17.804A4 4 0 017.172 17h9.656a4 4 0 012.828 1.172M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Agregar Nuevo Médico</h2>
  </div>

  <div class="space-y-2">
    <label for="mnombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre *</label>
    <input id="mnombre" type="text" placeholder="Nombre del médico"
      class="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>

  <div class="space-y-2">
    <label for="mapellido" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Apellido *</label>
    <input id="mapellido" type="text" placeholder="Apellido del médico"
      class="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>

  <div class="space-y-2">
    <label for="mespecialidad" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Especialidad</label>
    <input id="mespecialidad" type="text" placeholder="Especialidad (opcional)"
      class="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>

  <div class="flex justify-end gap-3 pt-4">
    <button
      class="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Cancelar</button>
    <button
      class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Agregar</button>
  </div>
</div>
