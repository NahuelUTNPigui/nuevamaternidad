<script>
    import InputSelect from "$lib/componentes/Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        peso_rn = $bindable(""),
        peso_7 = $bindable(""),
        peso_14 = $bindable(""),
        peso_21 = $bindable(""),
        peso_28 = $bindable(""),
        peso_36 = $bindable(""),
    }= $props()
</script>
<!-- Peso -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Peso (gramos)</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputSelect
            idetiqueta="fpesorn"
            etiqueta="Peso RN"
            modoedicion={true}
            bind:value={peso_rn}
            lista={opciones.PESO_RANGO.RN}
        />
        <InputSelect
            idetiqueta="fpeso7"
            etiqueta="Peso 7 DÍAS"
            modoedicion={true}
            bind:value={peso_7}
            lista={opciones.PESO_RANGO.DIAS_7}
        />
        <InputSelect
            idetiqueta="fpeso14"
            etiqueta="Peso 14 días"
            modoedicion={true}
            bind:value={peso_14}
            lista={opciones.PESO_RANGO.DIAS_14}
        />
        <InputSelect
            idetiqueta="fpeso21"
            etiqueta="Peso 21 días"
            modoedicion={true}
            bind:value={peso_21}
            lista={opciones.PESO_RANGO.DIAS_21}
        />
        <InputSelect
            idetiqueta="fpeso28"
            etiqueta="Peso 28 días"
            modoedicion={true}
            bind:value={peso_28}
            lista={opciones.PESO_RANGO.DIAS_28}
        />
        <InputSelect
            idetiqueta="fpesosem"
            etiqueta="Peso 36 semanas"
            modoedicion={true}
            bind:value={peso_36}
            lista={opciones.PESO_RANGO.SEM_36}
        />
    </div>
</div>