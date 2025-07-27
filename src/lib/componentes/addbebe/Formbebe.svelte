<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
    let {
      nombre = $bindable(""),
      dni= $bindable(""),
      hc= $bindable(""),
      fechanacimiento= $bindable(""),
      fechaingreso= $bindable(""),
      pesoingreso= $bindable("")
    } = $props()
</script>
<!-- 📋 Datos del Bebé -->
<div 
  class={`
    ${toDark(oscuro,"bg-gray-800","bg-white")}
    rounded-md p-4 shadow
  `}
>
  <h2 
    class={`
      font-semibold text-lg mb-4 flex items-center gap-2 
      ${toDark(oscuro,"text-blue-300","text-blue-600")}
    `}
  >Datos del Bebé</h2>
  <div class="space-y-4">
    <div>
      <label for="nombreb" 
      class="label text-sm font-medium">Nombre del Bebé</label>
      <input id="nombreb" type="text" placeholder="Nombre completo del bebé" 
        bind:value={nombre}
        class={`input input-bordered w-full ${toDark(oscuro,"bg-gray-900","")}`}
      />
    </div>
    <div>
      <label for="dnib" class="label text-sm font-medium">DNI del Bebé</label>
      <input id="dnib" type="text" placeholder="DNI (opcional)" 
      bind:value={dni}
        class={`input input-bordered w-full ${toDark(oscuro,"bg-gray-900","")}`}
      />
    </div>
    <div>
      <label for="hclinic" class="label text-sm font-medium">N° Historia Clínica</label>
      <input id="hclinic" type="text" placeholder="Ej: HC 9483638" 
        bind:value={hc}
        class={`input input-bordered w-full ${toDark(oscuro,"bg-gray-900","")}`}
      />
    </div>
    <div>
      <label for="bdate" class="label text-sm font-medium">Fecha de Nacimiento 
      </label>
      
      <input id="bdate" type="date" 
        bind:value={fechanacimiento} 
        class={`input input-bordered w-full ${toDark(oscuro,"bg-gray-900","")}`} required 
      />
    </div>
    <div>
      <label for="bingreso" class="label text-sm font-medium">Fecha de Ingreso</label>
      <input id="bingreso" type="date" 
      bind:value={fechaingreso} 
        class={`input input-bordered w-full ${toDark(oscuro,"bg-gray-900","")}`} 
      />
    </div>
    <div>
      <label for="bpesoingreso" class="label text-sm font-medium">Peso al Ingreso</label>
      <input id="bpesoingreso" type="text" 
        bind:value={pesoingreso} 
        class={`input input-bordered w-full ${toDark(oscuro,"bg-gray-900","")}`}
       />
    </div>
  </div>
</div>