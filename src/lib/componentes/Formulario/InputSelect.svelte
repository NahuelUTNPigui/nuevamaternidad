<script>
  import Modoedicion from "../bebe/Modoedicion.svelte";

  let {
    idetiqueta,
    etiqueta,
    modoedicion = $bindable(false),
    value = $bindable(""),
    lista = $bindable([]),
    getNombre = (id) => {
      const item = lista.find((a) => a.id === id);
      return item ? item.nombre : "";
    }
  } = $props();
</script>

<div class="form-control">
  <label class="label" for={idetiqueta}>
    <span class="label-text font-medium">{etiqueta}</span>
  </label>

  <!-- Vista (solo lectura) -->
  {#snippet childrenview()}
    <p class="bg-transparent font-medium m-1">
      {getNombre(value)}
    </p>
  {/snippet}

  <!-- Edición (select) -->
  {#snippet childrenedit()}
    <select
      id={idetiqueta}
      class="select select-bordered w-full font-medium"
      bind:value
    >
      <option value="" disabled selected>Selecciona una opción</option>
      {#each lista as a}
        <option value={a.id} selected={value === a.id}>
          {a.nombre}
        </option>
      {/each}
    </select>
  {/snippet}

  <!-- Control de modo: vista vs edición -->
  <Modoedicion bind:modoedicion {childrenview} {childrenedit} />
</div>