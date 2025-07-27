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
<div 
  class={`
    tab-content rounded-md p-4 space-y-4
    ${toDark(oscuro,"bg-gray-900 ","bg-white")}
  `}
>
  <!-- Sistema Respiratorio -->
  <div 
    class={`
      collapse collapse-arrow rounded-box border 
      ${toDark(oscuro,"bg-gray-800 border-gray-700","border-base-300 bg-white")}
    `}
  >
    <input type="checkbox" />
    <div 
      class={`
        collapse-title text-md 
        font-medium flex items-center gap-2`}
    >
        Sistema Respiratorio
    </div>
    <div class="collapse-content">
        <Respiratorio/>
    </div>
  </div>

  <!-- Alimentación -->
  <div 
    class={`
      collapse collapse-arrow rounded-box border 
      ${toDark(oscuro,"bg-gray-800 border-gray-700","border-base-300 bg-white")}
    `}
  >
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
         Alimentación
    </div>
    <div class="collapse-content">
        <Alimentacion/>
    </div>
  </div>

  <!-- Catéteres -->
  <div 
    class={`
      collapse collapse-arrow rounded-box border 
      ${toDark(oscuro,"bg-gray-800 border-gray-700","border-base-300 bg-white")}
    `}
  >
    <input type="checkbox" />
    <div 
      class="collapse-title text-md font-medium flex items-center gap-2"
    >
      Catéteres
    </div>
    <div class="collapse-content">
        <Cateteres/>
    </div>
  </div>

  <!-- Sepsis -->
  <div 
    class={`
      collapse collapse-arrow rounded-box border 
      ${toDark(oscuro,"bg-gray-800 border-gray-700","border-base-300 bg-white")}
    `}
  >
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
        Sepsis
    </div>
    <div class="collapse-content">
        <Sepsis/>
    </div>
  </div>

  <!-- Sistema Cardiovascular -->
  <div 
    class={`
      collapse collapse-arrow rounded-box border 
      ${toDark(oscuro,"bg-gray-800 border-gray-700","border-base-300 bg-white")}
    `}
  >
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
        Sistema Cardiovascular
    </div>
    <div class="collapse-content">
        <Cardio/>
    </div>
  </div>

  <!-- Otros Sistemas -->
  <div 
    class={`
      collapse collapse-arrow rounded-box border 
      ${toDark(oscuro,"bg-gray-800 border-gray-700","border-base-300 bg-white")}
    `}
  >
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
        Otros Sistemas
    </div>
    <div class="collapse-content">
        <Otros/>
    </div>
  </div>
</div>