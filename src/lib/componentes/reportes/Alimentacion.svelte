<script>
    import InputSelect from "../Formulario/InputSelect.svelte";
    import Rangos from "../Formulario/Rangos.svelte";
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
        edadnpthasta = $bindable(""),
        duracionnpthasta = $bindable(""),
        comienzoaahasta = $bindable(""),
        aporteaahasta = $bindable(""),
        comienzolipidohasta = $bindable(""),
        aportelipidohasta = $bindable(""),
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
            cambiar={cambiarFiltro}
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
            cambiar={cambiarFiltro}
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
            cambiar={cambiarFiltro}
        />
<!--Edad inicio dias-->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fedadpt"
                etiquetadesde="Edad inicio días desde"
                idetiquetahasta="fedadpthasta"
                etiquetahasta="Edad inicio días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={edadnpt}
                bind:valuehasta={edadnpthasta}
            />
        </div>
        <!--Duración dias-->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fDURACION"
                etiquetadesde="Duración días desde"
                idetiquetahasta="fDURACIONhasta"
                etiquetahasta="Duración días hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={duracionnpt}
                bind:valuehasta={duracionnpthasta}
            />
        </div>
        <!--Dia inicio aminoacidos-->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fdiainicioaa"
                etiquetadesde="Días inicio aminoácidos desde"
                idetiquetahasta="fdiainicioaahasta"
                etiquetahasta="Días inicio aminoácidos hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={comienzoaa}
                bind:valuehasta={comienzoaahasta}
            />
        </div>
        <!--Aporte total AA-->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="faporteaa"
                etiquetadesde="Aporte total AA desde"
                idetiquetahasta="faporteaahasta"
                etiquetahasta="Aporte total AA hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={aporteaa}
                bind:valuehasta={aporteaahasta}
            />
        </div>
        <!--Dias inicio lípidos-->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="fdiainiciolipido"
                etiquetadesde="Días inicio lípidos desde"
                idetiquetahasta="fdiainiciolipidohasta"
                etiquetahasta="Días inicio lípidos hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={comienzolipido}
                bind:valuehasta={comienzolipidohasta}
            />
        </div>
        
        <!--Aporte total lípidos-->
        <div class="col-span-1 md:col-span-2">
            <Rangos
                idetiqueta="faportelipido"
                etiquetadesde="Aporte lípido desde"
                idetiquetahasta="faportelipidohasta"
                etiquetahasta="Aporte lípido hasta"
                escribirdesde={cambiarFiltro}
                escribirhasta={cambiarFiltro}
                bind:valuedesde={aportelipido}
                bind:valuehasta={aportelipidohasta}
            />
        </div>
        
        
        
    </div>
</div>

