<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<div class="tab-content bg-white dark:bg-gray-900 rounded-md p-4 space-y-4">
  <div class="grid md:grid-cols-2 gap-4">
    <!-- Datos Básicos Maternos -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 shadow">
      <h3 class="font-semibold text-lg mb-2 text-purple-700 dark:text-purple-300">👩 Datos Básicos Maternos</h3>
      <p><strong>Edad Materna:</strong> <span class="text-gray-500 dark:text-gray-400">No registrado</span></p>
      <p><strong>Nivel Educación:</strong> <span class="text-gray-500 dark:text-gray-400">No registrado</span></p>
      <p><strong>Paridad:</strong> 2</p>
      <p><strong>Gemelo (Cantidad):</strong> <span class="text-gray-500 dark:text-gray-400">No registrado</span></p>
      <p><strong>Gemelo (Número):</strong> <span class="text-gray-500 dark:text-gray-400">No registrado</span></p>
    </div>

    <!-- Antecedentes y Cuidados -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 shadow">
      <h3 class="font-semibold text-lg mb-2 text-green-700 dark:text-green-300">🩺 Antecedentes y Cuidados</h3>
      <div class="flex justify-between items-center py-1 text-sm">
        <span>Control Prenatal</span>
        <span class="badge badge-error badge-outline text-xs">No</span>
      </div>
      <div class="flex justify-between items-center py-1 text-sm">
        <span>Corticoide Prenatal</span>
        <span class="badge badge-error badge-outline text-xs">No</span>
      </div>
      <div class="flex justify-between items-center py-1 text-sm">
        <span>Tabaquismo</span>
        <span class="badge badge-success badge-outline text-xs">Sí</span>
      </div>
      <div class="flex justify-between items-center py-1 text-sm">
        <span>Adicción</span>
        <span class="badge badge-success badge-outline text-xs">Sí</span>
      </div>
      <div class="flex justify-between items-center py-1 text-sm">
        <span>EGB</span>
        <span class="badge badge-neutral badge-outline text-xs">No realizado</span>
      </div>
    </div>
  </div>
</div>