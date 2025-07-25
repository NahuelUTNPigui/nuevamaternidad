<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<div class="tab-content bg-white dark:bg-gray-900 rounded-md p-4 space-y-4">
<div class="grid md:grid-cols-2 gap-4">
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 shadow">
        <h3 class="font-semibold text-lg mb-2">🍼 Datos del Bebé</h3>
        <p><strong>Nombre:</strong> EITHAN</p>
        <p><strong>DNI:</strong> No registrado</p>
        <p><strong>N° Historia Clínica:</strong> HC 9483638</p>
        <p><strong>Código Neocosur:</strong> No registrado</p>
        <p><strong>Fecha de Nacimiento:</strong> 13/9/2024, 21:54</p>
        <p><strong>Fecha de Ingreso:</strong> 12/9/2024</p>
        <p><strong>Edad al Ingreso:</strong> RN</p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 shadow">
        <h3 class="font-semibold text-lg mb-2">👩‍🍼 Datos de la Madre</h3>
        <p><strong>Nombre:</strong> ROMERO MIRNA</p>
        <p><strong>DNI:</strong> 44370380</p>
      </div>
</div>    
</div>
