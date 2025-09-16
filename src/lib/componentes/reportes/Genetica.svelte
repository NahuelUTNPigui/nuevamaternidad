<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import opciones from "$lib/opciones";
        let {
                cambiarFiltro,
                trisomia21 = $bindable(""),
                trisomia13 = $bindable(""),
                trisomia18 = $bindable(""),
                vacterl = $bindable(""),
                turner = $bindable(""),
        } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Trisomía 21 -->
        <InputSelect
                idetiqueta="Trisomía 21"
                etiqueta="Trisomía 21"
                modoedicion={true}
                bind:value={trisomia21}
                lista={opciones.SINO}
                cambiar={cambiarFiltro}
        />
        <!-- Trisomía 13 -->
        <InputSelect
                idetiqueta="Trisomía 13"
                etiqueta="Trisomía 13"
                modoedicion={true}
                bind:value={trisomia13}
                lista={opciones.SINO}
                cambiar={cambiarFiltro}
        />
        <!-- Trisomía 18 -->
        <InputSelect
                idetiqueta="Trisomía 18"
                etiqueta="Trisomía 18"
                modoedicion={true}
                bind:value={trisomia18}
                lista={opciones.SINO}
                cambiar={cambiarFiltro}
        />
        <!-- VACTERL -->
        <InputSelect
                idetiqueta="VACTERL"
                etiqueta="VACTERL"
                modoedicion={true}
                bind:value={vacterl}
                lista={opciones.SINO}
                cambiar={cambiarFiltro}
        />
        <!-- Síndrome de Turner -->
        <InputSelect
                idetiqueta="Síndrome de Turner"
                etiqueta="Síndrome de Turner"
                modoedicion={true}
                bind:value={turner}
                lista={opciones.SINO}
                cambiar={cambiarFiltro}
        />
</div>
