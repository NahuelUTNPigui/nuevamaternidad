<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<div class="tab-content bg-white dark:bg-gray-900 rounded-md p-4 space-y-4">
<div class="grid md:grid-cols-2 gap-4">
  <!-- 🏥 Datos Básicos de Ingreso -->
  <div class="bg-white dark:bg-gray-800 rounded-md p-4 shadow">
    <h3 class="font-semibold text-lg mb-2 text-green-700 dark:text-green-300">📋 Datos Básicos de Ingreso</h3>
    <p><strong>Tipo de Ingreso:</strong>
      <span class="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 px-2 py-0.5 rounded-full text-xs">Propio</span>
    </p>
    <p><strong>Sexo:</strong>
      <span class="bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100 px-2 py-0.5 rounded-full text-xs">Masculino</span>
    </p>
    <p><strong>Tipo de Parto:</strong> cesarea stp</p>
    <p><strong>Parto Domiciliario:</strong>
      <span class="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 px-2 py-0.5 rounded-full text-xs">No</span>
    </p>
    <p><strong>Edad Gestacional:</strong> 30 semanas</p>
    <p><strong>Temperatura al Ingreso:</strong> <em>No registrado</em></p>
    <p><strong>RCIU:</strong>
      <span class="bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100 px-2 py-0.5 rounded-full text-xs">Sí</span>
    </p>
  </div>

  <!-- 💓 APGAR -->
  <div class="bg-white dark:bg-gray-800 rounded-md p-4 shadow">
    <h3 class="font-semibold text-lg mb-2 text-pink-700 dark:text-pink-300">📈 APGAR</h3>
    <div class="grid grid-cols-3 gap-2 text-center">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">1 minuto</p>
        <p class="text-lg font-semibold">5</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">5 minutos</p>
        <p class="text-lg font-semibold">6</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">10 minutos</p>
        <p class="text-lg font-semibold">7</p>
      </div>
    </div>
  </div>

  <!-- 🚨 Reanimación -->
  <div class="bg-white dark:bg-gray-800 rounded-md p-4 shadow md:col-span-2">
    <h3 class="font-semibold text-lg mb-2 text-indigo-700 dark:text-indigo-300">🔄 Reanimación</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
      <p class="flex justify-between">
        <span>Necesitó Reanimación</span>
        <span class="bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100 px-2 py-0.5 rounded-full text-xs">Sí</span>
      </p>
      <p class="flex justify-between">
        <span>Intubación</span>
        <span class="bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100 px-2 py-0.5 rounded-full text-xs">Sí</span>
      </p>
      <p class="flex justify-between">
        <span>VPP Neopuff</span>
        <span class="bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100 px-2 py-0.5 rounded-full text-xs">Sí</span>
      </p>
    </div>
  </div>
</div>
</div>

