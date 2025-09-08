<script>
    import InputSelect from "$lib/componentes/Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let {
        scorez_rn = $bindable(""),
        scorez_7 = $bindable(""),
        scorez_14 = $bindable(""),
        scorez_21 = $bindable(""),
        scorez_28 = $bindable(""),
        scorez_36 = $bindable(""),
    }=$props()
</script>
<!-- Score Z -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Score Z</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputSelect
            idetiqueta="fscorern"
            etiqueta="Score z RN"
            modoedicion={true}
            bind:value={scorez_rn}
            lista={opciones.SCOREZ_RANGO}
        />
        <InputSelect
            idetiqueta="fscore7"
            etiqueta="Score z 7 DÍAS"
            modoedicion={true}
            bind:value={scorez_7}
            lista={opciones.SCOREZ_RANGO}
        />
        <InputSelect
            idetiqueta="fscore14"
            etiqueta="Score z 14 días"
            modoedicion={true}
            bind:value={scorez_14}
            lista={opciones.SCOREZ_RANGO}
        />
        <InputSelect
            idetiqueta="fscore21"
            etiqueta="Score z 21 días"
            modoedicion={true}
            bind:value={scorez_21}
            lista={opciones.SCOREZ_RANGO}
        />
        <InputSelect
            idetiqueta="fscore28"
            etiqueta="Score z 28 días"
            modoedicion={true}
            bind:value={scorez_28}
            lista={opciones.SCOREZ_RANGO}
        />
        <InputSelect
            idetiqueta="fscoresem"
            etiqueta="Score z 36 semanas"
            modoedicion={true}
            bind:value={scorez_36}
            lista={opciones.SCOREZ_RANGO}
        />
    </div>
</div>