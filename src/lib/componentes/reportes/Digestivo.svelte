<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import opciones from "$lib/opciones";
        let {
                cambiarFiltro,
                nec = $bindable(""),
                perforacion = $bindable(""),
                onfalocele = $bindable(""),
                gastrosquisis = $bindable(""),
                atresia = $bindable(""),
                tqt = $bindable(""),
                drenajepleural = $bindable(""),
                drenajeventricular = $bindable(""),
        } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- NEC - Enterocolitis Necrotizante -->
        <InputSelect
                idetiqueta="NEC"
                etiqueta="NEC"
                modoedicion={true}
                bind:value={nec}
                lista={opciones.NEC}
                cambiar={cambiarFiltro}
        />
        <!-- Perforación Única -->
        <InputSelect
                idetiqueta="Perforación Única"
                etiqueta="Perforación Única"
                modoedicion={true}
                bind:value={perforacion}
                lista={opciones.PERFORACION_UNICA}
                cambiar={cambiarFiltro}
        />
        <!-- Malformaciones Congénitas -->
        <!-- Onfalocele -->
        <InputSelect
                idetiqueta="Onfalocele"
                etiqueta="Onfalocele"
                modoedicion={true}
                bind:value={onfalocele}
                lista={opciones.SINO}
                cambiar={cambiarFiltro}
        />
        <!-- Gastrosquisis -->
        <InputSelect
                idetiqueta="Gastrosquisis"
                etiqueta="Gastrosquisis"
                modoedicion={true}
                bind:value={gastrosquisis}
                lista={opciones.SINO}
                cambiar={cambiarFiltro}
        />
        <!-- Atresia de Colon (HDC) -->
        <InputSelect
                idetiqueta="HDC"
                etiqueta="HDC"
                modoedicion={true}
                bind:value={atresia}
                lista={opciones.HDC_DIAGNOSTICO}
                cambiar={cambiarFiltro}
        />

        <!-- TQT (Tratamiento Quirúrgico Temprano) -->
        <InputSelect
                idetiqueta="TQT"
                etiqueta="TQT"
                modoedicion={true}
                bind:value={tqt}
                lista={opciones.HDC_TTO_QUIRURGICO}
                cambiar={cambiarFiltro}
        />
        <!-- Drenajes -->

        <!-- Drenaje Pleural -->
        <InputSelect
                idetiqueta="Drenaje Pleural"
                etiqueta="Drenaje Pleural"
                modoedicion={true}
                bind:value={drenajepleural}
                lista={opciones.SINO}
                cambiar={cambiarFiltro}
        />
        <!-- Drenaje Ventricular -->
        <InputSelect
                idetiqueta="Drenaje Ventricular"
                etiqueta="Drenaje Ventricular"
                modoedicion={true}
                bind:value={drenajeventricular}
                lista={opciones.SINO}
                cambiar={cambiarFiltro}
        />
</div>
