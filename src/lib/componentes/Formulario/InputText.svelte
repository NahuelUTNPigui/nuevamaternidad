<script>
  import Modoedicion from "../bebe/Modoedicion.svelte";
  let {
    idetiqueta,
    etiqueta,
    modoedicion = $bindable(false),
    value = $bindable(""),
    escribir=()=>{}
    
  } = $props();
</script>

<div class="form-control">
  <label class="label" for={idetiqueta}>
    <span class="label-text font-medium">{etiqueta}</span>
  </label>
  {#snippet childrenview()}
    <p class="bg-transparent font-medium m-1">{value}</p>
  {/snippet}
  {#snippet childrenedit()}
    <input
      id={idetiqueta}
      type="text"
      class="input input-bordered w-full font-medium"
      bind:value
      oninput={escribir}
    />
  {/snippet}
  <Modoedicion bind:modoedicion {childrenview} {childrenedit} />
</div>
