<script>
  import { darker } from "$lib/stores/oscuro.svelte";
  import { toDark } from "$lib/string/string";
  let oscuro = $derived(darker.oscurostate);
  let {
    nombre = $bindable(""),
    dni = $bindable(""),
    hc = $bindable(""),
  } = $props();
</script>

<!-- 👩 Datos de la Madre -->
<div class="space-y-4">
  <div>
    <label for="mnombre" class="label text-sm font-medium"
      >Nombre de la Madre <span class="text-red-500">*</span></label
    >
    <input
      id="mnombre"
      type="text"
      placeholder="Nombre completo de la madre"
      bind:value={nombre}
      class={`
          input input-bordered w-full 
          ${toDark(
            oscuro,
            "bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-sky-500",
            "bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-sky-400",
          )}
        `}
      required
    />
  </div>
  <div>
    <label for="dnimama" class="label text-sm font-medium"
      >DNI de la Madre</label
    >
    <input
      id="dnimama"
      type="text"
      placeholder="DNI de la madre"
      bind:value={dni}
      class={`
          input input-bordered w-full 
          ${toDark(
            oscuro,
            "bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-sky-500",
            "bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-sky-400",
          )}
        `}
    />
  </div>
  <div>
    <label for="hcmama" class="label text-sm font-medium">HC</label>
    <input
      id="hcmama"
      type="text"
      placeholder="DNI de la madre"
      bind:value={hc}
      class={`
          input input-bordered w-full ${toDark(
            oscuro,
            "bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-sky-500",
            "bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-sky-400",
          )}
        `}
    />
  </div>
</div>
