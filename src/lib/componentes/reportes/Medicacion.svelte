<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import opciones from "$lib/opciones";
        
        let {
                protectorgastrico = $bindable(""),
                inhibidor = $bindable(""),
                probiotico = $bindable(""),
                eritromicina = $bindable(""),
                fentanilo = $bindable(""),
                morfina = $bindable(""),
                midozolam = $bindable(""),
                precedex = $bindable(""),
                metadona = $bindable(""),
                vecuronio = $bindable(""),
                prostaglandinas = $bindable(""),
        } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Protector Gástrico -->
        <InputSelect
                idetiqueta="Protector Gástrico"
                etiqueta="Protector Gástrico"
                modoedicion={true}
                bind:value={protectorgastrico}
                lista={opciones.PROTECTOR}
        />
        <!-- Inhibidor de la Bomba de Protones -->
        <InputSelect
                idetiqueta="Inhibidor de la Bomba de Protones"
                etiqueta="Inhibidor de la Bomba de Protones"
                modoedicion={true}
                bind:value={inhibidor}
                lista={opciones.INHIBIDOR}
        />
        <!-- Probiótico -->
        <InputSelect
                idetiqueta="Probiótico"
                etiqueta="Probiótico"
                modoedicion={true}
                bind:value={probiotico}
                lista={opciones.PROBIOTICO}
        />
        <!-- Eritromicina -->
        <InputSelect
                idetiqueta="Eritromicina"
                etiqueta="Eritromicina"
                modoedicion={true}
                bind:value={eritromicina}
                lista={opciones.ERITROMICINA}
        />
        <!-- Fentanilo -->
        <InputSelect
                idetiqueta="Fentanilo"
                etiqueta="Fentanilo"
                modoedicion={true}
                bind:value={fentanilo}
                lista={opciones.FENTANILO}
        />
        <!-- Morfina -->
        <InputSelect
                idetiqueta="Morfina"
                etiqueta="Morfina"
                modoedicion={true}
                bind:value={morfina}
                lista={opciones.MORFINA}
        />
        <!-- Midazolam -->
        <InputSelect
                idetiqueta="Midazolam"
                etiqueta="Midazolam"
                modoedicion={true}
                bind:value={midozolam}
                lista={opciones.MIDAZOLAM}
        />
        <!-- Precedex (Dexmedetomidina) -->
        <InputSelect
                idetiqueta="Precedex"
                etiqueta="Precedex"
                modoedicion={true}
                bind:value={precedex}
                lista={opciones.PRECEDEX}
        />
        <!-- Metadona -->
        <InputSelect
                idetiqueta="Metadona"
                etiqueta="Metadona"
                modoedicion={true}
                bind:value={metadona}
                lista={opciones.METADONA}
        />
        <!-- Vecuronio -->
        <InputSelect
                idetiqueta="Vecuronio"
                etiqueta="Vecuronio"
                modoedicion={true}
                bind:value={vecuronio}
                lista={opciones.VECURONIO}
        />
        <!-- Prostaglandinas (PGE1) -->
        <InputSelect
                idetiqueta="Prostaglandinas"
                etiqueta="Prostaglandinas"
                modoedicion={true}
                bind:value={prostaglandinas}
                lista={opciones.PROSTAGLANDINA}
        />
</div>
