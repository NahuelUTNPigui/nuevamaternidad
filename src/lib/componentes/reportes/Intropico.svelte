<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import opciones from "$lib/opciones";
        let {
                cambiarFiltro,
                dopamina = $bindable(""),
                dobutamina = $bindable(""),
                adrenalina = $bindable(""),
                milrinona = $bindable(""),
                vasopresina = $bindable(""),
                furosemida = $bindable(""),
                espironolacta = $bindable(""),
                hidrocloritiazida = $bindable(""),
        } = $props();
</script>

<!-- Inotrópicos -->
<div>
        <h3 class="font-medium mb-3 text-base-content">Inotrópicos</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <!-- Dopamina -->
                <InputSelect
                        idetiqueta="Dopamina"
                        etiqueta="Dopamina"
                        modoedicion={true}
                        bind:value={dopamina}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Dobutamina -->
                <InputSelect
                        idetiqueta="Dobutamina"
                        etiqueta="Dobutamina"
                        modoedicion={true}
                        bind:value={dobutamina}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Adrenalina -->
                <InputSelect
                        idetiqueta="Adrenalina"
                        etiqueta="Adrenalina"
                        modoedicion={true}
                        bind:value={adrenalina}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Milrinona -->
                <InputSelect
                        idetiqueta="Milrinona"
                        etiqueta="Milrinona"
                        modoedicion={true}
                        bind:value={milrinona}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Vasopresina -->
                <InputSelect
                        idetiqueta="Vasopresina"
                        etiqueta="Vasopresina"
                        modoedicion={true}
                        bind:value={vasopresina}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
        </div>
        <h3 class="font-medium mb-3 text-base-content">Diuréticos</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <!-- Furosemida -->
                <InputSelect
                        idetiqueta="Furosemida"
                        etiqueta="Furosemida"
                        modoedicion={true}
                        bind:value={furosemida}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Espironolactona -->
                <InputSelect
                        idetiqueta="Espironolactona"
                        etiqueta="Espironolactona"
                        modoedicion={true}
                        bind:value={espironolacta}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
                <!-- Hidroclorotiazida -->
                <InputSelect
                        idetiqueta="Hidroclorotiazida"
                        etiqueta="Hidroclorotiazida"
                        modoedicion={true}
                        bind:value={hidrocloritiazida}
                        lista={opciones.SINO}
                        cambiar={cambiarFiltro}
                />
        </div>
</div>
