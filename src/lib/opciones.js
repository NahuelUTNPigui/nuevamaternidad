export default {
  SINO: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],
  INGRESOS: [
    { id: "propio", nombre: "Propio" },
    { id: "derivado", nombre: "Derivado" }
  ],

  SEXO: [
    { id: "", nombre: "" },
    { id: "M", nombre: "Masculino" },
    { id: "F", nombre: "Femenino" }
  ],

  TIPOPARTO: [
    { id: "", nombre: "" },
    { id: "ctp", nombre: "Cesarea CTP" },
    { id: "stp", nombre: "Cesarea STP" },
    { id: "vaginal", nombre: "Vaginal" }
  ],

  REM: [
    { id: "", nombre: "" },
    { id: "menos", nombre: "<24 hs" },
    { id: "unosiete", nombre: "1-7 dias" },
    { id: "mas", nombre: ">7 dias" }
  ],

  DOMICILIARIO: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  LIQUIDO: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  REANIMACION: [
    { id: "", nombre: "" },
    { id: "no", nombre: "No" },
    { id: "fio", nombre: "FIO 2" },
    { id: "vppmasc", nombre: "VPP masc" },
    { id: "intubacion", nombre: "Intubacion" },
    { id: "vppneo", nombre: "VPP Neopuff" }
  ],

  FALLECE: [
    { id: 0, nombre: "" },
    { id: 1, nombre: "Si" },
    { id: 2, nombre: "No" }
  ],

  // ========================
  // NUEVAS OPCIONES
  // ========================

  NIVEL_EDUCACION: [
    { id: "", nombre: "" },
    { id: "analfabeta", nombre: "Analfabeta" },
    { id: "primario", nombre: "Primario" },
    { id: "primario_i", nombre: "Incompleto Primario" },
    { id: "secundario_ci", nombre: "Secundario" },
    { id: "secundario_i", nombre: "Incompleto Secundario" },
    { id: "terc_uni_ci", nombre: "Terc/Uni" },
    { id: "terc_uni_i", nombre: "Incompleto Terc/Uni" }
  ],

  EGB: [
    { id: "", nombre: "" },
    { id: "positivo", nombre: "Positivo" },
    { id: "negativo", nombre: "Negativo" },
    { id: "no_realizado", nombre: "No realizado" }
  ],

  CATETER_UMBILICAL_VENOSO: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // los dias se consignan en otro campo
    { id: "no", nombre: "No" }
  ],

  PERCUTANEA: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // los dias, en campo aparte
    { id: "no", nombre: "No" }
  ],

  VIA_CENTRAL: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // los dias, en campo aparte
    { id: "no", nombre: "No" }
  ],

  ALIMENTACION_ENTERAL_TROFICA: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  // Enteral completa (100 ml/kg) y calorias se cargan como números/fechas fuera del selector
  TIPO_ALIMENTACION_ENTERAL: [
    { id: "", nombre: "" },
    { id: "materna", nombre: "Materna" },
    { id: "artificial", nombre: "Artificial" },
    { id: "mixta", nombre: "Mixta" }
  ],

  NUTRICION_PARENTERAL: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  SEPSIS_TEMPRANA: [
    { id: "", nombre: "" },
    { id: "no", nombre: "No" },
    { id: "sospecha", nombre: "Sospecha" },
    { id: "confirmada", nombre: "Confirmada" }
    // 'germen' y 'atb_dias' van como campos aparte
  ],

  SEPSIS_TARDIA: [
    { id: "", nombre: "" },
    { id: "no", nombre: "No" },
    { id: "sospecha", nombre: "Sospecha" },
    { id: "confirmada", nombre: "Confirmada" }
    // 'germen' y 'atb_dias' van como campos aparte
  ],

  DBP_36SEM: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  O2_36SEM: [
    { id: "", nombre: "" },
    { id: "no", nombre: "No" },
    { id: "fio30", nombre: "FiO (+30/-30%)" },
    { id: "cpap_vni", nombre: "CPAP/VNI" }
  ],

  SURFACTANTE: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // N° en campo aparte
    { id: "no", nombre: "No" }
  ],

  ARM: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // N° en campo aparte si necesitas
    { id: "no", nombre: "No" }
  ],

  INTUBADO_DESDE_UTPR: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  VAFO: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // N° en campo aparte
    { id: "no", nombre: "No" }
  ],

  CPAP: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // N° en campo aparte
    { id: "no", nombre: "No" }
  ],

  OAF: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // N° en campo aparte
    { id: "no", nombre: "No" }
  ],

  CBF: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // N° en campo aparte
    { id: "no", nombre: "No" }
  ],

  DUCTUS: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  DUCTUS_DIAGNOSTICO: [
    { id: "", nombre: "" },
    { id: "ecografico", nombre: "Ecografico" },
    { id: "clinico", nombre: "Clínico" },
    { id: "mixto", nombre: "Mixto" }
  ],
  DIAGCC: [
    { id: "", nombre: "" },
    { id: "prenatal", nombre: "Prenatal" },
    { id: "postnatal", nombre: "Postnatal" },
  ],
  ECO_TF: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  HIV: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // grado en campo aparte
    { id: "no", nombre: "No" }
  ],

  CONVULSIONES: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  EHI: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // grado en campo aparte
    { id: "no", nombre: "No" }
  ],

  HIPOTERMIA: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si (CEF/CORPO)" }, // tipo en campo aparte
    { id: "no", nombre: "No" }
  ],

  FONDO_DE_OJO: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  ROP: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // grado en campo aparte
    { id: "no", nombre: "No" }
  ],

  ROP_TTO: [
    { id: "", nombre: "" },
    { id: "laser", nombre: "Laser" },
    { id: "angio", nombre: "Angio" }
  ],

  NEC: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" }, // estadio en campo aparte
    { id: "no", nombre: "No" }
  ],

  PERFORACION_UNICA: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  HDC: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],

  HDC_DIAGNOSTICO: [
    { id: "", nombre: "" },
    { id: "prenatal", nombre: "PRENATAL" },
    { id: "postnatal", nombre: "POSTNATAL" }
  ],

  HDC_TTO_QUIRURGICO: [
    { id: "", nombre: "" },
    { id: "protesis", nombre: "PROTESIS" },
    { id: "cierre1", nombre: "CIERRE 1°" }
  ],

  GENETICA: [
    { id: "", nombre: "" },
    { id: "t21", nombre: "T21" },
    { id: "t13", nombre: "T13" },
    { id: "t18", nombre: "T18" },
    { id: "vacterl", nombre: "VACTERL" },
    { id: "turner", nombre: "TURNER" }
  ],
  RCIU: [
    { id: "", nombre: "" },
    { id: "no", nombre: "No" },
    { id: "si-tipo1", nombre: "Sí (Tipo I)" },
    { id: "si-tipo2", nombre: "Sí (Tipo II)" },
    { id: "si-tipo3", nombre: "Sí (Tipo III)" },
  ],
  //Filtros
  APGAR_RANGO: [
    { id: "", nombre: "" },
    { id: "alto", nombre: "Alto (8,9,10)" },
    { id: "medio", nombre: "Medio (5,6,7)" },
    { id: "bajo", nombre: "Bajo (1,2,3,4)" },
  ],
  TEMPERATURA_RANGO: [
    { id: "", nombre: "" },
    { id: "alto", nombre: "Alto (> 37.8°)" },
    { id: "medio", nombre: "Medio (<= 37.5°)" },
    { id: "bajo", nombre: "Bajo (< 36°)" },
  ],
  PESO_RANGO: {
    RN: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 4000 g)" },
      { id: "medio", nombre: "Medio (<= 4000 g)" },
      { id: "bajo", nombre: "Bajo (< 2500 g)" },
    ],
    DIAS_7: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 4200 g)" },
      { id: "medio", nombre: "Medio (<= 4200 g)" },
      { id: "bajo", nombre: "Bajo (< 2800 g)" },
    ],
    DIAS_14: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 4600 g)" },
      { id: "medio", nombre: "Medio (<= 4600 g)" },
      { id: "bajo", nombre: "Bajo (< 3100 g)" },
    ],
    DIAS_21: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 4900 g)" },
      { id: "medio", nombre: "Medio (<= 4900 g)" },
      { id: "bajo", nombre: "Bajo (< 3400 g)" },
    ],
    DIAS_28: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 5200 g)" },
      { id: "medio", nombre: "Medio (<= 5200 g)" },
      { id: "bajo", nombre: "Bajo (< 3600 g)" },
    ],
    SEM_36: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 3000 g)" },
      { id: "medio", nombre: "Medio (<= 3000 g)" },
      { id: "bajo", nombre: "Bajo (< 2200 g)" },
    ],
  },
  CEFALICO_RANGO: {
    RN: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 37.5.cm)" },
      { id: "medio", nombre: "Medio (<=  37.5 cm)" },
      { id: "bajo", nombre: "Bajo (< 32 cm)" },
    ],
    DIAS_7: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 38.5 cm)" },
      { id: "medio", nombre: "Medio (<=  38.5m)" },
      { id: "bajo", nombre: "Bajo (< 33.5 cm)" },
    ],
    DIAS_14: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 39.5 cm)" },
      { id: "medio", nombre: "Medio (<= 39.5 cm)" },
      { id: "bajo", nombre: "Bajo (< 34.5 cm)" },
    ],
    DIAS_21: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 40.5 cm)" },
      { id: "medio", nombre: "Medio (<= 40.5 cm)" },
      { id: "bajo", nombre: "Bajo (< 35.5 cm)" },
    ],
    DIAS_28: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 41.5 cm)" },
      { id: "medio", nombre: "Medio (<= 41.5 cm)" },
      { id: "bajo", nombre: "Bajo (< 36.5 cm)" },
    ],
    SEM_36: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 34.5 cm)" },
      { id: "medio", nombre: "Medio (<= 34.5 cm)" },
      { id: "bajo", nombre: "Bajo (< 30.5 cm)" },
    ],
  },
  TALLA_RANGO: {
    RN: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 54 cm)" },
      { id: "medio", nombre: "Medio (<= 54 cm)" },
      { id: "bajo", nombre: "Bajo (< 46 cm)" },
    ],
    DIAS_7: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 55 cm)" },
      { id: "medio", nombre: "Medio (<= 55 cm)" },
      { id: "bajo", nombre: "Bajo (< 47.5 cm)" },
    ],
    DIAS_14: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 57 cm)" },
      { id: "medio", nombre: "Medio (<= 57 cm)" },
      { id: "bajo", nombre: "Bajo (< 49 cm)" },
    ],
    DIAS_21: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 58.5 cm)" },
      { id: "medio", nombre: "Medio (<= 58.5 cm)" },
      { id: "bajo", nombre: "Bajo (< 50.5 cm)" },
    ],
    DIAS_28: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 6 cm)" },
      { id: "medio", nombre: "Medio (<= 60 cm)" },
      { id: "bajo", nombre: "Bajo (< 52 cm)" },
    ],
    SEM_36: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (> 50 cm)" },
      { id: "medio", nombre: "Medio (<= 50 cm)" },
      { id: "bajo", nombre: "Bajo (< 44 cm)" },
    ],
  },
  SCOREZ_RANGO: [
    { id: "", nombre: "" },
    { id: "alto", nombre: "Alto (> 1.0°)" },
    { id: "medio", nombre: "Medio (<= 1.0)" },
    { id: "bajo", nombre: "Bajo (< -1)" },
  ],
  EDAD_MADRE: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (> 25)" },
    { id: "media", nombre: "Medio (<=  23)" },
    { id: "baja", nombre: "Bajo (< 18)" },
  ],
  PARIDAD_MADRE:[
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (> 2)" },
    { id: "media", nombre: "Medio (<= 2)" },
    { id: "baja", nombre: "Bajo (0)" },
  ],
  GEMELO:[
    { id: "", nombre: "" },
    { id: "2", nombre: "Gemelo" },
    { id: "3", nombre: "Trillizo" },
    { id: "mas3", nombre: "Más de 3" }
  ],
  //Alimentacion
  EDAD_INICIO:[
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (> 3 días)" },
    { id: "media", nombre: "Medio (<= 3 días)" },
    { id: "baja", nombre: "Bajo (< 1 días)" },
  ],
  DURACION:[
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (> 14 días)" },
    { id: "media", nombre: "Medio (<= 14 días)" },
    { id: "baja", nombre: "Bajo (< 5 días)" },
  ],
  INICIO_AA:[
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (> 3 días)" },
    { id: "media", nombre: "Medio (<= 3 días)" },
    { id: "baja", nombre: "Bajo (< 2 días)" },
  ],
  APORTE_AA:[
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (> 2.5 g/kg/día)" },
    { id: "media", nombre: "Medio (<= 2.5 g/kg/día)" },
    { id: "baja", nombre: "Bajo (< 1.0 g/kg/día)" },
  ],
  COMIENZO_LIPIDO:[
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (> 5 días)" },
    { id: "media", nombre: "Medio (<= 5 días)" },
    { id: "baja", nombre: "Bajo (< 3 días)" },
  ],
  APORTE_LIPIDO:[
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (> 2.0 g/kg/día)" },
    { id: "media", nombre: "Medio (<= 2.0 g/kg/día)" },
    { id: "baja", nombre: "Bajo (< 0.5 g/kg/día)" },
  ],


  ESTADO_INFECCION:[
    { id: "", nombre: "" },
    { id: "no", nombre: "No" },
    { id: "sospecha", nombre: "Sospecha clínica" },
    { id: "confirmada", nombre: "Confirmada" },
  ],
  DURACION_TEMPRANA:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Baja (<5)" },
    { id: "media", nombre: "Media (<=10)" },
    { id: "alta", nombre: "Alta (>10)" },
  ],
  DURACION_TARDIA:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Baja (<10)" },
    { id: "media", nombre: "Media (<=14)" },
    { id: "alta", nombre: "Alta (>14)" },
  ],


  TGR:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (0) unidades" },
    { id: "media", nombre: "Medio (<=2) unidades" },
    { id: "alta", nombre: "Alto (>2) unidades" },
  ],
  PLASMA:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (0) unidades" },
    { id: "media", nombre: "Medio (<=1) unidades" },
    { id: "alta", nombre: "Alto (>1) unidades" },
  ],
  PLAQUETAS:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (0) unidades" },
    { id: "media", nombre: "Medio (<=1) unidades" },
    { id: "alta", nombre: "Alto (>1) unidades" },
  ],
  GAMMAGLOBULINA:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (0) dosis" },
    { id: "media", nombre: "Medio (<=1) dosis" },
    { id: "alta", nombre: "Alto (>1) dosis" },
  ],
  TRANSFUCION:[
    { id: "", nombre: "" },
    { id: "no", nombre: "No" },
    { id: "una", nombre: "Una vez" },
    { id: "multiple", nombre: "Multiple veces" },
  ],



  PROTECTOR:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<4) días" },
    { id: "media", nombre: "Medio (<=7) días" },
    { id: "alta", nombre: "Alto (>7) días" },
  ],
  INHIBIDOR:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<4) días" },
    { id: "media", nombre: "Medio (<=7) días" },
    { id: "alta", nombre: "Alto (>7) días" },
  ],
  PROBIOTICO:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<7) días" },
    { id: "media", nombre: "Medio (<=14) días" },
    { id: "alta", nombre: "Alto (>14) días" },
  ],
  ERITROMICINA:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<4) días" },
    { id: "media", nombre: "Medio (<=7) días" },
    { id: "alta", nombre: "Alto (>7) días" },
  ],
  FENTANILO:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<3) días" },
    { id: "media", nombre: "Medio (<=5) días" },
    { id: "alta", nombre: "Alto (>5) días" },
  ],
  MORFINA:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<3) días" },
    { id: "media", nombre: "Medio (<=5) días" },
    { id: "alta", nombre: "Alto (>5) días" },
  ],
  MIDAZOLAM:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<3) días" },
    { id: "media", nombre: "Medio (<=5) días" },
    { id: "alta", nombre: "Alto (>5) días" },
  ],
  PRECEDEX:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<4) días" },
    { id: "media", nombre: "Medio (<=7) días" },
    { id: "alta", nombre: "Alto (>7) días" },
  ],
  METADONA:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<7) días" },
    { id: "media", nombre: "Medio (<=14) días" },
    { id: "alta", nombre: "Alto (>14) días" },
  ],
  VECURONIO:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<2) días" },
    { id: "media", nombre: "Medio (<=3) días" },
    { id: "alta", nombre: "Alto (>3) días" },
  ],
  PROSTAGLANDINA:[
    { id: "", nombre: "" },
    { id: "baja", nombre: "Bajo (<1) días" },
    { id: "media", nombre: "Medio (<=7) días" },
    { id: "alta", nombre: "Alto (>7) días" },
  ]




};
