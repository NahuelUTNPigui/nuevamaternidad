<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import Buildin from "$lib/componentes/buildin.svelte";
    import Header from "$lib/componentes/reportes/Header.svelte";
    import Listado from "$lib/componentes/reportes/Listado.svelte";
    import Filtros from "$lib/componentes/reportes/Filtros.svelte";
    import PocketBase from "pocketbase";
    import Swal from "sweetalert2";
    import { createStorageProxy } from "$lib/filtros/filtros";
    import { onMount } from "svelte";
    import StatCard from "$lib/componentes/StatCard.svelte";
    import Sangre from "$lib/componentes/bebe/Sangre.svelte";
    import opciones from "$lib/opciones";
    import { calcularEdad } from "$lib/string/string";
    import Estadisticas from "$lib/componentes/reportes/estadisticas/Estadisticas.svelte";
    import Historico from "$lib/componentes/reportes/estadisticas/Historico.svelte";

    let ruta = import.meta.env.VITE_RUTA;

    const pb = new PocketBase(ruta);
    let historial = $state([]);
    let bebes = $state([]);
    let historiasbebes = $state([]);
    let historiasbebesrow = $state([]);
    let filas = $state([]);
    let sinhistorial = $state(false);





    //reportes
    let totalcantidad = $state(0)

    let unidades_estadisticas = $state([])
    let areas_estadisticas = $state([])



    let unidad_historico = $state([])
    let area_historico = $state([])

    //listas
    let unidades = $state([]);
    let areas = $state([]);
    let unidadesarea = $derived(
        unidades
            .filter((u) => u.area == area)
            .concat({ id: "", nombre: "Todas" }),
    );
    //Check
    let checked_identificacion = $state(true);
    let checked_ingreso = $state(true);
    let checked_antropometria = $state(true);
    let checked_maternos = $state(true);
    let checked_respiratorias = $state(true);
    let checked_neurologicas = $state(true);
    let checked_medicacion = $state(true);
    let checked_avanzados = $state(true);
    let checked_cateteres = $state(true);
    let checked_alimentacion = $state(true);
    let checked_infecciones = $state(true);
    let checked_cardiovascular = $state(true);
    let checked_inotropicos = $state(true);
    let checked_sangre = $state(true);
    let checked_oftalmologia = $state(true);
    let checked_digestivo = $state(true);
    let checked_genetica = $state(true);
    let checked_alta = $state(true);
    let checked_otros = $state(true);
    let checked_diagnostico = $state(true);
    //filttros
    //basicos
    let unidad = $state("");
    let area = $state("");
    let fechadesde = $state("");
    let fechahasta = $state("");
    //identifiacion
    let dnimadre = $state("");
    let nombremadre = $state("");
    let dnirn = $state("");
    let nombrern = $state("");

    let sexorn = $state("");
    let nacdesde = $state("");
    let nachasta = $state("");

    let egresodesde = $state("");
    let egresohasta = $state("");
    //ingreso
    let tipoingreso = $state("");

    let ingresodesde = $state("");
    let ingresohasta = $state("");
    let tipoparto = $state("");
    let partodomicilio = $state("");

    //bajo,medio,alto (0-3,4-6,7-10)
    let apgar_1 = $state("");
    let apgar_5 = $state("");
    let apgar_10 = $state("");

    let gestacion = $state("");
    let gestaciondesde = $state("");
    let gestacionhasta = $state("");

    let rciu = $state("");
    let temperatura_ingreso = $state("");

    let rem = $state("");
    let reanimacion = $state("");
    let liquido = $state("");
    let fallece = $state("");

    //antropometria
    let peso_rn = $state("");
    let peso_7 = $state("");
    let peso_14 = $state("");
    let peso_21 = $state("");
    let peso_28 = $state("");
    let peso_36 = $state("");

    let cefalico_rn = $state("");
    let cefalico_7 = $state("");
    let cefalico_14 = $state("");
    let cefalico_21 = $state("");
    let cefalico_28 = $state("");
    let cefalico_36 = $state("");

    let talla_rn = $state("");
    let talla_7 = $state("");
    let talla_14 = $state("");
    let talla_21 = $state("");
    let talla_28 = $state("");
    let talla_36 = $state("");

    let scorez_rn = $state("");
    let scorez_7 = $state("");
    let scorez_14 = $state("");
    let scorez_21 = $state("");
    let scorez_28 = $state("");
    let scorez_36 = $state("");

    let recuperarpeso = $state("");
    let recuperarpesodesde = $state("");
    let recuperarpesohasta = $state("");

    //datos maternos
    let edad_materna = $state("");
    let niveleducativo = $state("");
    let paridad = $state("");
    let gemelos = $state("");
    let controlparental = $state("");
    let corticoideprenatal = $state("");
    let tabaquismo = $state("");
    let adiccion = $state("");
    let egb = $state("");
    let crioaminintis = $state("");
    let sulfato = $state("");
    let diabetes = $state("");
    let colico = $state("");
    let congenita = $state("");
    let itu = $state("");

    let desprendimiento = $state("");
    let sufrimiento = $state("");
    let ht = $state("");
    let hie = $state("");
    let preeclampisa = $state("");
    let eclampsia = $state("");
    let colestasis = $state("");

    //Cateteres
    let umbilicalvenoso = $state("");
    let umbilicalarterial = $state("");
    let percutaneo = $state("");
    let central = $state("");

    //alimentacion
    let trofica = $state("");
    let volumenenteral = $state("");
    let caloriasenteral = $state("");
    let tipoenteral = $state("");
    let nutricionparental = $state("");

    let edadnpt = $state("");
    let duracionnpt = $state("");
    let comienzoaa = $state("");
    let aporteaa = $state("");
    let comienzolipido = $state("");
    let aportelipido = $state("");

    //infecciones
    let tempranoestado = $state("");
    let tempranogermen = $state("");
    let tempranoantibiotico = $state("");
    let tempranoatb = $state("");

    let tardeestado = $state("");
    let tardegermen = $state("");
    let tardeantibiotico = $state("");
    let tardeatb = $state("");

    //patologias respiratorios
    let emh = $state("");
    let ndosissurfactante = $state("");
    let salam = $state("");
    let apena = $state("");
    let neumotorax = $state("");
    let taquipnea = $state("");
    let hipertension = $state("");
    let interstecial = $state("");
    let dbp = $state("");
    let oxigeno = $state("");
    let surfactante = $state("");
    let arm = $state("");
    let intubado = $state("");
    let vafo = $state("");
    let cpap = $state("");
    let oaf = $state("");
    let cbf = $state("");

    let cafeina = $state("");
    let aminofilina = $state("");
    let corticoideinhalado = $state("");
    let corticoidepostnatal = $state("");
    let oxidonitrico = $state("");

    //Cardiovascular
    let ductus = $state("");
    let cardiocongenita = $state("");

    //inotropico
    let dopamina = $state("");
    let dobutamina = $state("");
    let adrenalina = $state("");
    let milrinona = $state("");
    let vasopresina = $state("");

    let furosemida = $state("");
    let espironolacta = $state("");
    let hidrocloritiazida = $state("");

    //hematologia
    let tgr = $state("");
    let plasma = $state("");
    let plaqueta = $state("");
    let inmunoglobina = $state("");
    let transfusion = $state("");

    //neurologia
    let ecotf = $state("");
    let hiv = $state("");
    let convulsiones = $state("");
    let ehi = $state("");
    let hipo = $state("");

    //oftamologia
    let fondoojo = $state("");
    let rop = $state("");
    let tratamientorop = $state("");

    //digestivo
    let nec = $state("");
    let perforacion = $state("");
    let onfalocele = $state("");
    let gastrosquisis = $state("");
    let atresia = $state("");
    let tqt = $state("");
    let drenajepleural = $state("");
    let drenajeventricular = $state("");

    //gentico
    let trisomia21 = $state("");
    let trisomia13 = $state("");
    let trisomia18 = $state("");
    let vacterl = $state("");
    let turner = $state("");

    //medicacion
    let protectorgastrico = $state("");
    let inhibidor = $state("");
    let probiotico = $state("");
    let eritromicina = $state("");
    let fentanilo = $state("");
    let morfina = $state("");
    let midozolam = $state("");
    let precedex = $state("");
    let metadona = $state("");
    let vecuronio = $state("");
    let prostaglandinas = $state("");

    //otros
    let malformacionescongenitas = $state("");
    let cirugias = $state("");
    let complicaciones = $state("");
    let diagnostico = $state("");

    //alta
    let conalta = $state("");
    let altadesde = $state("");
    let altahasta = $state("");
    let altacomplicaciones = $state("");
    let altadiagnostico = $state("");

    let defaultchecks = {
        checked_identificacion: true,
        checked_ingreso: true,
        checked_antropometria: true,
        checked_maternos: true,
        checked_respiratorias: true,
        checked_neurologicas: true,
        checked_medicacion: true,
        checked_avanzados: true,
        checked_cateteres: true,
        checked_alimentacion: true,
        checked_infecciones: true,
        checked_cardiovascular: true,
        checked_inotropicos: true,
        checked_sangre: true,
        checked_oftalmologia: true,
        checked_digestivo: true,
        checked_genetica: true,
        checked_alta: true,
        checked_otros: true,
        checked_diagnostico: true,
    };
    let proxychecks = $state({
        ...defaultchecks,
    });
    let checksproxy = createStorageProxy("reportechecks", defaultchecks);

    let defaultfiltros = {
        sinhistorial: "",
        unidad: "",
        area: "",
        fechadesde: "",
        fechahasta: "",
        dnimadre: "",
        nombremadre: "",
        dnirn: "",
        nombrern: "",
        nacdesde: "",
        nachasta: "",
        ingresodesde: "",
        ingresohasta: "",
        egresodesde: "",
        egresohasta: "",
        tipoingreso: "",
        sexorn: "",
        tipoparto: "",
        partodomicilio: "",
        apgar_1: "",
        apgar_5: "",
        apgar_10: "",
        gestacion: "",
        gestaciondesde: "",
        gestacionhasta: "",
        rciu: "",
        temperatura_ingreso: "",
        rem: "",
        reanimacion: "",
        liquido: "",
        fallece: "",
        peso_rn: "",
        peso_7: "",
        peso_14: "",
        peso_21: "",
        peso_28: "",
        peso_36: "",
        cefalico_rn: "",
        cefalico_7: "",
        cefalico_14: "",
        cefalico_21: "",
        cefalico_28: "",
        cefalico_36: "",
        talla_rn: "",
        talla_7: "",
        talla_14: "",
        talla_21: "",
        talla_28: "",
        talla_36: "",
        scorez_rn: "",
        scorez_7: "",
        scorez_14: "",
        scorez_21: "",
        scorez_28: "",
        scorez_36: "",
        recuperarpeso: "",
        recuperarpesodesde: "",
        recuperarpesohasta: "",
        edad_materna: "",
        niveleducativo: "",
        paridad: "",
        gemelos: "",
        controlparental: "",
        corticoideprenatal: "",
        tabaquismo: "",
        adiccion: "",
        egb: "",
        crioaminintis: "",
        sulfato: "",
        diabetes: "",
        colico: "",
        congenita: "",
        itu: "",
        desprendimiento: "",
        sufrimiento: "",
        ht: "",
        hie: "",
        preeclampisa: "",
        eclampsia: "",
        colestasis: "",
        umbilicalvenoso: "",
        umbilicalarterial: "",
        percutaneo: "",
        central: "",
        trofica: "",
        volumenenteral: "",
        caloriasenteral: "",
        tipoenteral: "",
        nutricionparental: "",
        edadnpt: "",
        duracionnpt: "",
        comienzoaa: "",
        aporteaa: "",
        comienzolipido: "",
        aportelipido: "",
        tempranoestado: "",
        tempranogermen: "",
        tempranoantibiotico: "",
        tempranoatb: "",
        tardeestado: "",
        tardegermen: "",
        tardeantibiotico: "",
        tardeatb: "",
        emh: "",
        ndosissurfactante: "",
        salam: "",
        apena: "",
        neumotorax: "",
        taquipnea: "",
        hipertension: "",
        interstecial: "",
        dbp: "",
        oxigeno: "",
        surfactante: "",
        arm: "",
        intubado: "",
        vafo: "",
        cpap: "",
        oaf: "",
        cbf: "",
        cafeina: "",
        aminofilina: "",
        corticoideinhalado: "",
        corticoidepostnatal: "",
        oxidonitrico: "",
        ductus: "",
        cardiocongenita: "",
        dopamina: "",
        dobutamina: "",
        adrenalina: "",
        milrinona: "",
        vasopresina: "",
        furosemida: "",
        espironolacta: "",
        hidrocloritiazida: "",
        tgr: "",
        plasma: "",
        plaqueta: "",
        inmunoglobina: "",
        transfusion: "",
        ecotf: "",
        hiv: "",
        convulsiones: "",
        ehi: "",
        hipo: "",
        fondoojo: "",
        rop: "",
        tratamientorop: "",
        nec: "",
        perforacion: "",
        onfalocele: "",
        gastrosquisis: "",
        atresia: "",
        tqt: "",
        drenajepleural: "",
        drenajeventricular: "",
        trisomia21: "",
        trisomia13: "",
        trisomia18: "",
        vacterl: "",
        turner: "",
        protectorgastrico: "",
        inhibidor: "",
        probiotico: "",
        eritromicina: "",
        fentanilo: "",
        morfina: "",
        midozolam: "",
        precedex: "",
        metadona: "",
        vecuronio: "",
        prostaglandinas: "",
        malformacionescongenitas: "",
        cirugias: "",
        complicaciones: "",
        diagnostico: "",
        conalta: "",
        altadesde: "",
        altahasta: "",
    };
    let proxyfiltros = $state({
        ...defaultfiltros,
    });
    let proxy = createStorageProxy("reportebebes", defaultfiltros);
    function procesarHistorial() {
        //
        for (let i = 0; i < bebes.length; i++) {
            let b = bebes[i];
            let bebehistoria = {
                id: b.id,
                estados: [],
            };
            let fecha_inicio = b.created;
            let fecha_fin = "";
            let hs_bebe = historial.filter((h) => h.bebe == b.id);
            for (let j = 0; j < hs_bebe.length; j++) {
                let h = hs_bebe[j];
                fecha_fin = h.fecha;

                let estado = {
                    fecha_inicio,
                    fecha_fin,
                    ...h,
                };
                bebehistoria.estados.push(estado);
                fecha_inicio = fecha_fin;
            }
            fecha_fin = new Date().toUTCString().split("T")[0] + " 00:00:00";
            let estado = {
                fecha_inicio,
                fecha_fin,
                ...b,
            };
            bebehistoria.estados.push(estado);
            historiasbebes.push(bebehistoria);
        }
    }


    function procesarEstadisticas(){
        unidades_estadisticas = []
        areas_estadisticas = []
        let contador_unidades = {}
        let contador_areas = {}
        let unidades_movimientos_todos = []
        let areas_movimentos_todos = []
        for (let i = 0; i < historiasbebesrow.length; i++) {
            let h =historiasbebesrow[i]; 
            let primer_estado = h.estados[0];
            let ultimo_estado = h.estados[h.estados.length - 1];
        }

    }
    function getNombre(id, lista) {
        let ops = lista.filter((o) => o.id == id);
        if (ops.length == 0) {
            return "";
        }

        return ops[0].nombre;
    }
    function calcularMovimientos(estados) {
        let movimientos_unidades = []
        let movimientos_areas = []
        let primer_estado = estados[0];
        if (estados.length == 1) {
            let estado_inicio = estados[0];
            let movimiento_unidad = {
                grupo:estado_inicio.unidad,
                fecha:estado_inicio.created,
                unidad:estado_inicio.unidad,
                cantidad:1
            }
            movimientos_unidades.push(movimiento_unidad)
            let movimiento_area = {
                grupo:estado_inicio.area,
                fecha:estado_inicio.created,
                area:estado_inicio.area,
                cantidad:1
            }
            movimientos_areas.push(movimiento_area)
        }
        else{
            let estado_inicio = estados[0];
            let movimiento_unidad = {
                grupo:estado_inicio.unidad,
                fecha:estado_inicio.created,
                unidad:estado_inicio.unidad,
                cantidad:1
            }
            movimientos_unidades.push(movimiento_unidad)
            let movimiento_area = {
                grupo:estado_inicio.area,
                fecha:estado_inicio.created,
                area:estado_inicio.area,
                cantidad:1
            }
            movimientos_areas.push(movimiento_area)
            for (let i = 1; i < estados.length; i++) {
                let estado = estados[i];
                if(estado.unidad != estado_inicio.unidad){
                    let movimiento_unidad = {
                        grupo:estado.unidad,
                        fecha: estado.created,
                        unidad: estado.unidad,
                        cantidad: 1,
                    };
                    let resta_movimiento_unidad = {
                        grupo:estado_inicio.unidad,
                        fecha: estado.created,
                        unidad: estado_inicio.unidad,
                        cantidad: -1,
                    };
                    movimientos_unidades.push(movimiento_unidad)
                    movimientos_unidades.push(resta_movimiento_unidad)
                }
                if(estado.area != estado_inicio.area){
                    let movimiento_area = {
                        grupo:estado.area,
                        fecha: estado.created,
                        area: estado.area,
                        cantidad: 1,
                    };
                    let resta_movimiento_area = {
                        grupo:estado_inicio.area,
                        fecha: estado.created,
                        area: estado_inicio.area,
                        cantidad: -1
                    };
                    movimientos_areas.push(movimiento_area)
                    movimientos_areas.push(resta_movimiento_area)
                }
            }
        }
        return {
            movimientos_areas,
            movimientos_unidades
        }
    }
    function acumularContador(contador, clave, lista) {
        if (!contador[clave]) {
            contador[clave] = {
                clave,
                nombre: getNombre(clave, lista),
                cantidad: 0,
                
            };
        }
        contador[clave].cantidad += 1;
    }
    function procesarContador(contador, singrupo) {
        return Object.entries(contador)
                //.sort((a,b)=>a.nombre.toLocaleLowerCase>b.nombretoLocaleLowerCase?-1:1)
                .map((fila) => {
                    let vacio=fila[1].nombre.length == 0 ;
                    let nombre =
                        fila[1].nombre.length == 0 ? singrupo : fila[1].nombre;

                    return {
                        ...fila[1],
                        vacio,
                        nombre,
                        grupo:fila[1].clave,
                    };
                })
                .sort((a,b)=>
                    a.vacio?
                        -1:
                    b.vacio?
                        1:
                        a.nombre.toLocaleLowerCase()>b.nombre.toLocaleLowerCase()?
                            1:
                            -1
                )                
        ;
    }
    function calcularStockHistorial(movimientos){
        let historicomap = {}
        let historico = []
        
        
        for(let i = 0;i<movimientos.length;i++){
            let movimiento = movimientos[i]
            let fecha = movimiento.fecha.split(" ")[0]
            if(!historicomap[movimiento.grupo]){
                historicomap[movimiento.grupo] = {
                    grupo:movimiento.grupo,
                    nombre:"",
                    historial:{}
                }
            }
            if(!historicomap[movimiento.grupo].historial[fecha]){
                historicomap[movimiento.grupo].historial[fecha] ={
                    cantidad:0,
                }

            }
            historicomap[movimiento.grupo].historial[fecha].cantidad += movimiento.cantidad
            
        }
        let grupos_cantidad = {}
        for (const [grupo, fila] of Object.entries(historicomap)) {
            grupos_cantidad[grupo] = {cantidad:0}
            for(const [fecha,historial] of Object.entries(fila.historial)){
                
                let item =  {
                    fecha,
                    grupo,
                    cantidad:historial.cantidad
                }   
                historico.push(item)
            }
        }
        
        historico.sort((a,b)=>new Date(a.fecha)>new Date(b.fecha)?1:-1)
        for(let i = 0;i<historico.length;i++){
            let h = historico[i]
            let grupo = h.grupo
            let cantidad = grupos_cantidad[grupo].cantidad + h.cantidad
            
            grupos_cantidad[grupo].cantidad = cantidad
            
            historico[i].cantidad = cantidad


        }
        return historico
    }
    function procesarFilas() {
        filas = [];

        unidades_estadisticas = []
        areas_estadisticas = []
        let contador_unidades = {}
        let contador_areas = {}
        let unidades_movimientos_todos = []
        let areas_movimentos_todos = []
        for (let i = 0; i < historiasbebesrow.length; i++) {
            let h = historiasbebesrow[i];
            let primer_estado = h.estados[0];
            let ultimo_estado = h.estados[h.estados.length - 1];
            let fila = { ...ultimo_estado };
            let movimientos = calcularMovimientos(h.estados)
            filas.push(fila);
            acumularContador(contador_areas,ultimo_estado.area,areas)
            acumularContador(contador_unidades,ultimo_estado.unidad,unidades)


            
            unidades_movimientos_todos = unidades_movimientos_todos.concat(movimientos.movimientos_unidades)
            areas_movimentos_todos = areas_movimentos_todos.concat(movimientos.movimientos_areas)
        }
        unidades_estadisticas = procesarContador(contador_unidades, "Sin unidad");
        areas_estadisticas = procesarContador(contador_areas, "Sin área");
        //historico
        unidad_historico = calcularStockHistorial(unidades_movimientos_todos)
        area_historico  = calcularStockHistorial(areas_movimentos_todos)

        totalcantidad = filas.length
    }
    function esSubconjunto(subconjunto, conjunto) {
        // Verifica que ambos parámetros sean arrays
        if (!Array.isArray(subconjunto) || !Array.isArray(conjunto)) {
            throw new Error("Ambos parámetros deben ser arrays");
        }

        // Convierte el conjunto grande en un Set para búsquedas eficientes
        //const conjuntoSet = new Set(conjunto.map(x=>x.trim()));
        // Verifica que todos los elementos del subconjunto estén en el conjunto
        //return subconjunto.every((elemento) => conjuntoSet.has(elemento.trim()));
        // Normaliza el conjunto (minúsculas y sin espacios)
        const conjuntoNormalizado = conjunto.map((x) => x.trim().toLowerCase());

        // Verifica que cada elemento del subconjunto tenga alguna coincidencia parcial en el conjunto
        return subconjunto.every((elemSub) => {
            const elem = elemSub.trim().toLowerCase();
            return conjuntoNormalizado.some((item) => item.includes(elem));
        });
    }
    // Convertir a objeto Date si son strings
    const parseDate = (d) => {
        if (!d) return null;
        const date = new Date(d);
        return isNaN(date.getTime()) ? null : date;
    };
    function estaEnRango(fecha, fechaDesde, fechaHasta) {
        // Si la fecha principal es vacía, devolver false
        if (!fecha) return false;

        const fechaObj = parseDate(fecha);
        const desdeObj = parseDate(fechaDesde);
        const hastaObj = parseDate(fechaHasta);


        // Si la fecha no es válida, devolver false
        if (!fechaObj) return false;

        // Verificar rango inferior (si existe)
        if (desdeObj && fechaObj < desdeObj) return false;

        // Verificar rango superior (si existe)
        if (hastaObj && fechaObj > hastaObj) return false;

        // Si pasó todas las validaciones, está en rango
        return true;
    }
    function filtrarBoolean(variableestado, variable) {
        if (variable.length == 0) {
            return true;
        } else {
            return variableestado == variable;
        }
    }
    function filtrarPorFecha(variableestado, variabledesde, variablehasta) {
        if (variabledesde.length == 0 && variablehasta.length == 0) {
            return true;
        } else {
            return estaEnRango(variableestado, variabledesde, variablehasta);
        }
    }
    function filtrarPorMas(variableestado, variable) {
        if (variable.length == 0) {
            return true;
        }
        let listavariable = variable
            .split("+")
            .map((s) => s.toLocaleLowerCase());

        let listaestado = variableestado
            .split("+")
            .map((s) => s.toLocaleLowerCase());

        return esSubconjunto(listavariable, listaestado);
    }
    function filtrarPorRango(variableestado, variable, rangos) {
        if (variable.length == 0) {
            return true;
        } else {
            if (variableestado == null) {
                return false;
            }
            if (variableestado.length == 0) {
                return false;
            }
            let valor = Number(variableestado);

            let rangolista = rangos.filter((r) => r.id == variable);
            if (rangolista.length > 0) {
                let rango = rangolista[0];
                let rangomin = Number(rango.min);
                let rangomax = Number(rango.max);
                return valor >= rangomin && valor < rangomax;
            } else {
                return true;
            }
        }
    }
    function filtrarPorParecido(variableestado, variable) {
        if (variable.length == 0) {
            return true;
        }
        return variableestado
            .toLocaleLowerCase()
            .includes(variable.toLocaleLowerCase());
    }

    function filtrarPorIgualdad(variableestado, variable) {
        if (variable.length == 0) {
            return true;
        }
        return variableestado == variable;
    }
    function filtrarPorFechaEstado(estado, fechadesde, fechahasta) {
        let estado_inicio = new Date(estado.fecha_inicio);
        let estado_fin = new Date(estado.fecha_fin);
        let desde = new Date(fechadesde);
        let hasta = new Date(fechahasta);
        let no_valido = estado_fin < desde || estado_inicio > hasta;
        return !no_valido;
    }
    function filtrarEntreValores(variableestado, variabledesde, variablehasta) {
        if (variabledesde.length == 0 && variablehasta.length == 0) {
            return true;
        } else if (variabledesde.length == 0) {
            let hasta = Number(variablehasta);
            if (isNaN(hasta)) {
                return true;
            }
            let valor = Number(variableestado);
            return valor < hasta;
        } else if (variablehasta.length == 0) {
            let desde = Number(variabledesde);
            if (isNaN(desde)) {
                return true;
            }
            let valor = Number(variableestado);
            return valor >= desde;
        } else {
            let desde = Number(variabledesde);
            let hasta = Number(variablehasta);
            let valor = Number(variableestado);
            if (isNaN(desde) && isNaN(hasta)) {
                return true;
            } else if (isNaN(desde)) {
                return valor < hasta;
            } else if (isNaN(hasta)) {
                return valor >= desde;
            } else {
                return valor < hasta && valor >= desde;
            }
        }
    }

    function validarEstado(estado) {
        //fecha
        if (!filtrarPorFechaEstado(estado, fechadesde, fechahasta)) {
            return false;
        }
        //unidad
        if (!filtrarPorIgualdad(estado.unidad, unidad)) {
            return false;
        }
        //Area
        if (!filtrarPorIgualdad(estado.area, area)) {
            return false;
        }
        //dniBebe
        if (!filtrarPorParecido(estado.dnibebe, dnirn)) {
            return false;
        }
        //dnimama
        if (!filtrarPorParecido(estado.dnimama, dnimadre)) {
            return false;
        }
        //nombreBebe
        if (!filtrarPorParecido(estado.nombrebebe, nombrern)) {
            return false;
        }
        //nombremama
        if (!filtrarPorParecido(estado.nombremama, nombremadre)) {
            return false;
        }
        //Sexo
        if (!filtrarPorIgualdad(estado.sexo, sexorn)) {
            return false;
        }

        //nacimiento
        if (!filtrarPorFecha(estado.fechanacimientobebe, nacdesde, nachasta)) {
            return false;
        }
        //alta
        //if(!filtrarPorFecha(estado.fechanacimientobebe,egresodesde,egresohasta)){
        //    return false
        //}
        //ingreso
        if (
            !filtrarPorFecha(
                estado.fechaingresobebe,
                ingresodesde,
                ingresohasta,
            )
        ) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.tipoingreso, tipoingreso)) {
            return false;
        }
        //parto
        if (!filtrarPorIgualdad(estado.tipo_parto, tipoparto)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.parto_domiciliario, partodomicilio)) {
            return false;
        }
        //apgar
        if (!filtrarPorRango(estado.apgar_1, apgar_1, opciones.APGAR_RANGO)) {
            return false;
        }
        if (!filtrarPorRango(estado.apgar_5, apgar_5, opciones.APGAR_RANGO)) {
            return false;
        }
        if (!filtrarPorRango(estado.apgar_10, apgar_10, opciones.APGAR_RANGO)) {
            return false;
        }
        //edad gestacional
        if (
            !filtrarPorRango(
                estado.edad_gestacional,
                gestacion,
                opciones.EDAD_GESTACIONAL,
            )
        ) {
            return false;
        }

        if (
            !filtrarPorRango(
                estado.temperatura_ingreso,
                temperatura_ingreso,
                opciones.TEMPERATURA_RANGO,
            )
        ) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.rciu, rciu)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.rem, rem)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.reanimacion, reanimacion)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.liquido_meconial, liquido)) {
            return false;
        }
        if (fallece != -1 && !filtrarPorIgualdad(estado.fallece, fallece)) {
            return false;
        }
        //Antropometria
        //peso
        if (!filtrarPorRango(estado.pesorn, peso_rn, opciones.PESO_RANGO.RN)) {
            return false;
        }
        if (
            !filtrarPorRango(estado.peso7d, peso_7, opciones.PESO_RANGO.DIAS_7)
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.peso14d,
                peso_14,
                opciones.PESO_RANGO.DIAS_14,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.peso21d,
                peso_21,
                opciones.PESO_RANGO.DIAS_21,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.peso28d,
                peso_28,
                opciones.PESO_RANGO.DIAS_28,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.peso36sem,
                peso_36,
                opciones.PESO_RANGO.SEM_36,
            )
        ) {
            return false;
        }
        //cefalico
        if (
            !filtrarPorRango(
                estado.perimetrorn,
                cefalico_rn,
                opciones.CEFALICO_RANGO.RN,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.perimetro7d,
                cefalico_7,
                opciones.CEFALICO_RANGO.DIAS_7,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.perimetro14d,
                cefalico_14,
                opciones.CEFALICO_RANGO.DIAS_14,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.perimetro21d,
                cefalico_21,
                opciones.CEFALICO_RANGO.DIAS_21,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.perimetro28d,
                cefalico_28,
                opciones.CEFALICO_RANGO.DIAS_28,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.perimetro36sem,
                cefalico_36,
                opciones.CEFALICO_RANGO.SEM_36,
            )
        ) {
            return false;
        }
        //talla
        if (
            !filtrarPorRango(estado.tallarn, talla_rn, opciones.TALLA_RANGO.RN)
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.talla7d,
                talla_7,
                opciones.TALLA_RANGO.DIAS_7,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.talla14d,
                talla_14,
                opciones.TALLA_RANGO.DIAS_14,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.talla21d,
                talla_21,
                opciones.TALLA_RANGO.DIAS_21,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.talla28d,
                talla_28,
                opciones.TALLA_RANGO.DIAS_28,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.talla36sem,
                talla_36,
                opciones.TALLA_RANGO.SEM_36,
            )
        ) {
            return false;
        }
        //score
        if (
            !filtrarPorRango(estado.scorezrn, scorez_rn, opciones.SCOREZ_RANGO)
        ) {
            return false;
        }
        if (
            !filtrarPorRango(estado.scorez7d, scorez_7, opciones.SCOREZ_RANGO)
        ) {
            return false;
        }
        if (
            !filtrarPorRango(estado.scorez14d, scorez_14, opciones.SCOREZ_RANGO)
        ) {
            return false;
        }
        if (
            !filtrarPorRango(estado.scorez21d, scorez_21, opciones.SCOREZ_RANGO)
        ) {
            return false;
        }
        if (
            !filtrarPorRango(estado.scorez28d, scorez_28, opciones.SCOREZ_RANGO)
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.scorez36sem,
                scorez_36,
                opciones.SCOREZ_RANGO,
            )
        ) {
            return false;
        }
        //edad recuperar peso
        if (
            !filtrarEntreValores(
                estado.edadrecuperapeso,
                recuperarpesodesde,
                recuperarpesohasta,
            )
        ) {
            return false;
        }
        //Datos maternos
        if (
            !filtrarPorRango(
                calcularEdad(estado.fechanacimientomama),
                edad_materna,
                opciones.EDAD_MADRE,
            )
        ) {
            return false;
        }

        if (!filtrarPorIgualdad(estado.educacionmama, niveleducativo)) {
            return false;
        }
        if (!filtrarPorRango(estado.paridad, paridad, opciones.PARIDAD_MADRE)) {
            return false;
        }
        //Falta gemelos
        //igualdades
        if (
            !filtrarPorIgualdad(
                estado.controlprenatal,
                controlparental,
                opciones.SINO,
            )
        ) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.tabaquismo, tabaquismo)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.adiccion, adiccion)) {
            return false;
        }
        if (
            !filtrarPorIgualdad(estado.corticoideprenatal, corticoideprenatal)
        ) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.egb, egb)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.sulfatomg, sulfato)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.diabetesprevia, diabetes)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.crioaminitis, crioaminintis)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.infeccioncongenita, congenita)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.itu, itu)) {
            return false;
        }
        if (
            !filtrarPorIgualdad(estado.desprendimientoplacenta, desprendimiento)
        ) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.sufrimientofetal, sufrimiento)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.htcronica, ht)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.hie, hie)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.eclampsia, eclampsia)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.preeclampisa, preeclampisa)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.colestasis, colestasis)) {
            return false;
        }
        //cateteres
        if (
            !filtrarPorIgualdad(
                estado.cateteresumbilicalvenoso,
                umbilicalvenoso,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorIgualdad(
                estado.cateteresumbilicalarterial,
                umbilicalarterial,
            )
        ) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.percutanea, percutaneo)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.viacentral, central)) {
            return false;
        }
        //alimentacion
        if (!filtrarPorIgualdad(estado.alimentacionenteraltrofica, trofica)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.tipoalimentacionenteral, tipoenteral)) {
            return false;
        }
        if (
            !filtrarPorIgualdad(estado.nutricionparenteral, nutricionparental)
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.nptedadinicio,
                edadnpt,
                opciones.EDAD_INICIO,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.nptduraciondias,
                duracionnpt,
                opciones.DURACION,
            )
        ) {
            return false;
        }
        //aminoacidos
        if (
            !filtrarPorRango(
                estado.nptdiacomienzoaa,
                comienzoaa,
                opciones.INICIO_AA,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.nptaportetotalaa,
                aporteaa,
                opciones.APORTE_AA,
            )
        ) {
            return false;
        }
        //lipidos
        if (
            !filtrarPorRango(
                estado.nptdiacomienzolipido,
                comienzolipido,
                opciones.COMIENZO_LIPIDO,
            )
        ) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.nptaportetotallipido,
                aportelipido,
                opciones.APORTE_LIPIDO,
            )
        ) {
            return false;
        }
        //infeccion
        //temprana
        if (!filtrarPorIgualdad(estado.sepsistemprana, tempranoestado)) {
            return false;
        }
        if (!filtrarPorParecido(estado.sepsistempranagermen, tempranogermen)) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.sepsistempranaatbdias,
                tempranoatb,
                opciones.DURACION_TEMPRANA,
            )
        ) {
            return false;
        }
        //tardia
        if (!filtrarPorIgualdad(estado.sepsistardia, tardeestado)) {
            return false;
        }
        if (!filtrarPorParecido(estado.sepsistardiagermen, tardegermen)) {
            return false;
        }
        if (
            !filtrarPorRango(
                estado.sepsistardiaatbdias,
                tardeatb,
                opciones.DURACION_TARDIA,
            )
        ) {
            return false;
        }
        //Respiatorio
        if (!filtrarPorIgualdad(estado.emh, emh)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.apneas, apena)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.salam, salam)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.neumotorax, neumotorax)) {
            return false;
        }
        //taquipneatransitoria
        if (!filtrarPorIgualdad(estado.taquipneatransitoria, taquipnea)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.hipertpulmonar, hipertension)) {
            return false;
        }
        //enfermedadintersticial
        if (!filtrarPorIgualdad(estado.enfermedadintersticial, interstecial)) {
            return false;
        }
        //36 SEMANAS
        if (!filtrarPorIgualdad(estado.dbp36sem, dbp)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.o236sem, oxigeno)) {
            return false;
        }
        //Tratameintos
        if (!filtrarPorIgualdad(estado.surfactante, surfactante)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.ndosissurfactante, ndosissurfactante)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.arm, arm)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.intubadodesdeutpr, intubado)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.vafo, vafo)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.cpap, cpap)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.oaf, oaf)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.cbf, cbf)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.cafeina, cafeina)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.aminofilina, aminofilina)) {
            return false;
        }
        if (
            !filtrarPorIgualdad(estado.corticoideinhalado, corticoideinhalado)
        ) {
            return false;
        }
        if (
            !filtrarPorIgualdad(estado.corticoidepostnatal, corticoidepostnatal)
        ) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.oxidonitrico, oxidonitrico)) {
            return false;
        }
        //Cardiovascular
        if (!filtrarPorIgualdad(estado.ductus, ductus)) {
            return false;
        }
        //congenita
        if (!filtrarPorIgualdad(estado.cardiopatiacongenita, cardiocongenita)) {
            return false;
        }

        //hematologicos
        //TGR
        if (!filtrarPorRango(estado.hemoderivadostgrn, tgr, opciones.TGR)) {
            return false;
        }
        //Plasma
        if (
            !filtrarPorRango(
                estado.hemoderivadosplasman,
                plasma,
                opciones.PLASMA,
            )
        ) {
            return false;
        }
        //Plaqueta
        if (
            !filtrarPorRango(
                estado.hemoderivadosplaquetasn,
                plaqueta,
                opciones.PLAQUETAS,
            )
        ) {
            return false;
        }
        //Gamma
        if (
            !filtrarPorRango(
                estado.hemoderivadosgamman,
                inmunoglobina,
                opciones.GAMMAGLOBULINA,
            )
        ) {
            return false;
        }
        //exanguioneo
        if (!filtrarPorIgualdad(estado.exanguineotransfusion, transfusion)) {
            return false;
        }
        //oftamologia
        if (!filtrarPorIgualdad(estado.fondoojo, fondoojo)) {
            return false;
        }
        //rop
        if (!filtrarPorIgualdad(estado.rop, rop)) {
            return false;
        }
        //roptto
        if (!filtrarPorIgualdad(estado.roptto, tratamientorop)) {
            return false;
        }
        //digestivo les faltan algunos atributos
        //necestadio
        if (!filtrarPorIgualdad(estado.necestadio, nec)) {
            return false;
        }
        //perforacionunica
        if (!filtrarPorIgualdad(estado.perforacionunica, perforacion)) {
            return false;
        }
        //onfalocele
        if (!filtrarPorIgualdad(estado.onfalocele, onfalocele)) {
            return false;
        }
        //gastroquisis
        if (!filtrarPorIgualdad(estado.gastroquisis, gastrosquisis)) {
            return false;
        }
        //hdc falta diagnostico y tratamiento

        //tqt
        if (!filtrarPorIgualdad(estado.tqt, tqt)) {
            return false;
        }
        //drenajepleural
        if (!filtrarPorIgualdad(estado.drenajepleural, drenajepleural)) {
            return false;
        }
        //drenajeventricular
        if (
            !filtrarPorIgualdad(estado.drenajeventricular, drenajeventricular)
        ) {
            return false;
        }
        //antecedentes geneticos
        //geneticat21
        if (!filtrarPorIgualdad(estado.geneticat21, trisomia21)) {
            return false;
        }
        //geneticat13
        if (!filtrarPorIgualdad(estado.geneticat13, trisomia13)) {
            return false;
        }
        //geneticat18
        if (!filtrarPorIgualdad(estado.geneticat18, trisomia18)) {
            return false;
        }
        //geneticavacterl
        if (!filtrarPorIgualdad(estado.geneticavacterl, vacterl)) {
            return false;
        }
        //geneticaturner
        if (!filtrarPorIgualdad(estado.geneticaturner, turner)) {
            return false;
        }
        //medicacion
        //medprotectorgastricodias
        if (
            !filtrarPorRango(
                estado.medprotectorgastricodias,
                protectorgastrico,
                opciones.PROTECTOR,
            )
        ) {
            return false;
        }
        //medinhibidorbombahdias
        if (
            !filtrarPorRango(
                estado.medinhibidorbombahdias,
                inhibidor,
                opciones.INHIBIDOR,
            )
        ) {
            return false;
        }
        //medprobiodias
        if (
            !filtrarPorRango(
                estado.medprobiodias,
                probiotico,
                opciones.PROBIOTICO,
            )
        ) {
            return false;
        }
        //meleritromicinadias
        if (
            !filtrarPorRango(
                estado.meleritromicinadias,
                eritromicina,
                opciones.ERITROMICINA,
            )
        ) {
            return false;
        }
        //medfentanilodias
        if (
            !filtrarPorRango(
                estado.medfentanilodias,
                fentanilo,
                opciones.FENTANILO,
            )
        ) {
            return false;
        }
        //medmorfinadias
        if (
            !filtrarPorRango(estado.medmorfinadias, morfina, opciones.MORFINA)
        ) {
            return false;
        }
        //medmidazolamdias
        if (
            !filtrarPorRango(estado.medmorfinadias, morfina, opciones.MORFINA)
        ) {
            return false;
        }
        //medprecedexdias
        if (
            !filtrarPorRango(
                estado.medprecedexdias,
                precedex,
                opciones.PRECEDEX,
            )
        ) {
            return false;
        }
        //medmetadonadias
        if (
            !filtrarPorRango(
                estado.medmetadonadias,
                metadona,
                opciones.METADONA,
            )
        ) {
            return false;
        }
        //medvecuroniadias
        if (
            !filtrarPorRango(
                estado.medvecuroniadias,
                vecuronio,
                opciones.VECURONIO,
            )
        ) {
            return false;
        }
        //medprostagldias
        if (
            !filtrarPorRango(
                estado.medprostagldias,
                prostaglandinas,
                opciones.PROSTAGLANDINA,
            )
        ) {
            return false;
        }
        //inotropicos
        //inotropicosdopamina
        if (!filtrarPorIgualdad(estado.inotropicosdopamina, dopamina)) {
            return false;
        }
        //inotropicosdobutamina
        if (!filtrarPorIgualdad(estado.inotropicosdobutamina, dobutamina)) {
            return false;
        }
        //inotropicosadrenalina
        if (!filtrarPorIgualdad(estado.inotropicosadrenalina, adrenalina)) {
            return false;
        }
        //inotropicosmilrinona
        if (!filtrarPorIgualdad(estado.inotropicosmilrinona, milrinona)) {
            return false;
        }
        //inotropicosvasopresina
        if (!filtrarPorIgualdad(estado.inotropicosvasopresina, vasopresina)) {
            return false;
        }

        //diureticos
        //diureticosespironolac
        if (!filtrarPorIgualdad(estado.diureticosespironolac, espironolacta)) {
            return false;
        }
        //diureticoshidroclotiaz
        if (
            !filtrarPorIgualdad(
                estado.diureticoshidroclotiaz,
                hidrocloritiazida,
            )
        ) {
            return false;
        }
        //diureticosfurosemida
        if (!filtrarPorIgualdad(estado.diureticosfurosemida, furosemida)) {
            return false;
        }
        // neurologicas
        //hivgrado
        if (!filtrarPorIgualdad(estado.ecotf, ecotf)) {
            return false;
        }
        if (!filtrarPorIgualdad(estado.hivgrado, hiv)) {
            return false;
        }
        //convulsiones
        if (!filtrarPorIgualdad(estado.convulsiones, convulsiones)) {
            return false;
        }
        //ehi
        if (!filtrarPorIgualdad(estado.ehi, ehi)) {
            return false;
        }
        //hipotermiatipo
        if (!filtrarPorIgualdad(estado.hipotermiatipo, hipo)) {
            return false;
        }
        //otros
        if (
            !filtrarPorMas(
                estado.malformacionescongenitas,
                malformacionescongenitas,
            )
        ) {
            return false;
        }
        if (!filtrarPorMas(estado.cirugias, cirugias)) {
            return false;
        }
        if (!filtrarPorMas(estado.complicaciones, complicaciones)) {
            return false;
        }
        //diagnosticos
        if (!filtrarPorMas(estado.diagnostico, diagnostico)) {
            return false;
        }
        //alta
        
        

        //boolean
        if (!filtrarPorIgualdad(estado.conalta, conalta)) {
            return false;
        }
        
        if (!filtrarPorFecha(estado.altafecha, altadesde, altahasta)) {
            return false;
        }
        return true;
    }
    function filterUpdate() {
        //historiasbebesrow = historiasbebes;
        historiasbebesrow = [];

        for (let i = 0; i < historiasbebes.length; i++) {
            let hb = historiasbebes[i];
            let id = hb.id;
            let listaestados = [];
            let bebehistoria = {
                id,
                estados: [],
            };
            for (let j = 0; j < hb.estados.length; j++) {
                let estado = hb.estados[j];
                if (validarEstado(estado)) {
                    listaestados.push(estado);
                }
            }
            if (listaestados.length > 0) {
                bebehistoria.estados = listaestados.map((x) => x);

                historiasbebesrow.push(bebehistoria);
            }
        }

        procesarFilas();
    }
    async function getHistorial() {
        historial = await pb.collection("historialbebes").getFullList({
            expand: "bebe",
            sort: "bebe,fecha",
            filter: "bebe.active=true",
        });
    }
    //que pasa si elimine un bebe pero quiero sus estados
    async function getBebes() {
        bebes = await pb.collection("bebes").getFullList({
            sort: "id",
            filter: "active=true",
        });
    }
    function setFiltrosChecks() {
        checked_identificacion = proxychecks.checked_identificacion;
        checked_ingreso = proxychecks.checked_ingreso;
        checked_antropometria = proxychecks.checked_antropometria;
        checked_maternos = proxychecks.checked_maternos;
        checked_respiratorias = proxychecks.checked_respiratorias;
        checked_neurologicas = proxychecks.checked_neurologicas;
        checked_medicacion = proxychecks.checked_medicacion;
        checked_avanzados = proxychecks.checked_avanzados;
        checked_cateteres = proxychecks.checked_cateteres;
        checked_alimentacion = proxychecks.checked_alimentacion;
        checked_infecciones = proxychecks.checked_infecciones;
        checked_cardiovascular = proxychecks.checked_cardiovascular;
        checked_inotropicos = proxychecks.checked_inotropicos;
        checked_sangre = proxychecks.checked_sangre;
        checked_oftalmologia = proxychecks.checked_oftalmologia;
        checked_digestivo = proxychecks.checked_digestivo;
        checked_genetica = proxychecks.checked_genetica;
        checked_alta = proxychecks.checked_alta;
        checked_otros = proxychecks.checked_otros;
        checked_diagnostico = proxychecks.checked_diagnostico;
    }
    function setProxyChecks() {
        proxychecks.checked_identificacion = checked_identificacion;
        proxychecks.checked_ingreso = checked_ingreso;
        proxychecks.checked_antropometria = checked_antropometria;
        proxychecks.checked_maternos = checked_maternos;
        proxychecks.checked_respiratorias = checked_respiratorias;
        proxychecks.checked_neurologicas = checked_neurologicas;
        proxychecks.checked_medicacion = checked_medicacion;
        proxychecks.checked_avanzados = checked_avanzados;
        proxychecks.checked_cateteres = checked_cateteres;
        proxychecks.checked_alimentacion = checked_alimentacion;
        proxychecks.checked_infecciones = checked_infecciones;
        proxychecks.checked_cardiovascular = checked_cardiovascular;
        proxychecks.checked_inotropicos = checked_inotropicos;
        proxychecks.checked_sangre = checked_sangre;
        proxychecks.checked_oftalmologia = checked_oftalmologia;
        proxychecks.checked_digestivo = checked_digestivo;
        proxychecks.checked_genetica = checked_genetica;
        proxychecks.checked_alta = checked_alta;
        proxychecks.checked_otros = checked_otros;
        proxychecks.checked_diagnostico = checked_diagnostico;
    }
    function setFiltros() {
        sinhistorial = proxyfiltros.sinhistorial;
        unidad = proxyfiltros.unidad;
        area = proxyfiltros.area;
        fechadesde = proxyfiltros.fechadesde;
        fechahasta = proxyfiltros.fechahasta;
        dnimadre = proxyfiltros.dnimadre;
        nombremadre = proxyfiltros.nombremadre;
        dnirn = proxyfiltros.dnirn;
        nombrern = proxyfiltros.nombrern;
        nacdesde = proxyfiltros.nacdesde;
        nachasta = proxyfiltros.nachasta;
        ingresodesde = proxyfiltros.ingresodesde;
        ingresohasta = proxyfiltros.ingresohasta;
        egresodesde = proxyfiltros.egresodesde;
        egresohasta = proxyfiltros.egresohasta;
        tipoingreso = proxyfiltros.tipoingreso;
        sexorn = proxyfiltros.sexorn;
        tipoparto = proxyfiltros.tipoparto;
        partodomicilio = proxyfiltros.partodomicilio;
        apgar_1 = proxyfiltros.apgar_1;
        apgar_5 = proxyfiltros.apgar_5;
        apgar_10 = proxyfiltros.apgar_10;
        gestacion = proxyfiltros.gestacion;
        gestaciondesde = proxyfiltros.gestaciondesde;
        gestacionhasta = proxyfiltros.gestacionhasta;
        rciu = proxyfiltros.rciu;
        temperatura_ingreso = proxyfiltros.temperatura_ingreso;
        rem = proxyfiltros.rem;
        reanimacion = proxyfiltros.reanimacion;
        liquido = proxyfiltros.liquido;
        fallece = proxyfiltros.fallece;
        peso_rn = proxyfiltros.peso_rn;
        peso_7 = proxyfiltros.peso_7;
        peso_14 = proxyfiltros.peso_14;
        peso_21 = proxyfiltros.peso_21;
        peso_28 = proxyfiltros.peso_28;
        peso_36 = proxyfiltros.peso_36;
        cefalico_rn = proxyfiltros.cefalico_rn;
        cefalico_7 = proxyfiltros.cefalico_7;
        cefalico_14 = proxyfiltros.cefalico_14;
        cefalico_21 = proxyfiltros.cefalico_21;
        cefalico_28 = proxyfiltros.cefalico_28;
        cefalico_36 = proxyfiltros.cefalico_36;
        talla_rn = proxyfiltros.talla_rn;
        talla_7 = proxyfiltros.talla_7;
        talla_14 = proxyfiltros.talla_14;
        talla_21 = proxyfiltros.talla_21;
        talla_28 = proxyfiltros.talla_28;
        talla_36 = proxyfiltros.talla_36;
        scorez_rn = proxyfiltros.scorez_rn;
        scorez_7 = proxyfiltros.scorez_7;
        scorez_14 = proxyfiltros.scorez_14;
        scorez_21 = proxyfiltros.scorez_21;
        scorez_28 = proxyfiltros.scorez_28;
        scorez_36 = proxyfiltros.scorez_36;
        recuperarpeso = proxyfiltros.recuperarpeso;
        recuperarpesodesde = proxyfiltros.recuperarpesodesde;
        recuperarpesohasta = proxyfiltros.recuperarpesohasta;
        edad_materna = proxyfiltros.edad_materna;
        niveleducativo = proxyfiltros.niveleducativo;
        paridad = proxyfiltros.paridad;
        gemelos = proxyfiltros.gemelos;
        controlparental = proxyfiltros.controlparental;
        corticoideprenatal = proxyfiltros.corticoideprenatal;
        tabaquismo = proxyfiltros.tabaquismo;
        adiccion = proxyfiltros.adiccion;
        egb = proxyfiltros.egb;
        crioaminintis = proxyfiltros.crioaminintis;
        sulfato = proxyfiltros.sulfato;
        diabetes = proxyfiltros.diabetes;
        colico = proxyfiltros.colico;
        congenita = proxyfiltros.congenita;
        itu = proxyfiltros.itu;
        desprendimiento = proxyfiltros.desprendimiento;
        sufrimiento = proxyfiltros.sufrimiento;
        ht = proxyfiltros.ht;
        hie = proxyfiltros.hie;
        preeclampisa = proxyfiltros.preeclampisa;
        eclampsia = proxyfiltros.eclampsia;
        colestasis = proxyfiltros.colestasis;
        umbilicalvenoso = proxyfiltros.umbilicalvenoso;
        umbilicalarterial = proxyfiltros.umbilicalarterial;
        percutaneo = proxyfiltros.percutaneo;
        central = proxyfiltros.central;
        trofica = proxyfiltros.trofica;
        volumenenteral = proxyfiltros.volumenenteral;
        caloriasenteral = proxyfiltros.caloriasenteral;
        tipoenteral = proxyfiltros.tipoenteral;
        nutricionparental = proxyfiltros.nutricionparental;
        edadnpt = proxyfiltros.edadnpt;
        duracionnpt = proxyfiltros.duracionnpt;
        comienzoaa = proxyfiltros.comienzoaa;
        aporteaa = proxyfiltros.aporteaa;
        comienzolipido = proxyfiltros.comienzolipido;
        aportelipido = proxyfiltros.aportelipido;
        tempranoestado = proxyfiltros.tempranoestado;
        tempranogermen = proxyfiltros.tempranogermen;
        tempranoantibiotico = proxyfiltros.tempranoantibiotico;
        tempranoatb = proxyfiltros.tempranoatb;
        tardeestado = proxyfiltros.tardeestado;
        tardegermen = proxyfiltros.tardegermen;
        tardeantibiotico = proxyfiltros.tardeantibiotico;
        tardeatb = proxyfiltros.tardeatb;
        emh = proxyfiltros.emh;
        ndosissurfactante = proxyfiltros.ndosissurfactante;
        salam = proxyfiltros.salam;
        apena = proxyfiltros.apena;
        neumotorax = proxyfiltros.neumotorax;
        taquipnea = proxyfiltros.taquipnea;
        hipertension = proxyfiltros.hipertension;
        interstecial = proxyfiltros.interstecial;
        dbp = proxyfiltros.dbp;
        oxigeno = proxyfiltros.oxigeno;
        surfactante = proxyfiltros.surfactante;
        arm = proxyfiltros.arm;
        intubado = proxyfiltros.intubado;
        vafo = proxyfiltros.vafo;
        cpap = proxyfiltros.cpap;
        oaf = proxyfiltros.oaf;
        cbf = proxyfiltros.cbf;
        cafeina = proxyfiltros.cafeina;
        aminofilina = proxyfiltros.aminofilina;
        corticoideinhalado = proxyfiltros.corticoideinhalado;
        corticoidepostnatal = proxyfiltros.corticoidepostnatal;
        oxidonitrico = proxyfiltros.oxidonitrico;
        ductus = proxyfiltros.ductus;
        cardiocongenita = proxyfiltros.cardiocongenita;
        dopamina = proxyfiltros.dopamina;
        dobutamina = proxyfiltros.dobutamina;
        adrenalina = proxyfiltros.adrenalina;
        milrinona = proxyfiltros.milrinona;
        vasopresina = proxyfiltros.vasopresina;
        furosemida = proxyfiltros.furosemida;
        espironolacta = proxyfiltros.espironolacta;
        hidrocloritiazida = proxyfiltros.hidrocloritiazida;
        tgr = proxyfiltros.tgr;
        plasma = proxyfiltros.plasma;
        plaqueta = proxyfiltros.plaqueta;
        inmunoglobina = proxyfiltros.inmunoglobina;
        transfusion = proxyfiltros.transfusion;
        hiv = proxyfiltros.hiv;
        ecotf = proxyfiltros.ecotf;
        convulsiones = proxyfiltros.convulsiones;
        ehi = proxyfiltros.ehi;
        hipo = proxyfiltros.hipo;
        fondoojo = proxyfiltros.fondoojo;
        rop = proxyfiltros.rop;
        tratamientorop = proxyfiltros.tratamientorop;
        nec = proxyfiltros.nec;
        perforacion = proxyfiltros.perforacion;
        onfalocele = proxyfiltros.onfalocele;
        gastrosquisis = proxyfiltros.gastrosquisis;
        atresia = proxyfiltros.atresia;
        tqt = proxyfiltros.tqt;
        drenajepleural = proxyfiltros.drenajepleural;
        drenajeventricular = proxyfiltros.drenajeventricular;
        trisomia21 = proxyfiltros.trisomia21;
        trisomia13 = proxyfiltros.trisomia13;
        trisomia18 = proxyfiltros.trisomia18;
        vacterl = proxyfiltros.vacterl;
        turner = proxyfiltros.turner;
        protectorgastrico = proxyfiltros.protectorgastrico;
        inhibidor = proxyfiltros.inhibidor;
        probiotico = proxyfiltros.probiotico;
        eritromicina = proxyfiltros.eritromicina;
        fentanilo = proxyfiltros.fentanilo;
        morfina = proxyfiltros.morfina;
        midozolam = proxyfiltros.midozolam;
        precedex = proxyfiltros.precedex;
        metadona = proxyfiltros.metadona;
        vecuronio = proxyfiltros.vecuronio;
        prostaglandinas = proxyfiltros.prostaglandinas;
        malformacionescongenitas = proxyfiltros.malformacionescongenitas;
        cirugias = proxyfiltros.cirugias;
        complicaciones = proxyfiltros.complicaciones;
        diagnostico = proxyfiltros.diagnostico;
        conalta = proxyfiltros.conalta;
        altadesde = proxyfiltros.altadesde;
        altahasta = proxyfiltros.altahasta;
    }
    function setProxy() {
        proxyfiltros.sinhistorial = sinhistorial;
        proxyfiltros.unidad = unidad;
        proxyfiltros.area = area;
        proxyfiltros.fechadesde = fechadesde;
        proxyfiltros.fechahasta = fechahasta;
        proxyfiltros.dnimadre = dnimadre;
        proxyfiltros.nombremadre = nombremadre;
        proxyfiltros.dnirn = dnirn;
        proxyfiltros.nombrern = nombrern;
        proxyfiltros.nacdesde = nacdesde;
        proxyfiltros.nachasta = nachasta;
        proxyfiltros.ingresodesde = ingresodesde;
        proxyfiltros.ingresohasta = ingresohasta;
        proxyfiltros.egresodesde = egresodesde;
        proxyfiltros.egresohasta = egresohasta;
        proxyfiltros.tipoingreso = tipoingreso;
        proxyfiltros.sexorn = sexorn;
        proxyfiltros.tipoparto = tipoparto;
        proxyfiltros.partodomicilio = partodomicilio;
        proxyfiltros.apgar_1 = apgar_1;
        proxyfiltros.apgar_5 = apgar_5;
        proxyfiltros.apgar_10 = apgar_10;
        proxyfiltros.gestacion = gestacion;
        proxyfiltros.gestaciondesde = gestaciondesde;
        proxyfiltros.gestacionhasta = gestacionhasta;
        proxyfiltros.rciu = rciu;
        proxyfiltros.temperatura_ingreso = temperatura_ingreso;
        proxyfiltros.rem = rem;
        proxyfiltros.reanimacion = reanimacion;
        proxyfiltros.liquido = liquido;
        proxyfiltros.fallece = fallece;
        proxyfiltros.peso_rn = peso_rn;
        proxyfiltros.peso_7 = peso_7;
        proxyfiltros.peso_14 = peso_14;
        proxyfiltros.peso_21 = peso_21;
        proxyfiltros.peso_28 = peso_28;
        proxyfiltros.peso_36 = peso_36;
        proxyfiltros.cefalico_rn = cefalico_rn;
        proxyfiltros.cefalico_7 = cefalico_7;
        proxyfiltros.cefalico_14 = cefalico_14;
        proxyfiltros.cefalico_21 = cefalico_21;
        proxyfiltros.cefalico_28 = cefalico_28;
        proxyfiltros.cefalico_36 = cefalico_36;
        proxyfiltros.talla_rn = talla_rn;
        proxyfiltros.talla_7 = talla_7;
        proxyfiltros.talla_14 = talla_14;
        proxyfiltros.talla_21 = talla_21;
        proxyfiltros.talla_28 = talla_28;
        proxyfiltros.talla_36 = talla_36;
        proxyfiltros.scorez_rn = scorez_rn;
        proxyfiltros.scorez_7 = scorez_7;
        proxyfiltros.scorez_14 = scorez_14;
        proxyfiltros.scorez_21 = scorez_21;
        proxyfiltros.scorez_28 = scorez_28;
        proxyfiltros.scorez_36 = scorez_36;
        proxyfiltros.recuperarpeso = recuperarpeso;
        proxyfiltros.recuperarpesodesde = recuperarpesodesde;
        proxyfiltros.recuperarpesohasta = recuperarpesohasta;
        proxyfiltros.edad_materna = edad_materna;
        proxyfiltros.niveleducativo = niveleducativo;
        proxyfiltros.paridad = paridad;
        proxyfiltros.gemelos = gemelos;
        proxyfiltros.controlparental = controlparental;
        proxyfiltros.corticoideprenatal = corticoideprenatal;
        proxyfiltros.tabaquismo = tabaquismo;
        proxyfiltros.adiccion = adiccion;
        proxyfiltros.egb = egb;
        proxyfiltros.crioaminintis = crioaminintis;
        proxyfiltros.sulfato = sulfato;
        proxyfiltros.diabetes = diabetes;
        proxyfiltros.colico = colico;
        proxyfiltros.congenita = congenita;
        proxyfiltros.itu = itu;
        proxyfiltros.sufrimiento = sufrimiento;
        proxyfiltros.ht = ht;
        proxyfiltros.hie = hie;
        proxyfiltros.preeclampisa = preeclampisa;
        proxyfiltros.eclampsia = eclampsia;
        proxyfiltros.colestasis = colestasis;
        proxyfiltros.umbilicalvenoso = umbilicalvenoso;
        proxyfiltros.umbilicalarterial = umbilicalarterial;
        proxyfiltros.percutaneo = percutaneo;
        proxyfiltros.central = central;
        proxyfiltros.trofica = trofica;
        proxyfiltros.volumenenteral = volumenenteral;
        proxyfiltros.caloriasenteral = caloriasenteral;
        proxyfiltros.tipoenteral = tipoenteral;
        proxyfiltros.nutricionparental = nutricionparental;
        proxyfiltros.edadnpt = edadnpt;
        proxyfiltros.duracionnpt = duracionnpt;
        proxyfiltros.comienzoaa = comienzoaa;
        proxyfiltros.aporteaa = aporteaa;
        proxyfiltros.comienzolipido = comienzolipido;
        proxyfiltros.aportelipido = aportelipido;
        proxyfiltros.tempranoestado = tempranoestado;
        proxyfiltros.tempranogermen = tempranogermen;
        proxyfiltros.tempranoantibiotico = tempranoantibiotico;
        proxyfiltros.tempranoatb = tempranoatb;
        proxyfiltros.tardeestado = tardeestado;
        proxyfiltros.tardegermen = tardegermen;
        proxyfiltros.tardeantibiotico = tardeantibiotico;
        proxyfiltros.tardeatb = tardeatb;
        proxyfiltros.emh = emh;
        proxyfiltros.ndosissurfactante = ndosissurfactante;
        proxyfiltros.salam = salam;
        proxyfiltros.apena = apena;
        proxyfiltros.neumotorax = neumotorax;
        proxyfiltros.taquipnea = taquipnea;
        proxyfiltros.hipertension = hipertension;
        proxyfiltros.interstecial = interstecial;
        proxyfiltros.dbp = dbp;
        proxyfiltros.oxigeno = oxigeno;
        proxyfiltros.surfactante = surfactante;
        proxyfiltros.arm = arm;
        proxyfiltros.intubado = intubado;
        proxyfiltros.vafo = vafo;
        proxyfiltros.cpap = cpap;
        proxyfiltros.oaf = oaf;
        proxyfiltros.cbf = cbf;
        proxyfiltros.cafeina = cafeina;
        proxyfiltros.aminofilina = aminofilina;
        proxyfiltros.corticoideinhalado = corticoideinhalado;
        proxyfiltros.corticoidepostnatal = corticoidepostnatal;
        proxyfiltros.oxidonitrico = oxidonitrico;
        proxyfiltros.ductus = ductus;
        proxyfiltros.cardiocongenita = cardiocongenita;
        proxyfiltros.dopamina = dopamina;
        proxyfiltros.dobutamina = dobutamina;
        proxyfiltros.adrenalina = adrenalina;
        proxyfiltros.milrinona = milrinona;
        proxyfiltros.vasopresina = vasopresina;
        proxyfiltros.furosemida = furosemida;
        proxyfiltros.espironolacta = espironolacta;
        proxyfiltros.hidrocloritiazida = hidrocloritiazida;
        proxyfiltros.tgr = tgr;
        proxyfiltros.plasma = plasma;
        proxyfiltros.plaqueta = plaqueta;
        proxyfiltros.inmunoglobina = inmunoglobina;
        proxyfiltros.transfusion = transfusion;
        proxyfiltros.hiv = hiv;
        proxyfiltros.ecotf = ecotf;
        proxyfiltros.convulsiones = convulsiones;
        proxyfiltros.ehi = ehi;
        proxyfiltros.hipo = hipo;
        proxyfiltros.fondoojo = fondoojo;
        proxyfiltros.rop = rop;
        proxyfiltros.tratamientorop = tratamientorop;
        proxyfiltros.nec = nec;
        proxyfiltros.perforacion = perforacion;
        proxyfiltros.onfalocele = onfalocele;
        proxyfiltros.gastrosquisis = gastrosquisis;
        proxyfiltros.atresia = atresia;
        proxyfiltros.tqt = tqt;
        proxyfiltros.drenajepleural = drenajepleural;
        proxyfiltros.drenajeventricular = drenajeventricular;
        proxyfiltros.trisomia21 = trisomia21;
        proxyfiltros.trisomia13 = trisomia13;
        proxyfiltros.trisomia18 = trisomia18;
        proxyfiltros.vacterl = vacterl;
        proxyfiltros.turner = turner;
        proxyfiltros.protectorgastrico = protectorgastrico;
        proxyfiltros.inhibidor = inhibidor;
        proxyfiltros.probiotico = probiotico;
        proxyfiltros.eritromicina = eritromicina;
        proxyfiltros.fentanilo = fentanilo;
        proxyfiltros.morfina = morfina;
        proxyfiltros.midozolam = midozolam;
        proxyfiltros.precedex = precedex;
        proxyfiltros.metadona = metadona;
        proxyfiltros.vecuronio = vecuronio;
        proxyfiltros.prostaglandinas = prostaglandinas;
        proxyfiltros.malformacionescongenitas = malformacionescongenitas;
        proxyfiltros.cirugias = cirugias;
        proxyfiltros.complicaciones = complicaciones;
        proxyfiltros.diagnostico = diagnostico;
        proxyfiltros.conalta = conalta;
        proxyfiltros.altadesde = altadesde;
        proxyfiltros.altahasta = altahasta;
    }

    function cambiarFiltro() {
        setProxy();
        proxy.save(proxyfiltros);
        filterUpdate();
    }
    function cambiarCheck() {
        setProxyChecks();
        checksproxy.save(proxychecks);
    }
    function limpiarFiltros() {
        proxyfiltros = defaultfiltros;
        setFiltros();
        proxy.save(proxyfiltros);
    }
    function limpiarChecks() {
        proxychecks = defaultchecks;
        setFiltrosChecks();
        checksproxy.save(proxychecks);
    }
    function limpiar() {
        limpiarFiltros();
        limpiarChecks();
        filterUpdate();
    }
    onMount(async () => {
        proxychecks = checksproxy.load();
        proxyfiltros = proxy.load();
        await getBebes();
        await getHistorial();
        procesarHistorial();
        setFiltrosChecks();
        setFiltros();
        filterUpdate();
        areas = await pb.collection("areas").getFullList({});
        areas = areas.concat({ id: "", nombre: "Todas" });
        unidades = await pb.collection("Unidades").getFullList({});
    });
</script>

<Navbar>
    <Header bind:sinhistorial {limpiar} {limpiarFiltros} {limpiarChecks} bind:bebesrows={filas}/>
    <Filtros
        {cambiarFiltro}
        {cambiarCheck}
        bind:areas
        bind:unidades
        bind:unidadesarea
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
        bind:unidad
        bind:area
        bind:fechadesde
        bind:fechahasta
        bind:dnimadre
        bind:nombremadre
        bind:dnirn
        bind:nombrern
        bind:nacdesde
        bind:nachasta
        bind:ingresodesde
        bind:ingresohasta
        bind:egresodesde
        bind:egresohasta
        bind:tipoingreso
        bind:sexorn
        bind:tipoparto
        bind:partodomicilio
        bind:apgar_1
        bind:apgar_5
        bind:apgar_10
        bind:gestacion
        bind:gestaciondesde
        bind:gestacionhasta
        bind:rciu
        bind:temperatura_ingreso
        bind:rem
        bind:reanimacion
        bind:liquido
        bind:fallece
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
        bind:recuperarpeso
        bind:recuperarpesodesde
        bind:recuperarpesohasta
        bind:edad_materna
        bind:niveleducativo
        bind:paridad
        bind:gemelos
        bind:controlparental
        bind:corticoideprenatal
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
        bind:umbilicalvenoso
        bind:umbilicalarterial
        bind:percutaneo
        bind:central
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
        bind:tempranoestado
        bind:tempranogermen
        bind:tempranoantibiotico
        bind:tempranoatb
        bind:tardeestado
        bind:tardegermen
        bind:tardeantibiotico
        bind:tardeatb
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
        bind:ductus
        bind:cardiocongenita
        bind:dopamina
        bind:dobutamina
        bind:adrenalina
        bind:milrinona
        bind:vasopresina
        bind:furosemida
        bind:espironolacta
        bind:hidrocloritiazida
        bind:tgr
        bind:plasma
        bind:plaqueta
        bind:inmunoglobina
        bind:transfusion
        bind:hiv
        bind:ecotf
        bind:convulsiones
        bind:ehi
        bind:hipo
        bind:fondoojo
        bind:rop
        bind:tratamientorop
        bind:nec
        bind:perforacion
        bind:onfalocele
        bind:gastrosquisis
        bind:atresia
        bind:tqt
        bind:drenajepleural
        bind:drenajeventricular
        bind:trisomia21
        bind:trisomia13
        bind:trisomia18
        bind:vacterl
        bind:turner
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
        bind:malformacionescongenitas
        bind:cirugias
        bind:complicaciones
        bind:diagnostico
        bind:conalta
        bind:altadesde
        bind:altahasta
    />
    <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-11/12  mb-2"
    >
        <Estadisticas titulo={"Cantidad"} bind:valor={totalcantidad} />
    </div>
    <div
        class={`
                p-2 rounded-md
                tabs tabs-bordered 
                dark:bg-gray-800  bg-white
                mb-2 
            `}
    >


        <input
            type="radio"
            name="grupos_tabs"
            class="tab"
            aria-label="Areas"
            checked
        />
        <div
            class={`
                tab-content rounded-md p-2 space-y-4
                dark:bg-gray-900 bg-white
                
            `}
        >
            <Historico
                singrupo="Sin area"
                estadisticas = {areas_estadisticas}
                historico = {area_historico}
                {fechadesde}
                {fechahasta}
                grupos = {areas}
                
            />
        </div>

        <input
            type="radio"
            name="grupos_tabs"
            class="tab"
            aria-label="Unidades"
            checked
        />
        <div
            class={`
                tab-content rounded-md p-2 space-y-4
                dark:bg-gray-900 bg-white
                
            `}
        >
            <Historico
                singrupo="Sin unidad"
                
                estadisticas = {unidades_estadisticas}
                historico = {unidad_historico}
                {fechadesde}
                {fechahasta}
                grupos = {unidades}
            />
        </div>
    </div>



    <Listado
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
        bind:bebesrows={filas}
        bind:unidades
        bind:areas
    />
</Navbar>
