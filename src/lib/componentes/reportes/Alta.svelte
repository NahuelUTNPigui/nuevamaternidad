<script>
    import InputMas from "../Formulario/InputMas.svelte";
    import InputBool from "../Formulario/InputBool.svelte";
    import InputDate from "../Formulario/InputDate.svelte";
    let {
        cambiarFiltro,
        conalta = $bindable(""),
        diagnostico = $bindable(""),
        condiciones = $bindable(""),
        altadesde = $bindable(""),
        altahasta = $bindable(""),
    } = $props();
</script>

<div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!--Con alta-->
        <InputBool
            idetiqueta="conalta"
            etiqueta="Con alta"
            modoedicion={true}
            bind:value={conalta}
            cambiar={cambiarFiltro}
            
        />
        <!--Ingreso desde-->
        <InputDate
            idetiqueta="fechadesde"
            etiqueta="Fecha desde"
            modoedicion={true}
            bind:value={altadesde}
            cambiar={cambiarFiltro}
            escribir={cambiarFiltro}
        />
        <!--Ingreso hasta-->
        <InputDate
            idetiqueta="fechahasta"
            etiqueta="Fecha hasta"
            modoedicion={true}
            bind:value={altahasta}
            cambiar={cambiarFiltro}
            escribir={cambiarFiltro}
        />
    </div>
</div>
