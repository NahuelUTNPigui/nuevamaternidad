<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Alimentacion from "./Alimentacion.svelte";
    import Cardio from "./Cardio.svelte";
    import Cateteres from "./Cateteres.svelte";
    import Otros from "./Otros.svelte";
    import Respiratorio from "./Respiratorio.svelte";
    import Sepsis from "./Sepsis.svelte";
    let oscuro = $derived(darker.oscurostate)
</script>
<div class="tab-content bg-white dark:bg-gray-900 rounded-md p-4 space-y-2">
  <!-- Sistema Respiratorio -->
  <div class="collapse collapse-arrow bg-white dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box">
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
        <span class="text-blue-500 dark:text-blue-300">🫁</span> Sistema Respiratorio
    </div>
    <div class="collapse-content">
        <Respiratorio/>
    </div>
  </div>

  <!-- Alimentación -->
  <div class="collapse collapse-arrow bg-white dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box">
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
        <span class="text-yellow-500 dark:text-yellow-300">🍽️</span> Alimentación
    </div>
    <div class="collapse-content">
        <Alimentacion/>
    </div>
  </div>

  <!-- Catéteres -->
  <div class="collapse collapse-arrow bg-white dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box">
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
        <span class="text-pink-500 dark:text-pink-300">💉</span> Catéteres
    </div>
    <div class="collapse-content">
        <Cateteres/>
    </div>
  </div>

  <!-- Sepsis -->
  <div class="collapse collapse-arrow bg-white dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box">
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
        <span class="text-red-500 dark:text-red-300">🦠</span> Sepsis
    </div>
    <div class="collapse-content">
        <Sepsis/>
    </div>
  </div>

  <!-- Sistema Cardiovascular -->
  <div class="collapse collapse-arrow bg-white dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box">
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
        <span class="text-pink-600 dark:text-pink-400">❤️</span> Sistema Cardiovascular
    </div>
    <div class="collapse-content">
        <Cardio/>
    </div>
  </div>

  <!-- Otros Sistemas -->
  <div class="collapse collapse-arrow bg-white dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box">
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
        <span class="text-green-600 dark:text-green-400">🧬</span> Otros Sistemas
    </div>
    <div class="collapse-content">
        <Otros/>
    </div>
  </div>
</div>