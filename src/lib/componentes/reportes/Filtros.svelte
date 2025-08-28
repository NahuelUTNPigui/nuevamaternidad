<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Collapse from "./Collapse.svelte";
    import Basicos from "./Basicos.svelte";
    import Filiatorios from "./Filiatorios.svelte";
    import Ingreso from "./Ingreso.svelte";
    import Antropometria from "./Antropometria.svelte";
    import Materno from "./Materno.svelte";
    import Cateteres from "./Cateteres.svelte";
    import Alimentacion from "./Alimentacion.svelte";
    import Infecciones from "./Infecciones.svelte";
    import Respiratorio from "./Respiratorio.svelte";
    import Cardio from "./Cardio.svelte";
    import Intropico from "./Intropico.svelte";
    import Hemoderiva from "./Hemoderiva.svelte";
    import Neuro from "./Neuro.svelte";
    import Oftamologia from "./Oftamologia.svelte";
    import Digestivo from "./Digestivo.svelte";
    import Genetica from "./Genetica.svelte";
    import Medicacion from "./Medicacion.svelte";
    import Otros from "./Otros.svelte";
    let oscuro = $derived(darker.oscurostate);
    function td(_oscuro, o1, o2) {
        return toDark(_oscuro, o1, o2);
    }
    
</script>

<!-- Collapsible Sections -->

<div class="space-y-2 grid lg:grid-cols-1 grid-cols-1 gap-2">


    <!-- Basico -->
    
    <Collapse
        titulo="Basico"
    >
        <Basicos/>
    </Collapse>
    
    <!-- Identificación y Datos Filiatorios -->
    <Collapse
        titulo="Identificación y Datos Filiatorios"
    >
        <Filiatorios/>
    </Collapse>
    <!-- Datos ingreso -->
    <Collapse
        titulo="Datos ingreso"
    >
        <Ingreso/>
    </Collapse>
    <!-- Antropometria -->
    <Collapse
        titulo="Antropometria"
    >
        <Antropometria/>
    </Collapse>
    <!-- Datos maternos -->
    <Collapse
        titulo="Datos maternos"
    >
        <Materno/>
    </Collapse>
    <!-- Catéteres -->
    <Collapse
        titulo="Catéteres"
    >
        <Cateteres/>
    </Collapse>
    <!-- Alimentación -->
    <Collapse
        titulo="Alimentación"
    >
        <Alimentacion/>
    </Collapse>
    <!-- Infecciones -->
    <Collapse
        titulo="Infecciones"
    >
        <Infecciones />
    </Collapse>
    <!-- Respiratorio -->
    <Collapse
        titulo="Respiratorio"
    >
        <Respiratorio/>
    </Collapse>
    <!-- Cardiovascular y ductus -->
    <Collapse
        titulo="Cardiovascular y ductus"
    >
        <Cardio/>
    </Collapse>
    <!-- Inotrópicos y Diuréticos  -->
    <Collapse
        titulo="Inotrópicos y Diuréticos"
    >
        <Intropico/>
    </Collapse>
    <!-- Sangre  -->
    <Collapse
        titulo="Sangre"
    >
        <Hemoderiva/>
    </Collapse>
    <!-- Neurologico  -->
    <Collapse
        titulo="Neurologico"
    >
        <Neuro/>
    </Collapse>
    <!-- Oftamología  -->
    <Collapse
        titulo="Oftamología"
    >
        <Oftamologia/>
    </Collapse>
    <!-- Digestivo y Quirúrgico  -->
    <Collapse
        titulo="Digestivo y Quirúrgico"
    >
        <Digestivo />
    </Collapse>
    <!-- Genética  -->
    <Collapse
        titulo="Genética"
    >
        <Genetica/>
    </Collapse>
    <!-- Medicación  -->
    <Collapse
        titulo="Medicación"
    >
        <Medicacion/>
    </Collapse>
    <!-- Otros  -->
    <Collapse
        titulo="Otros"
    >
        <Otros/>
    </Collapse>
</div>
