<script>
        import InputText from "../Formulario/InputText.svelte";
        import InputMas from "../Formulario/InputMas.svelte";

        let {
                cambiarFiltro,
                malformacionescongenitas = $bindable(""),
                cirugias = $bindable(""),
                complicaciones = $bindable(""),
                diagnostico = $bindable(""),
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
        <InputText
                idetiqueta="Cirugías"
                etiqueta="Cirugías"
                modoedicion={true}
                bind:value={cirugias}
                cambiar = {cambiarFiltro}
                escribir = {cambiarFiltro}
        />
        <!-- Complicaciones -->
        <InputText
                idetiqueta="Complicaciones"
                etiqueta="Complicaciones"
                modoedicion={true}
                bind:value={complicaciones}
                cambiar = {cambiarFiltro}
                escribir = {cambiarFiltro}
        />
        <!-- Diagnostico -->
        <InputText
                idetiqueta="Diagnostico"
                etiqueta="Diagnostico"
                modoedicion={true}
                bind:value={diagnostico}
                cambiar = {cambiarFiltro}
                escribir = {cambiarFiltro}
        />
</div>
