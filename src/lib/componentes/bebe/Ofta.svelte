<script>
    import InputText from "../Formulario/InputText.svelte";
    import InputSelect from "../Formulario/InputSelect.svelte";
    import InputOpcionalText from "../Formulario/InputOpcionalText.svelte";
    import opciones from "$lib/opciones";
    import Modoedicion from "./Modoedicion.svelte";
    let {
        modoedicion = $bindable(false),
        fondoojo = $bindable(""),
        rop = $bindable(""),
        roptto = $bindable(""),
    } = $props();
</script>

<!-- Sección: Evaluación Oftalmológica -->
<div class="mb-8">
    <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
        Examen del Fondo de Ojo
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Examen de Fondo de Ojo -->
        <InputSelect
            lista = {opciones.SINO}
            bind:value={fondoojo}
            etiqueta="Examen de Fondo de Ojo"
            idetiqueta="fondoojo"
            bind:modoedicion
        />

        <!-- Retinopatía del Prematuro (ROP) -->
        <InputOpcionalText
            bind:value={rop}
            etiqueta="Retinopatía del Prematuro (ROP)"
            idetiqueta="rop"
            bind:modoedicion
        />

        <!-- Tratamiento de ROP (TTO) -->
        <InputSelect
            lista={opciones.ROP_TTO}
            bind:value={roptto}
            etiqueta="Tratamiento de ROP (TTO)"
            idetiqueta="roptto"
            bind:modoedicion
        />
    </div>
</div>
