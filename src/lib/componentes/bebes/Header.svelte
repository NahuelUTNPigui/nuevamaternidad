<script>
    
    import { toDark } from "$lib/string/string";
    import { goto } from "$app/navigation";
    import opciones from "$lib/opciones";
    import Exportar from "../Exportar.svelte";
    import CONSTANTES from "$lib/constantes";

    let { bebesrows = [], unidades = [], areas = [] } = $props();
    function nuevo() {
        goto("/bebes/nuevo");
    }
    function reportes() {
        goto("/reportes");
    }
    function getNombre(id, lista) {
        let fila = { id: "", nombre: "" };
        let idx = lista.findIndex((o) => o.id == id);
        if (idx != -1) {
            fila = lista[idx];
        }
        return fila.nombre;
    }
    const formatDate = (d) => (d ? new Date(d).toLocaleDateString() : "");
    const formatOpcion = (valor, p_opciones) =>
        valor.length == 0 ? "" : getNombre(valor, p_opciones);
    const formatMas = (valor) => valor.replace("+", ", ");
    function prepararData(item) {
        return {
            "NOMBRE BEBÉ": item.nombrebebe || "",
            "DNI BEBÉ": item.dnibebe || "",
            "HC BEBÉ": item.hcbebe || "",
            "FECHA NACIMIENTO BEBÉ": formatDate(item.fechanacimientobebe),
            "FECHA INGRESO BEBÉ": formatDate(item.fechaingresobebe),
            "PESO INGRESO BEBÉ": item.pesoingresobebe || "",
            SEXO: formatOpcion(item.sexo, opciones.SEXO),
            "TIPO INGRESO": item.tipoingreso || "",
            "EDAD GESTACIONAL": item.edad_gestacional || "",
            PESO: item.pesobebe || "",
            "PESO RN": item.pesorn || "",
            "PESO 7D": item.peso7d || "",
            "PESO 14D": item.peso14d || "",
            "PESO 21D": item.peso21d || "",
            "PESO 28D": item.peso28d || "",
            "PESO 36SEM": item.peso36sem || "",
            "TALLA RN": item.tallarn || "",
            "TALLA 7D": item.talla7d || "",
            "TALLA 14D": item.talla14d || "",
            "TALLA 21D": item.talla21d || "",
            "TALLA 28D": item.talla28d || "",
            "TALLA 36SEM": item.talla36sem || "",
            "SCORE Z RN": item.scorezrn || "",
            "SCORE Z 7D": item.scorez7d || "",
            "SCORE Z 14D": item.scorez14d || "",
            "SCORE Z 21D": item.scorez21d || "",
            "SCORE Z 28D": item.scorez28d || "",
            "SCORE Z 36SEM": item.scorez36sem || "",
            "PERÍMETRO RN": item.perimetrorn || "",
            "PERÍMETRO 7D": item.perimetro7d || "",
            "PERÍMETRO 14D": item.perimetro14d || "",
            "PERÍMETRO 21D": item.perimetro21d || "",
            "PERÍMETRO 28D": item.perimetro28d || "",
            "PERÍMETRO 36SEM": item.perimetro36sem || "",
            "NOMBRE MAMÁ": item.nombremama || "",
            "DNI MAMÁ": item.dnimama || "",
            "HC MAMÁ": item.hcmama || "",
            "FECHA NACIMIENTO MAMÁ": formatDate(item.fechanacimientomama),
            "EDUCACIÓN MAMÁ": item.educacionmama || "",
            PARIDAD: item.paridad || "",
            "GEMELOS CANTIDAD": item.gemelocantidad ?? "",
            "GEMELOS NÚMERO": item.gemelonumero ?? "",
            "CONTROL PRENATAL": item.controlprenatal || "",
            "CORTICOIDE PRENATAL": formatOpcion(
                item.corticoideprenatal,
                opciones.SINO,
            ),
            TABQUISMO: formatOpcion(item.tabaquismo, opciones.SINO) || "",
            ADICCIÓN: formatOpcion(item.adiccion, opciones.SINO) || "",
            EGB: formatOpcion(item.egb, opciones.SINO) || "",
            "SULFATO MG": formatOpcion(item.sulfatomg, opciones.SINO) || "",
            "DIABETES PREVIA":
                formatOpcion(item.diabetesprevia, opciones.SINO) || "",
            "DIABETES GESTACIONAL":
                formatOpcion(item.diabetesgestacional, opciones.SINO) || "",
            CORIOAMNINITIS:
                formatOpcion(item.crioaminitis, opciones.SINO) || "",
            "INFECCIÓN CONGÉNITA":
                formatOpcion(item.infeccioncongenita, opciones.SINO) || "",
            ITU: formatOpcion(item.itu, opciones.SINO) || "",
            "DESPRENDIMIENTO PLACENTA":
                formatOpcion(item.desprendimientoplacenta, opciones.SINO) || "",
            "SUFRIMIENTO FETAL":
                formatOpcion(item.sufrimientofetal, opciones.SINO) || "",
            "HTA CRÓNICA": formatOpcion(item.htcronica, opciones.SINO) || "",
            HIE: formatOpcion(item.hie, opciones.SINO) || "",
            ECLAMPSIA: formatOpcion(item.eclampsia, opciones.SINO) || "",
            PREECLAMPSIA: formatOpcion(item.preeclampsia, opciones.SINO) || "",
            COLESTASIS: formatOpcion(item.colestasis, opciones.SINO) || "",
            "TIPO PARTO":
                formatOpcion(item.tipo_parto, opciones.TIPOPARTO) || "",
            "PARTO DOMICILIARIO":
                formatOpcion(item.parto_domiciliario, opciones.SINO) || "",
            "LÍQUIDO MECONIAL":
                formatOpcion(item.liquido_meconial, opciones.SINO) || "",
            "APGAR 1'": item.apgar_1 || "",
            "APGAR 5'": item.apgar_5 || "",
            "APGAR 10'": item.apgar_10 || "",
            REANIMACIÓN: formatOpcion(item.reanimacion, opciones.SINO) || "",
            FALLECE: formatOpcion(item.fallece, opciones.FALLECE),
            RCIU: formatOpcion(item.rciu, opciones.RCIU) || "",
            ÁREA: item.expand?.area?.nombre || "",
            UNIDAD: item.expand?.unidad?.nombre || "",
            DIAGNÓSTICO: item.diagnostico || "",
            "ALIMENTACIÓN ENTERAL TRÓFICA":
                formatOpcion(item.alimentacionenteraltrofica, opciones.SINO) ||
                "",
            "ALIMENTACIÓN ENTERAL COMPLETA (EDAD)":
                item.alimentacionenteralcompletoedad || "",
            "ALIMENTACIÓN ENTERAL CALORÍAS":
                item.alimentacionenteralcalorias || "",
            "TIPO ALIMENTACIÓN ENTERAL":
                formatOpcion(
                    item.tipoalimentacionenteral,
                    opciones.TIPO_ALIMENTACION_ENTERAL,
                ) || "",
            "NUTRICIÓN PARENTERAL": item.nutricionparenteral || "",
            "NPT EDAD INICIO": item.nptedadinicio || "",
            "NPT DURACIÓN DÍAS": item.nptduraciondias || "",
            "NPT DÍA COMIENZO": item.nptdiacomienzo || "",
            "NPT APORTE TOTAL": item.nptaportetotal || "",
            "NPT DÍA COMIENZO LÍPIDO": item.nptdiacomienzolipido || "",
            "NPT APORTE TOTAL LÍPIDO": item.nptaportetotallipido || "",
            "NPT DÍA COMIENZO AA": item.nptdiacomienzoaa || "",
            "NPT APORTE TOTAL AA": item.nptaportetotalaa || "",
            "SEPSIS TEMPRANA":
                formatOpcion(item.sepsistemprana, opciones.SINO) || "",
            "GERMEN SEPSIS TEMPRANA": item.sepsistempranagermen || "",
            "ATB DÍAS SEPSIS TEMPRANA": item.sepsistempranaatbdias || "",
            "SEPSIS TARDÍA":
                formatOpcion(item.sepsistardia, opciones.SINO) || "",
            "GERMEN SEPSIS TARDÍA": item.sepsistardiagermen || "",
            "ATB DÍAS SEPSIS TARDÍA": item.sepsistardiaatbdias || "",
            EMH: formatOpcion(item.emh, opciones.SINO) || "",
            SURFACTANTE: formatOpcion(item.surfactante, opciones.SINO) || "",
            "N° DOSIS SURFACTANTE": item.ndosissurfactante || "",
            APNEAS: formatOpcion(item.apneas, opciones.SINO) || "",
            NEUMOTÓRAX: formatOpcion(item.neumotorax, opciones.SINO) || "",
            "TAQUIPNEA TRANSITORIA":
                formatOpcion(item.taquipneatransitoria, opciones.SINO) || "",
            "HIPERT. PULMONAR":
                formatOpcion(item.hipertpulmonar, opciones.SINO) || "",
            "ENFERMEDAD INTERSTICIAL":
                formatOpcion(item.enfermedadintersticial, opciones.SINO) || "",
            BQL: formatOpcion(item.bql, opciones.SINO) || "",
            "DBP 36SEM": formatOpcion(item.dbp36sem, opciones.SINO) || "",
            "O2 36SEM": formatOpcion(item.o236sem, opciones.O2_36SEM) || "",
            ARM: formatOpcion(item.arm, opciones.SINO) || "",
            VAFO: formatOpcion(item.vafo, opciones.SINO) || "",
            CPAP: formatOpcion(item.cpap, opciones.SINO) || "",
            OAF: formatOpcion(item.oaf, opciones.SINO) || "",
            CAFÉINA: formatOpcion(item.cafeina, opciones.SINO) || "",
            AMINOFILINA: formatOpcion(item.aminofilina, opciones.SINO) || "",
            "CORTICOIDE INHALADO":
                formatOpcion(item.corticoideinhalado, opciones.SINO) || "",
            "CORTICOIDE POSTNATAL":
                formatOpcion(item.corticoidepostnatal, opciones.SINO) || "",
            "ÓXIDO NÍTRICO":
                formatOpcion(item.oxidonitrico, opciones.SINO) || "",
            DUCTUS: formatOpcion(item.ductus, opciones.SINO) || "",
            "DUCTUS DIAGNÓSTICO":
                formatOpcion(
                    item.ductusdiagnostico,
                    opciones.DUCTUS_DIAGNOSTICO,
                ) || "",
            "DUCTUS TT° FARMACOLÓGICO 1° CICLO":
                item.ductusttofarmacologico1ciclo || "",
            "DUCTUS TT° FARMACOLÓGICO 2° CICLO":
                item.ductusttofarmacologico2ciclo || "",
            "DUCTUS TT° QUIRÚRGICO":
                formatOpcion(item.ductusttoquirurgico, opciones.SINO) || "",
            "CARDIOPATÍA CONGÉNITA":
                formatOpcion(item.cardiopatiacongenita, opciones.SINO) || "",
            "DIAGNÓSTICO CC": formatOpcion(item.diagcc, opciones.DIAGCC) || "",
            DOPAMINA:
                formatOpcion(item.inotropicosdopamina, opciones.SINO) || "",
            DOBUTAMINA:
                formatOpcion(item.inotropicosdobutamina, opciones.SINO) || "",
            ADRENALINA:
                formatOpcion(item.inotropicosadrenalina, opciones.SINO) || "",
            MILRINONA:
                formatOpcion(item.inotropicosmilrinona, opciones.SINO) || "",
            VASOPRESINA:
                formatOpcion(item.inotropicosvasopresina, opciones.SINO) || "",
            "HEMODERIVADOS TGR N°": item.hemoderivadostgrn || "",
            "HEMODERIVADOS PLASMA N°": item.hemoderivadosplasman || "",
            "HEMODERIVADOS PLAQUETAS N°": item.hemoderivadosplaquetasn || "",
            "HEMODERIVADOS GAMMA N°": item.hemoderivadosgamman || "",
            EXANGUINEOTRANSFUSIÓN:
                (item.exanguineotransfusio, opciones.SINOn) || "",
            "ECO TF": formatOpcion(item.ecotf, opciones.SINO) || "",
            "HIV GRADO": formatOpcion(item.hivgrado, opciones.HIV) || "",
            CONVULSIONES: formatOpcion(item.convulsiones, opciones.SINO) || "",
            EHI: formatOpcion(item.ehi, opciones.SINO) || "",
            "HIPOTERMIA TIPO":
                formatOpcion(item.hipotermiatipo, opciones.HIPOTERMIA) || "",
            "FONDO DE OJO": formatOpcion(item.fondoojo, opciones.SINO) || "",
            ROP: formatOpcion(item.rop, opciones.SINO) || "",
            "ROP TT°": formatOpcion(item.roptto, opciones.SINO) || "",
            "NEC ESTADIO": formatOpcion(item.necestadio, opciones.NEC) || "",
            "PERFORACIÓN ÚNICA": (item.perforacionunica, opciones.SINO) || "",
            ONFALOCELE: formatOpcion(item.onfalocele, opciones.SINO) || "",
            GASTROQUISIS: formatOpcion(item.gastroquisis, opciones.SINO) || "",
            HDC: formatOpcion(item.hdc, opciones.SINO) || "",
            "HDC DIAGNÓSTICO":
                formatOpcion(item.hdcdiagnostico, opciones.HDC_DIAGNOSTICO) ||
                "",
            "HDC TT° QUIRÚRGICO":
                formatOpcion(
                    item.hdcttoquirurgico,
                    opciones.HDC_TTO_QUIRURGICO,
                ) || "",
            "DRENAJE PLEURAL":
                formatOpcion(item.drenajepleural, opciones.SINO) || "",
            "DRENAJE VENTRICULAR":
                formatOpcion(item.drenajeventricular, opciones.SINO) || "",
            "GENÉTICA T21": formatOpcion(item.geneticat21, opciones.SINO) || "",
            "GENÉTICA T13": formatOpcion(item.geneticat13, opciones.SINO) || "",
            "GENÉTICA T18": formatOpcion(item.geneticat18, opciones.SINO) || "",
            "GENÉTICA VACTERL":
                formatOpcion(item.geneticavacterl, opciones.SINO) || "",
            "GENÉTICA TURNER":
                formatOpcion(item.geneticaturner, opciones.SINO) || "",
            "MED PROTECTOR GÁSTRICO (DÍAS)":
                item.medprotectorgastricodias || "",
            "MED INHIBIDOR BOMBA H+ (DÍAS)": item.medinhibidorbombahdias || "",
            "MED PROBIÓTICO (DÍAS)": item.medprobiodias || "",
            "MED ERITROMICINA (DÍAS)": item.meleritromicinadias || "",
            "MED FENTANILO (DÍAS)": item.medfentanilodias || "",
            "MED MORFINA (DÍAS)": item.medmorfinadias || "",
            "MED MIDAZOLAM (DÍAS)": item.medmidazolamdias || "",
            "MED PRECEDEX (DÍAS)": item.medprecedexdias || "",
            "MED METADONA (DÍAS)": item.medmetadonadias || "",
            "MED VECURONIO (DÍAS)": item.medvecuroniadias || "",
            "MED PROSTAGLANDINA (DÍAS)": item.medprostagldias || "",
            "MALFORMACIONES CONGÉNITAS": item.malformacionescongenitas || "",
            CIRUGÍAS: formatMas(item.cirugias) || "",
            COMPLICACIONES: formatMas(item.complicaciones) || "",
            "CON ALTA": item.conalta ? "Sí" : "No",
            "FECHA ALTA": formatDate(item.altafecha),
            "TIPO ALTA": formatOpcion(item.tipoalta, opciones.TIPO_ALTA),
            OBSERVACIÓN: item.observacion,
        };
    }
</script>

<header class="mb-8">
    <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
        <div
            class={`
                dark:bg-gray-900 bg-gray-50
                
                px-4 py-4 transition-colors duration-200 
            `}
        >
            <h1 class={`text-2xl font-bold dark:text-white text-gray-900`}>
                Listado de Bebés
            </h1>
            <p class={`text-sm dark:text-gray-400 text-gray-500`}>
                Sistema de {CONSTANTES.nombreapp}
            </p>
        </div>
        <button
            class={`
                cursor-pointer  text-center gap-2 px-4 py-2 
                transition-colors rounded-md
                text-white
                dark:bg-blue-500 dark:hover:bg-blue-600
                bg-blue-600 hover:bg-blue-700
                
                  
            `}
            onclick={nuevo}
        >
            <span class="text-xl font-medium">Nuevo Ingreso</span>
        </button>
        <button
            class={`
                cursor-pointer  text-center gap-2 px-4 py-2 
                transition-colors rounded-md
                text-white
                dark:bg-blue-500 dark:hover:bg-blue-600
                bg-blue-600 hover:bg-blue-700
                  
            `}
            onclick={reportes}
        >
            <span class="text-xl font-medium">Reportes</span>
        </button>
        <Exportar
            data={bebesrows}
            titulo={"Bebes"}
            confiltro={false}
            filtros={[]}
            {prepararData}
            sheetname={""}
        />
    </div>
</header>
