<script>
    import InputText from "$lib/componentes/Formulario/InputText.svelte";
    let {
        cambiarFiltro,
        recuperarpesodesde = $bindable(""),
        recuperarpesohasta = $bindable(""),
    }=$props()
</script>
<!-- Edad de recuperación del peso al nacer -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Recuperación de Peso</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputText
            idetiqueta="fdesde"
            etiqueta="Edad recuperar peso desde"
            modoedicion={true}
            bind:value={recuperarpesodesde}
        />
        <InputText
            idetiqueta="fhasta"
            etiqueta="Edad recuperar peso hasta"
            modoedicion={true}
            bind:value={recuperarpesohasta}
        />
    </div>
</div>
