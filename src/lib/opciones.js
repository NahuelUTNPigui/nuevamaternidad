export default {
  SINO: [
    { id: "", nombre: "" },
    { id: "si", nombre: "Si" },
    { id: "no", nombre: "No" }
  ],
  INGRESOS: [
    { id: "", nombre: "" },
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
    { id: -1, nombre: "" },
    { id: 1, nombre: "Si" },
    { id: 0, nombre: "No" }
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
  //Rangos
  APGAR_RANGO: [
    { id: "", nombre: "" },
    { id: "alto", nombre: "Alto (8,9,10)", min: "8", max: "11" },
    { id: "medio", nombre: "Medio (5,6,7)", min: "5", max: "8" },
    { id: "bajo", nombre: "Bajo (1,2,3,4)", min: "1", max: "5" },
  ],
  EDAD_GESTACIONAL: [
  { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (≥ 42 semanas)", min: "42.0", max: "50.0" },
    { id: "media", nombre: "Medio (< 42 semanas)", min: "37.0", max: "42.0" },
    { id: "baja", nombre: "Bajo (< 37 semanas)", min: "0.0", max: "37.0" },
  ],
  TEMPERATURA_RANGO: [
    { id: "", nombre: "" },
    { id: "alto", nombre: "Alto (>= 37.5°)", min: "37.5", max: "100" }, // asumiendo límite superior razonable
    { id: "medio", nombre: "Medio (< 37.5°)", min: "36.0", max: "37.5" }, // ajustado para no solapar con "bajo"
    { id: "bajo", nombre: "Bajo (< 36°)", min: "0", max: "35.9" },
  ],
  PESO_RANGO: {
    RN: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 4000 g)", min: "4000", max: "9999" },
      { id: "medio", nombre: "Medio (< 4000 g)", min: "2500", max: "4000" }, // ajustado para no incluir "bajo"
      { id: "bajo", nombre: "Bajo (< 2500 g)", min: "0", max: "2500" },
    ],
    DIAS_7: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 4200 g)", min: "4200", max: "9999" },
      { id: "medio", nombre: "Medio (< 4200 g)", min: "2800", max: "4200" },
      { id: "bajo", nombre: "Bajo (< 2800 g)", min: "0", max: "2800" },
    ],
    DIAS_14: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 4600 g)", min: "4600", max: "9999" },
      { id: "medio", nombre: "Medio (< 4600 g)", min: "3100", max: "4600" },
      { id: "bajo", nombre: "Bajo (< 3100 g)", min: "0", max: "3100" },
    ],
    DIAS_21: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 4900 g)", min: "4900", max: "9999" },
      { id: "medio", nombre: "Medio (< 4900 g)", min: "3400", max: "4900" },
      { id: "bajo", nombre: "Bajo (< 3400 g)", min: "0", max: "3400" },
    ],
    DIAS_28: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 5200 g)", min: "5200", max: "9999" },
      { id: "medio", nombre: "Medio (< 5200 g)", min: "3600", max: "5200" },
      { id: "bajo", nombre: "Bajo (< 3600 g)", min: "0", max: "3600" },
    ],
    SEM_36: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 3000 g)", min: "3000", max: "9999" }, // > 3000 → min = 3001
      { id: "medio", nombre: "Medio (< 3000 g)", min: "2200", max: "3000" }, // excluye 3000
      { id: "bajo", nombre: "Bajo (< 2200 g)", min: "0", max: "2200" },
    ],
  },
  CEFALICO_RANGO: {
    RN: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 37.5 cm)", min: "37.5", max: "99.9" },
      { id: "medio", nombre: "Medio (< 37.5 cm)", min: "32.0", max: "37.5" }, // desde límite de "bajo" hasta "alto"
      { id: "bajo", nombre: "Bajo (< 32 cm)", min: "0.0", max: "32.0" },
    ],
    DIAS_7: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 38.5 cm)", min: "38.5", max: "99.9" },
      { id: "medio", nombre: "Medio (< 38.5 cm)", min: "33.5", max: "38.5" },
      { id: "bajo", nombre: "Bajo (< 33.5 cm)", min: "0.0", max: "33.5" },
    ],
    DIAS_14: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 39.5 cm)", min: "39.5", max: "99.9" },
      { id: "medio", nombre: "Medio (< 39.5 cm)", min: "34.5", max: "39.5" },
      { id: "bajo", nombre: "Bajo (< 34.5 cm)", min: "0.0", max: "34.5" },
    ],
    DIAS_21: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 40.5 cm)", min: "40.5", max: "99.9" },
      { id: "medio", nombre: "Medio (< 40.5 cm)", min: "35.5", max: "40.5" },
      { id: "bajo", nombre: "Bajo (< 35.5 cm)", min: "0.0", max: "35.5" },
    ],
    DIAS_28: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 41.5 cm)", min: "41.5", max: "99.9" },
      { id: "medio", nombre: "Medio (< 41.5 cm)", min: "36.5", max: "41.5" },
      { id: "bajo", nombre: "Bajo (< 36.5 cm)", min: "0.0", max: "36.5" },
    ],
    SEM_36: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 34.5 cm)", min: "34.5", max: "99.9" },
      { id: "medio", nombre: "Medio (< 34.5 cm)", min: "30.5", max: "34.5" },
      { id: "bajo", nombre: "Bajo (< 30.5 cm)", min: "0.0", max: "30.5" },
    ],
  },
  TALLA_RANGO: {
    RN: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 54 cm)", min: "54.0", max: "150.0" },
      { id: "medio", nombre: "Medio (< 54 cm)", min: "46.0", max: "54.0" },
      { id: "bajo", nombre: "Bajo (< 46 cm)", min: "0.0", max: "46.0" },
    ],
    DIAS_7: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 55 cm)", min: "55.0", max: "150.0" },
      { id: "medio", nombre: "Medio (< 55 cm)", min: "47.5", max: "55.0" },
      { id: "bajo", nombre: "Bajo (< 47.5 cm)", min: "0.0", max: "47.5" },
    ],
    DIAS_14: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 57 cm)", min: "57.0", max: "150.0" },
      { id: "medio", nombre: "Medio (< 57 cm)", min: "49.0", max: "57.0" },
      { id: "bajo", nombre: "Bajo (< 49 cm)", min: "0.0", max: "49.0" },
    ],
    DIAS_21: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 58.5 cm)", min: "58.5", max: "150.0" },
      { id: "medio", nombre: "Medio (< 58.5 cm)", min: "50.5", max: "58.5" },
      { id: "bajo", nombre: "Bajo (< 50.5 cm)", min: "0.0", max: "50.5" },
    ],
    DIAS_28: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 60 cm)", min: "60.0", max: "150.0" }, // ¡CORREGIDO! (era ">= 6 cm", error obvio)
      { id: "medio", nombre: "Medio (< 60 cm)", min: "52.0", max: "60.0" },
      { id: "bajo", nombre: "Bajo (< 52 cm)", min: "0.0", max: "52.0" },
    ],
    SEM_36: [
      { id: "", nombre: "" },
      { id: "alto", nombre: "Alto (>= 50 cm)", min: "50.0", max: "150.0" },
      { id: "medio", nombre: "Medio (< 50 cm)", min: "44.0", max: "50.0" },
      { id: "bajo", nombre: "Bajo (< 44 cm)", min: "0.0", max: "44.0" },
    ],
  },
  SCOREZ_RANGO: [
    { id: "", nombre: "" },
    { id: "alto", nombre: "Alto (>= 1.0°)", min: "1.0", max: "10" },
    { id: "medio", nombre: "Medio (< 1.0)", min: "-1.0", max: "1.0" },
    { id: "bajo", nombre: "Bajo (< -1)", min: "-10", max: "-1.1" },
  ],
  EDAD_MADRE: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>= 25)", min: "25", max: "100" },
    { id: "media", nombre: "Medio (<= 25)", min: "18", max: "25" },
    { id: "baja", nombre: "Bajo (< 18)", min: "0", max: "18" },
  ],
  PARIDAD_MADRE: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>= 3)", min: "3", max: "100" },
    { id: "media", nombre: "Medio (< 3)", min: "1", max: "3" },
    { id: "baja", nombre: "Bajo (0)", min: "0", max: "1" },
  ],
  GEMELO: [
    { id: "", nombre: "" },
    { id: "2", nombre: "Gemelo" },
    { id: "3", nombre: "Trillizo" },
    { id: "mas3", nombre: "Más de 3" }
  ],
  //Alimentacion
  EDAD_INICIO: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>= 4 días)", min: "4", max: "365" },
    { id: "media", nombre: "Medio (< 4 días)", min: "1", max: "4" },
    { id: "baja", nombre: "Bajo (< 0 días)", min: "0", max: "0" },
  ],
  DURACION: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>= 14 días)", min: "14", max: "365" },
    { id: "media", nombre: "Medio (< 14 días)", min: "5", max: "14" }, // ajustado para no solapar con "baja"
    { id: "baja", nombre: "Bajo (< 5 días)", min: "0", max: "5" },
  ],

  INICIO_AA: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>= 3 días)", min: "3", max: "366" },
    { id: "media", nombre: "Medio (< 3 días)", min: "2", max: "3" }, // desde límite de "baja" hasta "alta"
    { id: "baja", nombre: "Bajo (< 2 días)", min: "0", max: "2" },
  ],
  APORTE_AA: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>= 2.5 g/kg/día)", min: "2.5", max: "10.1" },
    { id: "media", nombre: "Medio (< 2.5 g/kg/día)", min: "1.0", max: "2.5" },
    { id: "baja", nombre: "Bajo (< 1.0 g/kg/día)", min: "0.0", max: "1.0" },
  ],
  COMIENZO_LIPIDO: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>= 5 días)", min: "5", max: "366" },
    { id: "media", nombre: "Medio (< 5 días)", min: "3", max: "5" },
    { id: "baja", nombre: "Bajo (< 3 días)", min: "0", max: "3" },
  ],
  APORTE_LIPIDO: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>= 2.0 g/kg/día)", min: "2.0", max: "10.1" },
    { id: "media", nombre: "Medio (< 2.0 g/kg/día)", min: "0.5", max: "2.0" },
    { id: "baja", nombre: "Bajo (< 0.5 g/kg/día)", min: "0.0", max: "0.5" },
  ],


  ESTADO_INFECCION: [
    { id: "", nombre: "" },
    { id: "no", nombre: "No" },
    { id: "sospecha", nombre: "Sospecha clínica" },
    { id: "confirmada", nombre: "Confirmada" },
  ],
  DURACION_TEMPRANA: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alta (>=10)", min: "10", max: "366" },
    { id: "media", nombre: "Media (<10)", min: "5", max: "10" },
    { id: "baja", nombre: "Baja (<5)", min: "0", max: "5" },

  ],
  DURACION_TARDIA: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alta (>=14)", min: "14", max: "366" },
    { id: "media", nombre: "Media (<14)", min: "10", max: "14" },
    { id: "baja", nombre: "Baja (<10)", min: "0", max: "10" },
  ],
  TGR: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=2) unidades", min: "2", max: "21" },
    { id: "media", nombre: "Medio (<2) unidades", min: "1", max: "2" },
    { id: "baja", nombre: "Bajo (0) unidades", min: "0", max: "1" },

  ],
  PLASMA: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=2) unidades", min: "2", max: "21" },
    { id: "media", nombre: "Medio (<2) unidades", min: "1", max: "2" },
    { id: "baja", nombre: "Bajo (0) unidades", min: "0", max: "1" },


  ],
  PLAQUETAS: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=2) unidades", min: "2", max: "21" },
    { id: "media", nombre: "Medio (<2) unidades", min: "1", max: "2" },
    { id: "baja", nombre: "Bajo (0) unidades", min: "0", max: "1" },
  ],
  GAMMAGLOBULINA: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=2) dosis", min: "2", max: "21" },
    { id: "media", nombre: "Medio (<2) dosis", min: "1", max: "2" },
    { id: "baja", nombre: "Bajo (0) dosis", min: "0", max: "1" },
  ],
  TRANSFUCION: [
    { id: "", nombre: "" },
    { id: "multiple", nombre: "Multiple veces", min: "2", max: "100" },
    { id: "una", nombre: "Una vez", min: "1", max: "2" },
    { id: "no", nombre: "No", min: "0", max: "1" },
  ],
  PROTECTOR: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=7) días", min: "7", max: "366" },
    { id: "media", nombre: "Medio (<7) días", min: "4", max: "7" },
    { id: "baja", nombre: "Bajo (<4) días", min: "0", max: "4" },

  ],
  INHIBIDOR: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=7) días", min: "7", max: "366" },
    { id: "media", nombre: "Medio (<7) días", min: "4", max: "7" },
    { id: "baja", nombre: "Bajo (<4) días", min: "0", max: "4" },

  ],
  PROBIOTICO: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=14) días", min: "14", max: "366" },
    { id: "media", nombre: "Medio (<14) días", min: "7", max: "14" },
    { id: "baja", nombre: "Bajo (<7) días", min: "0", max: "7" },

  ],
  ERITROMICINA: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=7) días", min: "7", max: "366" },
    { id: "media", nombre: "Medio (<7) días", min: "4", max: "7" },
    { id: "baja", nombre: "Bajo (<4) días", min: "0", max: "4" },

  ],
  FENTANILO: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=5) días", min: "5", max: "366" },
    { id: "media", nombre: "Medio (<5) días", min: "3", max: "5" },
    { id: "baja", nombre: "Bajo (<3) días", min: "0", max: "3" },

  ],
  MORFINA: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=5) días", min: "5", max: "366" },
    { id: "media", nombre: "Medio (<5) días", min: "3", max: "5" },
    { id: "baja", nombre: "Bajo (<3) días", min: "0", max: "3" },

  ],
  MIDAZOLAM: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=5) días", min: "5", max: "366" },
    { id: "media", nombre: "Medio (<5) días", min: "3", max: "5" },
    { id: "baja", nombre: "Bajo (<3) días", min: "0", max: "3" },
  ],
  PRECEDEX: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=7) días" },
    { id: "media", nombre: "Medio (<7) días" },
    { id: "baja", nombre: "Bajo (<4) días" },
  ],
  METADONA: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=7) días", min: "7", max: "366" },
    { id: "media", nombre: "Medio (<7) días", min: "4", max: "7" },
    { id: "baja", nombre: "Bajo (<4) días", min: "0", max: "4" },
  ],
  VECURONIO: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=3) días", min: "3", max: "366" },
    { id: "media", nombre: "Medio (<3) días", min: "2", max: "3" },
    { id: "baja", nombre: "Bajo (<2) días", min: "0", max: "2" },


  ],
  PROSTAGLANDINA: [
    { id: "", nombre: "" },
    { id: "alta", nombre: "Alto (>=7) días", min: "7", max: "366" },
    { id: "media", nombre: "Medio (<7) días", min: "1", max: "7" },
    { id: "baja", nombre: "Bajo (<1) días", min: "0", max: "1" },

  ]




};
