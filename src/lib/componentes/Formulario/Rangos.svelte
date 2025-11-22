<script>
    let {
        idetiquetadesde,
        etiquetadesde,
        idetiquetahasta,
        etiquetahasta,
        valuedesde = $bindable(""),
        valuehasta = $bindable(""),
        escribirdesde = ()=>{},
        escribirhasta = ()=>{}
    } = $props()
</script>
<div
    class="grid grid-cols-1 md:grid-cols-2 gap-1"
>   
    <div class="form-control">
        <label class="label" for={idetiquetadesde}>
            <span class="label-text font-medium">{etiquetadesde}</span>
        </label>
        <input
          id={idetiquetadesde}
          type="text"
          class="input input-bordered w-full font-medium"
          bind:value = {valuedesde}
          oninput={escribirdesde}
        />
    </div>
    <div>
        <label class="label" for={idetiquetahasta}>
            <span class="label-text font-medium">{etiquetahasta}</span>
        </label>
        <input
          id={idetiquetahasta}
          type="text"
          class="input input-bordered w-full font-medium"
          bind:value = {valuehasta}
          oninput={escribirhasta}
        />
    </div>

    
</div>