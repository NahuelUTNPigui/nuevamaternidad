<script>
  import Modoedicion from "../bebe/Modoedicion.svelte";
  let {
    idetiqueta,
    etiqueta,
    modoedicion = $bindable(false),
    value = $bindable(""),
    opcion = $bindable(""), // vacío / no / si
  } = $props();
</script>

<div class="form-control">
  <label class="label" for={idetiqueta}>
    <span class="label-text font-medium">{etiqueta}</span>
  </label>

  {#snippet childrenview()}
    {#if opcion === "si"}
      <p class="bg-transparent font-medium m-1">{value}</p>
    {:else}
      <p class="bg-transparent font-medium m-1">{opcion || "Vacío"}</p>
    {/if}
  {/snippet}

  {#snippet childrenedit()}
    <!-- Selector de opciones -->
    <select
      class="select select-bordered w-full font-medium mb-2"
      bind:value={opcion}
    >
      <option value="">Vacío</option>
      <option value="no">No</option>
      <option value="si">Sí</option>
    </select>

    <!-- Input habilitado solo si es "si" -->
    {#if opcion === "si"}
      <input
        id={idetiqueta}
        type="text"
        class="input input-bordered w-full font-medium"
        bind:value
      />
    {/if}
  {/snippet}

  <Modoedicion bind:modoedicion {childrenview} {childrenedit} />
</div>
