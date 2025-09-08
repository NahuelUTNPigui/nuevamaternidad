
<script>
  import Modoedicion from "../bebe/Modoedicion.svelte";

  let {
    idetiqueta,
    etiqueta,
    modoedicion = $bindable(false),
    value = $bindable(0), // valor numérico por defecto
    placeholder = "",
    min = undefined, // opcional: valor mínimo
    max = undefined, // opcional: valor máximo
    step = "any" // "any" para decimales, o "1" para enteros
  } = $props();
</script>

<div class="form-control">
  <label class="label" for={idetiqueta}>
    <span class="label-text font-medium">{etiqueta}</span>
  </label>

  <!-- Vista (solo lectura) -->
  {#snippet childrenview()}
    <p class="bg-transparent font-medium m-1">
      {value ?? ""}
    </p>
  {/snippet}

  <!-- Edición (input numérico) -->
  {#snippet childrenedit()}
    <input
      id={idetiqueta}
      type="number"
      class="input input-bordered w-full font-medium"
      bind:value
      placeholder={placeholder}
      min={min}
      max={max}
      step={step}
      oninput={(e) => {
        // Opcional: asegurar que el valor sea numérico
        value = e.target.value === "" ? null : parseFloat(e.target.value);
      }}
    />
  {/snippet}

  <!-- Control de modo: vista vs edición -->
  <Modoedicion bind:modoedicion {childrenview} {childrenedit} />
</div>