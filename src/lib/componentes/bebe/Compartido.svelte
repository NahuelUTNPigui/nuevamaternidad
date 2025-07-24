<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
    let{
        nombre=$bindable(""),
        birthDate=$bindable(""),
        madre=$bindable(""),
        peso=$bindable(""),
        edadGestacional=$bindable(""),
        sexo=$bindable(""),
        clinicNumber=$bindable(""),

    } = $props()
</script>
<!-- Etiquetas -->
<div class="flex flex-wrap gap-2 mb-4 text-sm">
    <span class="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full">HC: {clinicNumber}</span>
    <span class="bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 px-2 py-0.5 rounded-full">{sexo}</span>
    <span class="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-purple-100 px-2 py-0.5 rounded-full">EG: {edadGestacional} semanas</span>
</div>
<!-- Resumen superior -->
<div 
    class={`
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 
        p-4 rounded-md shadow mb-4 text-sm
        ${toDark(oscuro,"bg-gray-800 ","bg-white")}
    `}
>
  <div class="flex items-center gap-2">
        <span class="text-blue-500 dark:text-blue-300">👶</span>
    <div>
      <p class="text-xs text-gray-500">Nombre</p>
      <p class="font-semibold">{nombre}</p>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-green-500 dark:text-green-300">📅</span>
    <div>
      <p class="text-xs text-gray-500">Fecha de Nacimiento</p>
      <p class="font-semibold">{birthDate}</p>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-purple-500 dark:text-purple-300">👩‍🍼</span>
    <div>
      <p class="text-xs text-gray-500">Madre</p>
      <p class="font-semibold">{madre}</p>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-yellow-500 dark:text-yellow-300">⚖️</span>
    <div>
      <p class="text-xs text-gray-500">Peso al Nacer</p>
      <p class="font-semibold">{peso} g</p>
    </div>
  </div>
</div>
