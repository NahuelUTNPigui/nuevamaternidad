<script>
        import InputText from "../Formulario/InputText.svelte";
        import InputMas from "../Formulario/InputMas.svelte";

        let {
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
        />
        <!-- Cirugías -->
        <InputText
                idetiqueta="Cirugías"
                etiqueta="Cirugías"
                modoedicion={true}
                bind:value={cirugias}
        />
        <!-- Complicaciones -->
        <InputText
                idetiqueta="Complicaciones"
                etiqueta="Complicaciones"
                modoedicion={true}
                bind:value={complicaciones}
        />
        <!-- Diagnostico -->
        <InputText
                idetiqueta="Diagnostico"
                etiqueta="Diagnostico"
                modoedicion={true}
                bind:value={diagnostico}
        />
</div>
