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
    import Diagnostico from "./Diagnostico.svelte";
    import Secciones from "./Secciones.svelte";
    import { createStorageProxy } from "$lib/filtros/filtros";
    import { onMount } from "svelte";
    import Alta from "./Alta.svelte";

    let {
        cambiarFiltro,
        cambiarCheck,
        setProxy,
        setFiltros,
        setProxyChecks,
        setFiltrosChecks,
        areas=$bindable([]),
        unidades=$bindable([]),
        unidadesarea=$bindable([]),
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
        checked_alta = $bindable(true),
        checked_otros = $bindable(true),
        checked_diagnostico = $bindable(true),
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
        apgar_1hasta = $bindable(""),
        apgar_5hasta = $bindable(""),
        apgar_10hasta = $bindable(""),
        gestacion=$bindable(""),
        gestaciondesde = $bindable(""),
        gestacionhasta = $bindable(""),
        rciu = $bindable(""),
        temperatura_ingreso = $bindable(""),
        temperatura_ingresohasta = $bindable(""),        
        rem = $bindable(""),
        reanimacion = $bindable(""),
        liquido = $bindable(""),
        fallece = $bindable(""),

        peso_actual = $bindable(""),
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
        peso_actualhasta = $bindable(""),
        peso_rnhasta = $bindable(""),
        peso_7hasta = $bindable(""),
        peso_14hasta = $bindable(""),
        peso_21hasta = $bindable(""),
        peso_28hasta = $bindable(""),
        peso_36hasta = $bindable(""),
        cefalico_rnhasta = $bindable(""),
        cefalico_7hasta = $bindable(""),
        cefalico_14hasta = $bindable(""),
        cefalico_21hasta = $bindable(""),
        cefalico_28hasta = $bindable(""),
        cefalico_36hasta = $bindable(""),
        talla_rnhasta = $bindable(""),
        talla_7hasta = $bindable(""),
        talla_14hasta = $bindable(""),
        talla_21hasta = $bindable(""),
        talla_28hasta = $bindable(""),
        talla_36hasta = $bindable(""),
        scorez_rnhasta = $bindable(""),
        scorez_7hasta = $bindable(""),
        scorez_14hasta = $bindable(""),
        scorez_21hasta = $bindable(""),
        scorez_28hasta = $bindable(""),
        scorez_36hasta = $bindable(""),
        
        recuperarpeso = $bindable(""),
        recuperarpesodesde = $bindable(""),
        recuperarpesohasta = $bindable(""),

        edad_materna = $bindable(""),
        edad_maternahasta = $bindable(""),
        niveleducativo = $bindable(""),
        paridad = $bindable(""),
        paridadhasta = $bindable(""),
        gemelos = $bindable(""),
        controlparental = $bindable(""),
        corticoideprenatal=$bindable(""),
        tabaquismo = $bindable(""),
        adiccion = $bindable(""),
        egb = $bindable(""),
        crioaminintis = $bindable(""),
        sulfato = $bindable(""),
        diabetes = $bindable(""),
        colico = $bindable(""),
        congenita = $bindable(""),
        itu = $bindable(""),
        desprendimiento = $bindable(""),
        sufrimiento = $bindable(""),
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
        edadnpthasta = $bindable(""),
        duracionnpthasta = $bindable(""),
        comienzoaahasta = $bindable(""),
        aporteaahasta = $bindable(""),
        comienzolipidohasta = $bindable(""),
        aportelipidohasta = $bindable(""),

        tempranoestado = $bindable(""),
        tempranogermen = $bindable(""),
        tempranoantibiotico = $bindable(""),
        tempranoatb = $bindable(""),
        tempranoatbhasta = $bindable(""),
        tardeestado = $bindable(""),
        tardegermen = $bindable(""),
        tardeantibiotico = $bindable(""),
        tardeatb = $bindable(""),
        tardeatbhasta = $bindable(""),
        salam=$bindable(""),
        emh = $bindable(""),
        ndosissurfactante = $bindable(""),
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
        plaqueta = $bindable(""),
        inmunoglobina = $bindable(""),
        tgrhasta = $bindable(""),
        plasmahasta = $bindable(""),
        plaquetahasta = $bindable(""),
        inmunoglobinahasta = $bindable(""),
        transfusion = $bindable(""),

        hiv = $bindable(""),
        ecotf = $bindable(""),
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
        protectorgastricohasta = $bindable(""),
        inhibidorhasta = $bindable(""),
        probioticohasta = $bindable(""),
        eritromicinahasta = $bindable(""),
        fentanilohasta = $bindable(""),
        morfinahasta = $bindable(""),
        midozolamhasta = $bindable(""),
        precedexhasta = $bindable(""),
        metadonahasta = $bindable(""),
        vecuroniohasta = $bindable(""),
        prostaglandinashasta = $bindable(""),


        malformacionescongenitas = $bindable(""),
        cirugias = $bindable(""),
        complicaciones = $bindable(""),

        diagnostico = $bindable(""),
        conalta = $bindable(""),
        tipoalta = $bindable(""),
        altadesde = $bindable(""),
        altahasta = $bindable(""),
    } = $props();

    let modedebug = import.meta.env.VITE_DEBUG == "si";

    onMount(() => {});
    //verdes
    //<!-- Basico -->
    let verdebasico = $derived(
        unidad.length > 0 ||
            area.length > 0 ||
            fechadesde.length > 0 ||
            fechahasta.length > 0,
    );
    //<!-- Identificación y Datos Filiatorios -->
    let verdefilia = $derived(
        dnimadre.length > 0 ||
            nombremadre.length > 0 ||
            dnirn.length > 0 ||
            nombrern.length > 0 ||
            nacdesde.length > 0 ||
            nachasta.length > 0 ||
            sexorn.length > 0 ||
            egresodesde.length > 0 ||
            egresohasta.length > 0,
    );
    //<!-- Datos ingreso -->
    let verdeingreso = $derived(
        tipoingreso.length > 0 ||
            ingresodesde.length > 0 ||
            ingresohasta.length > 0 ||
            tipoparto.length > 0 ||
            partodomicilio.length > 0 ||
            apgar_1.length > 0 ||
            apgar_5.length > 0 ||
            apgar_10.length > 0 ||
            apgar_1hasta.length > 0 ||
            apgar_5hasta.length > 0 ||
            apgar_10hasta.length > 0 ||
            gestacion.length > 0  ||
            gestaciondesde.length > 0 ||
            gestacionhasta.length > 0 ||
            rciu.length > 0 ||
            temperatura_ingreso.length > 0 ||
            temperatura_ingresohasta.length > 0 ||
            rem.length > 0 ||
            reanimacion.length > 0 ||
            liquido.length > 0 ||
            fallece === 0 || fallece === 1,
    );
    //<!-- Antropometria -->
    let verdeantro = $derived(
            peso_actual.length > 0||
            peso_rn.length > 0 ||
            peso_7.length > 0 ||
            peso_14.length > 0 ||
            peso_21.length > 0 ||
            peso_28.length > 0 ||
            peso_36.length > 0 ||
            cefalico_rn.length > 0 ||
            cefalico_7.length > 0 ||
            cefalico_14.length > 0 ||
            cefalico_21.length > 0 ||
            cefalico_28.length > 0 ||
            cefalico_36.length > 0 ||
            talla_rn.length > 0 ||
            talla_7.length > 0 ||
            talla_14.length > 0 ||
            talla_21.length > 0 ||
            talla_28.length > 0 ||
            talla_36.length > 0 ||
            scorez_rn.length > 0 ||
            scorez_7.length > 0 ||
            scorez_14.length > 0 ||
            scorez_21.length > 0 ||
            scorez_28.length > 0 ||
            scorez_36.length > 0 ||
            peso_actualhasta.length > 0||
            peso_rnhasta.length > 0 ||
            peso_7hasta.length > 0 ||
            peso_14hasta.length > 0 ||
            peso_21hasta.length > 0 ||
            peso_28hasta.length > 0 ||
            peso_36hasta.length > 0 ||
            cefalico_rnhasta.length > 0 ||
            cefalico_7hasta.length > 0 ||
            cefalico_14hasta.length > 0 ||
            cefalico_21hasta.length > 0 ||
            cefalico_28hasta.length > 0 ||
            cefalico_36hasta.length > 0 ||
            talla_rnhasta.length > 0 ||
            talla_7hasta.length > 0 ||
            talla_14hasta.length > 0 ||
            talla_21hasta.length > 0 ||
            talla_28hasta.length > 0 ||
            talla_36hasta.length > 0 ||
            scorez_rnhasta.length > 0 ||
            scorez_7hasta.length > 0 ||
            scorez_14hasta.length > 0 ||
            scorez_21hasta.length > 0 ||
            scorez_28hasta.length > 0 ||
            scorez_36hasta.length > 0 ||
            recuperarpesodesde.length > 0 ||
            recuperarpesohasta.length > 0,
    );
    //<!-- Datos maternos -->
    let verdematernos = $derived(
            edad_materna.length > 0 ||
            edad_maternahasta.length > 0 ||
            niveleducativo.length > 0 ||
            paridad.length > 0 ||
            paridadhasta.length > 0 ||
            gemelos.length > 0 ||
            controlparental.length > 0 ||
            corticoideprenatal.length > 0 ||
            tabaquismo.length > 0 ||
            adiccion.length > 0 ||
            egb.length > 0 ||
            crioaminintis.length > 0 ||
            sulfato.length > 0 ||
            diabetes.length > 0 ||
            colico.length > 0 ||
            congenita.length > 0 ||
            itu.length > 0 ||
            desprendimiento.length > 0 ||
            sufrimiento.length > 0 ||
            ht.length > 0 ||
            hie.length > 0 ||
            preeclampisa.length > 0 ||
            eclampsia.length > 0 ||
            colestasis.length > 0,
    );
    //<!-- Catéteres -->
    let verdecate = $derived(
        umbilicalvenoso.length > 0 ||
            umbilicalarterial.length > 0 ||
            percutaneo.length > 0 ||
            central.length > 0,
    );
    //<!-- Alimentación -->
    let verdealimentacion = $derived(
        trofica.length > 0 ||
            volumenenteral.length > 0 ||
            caloriasenteral.length > 0 ||
            tipoenteral.length > 0 ||
            nutricionparental.length > 0 ||
            edadnpt.length > 0 ||
            duracionnpt.length > 0 ||
            comienzoaa.length > 0 ||
            aporteaa.length > 0 ||
            comienzolipido.length > 0 ||
            aportelipido.length > 0||
            edadnpthasta.length > 0 ||
            duracionnpthasta.length > 0 ||
            comienzoaahasta.length > 0 ||
            aporteaahasta.length > 0 ||
            comienzolipidohasta.length > 0 ||
            aportelipidohasta.length > 0,
    );
    //<!-- Infecciones -->
    let verdeInfecciones = $derived(
        tempranoestado.length > 0 ||
            tempranogermen.length > 0 ||
            tempranoantibiotico.length > 0 ||
            tempranoatb.length > 0 ||
            tempranoatbhasta.length > 0 ||
            tardeestado.length > 0 ||
            tardegermen.length > 0 ||
            tardeantibiotico.length > 0 ||
            tardeatb.length > 0||
            tardeatbhasta.length > 0,
    );
    //<!-- Respiratorio -->
    let verdeRespiratorio = $derived(
        emh.length > 0 ||
        ndosissurfactante.length>0||
        salam.length>0||
        apena.length > 0 ||
        neumotorax.length > 0 ||
        taquipnea.length > 0 ||
        hipertension.length > 0 ||
        interstecial.length > 0 ||
        dbp.length > 0 ||
        oxigeno.length > 0 ||
        surfactante.length > 0 ||
        arm.length > 0 ||
        intubado.length > 0 ||
        vafo.length > 0 ||
        cpap.length > 0 ||
        oaf.length > 0 ||
        cbf.length > 0 ||
        cafeina.length > 0 ||
        aminofilina.length > 0 ||
        corticoideinhalado.length > 0 ||
        corticoidepostnatal.length > 0 ||
        oxidonitrico.length > 0,
    );
    //<!-- Cardiovascular y ductus -->
    let verdeductus = $derived(ductus.length > 0 || cardiocongenita.length > 0);
    //<!-- Inotrópicos y Diuréticos -->
    let verdeinotro = $derived(
        dopamina.length > 0 ||
        dobutamina.length > 0 ||
        adrenalina.length > 0 ||
        milrinona.length > 0 ||
        vasopresina.length > 0 ||
        furosemida.length > 0 ||
        espironolacta.length > 0 ||
        hidrocloritiazida.length > 0,
    );
    //<!-- Sangre -->
    let verdeSangre = $derived(
            tgr.length > 0 ||
            plaqueta.length > 0 ||
            plasma.length > 0 ||
            inmunoglobina.length > 0 ||
            tgrhasta.length > 0 ||
            plaquetahasta.length > 0 ||
            plasmahasta.length > 0 ||
            inmunoglobinahasta.length > 0 ||
            transfusion.length > 0,
    );
    //<!-- Neurologico -->
    let verdeNeurologico = $derived(
        ecotf.length>0||
        hiv.length > 0 ||
            convulsiones.length > 0 ||
            ehi.length > 0 ||
            hipo.length > 0,
    );
    //<!-- Oftamología -->
    let verdeofta = $derived(
        fondoojo.length > 0 || rop.length > 0 || tratamientorop.length > 0,
    );
    //<!-- Digestivo y Quirúrgico -->
    let verdediges = $derived(
        nec.length > 0 ||
        perforacion.length > 0 ||
        onfalocele.length > 0 ||
        gastrosquisis.length > 0 ||
        atresia.length > 0 ||
        tqt.length > 0 ||
        drenajepleural.length > 0 ||
        drenajeventricular.length > 0,
    );
    //<!-- Genética -->
    let verdegen = $derived(
        trisomia21.length > 0 ||
            trisomia13.length > 0 ||
            trisomia18.length > 0 ||
            vacterl.length > 0 ||
            turner.length > 0,
    );
    //<!-- medicacion -->
    let verdemedicacion = $derived(
        protectorgastrico.length>0||
        inhibidor.length>0||
        probiotico.length>0||
        eritromicina.length>0||
        fentanilo.length>0||
        morfina.length>0||
        midozolam.length>0||
        precedex.length>0||
        metadona.length>0||
        vecuronio.length>0||
        prostaglandinas.length>0||
        protectorgastricohasta.length>0||
        inhibidorhasta.length>0||
        probioticohasta.length>0||
        eritromicinahasta.length>0||
        fentanilohasta.length>0||
        morfinahasta.length>0||
        midozolamhasta.length>0||
        precedexhasta.length>0||
        metadonahasta.length>0||
        vecuroniohasta.length>0||
        prostaglandinashasta.length>0
    );
    //<!-- otros -->
    let verdeotros = $derived(
        malformacionescongenitas.length>0||
        cirugias.length>0||
        complicaciones.length>0
    );
    //<!-- diagnostico -->
    let verdediagnostico = $derived(
        diagnostico.length>0
    );
    //<!-- otros -->
    //let  = $derived(
    //    malformacionescongenitas.length>0||
    //    cirugias.length>0||
    //    complicaciones.length>0
    //);
</script>

<!-- Collapsible Sections -->

<div class="space-y-2 grid lg:grid-cols-1 grid-cols-1 gap-2">
    <!-- Secciones -->

    <Collapse titulo="Secciones">
        <Secciones
            show={true}
            {cambiarCheck}
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
            bind:checked_alta
            bind:checked_otros
            bind:checked_diagnostico

bind:verdebasico
bind:verdefilia
bind:verdeingreso
bind:verdeantro
bind:verdematernos
bind:verdecate
bind:verdealimentacion
bind:verdeInfecciones
bind:verdeRespiratorio
bind:verdeductus
bind:verdeinotro
bind:verdeSangre
bind:verdeNeurologico
bind:verdeofta
bind:verdediges
bind:verdegen
bind:verdemedicacion
bind:verdeotros
bind:verdediagnostico
            
        />
    </Collapse>

    <!-- Basico -->

    <Collapse titulo="Basico" bind:verde={verdebasico}>
        {#if modedebug}
            {unidad.length}
            {area.length}
            {fechadesde.length}
            {fechahasta.length}
        {/if}
        <Basicos
            show={true}
            {cambiarFiltro}
            bind:unidades
            bind:areas
            bind:unidadesarea
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
        bind:verde={verdefilia}
    >
        <Filiatorios
            {cambiarFiltro}
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
    <Collapse
        titulo="Datos del Ingreso"
        bind:show={checked_ingreso}
        bind:verde={verdeingreso}
    >
        <Ingreso
            {cambiarFiltro}
            bind:tipoingreso
            bind:ingresodesde
            bind:ingresohasta
            bind:tipoparto
            bind:partodomicilio
            bind:apgar_1
            bind:apgar_5
            bind:apgar_10
            bind:apgar_1hasta
            bind:apgar_5hasta
            bind:apgar_10hasta
            bind:gestaciondesde
            bind:gestacion
            bind:gestacionhasta
            bind:rciu
            bind:temperatura_ingreso
            bind:temperatura_ingresohasta
            bind:rem
            bind:reanimacion
            bind:liquido
            bind:fallece
        />
    </Collapse>

    <!-- Antropometria -->
    <Collapse
        titulo="Antropometría"
        bind:show={checked_antropometria}
        bind:verde={verdeantro}
    >
        <Antropometria
            {cambiarFiltro}
            bind:peso_actual
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
            bind:peso_actualhasta
            bind:peso_rnhasta
            bind:peso_7hasta
            bind:peso_14hasta
            bind:peso_21hasta
            bind:peso_28hasta
            bind:peso_36hasta
            bind:cefalico_rnhasta
            bind:cefalico_7hasta
            bind:cefalico_14hasta
            bind:cefalico_21hasta
            bind:cefalico_28hasta
            bind:cefalico_36hasta
            bind:talla_rnhasta
            bind:talla_7hasta
            bind:talla_14hasta
            bind:talla_21hasta
            bind:talla_28hasta
            bind:talla_36hasta
            bind:scorez_rnhasta
            bind:scorez_7hasta
            bind:scorez_14hasta
            bind:scorez_21hasta
            bind:scorez_28hasta
            bind:scorez_36hasta
            bind:recuperarpesodesde
            bind:recuperarpesohasta
        />
    </Collapse>

    <!-- Datos maternos -->
    <Collapse
        titulo="Datos Maternos"
        bind:show={checked_maternos}
        bind:verde={verdematernos}
    >
        <Materno
            {cambiarFiltro}
            bind:edad_materna
            bind:edad_maternahasta
            bind:niveleducativo
            bind:paridad
            bind:paridadhasta
            bind:gemelos
            bind:controlparental
            bind:tabaquismo
            bind:adiccion
            bind:egb
            bind:crioaminintis
            bind:sulfato
            bind:diabetes
            bind:colico
            bind:congenita
            bind:itu
            bind:desprendimiento
            bind:sufrimiento
            bind:ht
            bind:hie
            bind:preeclampisa
            bind:eclampsia
            bind:colestasis
        />
    </Collapse>

    <!-- Catéteres -->
    <Collapse
        titulo="Catéteres"
        bind:show={checked_cateteres}
        bind:verde={verdecate}
    >
        <Cateteres
            {cambiarFiltro}
            bind:umbilicalvenoso
            bind:umbilicalarterial
            bind:percutaneo
            bind:central
        />
    </Collapse>

    <!-- Alimentación -->
    <Collapse
        titulo="Alimentación"
        bind:show={checked_alimentacion}
        bind:verde={verdealimentacion}
    >
        <Alimentacion
            {cambiarFiltro}
            bind:trofica
            bind:volumenenteral
            bind:caloriasenteral
            bind:tipoenteral
            bind:nutricionparental
            bind:edadnpt
            bind:duracionnpt
            bind:comienzoaa
            bind:aporteaa
            bind:comienzolipido
            bind:aportelipido
            bind:edadnpthasta
            bind:duracionnpthasta
            bind:comienzoaahasta
            bind:aporteaahasta
            bind:comienzolipidohasta
            bind:aportelipidohasta
        />
    </Collapse>

    <!-- Infecciones -->
    <Collapse
        titulo="Infecciones"
        bind:show={checked_infecciones}
        bind:verde={verdeInfecciones}
    >
        <Infecciones
            {cambiarFiltro}
            bind:tempranoestado
            bind:tempranogermen
            bind:tempranoantibiotico
            bind:tempranoatb
            bind:tempranoatbhasta
            bind:tardeestado
            bind:tardegermen
            bind:tardeantibiotico
            bind:tardeatb
            bind:tardeatbhasta
        />
    </Collapse>

    <!-- Respiratorio -->
    <Collapse
        titulo="Patologías Respiratorias"
        bind:show={checked_respiratorias}
        bind:verde={verdeRespiratorio}
    >
        <Respiratorio
            {cambiarFiltro}
            bind:emh
            bind:ndosissurfactante
            bind:salam
            bind:apena
            bind:neumotorax
            bind:taquipnea
            bind:hipertension
            bind:interstecial
            bind:dbp
            bind:oxigeno
            bind:surfactante
            bind:arm
            bind:intubado
            bind:vafo
            bind:cpap
            bind:oaf
            bind:cbf
            bind:cafeina
            bind:aminofilina
            bind:corticoideinhalado
            bind:corticoidepostnatal
            bind:oxidonitrico
        />
    </Collapse>

    <!-- Cardiovascular y ductus -->
    <Collapse
        titulo="Cardiovascular"
        bind:show={checked_cardiovascular}
        bind:verde={verdeductus}
    >
        <Cardio {cambiarFiltro} bind:ductus bind:cardiocongenita />
    </Collapse>

    <!-- Inotrópicos y Diuréticos -->
    <Collapse
        titulo="Inotrópicos y Diuréticos"
        bind:show={checked_inotropicos}
        bind:verde={verdeinotro}
    >
        <Intropico
            {cambiarFiltro}
            bind:dopamina
            bind:dobutamina
            bind:adrenalina
            bind:milrinona
            bind:vasopresina
            bind:furosemida
            bind:espironolacta
            bind:hidrocloritiazida
        />
    </Collapse>

    <!-- Sangre -->
    <Collapse
        titulo="Hematología y Transfusiones"
        bind:show={checked_sangre}
        bind:verde={verdeSangre}
    >
        <Hemoderiva
            {cambiarFiltro}
            bind:tgr
            bind:plasma
            bind:plaqueta
            bind:inmunoglobina
            bind:tgrhasta
            bind:plasmahasta
            bind:plaquetahasta
            bind:inmunoglobinahasta
            bind:transfusion
        />
    </Collapse>

    <!-- Neurologico -->
    <Collapse
        titulo="Patologías Neurológicas"
        bind:show={checked_neurologicas}
        bind:verde={verdeNeurologico}
    >
        <Neuro {cambiarFiltro} bind:hiv bind:convulsiones bind:ehi bind:hipo bind:ecotf/>
    </Collapse>

    <!-- Oftamología -->
    <Collapse
        titulo="Oftalmología"
        bind:show={checked_oftalmologia}
        bind:verde={verdeofta}
    >
        <Oftamologia
            {cambiarFiltro}
            bind:fondoojo
            bind:rop
            bind:tratamientorop
        />
    </Collapse>

    <!-- Digestivo y Quirúrgico -->
    <Collapse
        titulo="Sistema Digestivo"
        bind:show={checked_digestivo}
        bind:verde={verdediges}
    >
        <Digestivo
            {cambiarFiltro}
            bind:nec
            bind:perforacion
            bind:onfalocele
            bind:gastrosquisis
            bind:atresia
            bind:tqt
            bind:drenajepleural
            bind:drenajeventricular
        />
    </Collapse>

    <!-- Genética -->
    <Collapse
        titulo="Antecedentes Genéticos"
        bind:show={checked_genetica}
        bind:verde={verdegen}
    >
        <Genetica
            {cambiarFiltro}
            bind:trisomia21
            bind:trisomia13
            bind:trisomia18
            bind:vacterl
            bind:turner
        />
    </Collapse>

    <!-- Medicación -->
    <Collapse 
        titulo="Medicación" 
        bind:show={checked_medicacion}
        bind:verde={verdemedicacion}
    >
        <Medicacion
            {cambiarFiltro}
            bind:protectorgastrico
            bind:inhibidor
            bind:probiotico
            bind:eritromicina
            bind:fentanilo
            bind:morfina
            bind:midozolam
            bind:precedex
            bind:metadona
            bind:vecuronio
            bind:prostaglandinas
            bind:protectorgastricohasta
            bind:inhibidorhasta
            bind:probioticohasta
            bind:eritromicinahasta
            bind:fentanilohasta
            bind:morfinahasta
            bind:midozolamhasta
            bind:precedexhasta
            bind:metadonahasta
            bind:vecuroniohasta
            bind:prostaglandinashasta
        />
    </Collapse>

    <!-- Otros -->
    <Collapse 
        titulo="Otros"
        bind:show={checked_otros}
        bind:verde={verdeotros}
    >
        <Otros
            {cambiarFiltro}
            bind:malformacionescongenitas
            bind:cirugias
            bind:complicaciones
        />
    </Collapse>
    <!-- Diagnostico -->
    <Collapse 
        titulo="Diagnostico"
        bind:show={checked_diagnostico}
        bind:verde={verdediagnostico}
    >
        <Diagnostico
            {cambiarFiltro}
            bind:diagnostico
        />
    </Collapse>
    <!-- Alta -->
    <Collapse 
        titulo="Alta"
        bind:show={checked_alta}
        bind:verde={verdeotros}
        
    >
        <Alta
            {cambiarFiltro}
            bind:conalta
            bind:tipoalta
            bind:altadesde
            bind:altahasta
        />
    </Collapse>
</div>

