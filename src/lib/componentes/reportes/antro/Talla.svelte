<script>
    import InputSelect from "$lib/componentes/Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        talla_rn = $bindable(""),
        talla_7 = $bindable(""),
        talla_14 = $bindable(""),
        talla_21 = $bindable(""),
        talla_28 = $bindable(""),
        talla_36 = $bindable(""),
    }=$props()
</script>
<!-- Talla -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Talla (cm)</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputSelect
            idetiqueta="ftallarn"
            etiqueta="Talla RN"
            modoedicion={true}
            bind:value={talla_rn}
            lista={opciones.TALLA_RANGO.RN}
            cambiar={cambiarFiltro}
        />
        <InputSelect
            idetiqueta="ftala7"
            etiqueta="Talla 7 DÍAS"
            modoedicion={true}
            bind:value={talla_7}
            lista={opciones.TALLA_RANGO.DIAS_7}
            cambiar={cambiarFiltro}
        />
        <InputSelect
            idetiqueta="ftalla14"
            etiqueta="Talla 14 días"
            modoedicion={true}
            bind:value={talla_14}
            lista={opciones.TALLA_RANGO.DIAS_14}
            cambiar={cambiarFiltro}
        />
        <InputSelect
            idetiqueta="ftalla21"
            etiqueta="Talla 21 días"
            modoedicion={true}
            bind:value={talla_21}
            lista={opciones.TALLA_RANGO.DIAS_21}
            cambiar={cambiarFiltro}
        />
        <InputSelect
            idetiqueta="ftalla28"
            etiqueta="Talla 28 días"
            modoedicion={true}
            bind:value={talla_28}
            lista={opciones.TALLA_RANGO.DIAS_28}
            cambiar={cambiarFiltro}
        />
        <InputSelect
            idetiqueta="ftallasem"
            etiqueta="Talla 36 semanas"
            modoedicion={true}
            bind:value={talla_36}
            lista={opciones.TALLA_RANGO.SEM_36}
            cambiar={cambiarFiltro}
        />
    </div>
</div>