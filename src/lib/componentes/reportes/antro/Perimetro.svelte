<script>
    import InputSelect from "$lib/componentes/Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let {
        cambiarFiltro,
        cefalico_rn = $bindable(""),
        cefalico_7 = $bindable(""),
        cefalico_14 = $bindable(""),
        cefalico_21 = $bindable(""),
        cefalico_28 = $bindable(""),
        cefalico_36 = $bindable(""),
    }=$props()
</script>
<!-- Perímetro Cefálico (PC) -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Perímetro Cefálico (cm)</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputSelect
            idetiqueta="fperrn"
            etiqueta="Perímetro RN"
            modoedicion={true}
            bind:value={cefalico_rn}
            lista={opciones.CEFALICO_RANGO.RN}
        />
        <InputSelect
            idetiqueta="fpero7"
            etiqueta="Perímetro 7 DÍAS"
            modoedicion={true}
            bind:value={cefalico_7}
            lista={opciones.CEFALICO_RANGO.DIAS_7}
        />
        <InputSelect
            idetiqueta="fpero14"
            etiqueta="Perímetro 14 días"
            modoedicion={true}
            bind:value={cefalico_14}
            lista={opciones.CEFALICO_RANGO.DIAS_14}
        />
        <InputSelect
            idetiqueta="fpero21"
            etiqueta="Perímetro 21 días"
            modoedicion={true}
            bind:value={cefalico_21}
            lista={opciones.CEFALICO_RANGO.DIAS_21}
        />
        <InputSelect
            idetiqueta="fpero28"
            etiqueta="Perímetro 28 días"
            modoedicion={true}
            bind:value={cefalico_28}
            lista={opciones.CEFALICO_RANGO.DIAS_28}
        />
        <InputSelect
            idetiqueta="fperosem"
            etiqueta="Perímetro 36 semanas"
            modoedicion={true}
            bind:value={cefalico_36}
            lista={opciones.CEFALICO_RANGO.SEM_36}
        />
    </div>
</div>