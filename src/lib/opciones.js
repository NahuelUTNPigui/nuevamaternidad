export default {
    INGRESOS: [
        { id: "propio", nombre: "Propio" }, { id: "derivado", nombre: "Derivado" }
    ],
    SEXO: [{ id: "M", nombre: "Masculino" }, { id: "F", nombre: "Femenino" }],
    TIPOPARTO: [{ id: "", nombre: "" }, { id: "ctp", nombre: "Cesarea CTP" }, { id: "stp", nombre: "Cesarea STP" }, { id: "vaginal", nombre: "Vaginal" }],
    REM: [
        { id: "", nombre: "" }, 
        { id: "menos", nombre: "<24 hs" },
        { id: "unosiete", nombre: "1-7 dias" },
        { id: "mas", nombre: ">7 dias" },
    ],
    DOMICLIARIO: [
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
        { id: "vppneo", nombre: "VPP Neopuff" },
    ],
    FALLECE: [
        { id: 0, nombre: "" }, 
        { id: 1, nombre: "Si" },
        { id: 2, nombre: "No" }
    ]


}