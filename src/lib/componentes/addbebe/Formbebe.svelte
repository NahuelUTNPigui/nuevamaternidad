<script>
  import { darker } from "$lib/stores/oscuro.svelte";
  import { toDark } from "$lib/string/string";
  let oscuro = $derived(darker.oscurostate);
  let {
    identificacion = $bindable(""),
    codigo = $bindable(""),
    nombrebebe = $bindable(""),
    dnibebe = $bindable(""),
    hcbebe = $bindable(""),
    fechanacimientobebe = $bindable(""),
    fechaingresobebe = $bindable(""),
    tipoingreso = $bindable(""),
    edadingreso = $bindable(""),
    sexo = $bindable(""),
    pesoingresobebe = $bindable(""),
    temperaturaingreso = $bindable(""),
    tipo_parto = $bindable(""),
    rem = $bindable(""),
    parto_domicilio = $bindable(""),
    liquido_meconial = $bindable(""),
    apgar_1 = $bindable(""),
    apgar_5 = $bindable(""),
    apgar_10 = $bindable(""),
    reanimacion = $bindable(""),
    fallece = $bindable(0),
    rciu = $bindable(""),
  } = $props();
</script>

<!-- 📋 Datos del Bebé -->
<div class="space-y-4">
  <div>
    <label for="nombreb" class="label text-sm font-medium"
      >Nombre del Bebé</label
    >
    <input
      id="nombreb"
      type="text"
      placeholder="Nombre completo del bebé"
      bind:value={nombrebebe}
      class={`
          input input-bordered
          w-full 
          dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 border dark:border-gray-700 dark:focus:ring-2 dark:focus:ring-sky-500
          bg-white text-gray-900 placeholder-gray-400  border-gray-300 focus:ring-2 focus:ring-sky-400
          
        `}
    />
  </div>
  <div>
    <label for="dnib" class="label text-sm font-medium">DNI del Bebé</label>
    <input
      id="dnib"
      type="text"
      placeholder="DNI (opcional)"
      bind:value={dnibebe}
      class={`
          input input-bordered
          w-full 
          dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 border dark:border-gray-700 dark:focus:ring-2 dark:focus:ring-sky-500
          bg-white text-gray-900 placeholder-gray-400  border-gray-300 focus:ring-2 focus:ring-sky-400
          
        `}
    />
  </div>
  <div>
    <label for="hclinic" class="label text-sm font-medium"
      >N° Historia Clínica</label
    >
    <input
      id="hclinic"
      type="text"
      placeholder="Ej: HC 9483638"
      bind:value={hcbebe}
      class={`
          input input-bordered
          w-full 
          dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 border dark:border-gray-700 dark:focus:ring-2 dark:focus:ring-sky-500
          bg-white text-gray-900 placeholder-gray-400  border-gray-300 focus:ring-2 focus:ring-sky-400
          
        `}
    />
  </div>
  <div>
    <label for="bdate" class="label text-sm font-medium"
      >Fecha de Nacimiento
    </label>

    <input
      id="bdate"
      type="date"
      bind:value={fechanacimientobebe}
     class={`
          input input-bordered
          w-full 
          dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 border dark:border-gray-700 dark:focus:ring-2 dark:focus:ring-sky-500
          bg-white text-gray-900 placeholder-gray-400  border-gray-300 focus:ring-2 focus:ring-sky-400
          
        `}
    />
  </div>
  <div>
    <label for="bingreso" class="label text-sm font-medium"
      >Fecha de Ingreso</label
    >
    <input
      id="bingreso"
      type="date"
      bind:value={fechaingresobebe}
      class={`
          input input-bordered
          w-full 
          dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 border dark:border-gray-700 dark:focus:ring-2 dark:focus:ring-sky-500
          bg-white text-gray-900 placeholder-gray-400  border-gray-300 focus:ring-2 focus:ring-sky-400
          
        `}
    />
  </div>
  <div>
    <label for="bpesoingreso" class="label text-sm font-medium"
      >Peso al Ingreso</label
    >
    <input
      id="bpesoingreso"
      type="text"
      bind:value={pesoingresobebe}
      class={`
          input input-bordered
          w-full 
          dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 border dark:border-gray-700 dark:focus:ring-2 dark:focus:ring-sky-500
          bg-white text-gray-900 placeholder-gray-400  border-gray-300 focus:ring-2 focus:ring-sky-400
          
        `}
    />
  </div>
</div>
