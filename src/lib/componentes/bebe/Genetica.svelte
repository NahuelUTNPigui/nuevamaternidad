<script>
    import InputText from "../Formulario/InputText.svelte";
    import Modoedicion from "./Modoedicion.svelte";
    let {
        modoedicion = $bindable(false),
        geneticat21 = $bindable(""),
        geneticat13 = $bindable(""),
        geneticat18 = $bindable(""),
        geneticavacterl = $bindable(""),
        geneticaturner = $bindable(""),
    } = $props();
</script>

<!-- Sección: Evaluación Genética -->
<div class="mb-8">
    <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
        Estudios Genéticos Realizados
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Trisomía 21 (Síndrome de Down) -->
        <InputText
            bind:value={geneticat21}
            etiqueta="Trisomía 21 (Síndrome de Down)"
            idetiqueta="geneticat21"
            bind:modoedicion
        />

        <!-- Trisomía 13 (Síndrome de Patau) -->
        <InputText
            bind:value={geneticat13}
            etiqueta="Trisomía 13 (Síndrome de Patau)"
            idetiqueta="geneticat13"
            bind:modoedicion
        />

        <!-- Trisomía 18 (Síndrome de Edwards) -->
        <InputText
            bind:value={geneticat18}
            etiqueta="Trisomía 18 (Síndrome de Edwards)"
            idetiqueta="geneticat18"
            bind:modoedicion
        />

        <!-- Variante del Cromosoma X (X Frágil) -->
        <InputText
            bind:value={geneticavacterl}
            etiqueta="Variante del Cromosoma X (Síndrome de X Frágil)"
            idetiqueta="geneticavacterl"
            bind:modoedicion
        />

        <!-- Síndrome de Turner -->
        <InputText
            bind:value={geneticaturner}
            etiqueta="Síndrome de Turner (Monosomía X)"
            idetiqueta="geneticaturner"
            bind:modoedicion
        />
    </div>
</div>
