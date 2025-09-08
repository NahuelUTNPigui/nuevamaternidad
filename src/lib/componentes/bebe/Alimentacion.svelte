<script>
    import Modoedicion from "./Modoedicion.svelte";
    import InputText from "../Formulario/InputText.svelte";
    import InputSelect from "../Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let {
        modoedicion = $bindable(false),
        alimentacionenteraltrofica=$bindable(""),
        alimentacionenteralcompletoedad=$bindable(""),
        alimentacionenteralcalorias=$bindable(""),
        tipoalimentacionenteral=$bindable(""),
        nutricionparenteral=$bindable(""),
        nptedadinicio=$bindable(""),
        nptduraciondias=$bindable(""),
        nptdiacomienzo=$bindable(""),
        nptaportetotal=$bindable(""),
        nptdiacomienzolipido=$bindable(""),
        nptaportetotallipido=$bindable(""),
    } = $props();
</script>

<!-- Sección: Alimentación Enteral -->
<div class="mb-8">
    <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
        Alimentación Enteral
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputSelect
            lista={opciones.SINO}
            bind:value={alimentacionenteraltrofica}

            etiqueta="Alimentación Enteral Trófica"
            idetiqueta="alimentacionenteraltrofica"
            bind:modoedicion
        />

        <InputText
            bind:value={alimentacionenteralcompletoedad}
            etiqueta="Edad al lograr Alimentación Completa (días)"
            idetiqueta="alimentacionenteralcompletoedad"
            bind:modoedicion
        />

        <InputText
            bind:value={alimentacionenteralcalorias}
            etiqueta="Calorías al inicio (kcal/kg/día)"
            idetiqueta="alimentacionenteralcalorias"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.ALIMENTACION_ENTERAL_TROFICA}
            bind:value={tipoalimentacionenteral}
            etiqueta="Tipo de Alimentación Enteral"
            idetiqueta="tipoalimentacionenteral"
            bind:modoedicion
        />
    </div>
</div>

<!-- Sección: Nutrición Parenteral -->
<div class="mb-8">
    <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-secondary">
        Nutrición Parenteral Total (NPT)
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InputSelect
            lista={opciones.SINO}
            bind:value={nutricionparenteral}
            etiqueta="Recibió NPT"
            idetiqueta="nutricionparenteral"
            bind:modoedicion
        />

        <InputText
            bind:value={nptedadinicio}
            etiqueta="Edad de inicio de NPT (días)"
            idetiqueta="nptedadinicio"
            bind:modoedicion
        />

        <InputText
            bind:value={nptduraciondias}
            etiqueta="Duración de NPT (días)"
            idetiqueta="nptduraciondias"
            bind:modoedicion
        />

        <InputText
            bind:value={nptdiacomienzo}
            etiqueta="Día de inicio de NPT"
            idetiqueta="nptdiacomienzo"
            bind:modoedicion
        />

        <InputText
            bind:value={nptaportetotal}
            etiqueta="Aporte calórico total de NPT"
            idetiqueta="nptaportetotal"
            bind:modoedicion
        />

        <InputText
            bind:value={nptdiacomienzolipido}
            etiqueta="Día de inicio de lípidos en NPT"
            idetiqueta="nptdiacomienzolipido"
            bind:modoedicion
        />

        <InputText
            bind:value={nptaportetotallipido}
            etiqueta="Aporte total de lípidos en NPT"
            idetiqueta="nptaportetotallipido"
            bind:modoedicion
        />
    </div>
</div>
