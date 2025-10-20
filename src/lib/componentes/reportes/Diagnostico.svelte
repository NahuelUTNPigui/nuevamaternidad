<script>

        import InputMas from "../Formulario/InputMas.svelte";

        let {
                cambiarFiltro,

                diagnostico = $bindable(""),
        } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
       
        <InputMas
                idetiqueta="Diagnostico"
                etiqueta="Diagnostico"
                modoedicion={true}
                bind:value={diagnostico}
                cambiar = {cambiarFiltro}
                escribir = {cambiarFiltro}
        />
</div>
