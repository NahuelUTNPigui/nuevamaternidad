<script>
    import FilterCheck from "./FilterCheck.svelte";
    let{
        checked_identificacion=$bindable(true),
        checked_ingreso = $bindable(true),
        checked_antropometria = $bindable(true),
        checked_maternos = $bindable(true),
        checked_respiratorias = $bindable(true),
        checked_neurologicas = $bindable(true),
        checked_medicacion = $bindable(true),
        checked_avanzados = $bindable(true),
        checked_cateteres = $bindable(true),
        checked_alimentacion = $bindable(true),
        checked_infecciones = $bindable(true),
        checked_cardiovascular = $bindable(true),
        checked_inotropicos = $bindable(true),
        checked_sangre = $bindable(true),
        checked_oftalmologia = $bindable(true),
        checked_digestivo = $bindable(true),
        checked_genetica = $bindable(true),
        checked_otros = $bindable(true)
    } = $props()
</script>

<!-- Filtros de Visibilidad (Checkboxes superiores) -->
<div class="bg-base-100 shadow-sm rounded-lg p-4 mb-6 border border-base-300">
    <h3 class="font-semibold text-lg mb-3">Mostrar Secciones</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        <!-- Fila 1 -->
        <FilterCheck bind:value={checked_identificacion} idlabel="chk-identificacion" label="Identificación y Datos Filiatorios" />
        <FilterCheck bind:value={checked_ingreso} idlabel="chk-ingreso" label="Datos del Ingreso" />
        <FilterCheck bind:value={checked_antropometria} idlabel="chk-antropometria" label="Antropometría" />
        <FilterCheck bind:value={checked_maternos} idlabel="chk-maternos" label="Datos Maternos" />
        <FilterCheck bind:value={checked_respiratorias} idlabel="chk-respiratorias" label="Patologías Respiratorias" />

        <!-- Fila 2 -->
        <FilterCheck bind:value={checked_neurologicas} idlabel="chk-neurologicas" label="Patologías Neurológicas" />
        <FilterCheck bind:value={checked_medicacion} idlabel="chk-medicacion" label="Medicación" />
        <FilterCheck bind:value={checked_avanzados} idlabel="chk-avanzados" label="Filtros Avanzados" />
        <FilterCheck bind:value={checked_cateteres} idlabel="chk-cateteres" label="Catéteres" />
        <FilterCheck bind:value={checked_alimentacion} idlabel="chk-alimentacion" label="Alimentación" />

        <!-- Fila 3 -->
        <FilterCheck bind:value={checked_infecciones} idlabel="chk-infecciones" label="Infecciones" />
        <FilterCheck bind:value={checked_cardiovascular} idlabel="chk-cardiovascular" label="Cardiovascular" />
        <FilterCheck bind:value={checked_inotropicos} idlabel="chk-inotropicos" label="Inotrópicos" />
        <FilterCheck bind:value={checked_sangre} idlabel="chk-sangre" label="Hematología y Transfusiones" />
        <FilterCheck bind:value={checked_oftalmologia} idlabel="chk-oftalmologia" label="Oftalmología" />

        <!-- Fila 4 -->
        <FilterCheck bind:value={checked_digestivo} idlabel="chk-digestivo" label="Sistema Digestivo" />
        <FilterCheck bind:value={checked_genetica} idlabel="chk-genetica" label="Antecedentes Genéticos" />
        <FilterCheck bind:value={checked_otros} idlabel="chk-otros" label="Otros" />
    </div>
</div>