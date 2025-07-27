<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
    let {
      nombre=$bindable(""),
      dni=$bindable(""),
      hc=$bindable("")
    } = $props()
</script>
<!-- 👩 Datos de la Madre -->
<div class={`
    ${toDark(oscuro,"bg-gray-800","bg-white")}
    rounded-md p-4 shadow
  `}
>
  <h2 
  class={`
      font-semibold text-lg mb-4 flex items-center gap-2 
      ${toDark(oscuro,"text-purple-300","text-purple-600")}
    `}
  >Datos de la Madre</h2>
  <div class="space-y-4">
    <div>
      <label for="mnombre" class="label text-sm font-medium">Nombre de la Madre <span class="text-red-500">*</span></label>
      <input id="mnombre" type="text" placeholder="Nombre completo de la madre" 
        bind:value={nombre}
        class={`input input-bordered w-full ${toDark(oscuro,"bg-gray-900","")}`}
      required />
    </div>
    <div>
      <label for="dnimama" class="label text-sm font-medium">DNI de la Madre</label>
      <input id="dnimama" type="text" placeholder="DNI de la madre" 
        bind:value={dni}
        class={`input input-bordered w-full ${toDark(oscuro,"bg-gray-900","")}`} 
       />
    </div>
    <div>
      <label for="hcmama" class="label text-sm font-medium">HC</label>
      <input id="hcmama" type="text" placeholder="DNI de la madre" 
        bind:value={hc}
        class={`input input-bordered w-full ${toDark(oscuro,"bg-gray-900","")}`} />
    </div>
    <!-- Info box -->
    <div class="bg-blue-100 dark:bg-blue-900 dark:text-blue-100 p-3 rounded-md text-sm mt-6">
      <p class="font-semibold mb-1">Información</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Los campos marcados con * son obligatorios</li>
        <li>Podrás completar los datos médicos después del registro</li>
        <li>El sistema generará automáticamente un ID único</li>
      </ul>
    </div>
  </div>
</div>