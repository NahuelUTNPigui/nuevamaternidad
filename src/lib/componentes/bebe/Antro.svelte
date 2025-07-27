<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<div 
    class={`
      tab-content rounded-md p-4 space-y-4
      ${toDark(oscuro,"bg-gray-900 ","bg-white")}
    `}
>
  <div class="grid md:grid-cols-3 gap-4">

    <!-- Peso -->
    <div 
      class={`
        ${toDark(oscuro,"bg-gray-800","bg-white")}
        rounded-md p-4 shadow text-sm
      `}
    >
      <h3 
        class={`
          font-semibold text-lg mb-2 
          ${toDark(oscuro,"text-blue-300","text-blue-600")}
        `}
      >Peso</h3>
      <p><strong>Peso al Nacer:</strong> 695 g</p>
      <p><strong>Peso al Ingreso:</strong> 695 g</p>
      <p><strong>Peso Actual:</strong> 680 g</p>
      <p><strong>Peso al Alta:</strong> 
        <span 
          class={`${toDark(oscuro,"text-gray-400","text-gray-500")}`}
        >No registrado</span></p>
    </div>

    <!-- Talla -->
    <div 
      class={`
        ${toDark(oscuro,"bg-gray-800 ","bg-white")}
        rounded-md p-4 shadow text-sm
      `}
    >
      <h3 
        class={`
          font-semibold text-lg mb-2 
          ${toDark(oscuro,"text-green-300","text-green-600")}
        `}
      >Talla</h3>
      <p><strong>Talla al Nacer:</strong> 32 cm</p>
      <p><strong>Talla al Ingreso:</strong> 32 cm</p>
      <p><strong>Talla Actual:</strong> 33 cm</p>
      <p><strong>Talla al Alta:</strong> 
        <span 
          class={`${toDark(oscuro,"text-gray-400","text-gray-500")}`}
        >No registrado</span></p>
    </div>

    <!-- Perímetro Cefálico -->
    <div 
      class={`
        ${toDark(oscuro,"bg-gray-800","bg-white")}
        rounded-md p-4 shadow text-sm
      `}
    >
      <h3 
        class={`
          font-semibold text-lg mb-2 
          ${toDark(oscuro,"text-purple-300","text-purple-600")}
        `}
      >Perímetro Cefálico</h3>
      <p><strong>PC al Nacer:</strong> 23 cm</p>
      <p><strong>PC al Ingreso:</strong> 23 cm</p>
      <p><strong>PC Actual:</strong> 23.5 cm</p>
      <p><strong>PC al Alta:</strong> 
        <span 
          class={`${toDark(oscuro,"text-gray-400","text-gray-500")}`}
        >No registrado</span></p>
    </div>

  </div>
</div>