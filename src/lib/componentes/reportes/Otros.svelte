<script>
        import InputText from "../Formulario/InputText.svelte";
        import InputMas from "../Formulario/InputMas.svelte";

        let {
                cambiarFiltro,
                malformacionescongenitas = $bindable(""),
                cirugias = $bindable(""),
                complicaciones = $bindable(""),
                
        } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Malformaciones Congénitas -->
        <InputMas
                idetiqueta="Malformaciones Congénitas"
                etiqueta="Malformaciones Congénitas"
                modoedicion={true}
                bind:value={malformacionescongenitas}
                escribir = {cambiarFiltro}
        />
        <!-- Cirugías -->
        <InputMas
                idetiqueta="Cirugías"
                etiqueta="Cirugías"
                modoedicion={true}
                bind:value={cirugias}
                escribir = {cambiarFiltro}
        />
        <!-- Complicaciones -->
        <InputMas
                idetiqueta="Complicaciones"
                etiqueta="Complicaciones"
                modoedicion={true}
                bind:value={complicaciones}
                escribir = {cambiarFiltro}
        />
       
</div>
