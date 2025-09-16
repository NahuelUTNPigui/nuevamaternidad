<script>
    import InputSelect from "../Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let{
        cambiarFiltro,
        trofica = $bindable(""),
        volumenenteral = $bindable(""),
        caloriasenteral = $bindable(""),
        tipoenteral = $bindable(""),
        nutricionparental = $bindable(""),
        edadnpt = $bindable(""),
        duracionnpt = $bindable(""),
        comienzoaa = $bindable(""),
        aporteaa = $bindable(""),
        comienzolipido = $bindable(""),
        aportelipido = $bindable(""),
    }=$props()
</script>
<!-- Alimentación Enteral Trófica -->
<div>
    <h3 class="font-medium mb-3 text-base-content">
        Alimentación Enteral Trófica
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputSelect
            idetiqueta="ftrofica"
            etiqueta=""
            modoedicion={true}
            bind:value={trofica}
            lista={opciones.SINO}
        />
    </div>
</div>

<!-- Tipo de Alimentación Enteral -->
<div>
    <h3 class="font-medium mb-3 text-base-content">
        Tipo de Alimentación Enteral
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
       <InputSelect
            idetiqueta="ftipoalim"
            etiqueta=""
            modoedicion={true}
            bind:value={tipoenteral}
            lista={opciones.TIPO_ALIMENTACION_ENTERAL}
        /> 
    </div>
</div>

<!-- Nutrición Parenteral -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Nutrición Parenteral</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputSelect
            idetiqueta="fnutparente"
            etiqueta="Nutricion parental"
            modoedicion={true}
            bind:value={nutricionparental}
            lista={opciones.SINO}
        />
        <!--Edad inicio dias-->
        <InputSelect
            idetiqueta="fedadpt"
            etiqueta="Edad inicio dias"
            modoedicion={true}
            bind:value={edadnpt}
            lista={opciones.EDAD_INICIO}
        />
        <!--Duración dias-->
        <InputSelect
            idetiqueta="fDURACION"
            etiqueta="Duración dias"
            modoedicion={true}
            bind:value={duracionnpt}
            lista={opciones.DURACION}
        />
        <!--Dia inicio aminoacidos-->
        <InputSelect
            idetiqueta="fdiainicioaa"
            etiqueta="Dias inicio aminoacidos"
            modoedicion={true}
            bind:value={comienzoaa}
            lista={opciones.INICIO_AA}
        />
        <!--Aporte total AA-->
        <InputSelect
            idetiqueta="faporteaa"
            etiqueta="Aporte total AA"
            modoedicion={true}
            bind:value={aporteaa}
            lista={opciones.APORTE_AA}
        />
        <!--Dias inicio lípidos-->
        <InputSelect
            idetiqueta="fdiainiciolipido"
            etiqueta="Dias inicio lípidos"
            modoedicion={true}
            bind:value={comienzolipido}
            lista={opciones.COMIENZO_LIPIDO}
        />
        <!--Aporte total lípidos-->
        <InputSelect
            idetiqueta="faportelipido"
            etiqueta="Aporte lípido"
            modoedicion={true}
            bind:value={aportelipido}
            lista={opciones.APORTE_LIPIDO}
        />
    </div>
</div>

