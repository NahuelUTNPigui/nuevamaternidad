<script>
  import Modoedicion from "../bebe/Modoedicion.svelte";

  let {
    idetiqueta,
    etiqueta,
    modoedicion = $bindable(false),
    value = $bindable("") // Puede ser: "" (vacío), "no", o un string si eligió "sí"
  } = $props();

  // Estado local para manejar el radio seleccionado
  let seleccionado = $derived(value ? (value === "no" ? "no" : "si") : "")
  // Efecto: cuando cambia `seleccionado`, actualiza `value` según corresponda
  $effect(()=>{
if (seleccionado === "no") {
    value = "no";
  } else if (seleccionado === "si") {
    // Si ya había un valor, mantenerlo; si no, inicializar como vacío
    if (value === "no" || value === "") value = "";
  } else {
    // seleccionado es ""
    value = "";
  }
  })
  

</script>

<div class="form-control">
  <label class="label" for={idetiqueta}>
    <span class="label-text font-medium">{etiqueta}</span>
  </label>

  <!-- Vista (solo lectura) -->
  {#snippet childrenview()}
    <p class="bg-transparent font-medium m-1">
      {#if value === "no"}
        No
      {:else if value === ""}
        {""}
      {:else}
        Sí: {value}
      {/if}
    </p>
  {/snippet}

  <!-- Edición (radios + input condicional) -->
  {#snippet childrenedit()}
    <div class="space-y-3">
      <!-- Opción: Vacío -->
      <label class="flex items-center gap-2">
        <input
          type="radio"
          name={idetiqueta}
          value=""
          bind:group={seleccionado}
          class="radio radio-sm"
        />
        <span class="text-sm">Vacío</span>
      </label>

      <!-- Opción: No -->
      <label class="flex items-center gap-2">
        <input
          type="radio"
          name={idetiqueta}
          value="no"
          bind:group={seleccionado}
          class="radio radio-sm"
        />
        <span class="text-sm">No</span>
      </label>

      <!-- Opción: Sí -->
      <label class="flex items-center gap-2">
        <input
          type="radio"
          name={idetiqueta}
          value="si"
          bind:group={seleccionado}
          class="radio radio-sm"
        />
        <span class="text-sm">Sí</span>
      </label>

      <!-- Input habilitado solo si se selecciona "Sí" -->
      {#if seleccionado === "si"}
        <input
          type="text"
          
          class="input input-bordered input-sm w-full mt-2"
          placeholder="Especifica..."
          bind:value
        />
      {/if}
    </div>
  {/snippet}

  <!-- Control de modo: vista vs edición -->
  <Modoedicion bind:modoedicion {childrenview} {childrenedit} />
</div>