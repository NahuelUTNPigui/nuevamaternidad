<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import constantes from "$lib/constantes";
    import Header from "$lib/componentes/bebe/Header.svelte";
    import Compartido from "$lib/componentes/bebe/Compartido.svelte";
    import Identificacion from "$lib/componentes/bebe/Identificacion.svelte";
    import Ingreso from "$lib/componentes/bebe/Ingreso.svelte";
    import Inter from "$lib/componentes/bebe/Inter.svelte";
    import Materno from "$lib/componentes/bebe/Materno.svelte";
    import Diagnostico from "$lib/componentes/bebe/Diagnostico.svelte";
    import Alta from "$lib/componentes/bebe/Alta.svelte";
    import Swal from "sweetalert2";
    import PocketBase from "pocketbase";
    import { onMount } from "svelte";

    import { page } from "$app/stores";

    import Antro from "$lib/componentes/bebe/Antro.svelte";
    import Otros from "$lib/componentes/bebe/Otros.svelte";
    let ruta = import.meta.env.VITE_RUTA;

    const pb = new PocketBase(ruta);

    let slug = $state("");
    let bebe = $state({});

    let bebeviejo = $state({});
    //pagina
    let modoedicion = $state(false);
    //Datos
    let nombre = $state("");
    let birthDate = $state("");
    let madre = $state("");
    let peso = $state("");
    let edadGestacional = $state("");
    let sexo = $state("");
    let hcbebe = $state("");
    //actualizado

    let nombremama = $state("");
    let dnimama = $state("");
    let hcmama = $state("");
    let unidadbebe = $state("");
    let areabebe = $state("");
    let nombrebebe = $state("");
    let dnibebe = $state("");
    let pesobebe = $state("");
    let fechanacimientobebe = $state("");
    let fechaingresobebe = $state("");
    let tipoingreso = $state("");
    let edad_gestacional = $state("")
    let pesoingresobebe = $state("");
    let active = $state("");
    let conalta = $state("");
    let identificacion = $state("");
    let codigo = $state("");
    let temperatura_ingreso = $state("");
    let tipo_parto = $state("");
    let rem = $state("");
    let parto_domiciliario = $state("");
    let liquido_meconial = $state("");
    let apgar_1 = $state("");
    let apgar_5 = $state("");
    let apgar_10 = $state("");
    let reanimacion = $state("");
    let fallece = $state("");
    let rciu = $state("");
    let area = $state("");
    let unidad = $state("");
    let diagnostico = $state("");
    let pesorn = $state("");
    let peso7d = $state("");
    let peso14d = $state("");
    let peso21d = $state("");
    let peso28d = $state("");
    let peso36sem = $state("");
    let tallarn = $state("");
    let talla7d = $state("");
    let talla14d = $state("");
    let talla21d = $state("");
    let talla28d = $state("");
    let talla36sem = $state("");
    let perimetrorn = $state("");
    let perimetro7d = $state("");
    let perimetro14d = $state("");
    let perimetro21d = $state("");
    let perimetro28d = $state("");
    let perimetro36sem = $state("");
    let scorezrn = $state("");
    let scorez7d = $state("");
    let scorez14d = $state("");
    let scorez21d = $state("");
    let scorez28d = $state("");
    let scorez36sem = $state("");
    let edadrecuperapeso = $state("")
    let fechanacimientomama = $state("");
    let educacionmama = $state("");
    let paridad = $state("");
    let gemelocantidad = $state("");
    let gemelonumero = $state("");
    let controlprenatal = $state("");
    let corticoideprenatal = $state("");
    let tabaquismo = $state("");
    let adiccion = $state("");
    let egb = $state("");
    let sulfatomg = $state("");
    let diabetesprevia = $state("");
    let diabetesgestacional = $state("");
    let crioaminitis = $state("");
    let infeccioncongenita = $state("");
    let itu = $state("");
    let desprendimientoplacenta = $state("");
    let sufrimientofetal = $state("");
    let htcronica = $state("");
    let hie = $state("");
    let eclampsia = $state("");
    let preeclampsia = $state("");
    let colestasis = $state("");
    let cateteresumbilicalvenoso = $state("");
    let cateteresumbilicalarterial = $state("");
    let percutanea = $state("");
    let viacentral = $state("");
    let alimentacionenteraltrofica = $state("");
    let alimentacionenteralcompletoedad = $state("");
    let alimentacionenteralcalorias = $state("");
    let tipoalimentacionenteral = $state("");
    let nutricionparenteral = $state("");
    let nptedadinicio = $state("");
    let nptduraciondias = $state("");
    let nptdiacomienzo = $state("");
    let nptaportetotal = $state("");
    let nptdiacomienzoaa = $state("");
    let nptaportetotalaa = $state("");
    let nptdiacomienzolipido = $state("");
    let nptaportetotallipido = $state("");
    let sepsistemprana = $state("");
    let sepsistempranagermen = $state("");
    let sepsistempranaatbdias = $state("");
    let sepsistardia = $state("");
    let sepsistardiagermen = $state("");
    let sepsistardiaatbdias = $state("");
    let emh = $state("");
    let ndosissurfactante = $state("");
    let salam = $state("");
    let apneas = $state("");
    let neumotorax = $state("");
    let taquipneatransitoria = $state("");
    let hipertpulmonar = $state("");
    let enfermedadintersticial = $state("");
    let bql = $state("");
    let dbp36sem = $state("");
    let o236sem = $state("");
    let surfactante = $state("");
    let arm = $state("");
    let intubadodesdeutpr = $state("");
    let vafo = $state("");
    let cpap = $state("");
    let oaf = $state("");
    let cbf = $state("");
    let cafeina = $state("");
    let aminofilina = $state("");
    let corticoideinhalado = $state("");
    let corticoidepostnatal = $state("");
    let oxidonitrico = $state("");
    let ductus = $state("");
    let ductusdiagnostico = $state("");
    let ductusttofarmacologico1ciclo = $state("");
    let ductusttofarmacologico2ciclo = $state("");
    let ductusttoquirurgico = $state("");
    let cardiopatiacongenita = $state("");
    let diagcc = $state("");
    let inotropicosdopamina = $state("");
    let inotropicosdobutamina = $state("");
    let inotropicosadrenalina = $state("");
    let inotropicosmilrinona = $state("");
    let inotropicosvasopresina = $state("");
    let diureticosfurosemida = $state("");
    let diureticosespironolac = $state("");
    let diureticoshidroclotiaz = $state("");
    let hemoderivadostgrn = $state("");
    let hemoderivadosplasman = $state("");
    let hemoderivadosplaquetasn = $state("");
    let hemoderivadosgamman = $state("");
    let exanguineotransfusion = $state("");
    let ecotf = $state("");
    let hivgrado = $state("");
    let convulsiones = $state("");
    let ehi = $state("");
    let hipotermiatipo = $state("");
    let fondoojo = $state("");
    let rop = $state("");
    let roptto = $state("");
    let necestadio = $state("");
    let perforacionunica = $state("");
    let onfalocele = $state("");
    let gastroquisis = $state("");
    let hdc = $state("");
    let hdcdiagnostico = $state("");
    let hdcttoquirurgico = $state("");
    let tot = $state("");
    let drenajepleural = $state("");
    let drenajeventricular = $state("");
    let geneticat21 = $state("");
    let geneticat13 = $state("");
    let geneticat18 = $state("");
    let geneticavacterl = $state("");
    let geneticaturner = $state("");
    let medprotectorgastricodias = $state("");
    let medinhibidorbombahdias = $state("");
    let medprobiodias = $state("");
    let meleritromicinadias = $state("");
    let medfentanilodias = $state("");
    let medmorfinadias = $state("");
    let medmidazolamdias = $state("");
    let medprecedexdias = $state("");
    let medmetadonadias = $state("");
    let medvecuroniadias = $state("");
    let medprostagldias = $state("");
    let malformacionescongenitas = $state("");
    let cirugias = $state("");
    let complicaciones = $state("");
    let observacion = $state("")
    let altafecha = $state("");
    let altadiagnosticos = $state("");
    let altacondiciones = $state("");

    //Combos
    let unidades = $state([]);
    let areas = $state([]);
    let unidadesarea = $derived(unidades.filter((u) => u.area == areabebe));

    //Datos viejos
    let nombreviejo = $state("");
    let birthDateviejo = $state("");
    let madreviejo = $state("");
    let pesoviejo = $state("");
    let edadGestacionalviejo = $state("");
    let sexoviejo = $state("");
    let clinicNumberviejo = $state("");
    //actualizado
    let nombremamaviejo = $state("");
    let dnimamaviejo = $state("");
    let hcmamaviejo = $state("");
    let nombrebebeviejo = $state("");
    let dnibebeviejo = $state("");
    let pesobebeviejo = $state("");
    let hcbebeviejo = $state("");
    let fechanacimientobebeviejo = $state("");
    let fechaingresobebeviejo = $state("");
    let tipoingresoviejo = $state("")
    let edad_gestacionalviejo=$state("")
    let pesoingresobebeviejo = $state("");
    let activeviejo = $state("");
    let conaltaviejo = $state("");
    let identificacionviejo = $state("");
    let codigoviejo = $state("");
    let temperatura_ingresoviejo = $state("");
    let tipo_partoviejo = $state("");
    let remviejo = $state("");
    let parto_domiciliarioviejo = $state("");
    let liquido_meconialviejo = $state("");
    let apgar_1viejo = $state("");
    let apgar_5viejo = $state("");
    let apgar_10viejo = $state("");
    let reanimacionviejo = $state("");
    let falleceviejo = $state("");
    let rciuviejo = $state("");
    let areaviejo = $state("");
    let unidadviejo = $state("");
    let diagnosticoviejo = $state("");
    let pesornviejo = $state("");
    let peso7dviejo = $state("");
    let peso14dviejo = $state("");
    let peso21dviejo = $state("");
    let peso28dviejo = $state("");
    let peso36semviejo = $state("");
    let tallarnviejo = $state("");
    let talla7dviejo = $state("");
    let talla14dviejo = $state("");
    let talla21dviejo = $state("");
    let talla28dviejo = $state("");
    let talla36semviejo = $state("");
    let perimetrornviejo = $state("");
    let perimetro7dviejo = $state("");
    let perimetro14dviejo = $state("");
    let perimetro21dviejo = $state("");
    let perimetro28dviejo = $state("");
    let perimetro36semviejo = $state("");
    let scorezrnviejo = $state("");
    let scorez7dviejo = $state("");
    let scorez14dviejo = $state("");
    let scorez21dviejo = $state("");
    let scorez28dviejo = $state("");
    let scorez36semviejo = $state("");
    let edadrecuperapesoviejo = $state("");
    let fechanacimientomamaviejo = $state("");
    let educacionmamaviejo = $state("");
    let paridadviejo = $state("");
    let gemelocantidadviejo = $state("");
    let gemelonumeroviejo = $state("");
    let controlprenatalviejo = $state("");
    let corticoideprenatalviejo = $state("");
    let tabaquismoviejo = $state("");
    let adiccionviejo = $state("");
    let egbviejo = $state("");
    let sulfatomgviejo = $state("");
    let diabetespreviaviejo = $state("");
    let diabetesgestacionalviejo = $state("");
    let crioaminitisviejo = $state("");
    let infeccioncongenitaviejo = $state("");
    let ituviejo = $state("");
    let desprendimientoplacentaviejo = $state("");
    let sufrimientofetalviejo = $state("");
    let htcronicaviejo = $state("");
    let hieviejo = $state("");
    let eclampsiaviejo = $state("");
    let preeclampsiaviejo = $state("");
    let colestasisviejo = $state("");
    let cateteresumbilicalvenosoviejo = $state("");
    let cateteresumbilicalarterialviejo = $state("");
    let percutaneaviejo = $state("");
    let viacentralviejo = $state("");
    let alimentacionenteraltroficaviejo = $state("");
    let alimentacionenteralcompletoedadviejo = $state("");
    let alimentacionenteralcaloriasviejo = $state("");
    let tipoalimentacionenteralviejo = $state("");
    let nutricionparenteralviejo = $state("");
    let nptedadinicioviejo = $state("");
    let nptduraciondiasviejo = $state("");
    let nptdiacomienzoviejo = $state("");
    let nptaportetotalviejo = $state("");
    let nptdiacomienzoaaviejo = $state("");
    let nptaportetotalaaviejo = $state("");
    let nptdiacomienzolipidoviejo = $state("");
    let nptaportetotallipidoviejo = $state("");
    let sepsistempranaviejo = $state("");
    let sepsistempranagermenviejo = $state("");
    let sepsistempranaatbdiasviejo = $state("");
    let sepsistardiaviejo = $state("");
    let sepsistardiagermenviejo = $state("");
    let sepsistardiaatbdiasviejo = $state("");
    let emhviejo = $state("");
    let ndosissurfactanteviejo = $state("");
    let salamviejo = $state("");
    let apneasviejo = $state("");
    let neumotoraxviejo = $state("");
    let taquipneatransitoriaviejo = $state("");
    let hipertpulmonarviejo = $state("");
    let enfermedadintersticialviejo = $state("");
    let bqlviejo = $state("");
    let dbp36semviejo = $state("");
    let o236semviejo = $state("");
    let surfactanteviejo = $state("");
    let armviejo = $state("");
    let intubadodesdeutprviejo = $state("");
    let vafoviejo = $state("");
    let cpapviejo = $state("");
    let oafviejo = $state("");
    let cbfviejo = $state("");
    let cafeinaviejo = $state("");
    let aminofilinaviejo = $state("");
    let corticoideinhaladoviejo = $state("");
    let corticoidepostnatalviejo = $state("");
    let oxidonitricoviejo = $state("");
    let ductusviejo = $state("");
    let ductusdiagnosticoviejo = $state("");
    let ductusttofarmacologico1cicloviejo = $state("");
    let ductusttofarmacologico2cicloviejo = $state("");
    let ductusttoquirurgicoviejo = $state("");
    let cardiopatiacongenitaviejo = $state("");
    let diagccviejo = $state("");
    let inotropicosdopaminaviejo = $state("");
    let inotropicosdobutaminaviejo = $state("");
    let inotropicosadrenalinaviejo = $state("");
    let inotropicosmilrinonaviejo = $state("");
    let inotropicosvasopresinaviejo = $state("");
    let diureticosfurosemidaviejo = $state("");
    let diureticosespironolacviejo = $state("");
    let diureticoshidroclotiazviejo = $state("");
    let hemoderivadostgrnviejo = $state("");
    let hemoderivadosplasmanviejo = $state("");
    let hemoderivadosplaquetasnviejo = $state("");
    let hemoderivadosgammanviejo = $state("");
    let exanguineotransfusionviejo = $state("");
    let ecotfviejo = $state("");
    let hivgradoviejo = $state("");
    let convulsionesviejo = $state("");
    let ehiviejo = $state("");
    let hipotermiatipoviejo = $state("");
    let fondoojoviejo = $state("");
    let ropviejo = $state("");
    let ropttoviejo = $state("");
    let necestadioviejo = $state("");
    let perforacionunicaviejo = $state("");
    let onfaloceleviejo = $state("");
    let gastroquisisviejo = $state("");
    let hdcviejo = $state("");
    let hdcdiagnosticoviejo = $state("");
    let hdcttoquirurgicoviejo = $state("");
    let totviejo = $state("");
    let drenajepleuralviejo = $state("");
    let drenajeventricularviejo = $state("");
    let geneticat21viejo = $state("");
    let geneticat13viejo = $state("");
    let geneticat18viejo = $state("");
    let geneticavacterlviejo = $state("");
    let geneticaturnerviejo = $state("");
    let medprotectorgastricodiasviejo = $state("");
    let medinhibidorbombahdiasviejo = $state("");
    let medprobiodiasviejo = $state("");
    let meleritromicinadiasviejo = $state("");
    let medfentanilodiasviejo = $state("");
    let medmorfinadiasviejo = $state("");
    let medmidazolamdiasviejo = $state("");
    let medprecedexdiasviejo = $state("");
    let medmetadonadiasviejo = $state("");
    let medvecuroniadiasviejo = $state("");
    let medprostagldiasviejo = $state("");
    let malformacionescongenitasviejo = $state("");
    let cirugiasviejo = $state("");
    let complicacionesviejo = $state("");
    let observacionviejo = $state("")
    let altafechaviejo = $state("");
    let altadiagnosticosviejo = $state("");
    let altacondicionesviejo = $state("");

    function semanasDesde(fechaString) {
        // Convertir a objeto Date
        const fecha = new Date(fechaString);

        // Fecha actual (hoy)
        const hoy = new Date();

        // Diferencia en milisegundos
        const diffMs = hoy - fecha;

        // Pasar a días
        const diffDias = diffMs / (1000 * 60 * 60 * 24);

        // Pasar a semanas (redondear hacia abajo)
        const semanas = Math.floor(diffDias / 7);

        return semanas;
    }
    function setViejo() {
        nombremamaviejo = nombremama;
        dnimamaviejo = dnimama;
        hcmamaviejo = hcmama;
        nombrebebeviejo = nombrebebe;
        dnibebeviejo = dnibebe;
        pesobebeviejo = pesobebe;
        hcbebeviejo = hcbebe;
        sexoviejo = sexo
        fechanacimientobebeviejo = fechanacimientobebe;
        fechaingresobebeviejo = fechaingresobebe;
        tipoingresoviejo = tipoingreso
        edad_gestacionalviejo = edad_gestacional
        pesoingresobebeviejo = pesoingresobebe;
        activeviejo = active;
        conaltaviejo = conalta;
        identificacionviejo = identificacion;
        codigoviejo = codigo;
        temperatura_ingresoviejo = temperatura_ingreso;
        tipo_partoviejo = tipo_parto;
        remviejo = rem;
        parto_domiciliarioviejo = parto_domiciliario;
        liquido_meconialviejo = liquido_meconial;
        apgar_1viejo = apgar_1;
        apgar_5viejo = apgar_5;
        apgar_10viejo = apgar_10;
        reanimacionviejo = reanimacion;
        falleceviejo = fallece;
        rciuviejo = rciu;
        areaviejo = area;
        unidadviejo = unidad;
        diagnosticoviejo = diagnostico;
        pesornviejo = pesorn;
        peso7dviejo = peso7d;
        peso14dviejo = peso14d;
        peso21dviejo = peso21d;
        peso28dviejo = peso28d;
        peso36semviejo = peso36sem;
        tallarnviejo = tallarn;
        talla7dviejo = talla7d;
        talla14dviejo = talla14d;
        talla21dviejo = talla21d;
        talla28dviejo = talla28d;
        talla36semviejo = talla36sem;
        perimetrornviejo = perimetrorn;
        perimetro7dviejo = perimetro7d;
        perimetro14dviejo = perimetro14d;
        perimetro21dviejo = perimetro21d;
        perimetro28dviejo = perimetro28d;
        perimetro36semviejo = perimetro36sem;
        scorezrnviejo = scorezrn;
        scorez7dviejo = scorez7d;
        scorez14dviejo = scorez14d;
        scorez21dviejo = scorez21d;
        scorez28dviejo = scorez28d;
        scorez36semviejo = scorez36sem;
        edadrecuperapesoviejo = edadrecuperapeso
        fechanacimientomamaviejo = fechanacimientomama;
        educacionmamaviejo = educacionmama;
        paridadviejo = paridad;
        gemelocantidadviejo = gemelocantidad;
        gemelonumeroviejo = gemelonumero;
        controlprenatalviejo = controlprenatal;
        corticoideprenatalviejo = corticoideprenatal;
        tabaquismoviejo = tabaquismo;
        adiccionviejo = adiccion;
        egbviejo = egb;
        sulfatomgviejo = sulfatomg;
        diabetespreviaviejo = diabetesprevia;
        diabetesgestacionalviejo = diabetesgestacional;
        crioaminitisviejo = crioaminitis;
        infeccioncongenitaviejo = infeccioncongenita;
        ituviejo = itu;
        desprendimientoplacentaviejo = desprendimientoplacenta;
        sufrimientofetalviejo = sufrimientofetal;
        htcronicaviejo = htcronica;
        hieviejo = hie;
        eclampsiaviejo = eclampsia;
        preeclampsiaviejo = preeclampsia;
        colestasisviejo = colestasis;
        cateteresumbilicalvenosoviejo = cateteresumbilicalvenoso;
        cateteresumbilicalarterialviejo = cateteresumbilicalarterial;
        percutaneaviejo = percutanea;
        viacentralviejo = viacentral;
        alimentacionenteraltroficaviejo = alimentacionenteraltrofica;
        alimentacionenteralcompletoedadviejo = alimentacionenteralcompletoedad;
        alimentacionenteralcaloriasviejo = alimentacionenteralcalorias;
        tipoalimentacionenteralviejo = tipoalimentacionenteral;
        nutricionparenteralviejo = nutricionparenteral;
        nptedadinicioviejo = nptedadinicio;
        nptduraciondiasviejo = nptduraciondias;
        nptdiacomienzoviejo = nptdiacomienzo;
        nptaportetotalviejo = nptaportetotal;
        nptdiacomienzoaaviejo = nptdiacomienzoaa
        nptaportetotalaaviejo = nptaportetotalaa
        nptdiacomienzolipidoviejo = nptdiacomienzolipido;
        nptaportetotallipidoviejo = nptaportetotallipido;
        sepsistempranaviejo = sepsistemprana;
        sepsistempranagermenviejo = sepsistempranagermen;
        sepsistempranaatbdiasviejo = sepsistempranaatbdias;
        sepsistardiaviejo = sepsistardia;
        sepsistardiagermenviejo = sepsistardiagermen;
        sepsistardiaatbdiasviejo = sepsistardiaatbdias;
        emhviejo = emh;
        ndosissurfactanteviejo = ndosissurfactante;
        salamviejo = salam;
        apneasviejo = apneas;
        neumotoraxviejo = neumotorax;
        taquipneatransitoriaviejo = taquipneatransitoria;
        hipertpulmonarviejo = hipertpulmonar;
        enfermedadintersticialviejo = enfermedadintersticial;
        bqlviejo = bql;
        dbp36semviejo = dbp36sem;
        o236semviejo = o236sem;
        surfactanteviejo = surfactante;
        armviejo = arm;
        intubadodesdeutprviejo = intubadodesdeutpr;
        vafoviejo = vafo;
        cpapviejo = cpap;
        oafviejo = oaf;
        cbfviejo = cbf;
        cafeinaviejo = cafeina;
        aminofilinaviejo = aminofilina;
        corticoideinhaladoviejo = corticoideinhalado;
        corticoidepostnatalviejo = corticoidepostnatal;
        oxidonitricoviejo = oxidonitrico;
        ductusviejo = ductus;
        ductusdiagnosticoviejo = ductusdiagnostico;
        ductusttofarmacologico1cicloviejo = ductusttofarmacologico1ciclo;
        ductusttofarmacologico2cicloviejo = ductusttofarmacologico2ciclo;
        ductusttoquirurgicoviejo = ductusttoquirurgico;
        cardiopatiacongenitaviejo = cardiopatiacongenita;
        diagccviejo = diagcc;
        inotropicosdopaminaviejo = inotropicosdopamina;
        inotropicosdobutaminaviejo = inotropicosdobutamina;
        inotropicosadrenalinaviejo = inotropicosadrenalina;
        inotropicosmilrinonaviejo = inotropicosmilrinona;
        inotropicosvasopresinaviejo = inotropicosvasopresina;
        diureticosfurosemidaviejo = diureticosfurosemida;
        diureticosespironolacviejo = diureticosespironolac;
        diureticoshidroclotiazviejo = diureticoshidroclotiaz;
        hemoderivadostgrnviejo = hemoderivadostgrn;
        hemoderivadosplasmanviejo = hemoderivadosplasman;
        hemoderivadosplaquetasnviejo = hemoderivadosplaquetasn;
        hemoderivadosgammanviejo = hemoderivadosgamman;
        exanguineotransfusionviejo = exanguineotransfusion;
        ecotfviejo = ecotf;
        hivgradoviejo = hivgrado;
        convulsionesviejo = convulsiones;
        ehiviejo = ehi;
        hipotermiatipoviejo = hipotermiatipo;
        fondoojoviejo = fondoojo;
        ropviejo = rop;
        ropttoviejo = roptto;
        necestadioviejo = necestadio;
        perforacionunicaviejo = perforacionunica;
        onfaloceleviejo = onfalocele;
        gastroquisisviejo = gastroquisis;
        hdcviejo = hdc;
        hdcdiagnosticoviejo = hdcdiagnostico;
        hdcttoquirurgicoviejo = hdcttoquirurgico;
        totviejo = tot;
        drenajepleuralviejo = drenajepleural;
        drenajeventricularviejo = drenajeventricular;
        geneticat21viejo = geneticat21;
        geneticat13viejo = geneticat13;
        geneticat18viejo = geneticat18;
        geneticavacterlviejo = geneticavacterl;
        geneticaturnerviejo = geneticaturner;
        medprotectorgastricodiasviejo = medprotectorgastricodias;
        medinhibidorbombahdiasviejo = medinhibidorbombahdias;
        medprobiodiasviejo = medprobiodias;
        meleritromicinadiasviejo = meleritromicinadias;
        medfentanilodiasviejo = medfentanilodias;
        medmorfinadiasviejo = medmorfinadias;
        medmidazolamdiasviejo = medmidazolamdias;
        medprecedexdiasviejo = medprecedexdias;
        medmetadonadiasviejo = medmetadonadias;
        medvecuroniadiasviejo = medvecuroniadias;
        medprostagldiasviejo = medprostagldias;
        malformacionescongenitasviejo = malformacionescongenitas;
        cirugiasviejo = cirugias;
        complicacionesviejo = complicaciones;
        observacionviejo = observacion
        altafechaviejo = altafecha;
        altadiagnosticosviejo = altadiagnosticos;
        altacondicionesviejo = altacondiciones;
    }
    function recoverViejo() {
        nombremama = nombremamaviejo;
        dnimama = dnimamaviejo;
        hcmama = hcmamaviejo;
        nombrebebe = nombrebebeviejo;
        dnibebe = dnibebeviejo;
        pesobebe = pesobebeviejo;
        hcbebe = hcbebeviejo;
        sexo = sexoviejo
        fechanacimientobebe = fechanacimientobebeviejo;
        fechaingresobebe = fechaingresobebeviejo;
        tipoingreso = tipoingresoviejo
        edad_gestacional = edad_gestacionalviejo
        pesoingresobebe = pesoingresobebeviejo;
        active = activeviejo;
        conalta = conaltaviejo;
        identificacion = identificacionviejo;
        codigo = codigoviejo;
        temperatura_ingreso = temperatura_ingresoviejo;
        tipo_parto = tipo_partoviejo;
        rem = remviejo;
        parto_domiciliario = parto_domiciliarioviejo;
        liquido_meconial = liquido_meconialviejo;
        apgar_1 = apgar_1viejo;
        apgar_5 = apgar_5viejo;
        apgar_10 = apgar_10viejo;
        reanimacion = reanimacionviejo;
        fallece = falleceviejo;
        rciu = rciuviejo;
        area = areaviejo;
        unidad = unidadviejo;
        diagnostico = diagnosticoviejo;
        pesorn = pesornviejo;
        peso7d = peso7dviejo;
        peso14d = peso14dviejo;
        peso21d = peso21dviejo;
        peso28d = peso28dviejo;
        peso36sem = peso36semviejo;
        tallarn = tallarnviejo;
        talla7d = talla7dviejo;
        talla14d = talla14dviejo;
        talla21d = talla21dviejo;
        talla28d = talla28dviejo;
        talla36sem = talla36semviejo;
        perimetrorn = perimetrornviejo;
        perimetro7d = perimetro7dviejo;
        perimetro14d = perimetro14dviejo;
        perimetro21d = perimetro21dviejo;
        perimetro28d = perimetro28dviejo;
        perimetro36sem = perimetro36semviejo;
        edadrecuperapeso = edadrecuperapesoviejo
        scorezrn = scorezrnviejo;
        scorez7d = scorez7dviejo;
        scorez14d = scorez14dviejo;
        scorez21d = scorez21dviejo;
        scorez28d = scorez28dviejo;
        scorez36sem = scorez36semviejo;
        fechanacimientomama = fechanacimientomamaviejo;
        educacionmama = educacionmamaviejo;
        paridad = paridadviejo;
        gemelocantidad = gemelocantidadviejo;
        gemelonumero = gemelonumeroviejo;
        controlprenatal = controlprenatalviejo;
        corticoideprenatal = corticoideprenatalviejo;
        tabaquismo = tabaquismoviejo;
        adiccion = adiccionviejo;
        egb = egbviejo;
        sulfatomg = sulfatomgviejo;
        diabetesprevia = diabetespreviaviejo;
        diabetesgestacional = diabetesgestacionalviejo;
        crioaminitis = crioaminitisviejo;
        infeccioncongenita = infeccioncongenitaviejo;
        itu = ituviejo;
        desprendimientoplacenta = desprendimientoplacentaviejo;
        sufrimientofetal = sufrimientofetalviejo;
        htcronica = htcronicaviejo;
        hie = hieviejo;
        eclampsia = eclampsiaviejo;
        preeclampsia = preeclampsiaviejo;
        colestasis = colestasisviejo;
        cateteresumbilicalvenoso = cateteresumbilicalvenosoviejo;
        cateteresumbilicalarterial = cateteresumbilicalarterialviejo;
        percutanea = percutaneaviejo;
        viacentral = viacentralviejo;
        alimentacionenteraltrofica = alimentacionenteraltroficaviejo;
        alimentacionenteralcompletoedad = alimentacionenteralcompletoedadviejo;
        alimentacionenteralcalorias = alimentacionenteralcaloriasviejo;
        tipoalimentacionenteral = tipoalimentacionenteralviejo;
        nutricionparenteral = nutricionparenteralviejo;
        nptedadinicio = nptedadinicioviejo;
        nptduraciondias = nptduraciondiasviejo;
        nptdiacomienzo = nptdiacomienzoviejo;
        nptaportetotal = nptaportetotalviejo;
        nptdiacomienzoaa = nptdiacomienzoaaviejo
        nptaportetotalaa = nptaportetotalaaviejo

        nptdiacomienzolipido = nptdiacomienzolipidoviejo;
        nptaportetotallipido = nptaportetotallipidoviejo;
        sepsistemprana = sepsistempranaviejo;
        sepsistempranagermen = sepsistempranagermenviejo;
        sepsistempranaatbdias = sepsistempranaatbdiasviejo;
        sepsistardia = sepsistardiaviejo;
        sepsistardiagermen = sepsistardiagermenviejo;
        sepsistardiaatbdias = sepsistardiaatbdiasviejo;
        emh = emhviejo;
        ndosissurfactante = ndosissurfactanteviejo;
        salam = salamviejo;
        apneas = apneasviejo;
        neumotorax = neumotoraxviejo;
        taquipneatransitoria = taquipneatransitoriaviejo;
        hipertpulmonar = hipertpulmonarviejo;
        enfermedadintersticial = enfermedadintersticialviejo;
        bql = bqlviejo;
        dbp36sem = dbp36semviejo;
        o236sem = o236semviejo;
        surfactante = surfactanteviejo;
        arm = armviejo;
        intubadodesdeutpr = intubadodesdeutprviejo;
        vafo = vafoviejo;
        cpap = cpapviejo;
        oaf = oafviejo;
        cbf = cbfviejo;
        cafeina = cafeinaviejo;
        aminofilina = aminofilinaviejo;
        corticoideinhalado = corticoideinhaladoviejo;
        corticoidepostnatal = corticoidepostnatalviejo;
        oxidonitrico = oxidonitricoviejo;
        ductus = ductusviejo;
        ductusdiagnostico = ductusdiagnosticoviejo;
        ductusttofarmacologico1ciclo = ductusttofarmacologico1cicloviejo;
        ductusttofarmacologico2ciclo = ductusttofarmacologico2cicloviejo;
        ductusttoquirurgico = ductusttoquirurgicoviejo;
        cardiopatiacongenita = cardiopatiacongenitaviejo;
        diagcc = diagccviejo;
        inotropicosdopamina = inotropicosdopaminaviejo;
        inotropicosdobutamina = inotropicosdobutaminaviejo;
        inotropicosadrenalina = inotropicosadrenalinaviejo;
        inotropicosmilrinona = inotropicosmilrinonaviejo;
        inotropicosvasopresina = inotropicosvasopresinaviejo;
        diureticosfurosemida = diureticosfurosemidaviejo;
        diureticosespironolac = diureticosespironolacviejo;
        diureticoshidroclotiaz = diureticoshidroclotiazviejo;
        hemoderivadostgrn = hemoderivadostgrnviejo;
        hemoderivadosplasman = hemoderivadosplasmanviejo;
        hemoderivadosplaquetasn = hemoderivadosplaquetasnviejo;
        hemoderivadosgamman = hemoderivadosgammanviejo;
        exanguineotransfusion = exanguineotransfusionviejo;
        ecotf = ecotfviejo;
        hivgrado = hivgradoviejo;
        convulsiones = convulsionesviejo;
        ehi = ehiviejo;
        hipotermiatipo = hipotermiatipoviejo;
        fondoojo = fondoojoviejo;
        rop = ropviejo;
        roptto = ropttoviejo;
        necestadio = necestadioviejo;
        perforacionunica = perforacionunicaviejo;
        onfalocele = onfaloceleviejo;
        gastroquisis = gastroquisisviejo;
        hdc = hdcviejo;
        hdcdiagnostico = hdcdiagnosticoviejo;
        hdcttoquirurgico = hdcttoquirurgicoviejo;
        tot = totviejo;
        drenajepleural = drenajepleuralviejo;
        drenajeventricular = drenajeventricularviejo;
        geneticat21 = geneticat21viejo;
        geneticat13 = geneticat13viejo;
        geneticat18 = geneticat18viejo;
        geneticavacterl = geneticavacterlviejo;
        geneticaturner = geneticaturnerviejo;
        medprotectorgastricodias = medprotectorgastricodiasviejo;
        medinhibidorbombahdias = medinhibidorbombahdiasviejo;
        medprobiodias = medprobiodiasviejo;
        meleritromicinadias = meleritromicinadiasviejo;
        medfentanilodias = medfentanilodiasviejo;
        medmorfinadias = medmorfinadiasviejo;
        medmidazolamdias = medmidazolamdiasviejo;
        medprecedexdias = medprecedexdiasviejo;
        medmetadonadias = medmetadonadiasviejo;
        medvecuroniadias = medvecuroniadiasviejo;
        medprostagldias = medprostagldiasviejo;
        malformacionescongenitas = malformacionescongenitasviejo;
        cirugias = cirugiasviejo;
        complicaciones = complicacionesviejo;
        observacion = observacionviejo
        altafecha = altafechaviejo;
        altadiagnosticos = altadiagnosticosviejo;
        altacondiciones = altacondicionesviejo;
    }
    
    function openEditar() {
        modoedicion = true;
        setViejo()
    }
    function closeEditar() {
        modoedicion = false;
        recoverViejo()


    }
    function eliminar() {
        try {
            Swal.fire({
                title: "Seguro que deseas eliminar al bebe?",
                showDenyButton: true,

                confirmButtonText: "Eliminar",
                denyButtonText: `Cancelar`,
            }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire("Saved!", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        } catch (err) {
            console.error(err);
            Swal.fire("Error eliminar", "No se pudo eliminar al bebe", "error");
        }
    }
    async function guardar() {
        
        try {
            
            let data = {
                nombremama,
                dnimama,
                hcmama,
                nombrebebe,
                dnibebe,
                sexo,
                pesobebe,
                hcbebe,
                fechanacimientobebe:fechanacimientobebe+" 03:00:00",
                fechaingresobebe:fechaingresobebe+" 03:00:00",
                pesoingresobebe,
                tipoingreso,
                edad_gestacional,
                active,
                conalta,
                identificacion,
                codigo,
                temperatura_ingreso,
                tipo_parto,
                rem,
                parto_domiciliario,
                liquido_meconial,
                apgar_1,
                apgar_5,
                apgar_10,
                reanimacion,
                fallece,
                rciu,
                area,
                unidad,
                diagnostico,
                pesorn,
                peso7d,
                peso14d,
                peso21d,
                peso28d,
                peso36sem,
                tallarn,
                talla7d,
                talla14d,
                talla21d,
                talla28d,
                talla36sem,
                perimetrorn,
                perimetro7d,
                perimetro14d,
                perimetro21d,
                perimetro28d,
                perimetro36sem,
                scorezrn,
                scorez7d,
                scorez14d,
                scorez21d,
                scorez28d,
                scorez36sem,
                edadrecuperapeso,
                fechanacimientomama,
                educacionmama,
                paridad,
                gemelocantidad,
                gemelonumero,
                controlprenatal,
                
                corticoideprenatal,
                tabaquismo,
                adiccion,
                egb,
                sulfatomg,
                diabetesprevia,
                diabetesgestacional,
                crioaminitis,
                infeccioncongenita,
                itu,
                desprendimientoplacenta,
                sufrimientofetal,
                htcronica,
                hie,
                eclampsia,
                preeclampsia,
                colestasis,
                cateteresumbilicalvenoso,
                cateteresumbilicalarterial,
                percutanea,
                viacentral,
                alimentacionenteraltrofica,
                alimentacionenteralcompletoedad,
                alimentacionenteralcalorias,
                tipoalimentacionenteral,
                nutricionparenteral,
                nptedadinicio,
                nptduraciondias,
                nptdiacomienzo,
                nptaportetotal,
                nptdiacomienzoaa,
                nptaportetotalaa,
                nptdiacomienzolipido,
                nptaportetotallipido,
                sepsistemprana,
                sepsistempranagermen,
                sepsistempranaatbdias,
                sepsistardia,
                sepsistardiagermen,
                sepsistardiaatbdias,
                emh,
                ndosissurfactante,
                salam,
                apneas,
                neumotorax,
                taquipneatransitoria,
                hipertpulmonar,
                enfermedadintersticial,
                bql,
                dbp36sem,
                o236sem,
                surfactante,
                arm,
                intubadodesdeutpr,
                vafo,
                cpap,
                oaf,
                cbf,
                cafeina,
                aminofilina,
                corticoideinhalado,
                corticoidepostnatal,
                oxidonitrico,
                ductus,
                ductusdiagnostico,
                ductusttofarmacologico1ciclo,
                ductusttofarmacologico2ciclo,
                ductusttoquirurgico,
                cardiopatiacongenita,
                diagcc,
                inotropicosdopamina,
                inotropicosdobutamina,
                inotropicosadrenalina,
                inotropicosmilrinona,
                inotropicosvasopresina,
                diureticosfurosemida,
                diureticosespironolac,
                diureticoshidroclotiaz,
                hemoderivadostgrn,
                hemoderivadosplasman,
                hemoderivadosplaquetasn,
                hemoderivadosgamman,
                exanguineotransfusion,
                ecotf,
                hivgrado,
                convulsiones,
                ehi,
                hipotermiatipo,
                fondoojo,
                rop,
                roptto,
                necestadio,
                perforacionunica,
                onfalocele,
                gastroquisis,
                hdc,
                hdcdiagnostico,
                hdcttoquirurgico,
                tot,
                drenajepleural,
                drenajeventricular,
                geneticat21,
                geneticat13,
                geneticat18,
                geneticavacterl,
                geneticaturner,
                medprotectorgastricodias,
                medinhibidorbombahdias,
                medprobiodias,
                meleritromicinadias,
                medfentanilodias,
                medmorfinadias,
                medmidazolamdias,
                medprecedexdias,
                medmetadonadias,
                medvecuroniadias,
                medprostagldias,
                malformacionescongenitas,
                cirugias,
                complicaciones,
                observacion,
                altafecha:altafecha+" 03:00:00",
                altadiagnosticos,
                altacondiciones,
            };
            let datahistorial = {
                ...data,
                bebe: slug,
            };
            setViejo()
            await pb.collection("bebes").update(slug,data);
            let record = await pb.collection("historialbebes").create(datahistorial)
            
            Swal.fire("Éxito editar", "Se pudo editar al bebe", "success");
        } catch (err) {
            console.error(err);
            Swal.fire("Error editar", "No se pudo editar al bebe", "error");
        }
        closeEditar();
    }
    async function getAreas() {
        const records = await pb.collection("areas").getFullList({});
        areas = records;
    }
    async function getUnidades() {
        const records = await pb.collection("unidadesbebe").getFullList({
            filter: "active = true",
        });
        unidades = records.filter((u) => u.bebe != "" || u.bebe == slug);
    }
    onMount(async () => {
        slug = $page.params.slug;
        try {
            await getAreas();
            await getUnidades();
            let record = await pb.collection("bebes").getOne(slug, {});

            nombremama = record.nombremama;
            dnimama = record.dnimama;
            hcmama = record.hcmama;
            nombrebebe = record.nombrebebe;
            dnibebe = record.dnibebe;
            hcbebe = record.hcbebe;
            sexo = record.sexo
            fechanacimientobebe = record.fechanacimientobebe.split(' ')[0];
            fechaingresobebe = record.fechaingresobebe.split(' ')[0];
            tipoingreso = record.tipoingreso
            edad_gestacional = record.edad_gestacional
            pesoingresobebe = record.pesoingresobebe;
            active = record.active;
            conalta = record.conalta;
            identificacion = record.identificacion;
            codigo = record.codigo;
            temperatura_ingreso = record.temperatura_ingreso;
            tipo_parto = record.tipo_parto;
            rem = record.rem;
            parto_domiciliario = record.parto_domiciliario;
            liquido_meconial = record.liquido_meconial;
            apgar_1 = record.apgar_1;
            apgar_5 = record.apgar_5;
            apgar_10 = record.apgar_10;
            reanimacion = record.reanimacion;
            fallece = record.fallece;
            rciu = record.rciu;
            area = record.area;
            unidad = record.unidad;
            diagnostico = record.diagnostico;
            pesorn = record.pesorn;
            peso7d = record.peso7d;
            peso14d = record.peso14d;
            peso21d = record.peso21d;
            peso28d = record.peso28d;
            peso36sem = record.peso36sem;
            tallarn = record.tallarn;
            talla7d = record.talla7d;
            talla14d = record.talla14d;
            talla21d = record.talla21d;
            talla28d = record.talla28d;
            talla36sem = record.talla36sem;
            perimetrorn = record.perimetrorn;
            perimetro7d = record.perimetro7d;
            perimetro14d = record.perimetro14d;
            perimetro21d = record.perimetro21d;
            perimetro28d = record.perimetro28d;
            perimetro36sem = record.perimetro36sem;
            scorezrn = record.scorezrn;
            scorez7d = record.scorez7d;
            scorez14d = record.scorez14d;
            scorez21d = record.scorez21d;
            scorez28d = record.scorez28d;
            scorez36sem = record.scorez36sem;
            fechanacimientomama = record.fechanacimientomama;
            educacionmama = record.educacionmama;
            paridad = record.paridad;
            gemelocantidad = record.gemelocantidad;
            gemelonumero = record.gemelonumero;
            controlprenatal = record.controlprenatal;
            corticoideprenatal = record.corticoideprenatal;
            tabaquismo = record.tabaquismo;
            adiccion = record.adiccion;
            egb = record.egb;
            sulfatomg = record.sulfatomg;
            diabetesprevia = record.diabetesprevia;
            diabetesgestacional = record.diabetesgestacional;
            crioaminitis = record.crioaminitis;
            infeccioncongenita = record.infeccioncongenita;
            itu = record.itu;
            desprendimientoplacenta = record.desprendimientoplacenta;
            sufrimientofetal = record.sufrimientofetal;
            htcronica = record.htcronica;
            hie = record.hie;
            eclampsia = record.eclampsia;
            preeclampsia = record.preeclampsia;
            colestasis = record.colestasis;
            cateteresumbilicalvenoso = record.cateteresumbilicalvenoso;
            cateteresumbilicalarterial = record.cateteresumbilicalarterial;
            percutanea = record.percutanea;
            viacentral = record.viacentral;
            alimentacionenteraltrofica = record.alimentacionenteraltrofica;
            alimentacionenteralcompletoedad =record.alimentacionenteralcompletoedad;
            alimentacionenteralcalorias = record.alimentacionenteralcalorias;
            tipoalimentacionenteral = record.tipoalimentacionenteral;
            nutricionparenteral = record.nutricionparenteral;
            nptedadinicio = record.nptedadinicio;
            nptduraciondias = record.nptduraciondias;
            nptdiacomienzo = record.nptdiacomienzo;
            nptaportetotal = record.nptaportetotal;
            nptdiacomienzoaa=record.nptdiacomienzoaa
            nptaportetotalaa=record.nptaportetotalaa
            nptdiacomienzolipido = record.nptdiacomienzolipido;
            nptaportetotallipido = record.nptaportetotallipido;
            sepsistemprana = record.sepsistemprana;
            sepsistempranagermen = record.sepsistempranagermen;
            sepsistempranaatbdias = record.sepsistempranaatbdias;
            sepsistardia = record.sepsistardia;
            sepsistardiagermen = record.sepsistardiagermen;
            sepsistardiaatbdias = record.sepsistardiaatbdias;
            emh = record.emh;
            ndosissurfactante = record.ndosissurfactante;
            salam = record.salam;
            apneas = record.apneas;
            neumotorax = record.neumotorax;
            taquipneatransitoria = record.taquipneatransitoria;
            hipertpulmonar = record.hipertpulmonar;
            enfermedadintersticial = record.enfermedadintersticial;
            bql = record.bql;
            dbp36sem = record.dbp36sem;
            o236sem = record.o236sem;
            surfactante = record.surfactante;
            arm = record.arm;
            intubadodesdeutpr = record.intubadodesdeutpr;
            vafo = record.vafo;
            cpap = record.cpap;
            oaf = record.oaf;
            cbf = record.cbf;
            cafeina = record.cafeina;
            aminofilina = record.aminofilina;
            corticoideinhalado = record.corticoideinhalado;
            corticoidepostnatal = record.corticoidepostnatal;
            oxidonitrico = record.oxidonitrico;
            ductus = record.ductus;
            ductusdiagnostico = record.ductusdiagnostico;
            ductusttofarmacologico1ciclo = record.ductusttofarmacologico1ciclo;
            ductusttofarmacologico2ciclo = record.ductusttofarmacologico2ciclo;
            ductusttoquirurgico = record.ductusttoquirurgico;
            cardiopatiacongenita = record.cardiopatiacongenita;
            diagcc = record.diagcc;
            inotropicosdopamina = record.inotropicosdopamina;
            inotropicosdobutamina = record.inotropicosdobutamina;
            inotropicosadrenalina = record.inotropicosadrenalina;
            inotropicosmilrinona = record.inotropicosmilrinona;
            inotropicosvasopresina = record.inotropicosvasopresina;
            diureticosfurosemida = record.diureticosfurosemida;
            diureticosespironolac = record.diureticosespironolac;
            diureticoshidroclotiaz = record.diureticoshidroclotiaz;
            hemoderivadostgrn = record.hemoderivadostgrn;
            hemoderivadosplasman = record.hemoderivadosplasman;
            hemoderivadosplaquetasn = record.hemoderivadosplaquetasn;
            hemoderivadosgamman = record.hemoderivadosgamman;
            exanguineotransfusion = record.exanguineotransfusion;
            ecotf = record.ecotf;
            hivgrado = record.hivgrado;
            convulsiones = record.convulsiones;
            ehi = record.ehi;
            hipotermiatipo = record.hipotermiatipo;
            fondoojo = record.fondoojo;
            rop = record.rop;
            roptto = record.roptto;
            necestadio = record.necestadio;
            perforacionunica = record.perforacionunica;
            onfalocele = record.onfalocele;
            gastroquisis = record.gastroquisis;
            hdc = record.hdc;
            hdcdiagnostico = record.hdcdiagnostico;
            hdcttoquirurgico = record.hdcttoquirurgico;
            drenajepleural = record.drenajepleural;
            drenajeventricular = record.drenajeventricular;
            geneticat21 = record.geneticat21;
            geneticat13 = record.geneticat13;
            geneticat18 = record.geneticat18;
            geneticavacterl = record.geneticavacterl;
            geneticaturner = record.geneticaturner;
            medprotectorgastricodias = record.medprotectorgastricodias;
            medinhibidorbombahdias = record.medinhibidorbombahdias;
            medprobiodias = record.medprobiodias;
            meleritromicinadias = record.meleritromicinadias;
            medfentanilodias = record.medfentanilodias;
            medmorfinadias = record.medmorfinadias;
            medmidazolamdias = record.medmidazolamdias;
            medprecedexdias = record.medprecedexdias;
            medmetadonadias = record.medmetadonadias;
            medvecuroniadias = record.medvecuroniadias;
            medprostagldias = record.medprostagldias;
            malformacionescongenitas = record.malformacionescongenitas;
            cirugias = record.cirugias;
            complicaciones = record.complicaciones;
            observacion = record.observacion;
            altafecha = record.altafecha.split(' ')[0];
            altadiagnosticos = record.altadiagnosticos;
            altacondiciones = record.altacondiciones;
            setViejo();
        } catch (err) {
            console.log(err);
            Swal.fire("No encontrado", "No existe el bebe", "info");
        }
    });
</script>

<Navbar>
    <div
        class={`
            min-h-screen p-1
            dark:bg-gray-900 dark:text-white
            bg-gray-50 text-gray-900
            
        `}
    >
        <Header />
        <Compartido
            bind:unidadbebe
            bind:nombre={nombrebebe}
            bind:madre={nombremama}
            bind:birthDate={fechanacimientobebe}
            bind:peso={pesobebe}
            bind:edad_gestacional

            bind:sexo
            bind:clinicNumber={hcbebe}
            {closeEditar}
            {openEditar}
            {guardar}
            {eliminar}
            bind:modoedicion
        />
        <!--Tabs 2-->
        <div
            class={`
                p-2 rounded-md
                tabs tabs-bordered 
                dark:bg-gray-800  bg-white
                

            `}
        >
            <!-- Identificación -->
            <input
                type="radio"
                name="perfil_tabs"
                class="tab"
                aria-label="Identificación"
                checked
            />
            <Identificacion
                bind:areas
                bind:unidadesarea
                bind:modoedicion
                bind:unidadbebe
                bind:areabebe
                bind:nombrebebe
                bind:dnibebe
                bind:hcbebe
                bind:fechanacimientobebe
                bind:pesobebe
                bind:identificacion
                bind:codigo
                bind:sexo
                bind:nombremama
                bind:dnimama
                bind:hcmama
            />
            <!-- Ingreso -->
            <input
                type="radio"
                name="perfil_tabs"
                class="tab"
                aria-label="Ingreso"
            />
            <Ingreso
                bind:modoedicion
                bind:fechaingresobebe
                bind:pesoingresobebe
                bind:tipoingreso
                bind:edad_gestacional
                bind:temperatura_ingreso
                bind:tipo_parto
                bind:parto_domiciliario
                bind:liquido_meconial
                bind:rem
                bind:apgar_1
                bind:apgar_5
                bind:apgar_10
                bind:reanimacion
                bind:fallece
                bind:rciu
            />
            <!-- Antropometría -->
            <input
                type="radio"
                name="perfil_tabs"
                class="tab"
                aria-label="Antropometría"
            />
            <Antro
                bind:modoedicion
                bind:pesorn
                bind:peso7d
                bind:peso14d
                bind:peso21d
                bind:peso28d
                bind:peso36sem
                bind:tallarn
                bind:talla7d
                bind:talla14d
                bind:talla21d
                bind:talla28d
                bind:talla36sem
                bind:perimetrorn
                bind:perimetro7d
                bind:perimetro14d
                bind:perimetro21d
                bind:perimetro28d
                bind:perimetro36sem
                bind:scorezrn
                bind:scorez7d
                bind:scorez14d
                bind:scorez21d
                bind:scorez28d
                bind:scorez36sem
                bind:edadrecuperapeso
            />
            <!-- Datos maternos -->
            <input
                type="radio"
                name="perfil_tabs"
                class="tab"
                aria-label="Materno"
            />
            <Materno
                bind:modoedicion
                bind:nombremama
                bind:fechanacimientomama
                bind:educacionmama
                bind:paridad
                bind:gemelocantidad
                bind:gemelonumero
                bind:controlprenatal
                bind:corticoideprenatal
                bind:tabaquismo
                bind:adiccion
                bind:egb
                bind:sulfatomg
                bind:diabetesprevia
                bind:diabetesgestacional
                bind:crioaminitis
                bind:infeccioncongenita
                bind:itu
                bind:desprendimientoplacenta
                bind:sufrimientofetal
                bind:htcronica
                bind:hie
                bind:eclampsia
                bind:preeclampsia
                bind:colestasis
            />
            <!-- Internacion -->
            <input
                type="radio"
                name="perfil_tabs"
                class="tab"
                aria-label="Internación"
            />
            <Inter
                bind:modoedicion
                bind:cateteresumbilicalvenoso
                bind:cateteresumbilicalarterial
                bind:percutanea
                bind:viacentral
                bind:alimentacionenteraltrofica
                bind:alimentacionenteralcompletoedad
                bind:alimentacionenteralcalorias
                bind:tipoalimentacionenteral
                bind:nutricionparenteral
                bind:nptedadinicio
                bind:nptduraciondias
                bind:nptdiacomienzo
                bind:nptaportetotal
                bind:nptdiacomienzoaa
                bind:nptaportetotalaa
                bind:nptdiacomienzolipido
                bind:nptaportetotallipido
                bind:sepsistemprana
                bind:sepsistempranagermen
                bind:sepsistempranaatbdias
                bind:sepsistardia
                bind:sepsistardiagermen
                bind:sepsistardiaatbdias
                bind:emh
                bind:ndosissurfactante
                bind:salam
                bind:apneas
                bind:neumotorax
                bind:taquipneatransitoria
                bind:hipertpulmonar
                bind:enfermedadintersticial
                bind:bql
                bind:dbp36sem
                bind:o236sem
                bind:surfactante
                bind:arm
                bind:intubadodesdeutpr
                bind:vafo
                bind:cpap
                bind:oaf
                bind:cbf
                bind:cafeina
                bind:aminofilina
                bind:corticoideinhalado
                bind:corticoidepostnatal
                bind:oxidonitrico
                bind:ductus
                bind:ductusdiagnostico
                bind:ductusttofarmacologico1ciclo
                bind:ductusttofarmacologico2ciclo
                bind:ductusttoquirurgico
                bind:cardiopatiacongenita
                bind:diagcc
                bind:inotropicosdopamina
                bind:inotropicosdobutamina
                bind:inotropicosadrenalina
                bind:inotropicosmilrinona
                bind:inotropicosvasopresina
                bind:diureticosfurosemida
                bind:diureticosespironolac
                bind:diureticoshidroclotiaz
                bind:hemoderivadostgrn
                bind:hemoderivadosplasman
                bind:hemoderivadosplaquetasn
                bind:hemoderivadosgamman
                bind:exanguineotransfusion
                bind:ecotf
                bind:hivgrado
                bind:convulsiones
                bind:ehi
                bind:hipotermiatipo
                bind:fondoojo
                bind:rop
                bind:roptto
                bind:necestadio
                bind:perforacionunica
                bind:onfalocele
                bind:gastroquisis
                bind:hdc
                bind:hdcdiagnostico
                bind:hdcttoquirurgico
                bind:tot
                bind:drenajepleural
                bind:drenajeventricular
                bind:geneticat21
                bind:geneticat13
                bind:geneticat18
                bind:geneticavacterl
                bind:geneticaturner
                bind:medprotectorgastricodias
                bind:medinhibidorbombahdias
                bind:medprobiodias
                bind:meleritromicinadias
                bind:medfentanilodias
                bind:medmorfinadias
                bind:medmidazolamdias
                bind:medprecedexdias
                bind:medmetadonadias
                bind:medvecuroniadias
                bind:medprostagldias
                bind:malformacionescongenitas
                bind:cirugias
                bind:complicaciones
            />
            <!-- Diagnostico -->
            <input
                type="radio"
                name="perfil_tabs"
                class="tab"
                aria-label="Diagnostico"
            />
            <Diagnostico bind:modoedicion bind:diagnostico />
            <!-- Otros -->
            <input
                type="radio"
                name="perfil_tabs"
                class="tab"
                aria-label="Otros"
            />
            <Otros
                bind:modoedicion
                bind:malformacionescongenitas
                bind:cirugias
                bind:complicaciones
                bind:observacion
            />
            <!-- Alta -->
            <input
                type="radio"
                name="perfil_tabs"
                class="tab"
                aria-label="Alta"
            />
            <Alta
                bind:modoedicion
                bind:altacondiciones
                bind:altadiagnosticos
                bind:altafecha
                bind:conalta
            />
        </div>
    </div>
</Navbar>
