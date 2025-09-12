<script>
        import InputSelect from "../Formulario/InputSelect.svelte";
        import opciones from "$lib/opciones";
        let {
                fondoojo = $bindable(""),
                rop = $bindable(""),
                tratamientorop = $bindable(""),
        } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Fondo de Ojo -->
        <InputSelect
                idetiqueta="fondoojo"
                etiqueta="fondoojo"
                modoedicion={true}
                bind:value={fondoojo}
                lista={opciones.SINO}
        />
        <!-- ROP (Retinopatía del Prematuro) -->
        <InputSelect
                idetiqueta="rop"
                etiqueta="rop"
                modoedicion={true}
                bind:value={rop}
                lista={opciones.ROP}
        />
        <!-- Tratamiento de ROP -->
        <InputSelect
                idetiqueta="Tratamiento de ROP"
                etiqueta="Tratamiento de ROP"
                modoedicion={true}
                bind:value={tratamientorop}
                lista={opciones.ROP_TTO}
        />
</div>
