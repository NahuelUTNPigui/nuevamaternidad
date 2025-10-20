<script>
  import Modoedicion from "../bebe/Modoedicion.svelte";
  
  let {
    idetiqueta,
    etiqueta,
    modoedicion = $bindable(false),
    value = $bindable(""),
    escribir = () => {}
  } = $props();
</script>

<div class="form-control">
  <label class="label" for={idetiqueta}>
    <span class="label-text font-medium">{etiqueta}</span>
  </label>

  {#snippet childrenview()}
    <p class="bg-transparent font-medium m-1 whitespace-pre-wrap">{value}</p>
  {/snippet}

  {#snippet childrenedit()}
    <textarea
      id={idetiqueta}
      class="textarea textarea-bordered w-full font-medium"
      bind:value
      rows="4"
      oninput={escribir}
    ></textarea>
  {/snippet}

  <Modoedicion bind:modoedicion {childrenview} {childrenedit} />
</div>
