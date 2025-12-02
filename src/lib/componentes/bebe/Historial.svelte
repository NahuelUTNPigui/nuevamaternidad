<script>
  import ListadoHistorial from "./ListadoHistorial.svelte";
  import Exportar from "../Exportar.svelte";
  import opciones from "$lib/opciones";
  let { historial, areas, unidades } = $props();
  
</script>

<div
  class={`
    tab-content rounded-md p-2 space-y-4
    dark:bg-gray-900 bg-white
    
  `}
>
  <div class="grid grid-cols-1 gap-4">
    <div
      class={`
          
          rounded-md p-1 shadow
        `}
    >
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
        Historial
      </h3>

      <div class="grid grid-cols-1">
        
        <ListadoHistorial {areas} {unidades} bebesrows={historial} />
      </div>
    </div>
  </div>
</div>
