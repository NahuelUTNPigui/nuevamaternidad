<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import opciones from "$lib/opciones";
        let {
           umbilicalvenoso = $bindable(""),
        umbilicalarterial = $bindable(""),
        percutaneo = $bindable(""),
        central = $bindable(""),     
        }=$props()
</script>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Catéter Umbilical Venoso (CUV) -->
        <InputSelect
                idetiqueta="fvenoso"
                etiqueta="Catéter Umbilical Venoso"
                modoedicion={true}
                bind:value={umbilicalvenoso}
                lista={opciones.SINO}
        />
        <!-- Catéter Umbilical Arterial (CUA) -->
        <InputSelect
                idetiqueta="farterial"
                etiqueta="Catéter Umbilical Arterial"
                modoedicion={true}
                bind:value={umbilicalarterial}
                lista={opciones.SINO}
        />
        <!-- Catéter Periférico Percutáneo -->
        <InputSelect
                idetiqueta="fperiferico"
                etiqueta="Catéter Periférico Percutáneo"
                modoedicion={true}
                bind:value={percutaneo}
                lista={opciones.SINO}
        />
        <!-- Vía Central (PICC, etc.) -->
        <InputSelect
                idetiqueta="fviacentral"
                etiqueta="Vía Central"
                modoedicion={true}
                bind:value={central}
                lista={opciones.SINO}
        />

</div>





