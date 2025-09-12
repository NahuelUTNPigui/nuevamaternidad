<script>
  import Modoedicion from "../bebe/Modoedicion.svelte";

  let {
    idetiqueta,
    etiqueta,
    modoedicion = $bindable(false),
    value = $bindable("") // se mantiene como string: "A + B + C"
  } = $props();

  // Función para obtener los tags limpios
  function getTags(str) {
    return str
      ? str
          .split("+")
          .map(tag => tag.trim())
          .filter(tag => tag !== "")
      : [];
  }
</script>

<div class="form-control">
  <label class="label" for={idetiqueta}>
    <span class="label-text font-medium">{etiqueta}</span>
  </label>

  <!-- Snippet: Vista (con tags) -->
  {#snippet childrenview()}
    <div class="flex flex-wrap gap-2 mt-1 min-h-[2.5rem]">
      {#if value?.trim()}
        {#each getTags(value) as tag}
          <span class="badge badge-soft badge-primary badge-lg px-2 py-1 break-all">
            {tag}
          </span>
        {/each}
      {:else}
        <em class="text-base-content/60 italic">Sin datos</em>
      {/if}
    </div>
  {/snippet}

  <!-- Snippet: Edición (input + vista de tags arriba) -->
  {#snippet childrenedit()}
    <div class="space-y-2 w-full">
      <!-- Tags preview encima del input -->
      {#if value?.trim()}
        <div class="flex flex-wrap gap-2">
          {#each getTags(value) as tag}
            <span class="badge badge-soft badge-primary badge-md px-2 py-1 break-all">
              {tag}
            </span>
          {/each}
        </div>
      {/if}

      <!-- Input editable -->
      <input
        id={idetiqueta}
        type="text"
        
        class="input input-bordered w-full font-medium focus:ring-2"
        bind:value
        autocomplete="off"
        aria-label={etiqueta}
      />
    </div>
  {/snippet}

  <!-- Switch entre vista y edición -->
  <Modoedicion bind:modoedicion {childrenview} {childrenedit} />
</div>
 
