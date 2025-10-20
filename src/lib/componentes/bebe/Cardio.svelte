<script>
    import InputText from "../Formulario/InputText.svelte";
    import Modoedicion from "./Modoedicion.svelte";
    import InputSelect from "../Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    import InputOpcionalText from "../Formulario/InputOpcionalText.svelte";
    let {
        modoedicion = $bindable(false),
        ductus = $bindable(""),
        ductusdiagnostico = $bindable(""),
        ductusttofarmacologico1ciclo = $bindable(""),
        ductusttofarmacologico2ciclo = $bindable(""),
        ductusttoquirurgico = $bindable(""),
        cardiopatiacongenita = $bindable(""),
        diagcc = $bindable(""),
        inotropicosdopamina = $bindable(""),
        inotropicosdobutamina = $bindable(""),
        inotropicosadrenalina = $bindable(""),
        inotropicosmilrinona = $bindable(""),
        inotropicosvasopresina = $bindable(""),
        diureticosfurosemida = $bindable(""),
        diureticosespironolac = $bindable(""),
        diureticoshidroclotiaz = $bindable(""),
        hemoderivadostgrn = $bindable(""),
        hemoderivadosplasman = $bindable(""),
        hemoderivadosplaquetasn = $bindable(""),
        hemoderivadosgamman = $bindable(""),
        exanguineotransfusion = $bindable(""),
    } = $props();
</script>

<!-- Sección: Ductus y Cardiopatía -->
<div class="mb-8">
    <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
        Ductus Arterioso y Cardiopatía Congénita
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputSelect
            lista={opciones.SINO}
            bind:value={ductus}
            etiqueta="Ductus Arterioso Persistente"
            idetiqueta="ductus"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.DUCTUS_DIAGNOSTICO}
            bind:value={ductusdiagnostico}
            etiqueta="Diagnóstico del Ductus"
            idetiqueta="ductusdiagnostico"
            bind:modoedicion
        />

        <InputText
            bind:value={ductusttofarmacologico1ciclo}
            etiqueta="Tratamiento Farmacológico (1er Ciclo)"
            idetiqueta="ductusttofarmacologico1ciclo"
            bind:modoedicion
        />

        <InputText
            bind:value={ductusttofarmacologico2ciclo}
            etiqueta="Tratamiento Farmacológico (2do Ciclo)"
            idetiqueta="ductusttofarmacologico2ciclo"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.SINO}
            bind:value={ductusttoquirurgico}
            etiqueta="Tratamiento Quirúrgico"
            idetiqueta="ductusttoquirurgico"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.SINO}
            bind:value={cardiopatiacongenita}
            etiqueta="Cardiopatía Congénita"
            idetiqueta="cardiopatiacongenita"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.DUCTUS_DIAGNOSTICO}
            bind:value={diagcc}
            etiqueta="Diagnóstico de Cardiopatía"
            idetiqueta="diagcc"
            bind:modoedicion
        />
    </div>
</div>

<!-- Sección: Inotrópicos y Diuréticos -->
<div class="mb-8">
    <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-secondary">
        Medicamentos Cardiovasculares
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputSelect
            lista={opciones.SINO}
            bind:value={inotropicosdopamina}
            etiqueta="Dopamina"
            idetiqueta="inotropicosdopamina"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.SINO}
            bind:value={inotropicosdobutamina}
            etiqueta="Dobutamina"
            idetiqueta="inotropicosdobutamina"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.SINO}
            bind:value={inotropicosadrenalina}
            etiqueta="Adrenalina"
            idetiqueta="inotropicosadrenalina"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.SINO}
            bind:value={inotropicosmilrinona}
            etiqueta="Milrinona"
            idetiqueta="inotropicosmilrinona"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.SINO}
            bind:value={inotropicosvasopresina}
            etiqueta="Vasopresina"
            idetiqueta="inotropicosvasopresina"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.SINO}
            bind:value={diureticosfurosemida}
            etiqueta="Furosemida"
            idetiqueta="diureticosfurosemida"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.SINO}
            bind:value={diureticosespironolac}
            etiqueta="Espironolactona"
            idetiqueta="diureticosespironolac"
            bind:modoedicion
        />

        <InputSelect
            lista={opciones.SINO}
            bind:value={diureticoshidroclotiaz}
            etiqueta="Hidroclorotiazida"
            idetiqueta="diureticoshidroclotiaz"
            bind:modoedicion
        />
    </div>
</div>

<!-- Sección: Hemoderivados y Transfusiones -->
<div class="mb-8">
    <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-accent">
        Hemoderivados y Transfusiones
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InputText
            bind:value={hemoderivadostgrn}
            etiqueta="TGR (Transfusiones)"
            idetiqueta="hemoderivadostgrn"
            bind:modoedicion
        />

        <InputText
            bind:value={hemoderivadosplasman}
            etiqueta="Plasma (N°)"
            idetiqueta="hemoderivadosplasman"
            bind:modoedicion
        />

        <InputText
            bind:value={hemoderivadosplaquetasn}
            etiqueta="Plaquetas (N°)"
            idetiqueta="hemoderivadosplaquetasn"
            bind:modoedicion
        />

        <InputText
            bind:value={hemoderivadosgamman}
            etiqueta="Gamma (N°)"
            idetiqueta="hemoderivadosgamman"
            bind:modoedicion
        />
        <InputSelect
            lista = {opciones.SINO}
            bind:value={exanguineotransfusion}
            etiqueta="Exanguino Transfusión"
            idetiqueta="exanguineotransfusion"
            bind:modoedicion
        />
    </div>

    
</div>
