<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import opciones from "$lib/opciones";
        let {
                cambiarFiltro, 
                ductus = $bindable(""), 
                cardiocongenita = $bindable("") 
        } = $props();
</script>

<div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <!-- Presencia de Ductus -->
                <InputSelect
                        idetiqueta="Presencia de Ductus"
                        etiqueta="Presencia de Ductus"
                        modoedicion={true}
                        bind:value={ductus}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Cardiopatía Congénita -->
                <InputSelect
                        idetiqueta="Cardiopatía Congénita"
                        etiqueta="Cardiopatía Congénita"
                        modoedicion={true}
                        bind:value={cardiocongenita}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
        </div>
</div>
