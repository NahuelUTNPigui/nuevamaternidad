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
    let oscuro = $derived(darker.oscurostate);
    function td(_oscuro, o1, o2) {
        return toDark(_oscuro, o1, o2);
    }
</script>

<!-- Collapsible Sections -->

<div class="space-y-4 grid lg:grid-cols-1 grid-cols-1 gap-2">
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
        Infecciones
    </Collapse>
    <!-- Respiratorio -->
    <Collapse
        titulo="Respiratorio"
    >
        Respiratorio
    </Collapse>
    <!-- Cardiovascular y ductus -->
    <Collapse
        titulo="Cardiovascular y ductus"
    >
        Cardiovascular y ductus
    </Collapse>
    <!-- Inotrópicos y Diuréticos  -->
    <Collapse
        titulo="Inotrópicos y Diuréticos"
    >
        Inotrópicos y Diuréticos
    </Collapse>
    <!-- Sangre  -->
    <Collapse
        titulo="Sangre"
    >
        Sangre
    </Collapse>
    <!-- Neurologico  -->
    <Collapse
        titulo="Neurologico"
    >
        Neurologico
    </Collapse>
    <!-- Oftamología  -->
    <Collapse
        titulo="Oftamología"
    >
        Oftamología
    </Collapse>
    <!-- Digestivo y Quirúrgico  -->
    <Collapse
        titulo="Digestivo y Quirúrgico"
    >
        Digestivo y Quirúrgico
    </Collapse>
    <!-- Genética  -->
    <Collapse
        titulo="Genética"
    >
        Genética
    </Collapse>
    <!-- Medicación  -->
    <Collapse
        titulo="Medicación"
    >
        Medicación
    </Collapse>
    <!-- Otros  -->
    <Collapse
        titulo="Otros"
    >
        Otros
    </Collapse>
</div>
