<script>
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
    import Secciones from "./Secciones.svelte";
    import { createStorageProxy } from "$lib/filtros/filtros";
    import { onMount } from "svelte";

    let {
        limpiarCheck,
        setProxy,
        setFiltros,
        setProxyChecks,
        setFiltrosChecks,
        checked_identificacion = $bindable(true),
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
        checked_otros = $bindable(true),
        unidad = $bindable(""),
        area = $bindable(""),
        fechadesde = $bindable(""),
        fechahasta = $bindable(""),

        dnimadre = $bindable(""),
        nombremadre = $bindable(""),
        dnirn = $bindable(""),
        nombrern = $bindable(""),
        nacdesde = $bindable(""),
        nachasta = $bindable(""),
        sexorn = $bindable(""),
        egresodesde = $bindable(""),
        egresohasta = $bindable(""),

        tipoingreso = $bindable(""),
        ingresodesde = $bindable(""),
        ingresohasta = $bindable(""),
        tipoparto = $bindable(""),
        partodomicilio = $bindable(""),
        apgar_1 = $bindable(""),
        apgar_5 = $bindable(""),
        apgar_10 = $bindable(""),
        gestaciondesde = $bindable(""),
        gestacionhasta = $bindable(""),
        rciu = $bindable(""),
        temperatura_ingreso = $bindable(""),
        rem = $bindable(""),
        reanimacion = $bindable(""),
        liquido = $bindable(""),
        fallece = $bindable(""),


        peso_rn = $bindable(""),
        peso_7 = $bindable(""),
        peso_14 = $bindable(""),
        peso_21 = $bindable(""),
        peso_28 = $bindable(""),
        peso_36 = $bindable(""),
        cefalico_rn = $bindable(""),
        cefalico_7 = $bindable(""),
        cefalico_14 = $bindable(""),
        cefalico_21 = $bindable(""),
        cefalico_28 = $bindable(""),
        cefalico_36 = $bindable(""),
        talla_rn = $bindable(""),
        talla_7 = $bindable(""),
        talla_14 = $bindable(""),
        talla_21 = $bindable(""),
        talla_28 = $bindable(""),
        talla_36 = $bindable(""),
        scorez_rn = $bindable(""),
        scorez_7 = $bindable(""),
        scorez_14 = $bindable(""),
        scorez_21 = $bindable(""),
        scorez_28 = $bindable(""),
        scorez_36 = $bindable(""),
        recuperarpesodesde = $bindable(""),
        recuperarpesohasta = $bindable(""),


        edad_materna = $bindable(""),
        niveleducativo = $bindable(""),
        paridad = $bindable(""),
        gemelos = $bindable(""),
        controlparental = $bindable(""),
        tabaquismo = $bindable(""),
        adiccion = $bindable(""),
        egb = $bindable(""),
        sulfato = $bindable(""),
        diabetes = $bindable(""),
        colico = $bindable(""),
        congenita = $bindable(""),
        itu = $bindable(""),
        desprendimiento = $bindable(""),
        ht = $bindable(""),
        hie = $bindable(""),
        preeclampisa = $bindable(""),
        eclampsia = $bindable(""),
        colestasis = $bindable(""),
        umbilicalvenoso = $bindable(""),
        umbilicalarterial = $bindable(""),
        percutaneo = $bindable(""),
        central = $bindable(""),
        trofica = $bindable(""),
        volumenenteral = $bindable(""),
        caloriasenteral = $bindable(""),
        tipoenteral = $bindable(""),
        nutricionparental = $bindable(""),
        edadnpt = $bindable(""),
        duracionnpt = $bindable(""),
        comienzoaa = $bindable(""),
        aporteaa = $bindable(""),
        comienzolipido = $bindable(""),
        aportelipido = $bindable(""),
        tempranoestado = $bindable(""),
        tempranogermen = $bindable(""),
        tempranoantibiotico = $bindable(""),
        tempranoatb = $bindable(""),
        tardeestado = $bindable(""),
        tardegermen = $bindable(""),
        tardeantibiotico = $bindable(""),
        tardeatb = $bindable(""),
        emh = $bindable(""),
        apena = $bindable(""),
        neumotorax = $bindable(""),
        taquipnea = $bindable(""),
        hipertension = $bindable(""),
        interstecial = $bindable(""),
        dbp = $bindable(""),
        oxigeno = $bindable(""),
        surfactante = $bindable(""),
        arm = $bindable(""),
        intubado = $bindable(""),
        vafo = $bindable(""),
        cpap = $bindable(""),
        oaf = $bindable(""),
        cbf = $bindable(""),
        cafeina = $bindable(""),
        aminofilina = $bindable(""),
        corticoideinhalado = $bindable(""),
        corticoidepostnatal = $bindable(""),
        oxidonitrico = $bindable(""),
        ductus = $bindable(""),
        cardiocongenita = $bindable(""),
        dopamina = $bindable(""),
        dobutamina = $bindable(""),
        adrenalina = $bindable(""),
        milrinona = $bindable(""),
        vasopresina = $bindable(""),
        furosemida = $bindable(""),
        espironolacta = $bindable(""),
        hidrocloritiazida = $bindable(""),
        tgr = $bindable(""),
        plasma = $bindable(""),
        inmunoglobina = $bindable(""),
        transfusion = $bindable(""),
        hiv = $bindable(""),
        convulsiones = $bindable(""),
        ehi = $bindable(""),
        hipo = $bindable(""),
        fondoojo = $bindable(""),
        rop = $bindable(""),
        tratamientorop = $bindable(""),
        nec = $bindable(""),
        perforacion = $bindable(""),
        onfalocele = $bindable(""),
        gastrosquisis = $bindable(""),
        atresia = $bindable(""),
        tqt = $bindable(""),
        drenajepleural = $bindable(""),
        drenajeventricular = $bindable(""),
        trisomia21 = $bindable(""),
        trisomia13 = $bindable(""),
        trisomia18 = $bindable(""),
        vacterl = $bindable(""),
        turner = $bindable(""),
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
        malformacionescongenitas = $bindable(""),
        cirugias = $bindable(""),
        complicaciones = $bindable(""),
    } = $props();

    onMount(() => {});
</script>

<!-- Collapsible Sections -->

<div class="space-y-2 grid lg:grid-cols-1 grid-cols-1 gap-2">
    <!-- Secciones -->

    <Collapse titulo="Secciones">
        <Secciones
            show={true}
            bind:checked_identificacion
            bind:checked_ingreso
            bind:checked_antropometria
            bind:checked_maternos
            bind:checked_respiratorias
            bind:checked_neurologicas
            bind:checked_medicacion
            bind:checked_avanzados
            bind:checked_cateteres
            bind:checked_alimentacion
            bind:checked_infecciones
            bind:checked_cardiovascular
            bind:checked_inotropicos
            bind:checked_sangre
            bind:checked_oftalmologia
            bind:checked_digestivo
            bind:checked_genetica
            bind:checked_otros
        />
    </Collapse>

    <!-- Basico -->

    <Collapse titulo="Basico">
        <Basicos
            show={true}
            bind:unidad
            bind:area
            bind:fechadesde
            bind:fechahasta
        />
    </Collapse>

    <!-- Identificación y Datos Filiatorios -->
    <Collapse
        titulo="Identificación y Datos Filiatorios"
        bind:show={checked_identificacion}
    >
        <Filiatorios
            bind:dnimadre
            bind:nombremadre
            bind:dnirn
            bind:nombrern
            bind:nacdesde
            bind:nachasta
            bind:sexorn
            bind:egresodesde
            bind:egresohasta
        />
    </Collapse>

    <!-- Datos ingreso -->
    <Collapse titulo="Datos del Ingreso" bind:show={checked_ingreso}>
        <Ingreso 
bind:tipoingreso
bind:ingresodesde
bind:ingresohasta
bind:tipoparto
bind:partodomicilio
bind:apgar_1
bind:apgar_5
bind:apgar_10
bind:gestaciondesde
bind:gestacionhasta
bind:rciu
bind:temperatura_ingreso
bind:rem
bind:reanimacion
bind:liquido
bind:fallece
        />
    </Collapse>

    <!-- Antropometria -->
    <Collapse titulo="Antropometría" bind:show={checked_antropometria}>
        <Antropometria 
bind:peso_rn
bind:peso_7
bind:peso_14
bind:peso_21
bind:peso_28
bind:peso_36
bind:cefalico_rn
bind:cefalico_7
bind:cefalico_14
bind:cefalico_21
bind:cefalico_28
bind:cefalico_36
bind:talla_rn
bind:talla_7
bind:talla_14
bind:talla_21
bind:talla_28
bind:talla_36
bind:scorez_rn
bind:scorez_7
bind:scorez_14
bind:scorez_21
bind:scorez_28
bind:scorez_36
bind:recuperarpesodesde
bind:recuperarpesohasta
        />
    </Collapse>

    <!-- Datos maternos -->
    <Collapse titulo="Datos Maternos" bind:show={checked_maternos}>
        <Materno />
    </Collapse>

    <!-- Catéteres -->
    <Collapse titulo="Catéteres" bind:show={checked_cateteres}>
        <Cateteres />
    </Collapse>

    <!-- Alimentación -->
    <Collapse titulo="Alimentación" bind:show={checked_alimentacion}>
        <Alimentacion />
    </Collapse>

    <!-- Infecciones -->
    <Collapse titulo="Infecciones" bind:show={checked_infecciones}>
        <Infecciones />
    </Collapse>

    <!-- Respiratorio -->
    <Collapse
        titulo="Patologías Respiratorias"
        bind:show={checked_respiratorias}
    >
        <Respiratorio />
    </Collapse>

    <!-- Cardiovascular y ductus -->
    <Collapse titulo="Cardiovascular" bind:show={checked_cardiovascular}>
        <Cardio />
    </Collapse>

    <!-- Inotrópicos y Diuréticos -->
    <Collapse titulo="Inotrópicos" bind:show={checked_inotropicos}>
        <Intropico />
    </Collapse>

    <!-- Sangre -->
    <Collapse titulo="Hematología y Transfusiones" bind:show={checked_sangre}>
        <Hemoderiva />
    </Collapse>

    <!-- Neurologico -->
    <Collapse titulo="Patologías Neurológicas" bind:show={checked_neurologicas}>
        <Neuro />
    </Collapse>

    <!-- Oftamología -->
    <Collapse titulo="Oftalmología" bind:show={checked_oftalmologia}>
        <Oftamologia />
    </Collapse>

    <!-- Digestivo y Quirúrgico -->
    <Collapse titulo="Sistema Digestivo" bind:show={checked_digestivo}>
        <Digestivo />
    </Collapse>

    <!-- Genética -->
    <Collapse titulo="Antecedentes Genéticos" bind:show={checked_genetica}>
        <Genetica />
    </Collapse>

    <!-- Medicación -->
    <Collapse titulo="Medicación" bind:show={checked_medicacion}>
        <Medicacion />
    </Collapse>

    <!-- Otros -->
    <Collapse titulo="Otros" bind:show={checked_otros}>
        <Otros />
    </Collapse>
</div>
