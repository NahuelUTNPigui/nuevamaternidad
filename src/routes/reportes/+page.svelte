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

    
    let ruta = import.meta.env.VITE_RUTA;

    const pb = new PocketBase(ruta);
    let historial = $state([]);
    let bebes = $state([]);
    let historiasbebes = $state([]);
    let historiasbebesrow = $state([]);
    let filas = $state([]);

    //Chesk
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
    let checked_otros = $state(true);
    //filttros
    //basicos
    let unidad = $state("")
    let area = $state("")
    let fechadesde = $state("")
    let fechahasta = $state("")
    //identifiacion
    let dnimadre = $state("")
    let nombremadre = $state("") 
    let dnirn = $state("")
    let nombrern = $state("")
    //let sexorn = $state("")

    let nacdesde = $state("")
    let nachasta = $state("")
    let ingresodesde = $state("")
    let ingresohasta = $state("")
    let egresodesde = $state("")
    let egresohasta = $state("")
    //ingreso
    //let ingresodesde = $state("")
    //let ingresohasta = $state("")
    let tipoingreso = $state("")
    let sexorn= $state("")
    let tipoparto = $state("")
    let partodomicilio = $state("")

    //bajo,medio,alto (0-3,4-6,7-10)
    let apgar_1=$state("")
    let apgar_5=$state("")
    let apgar_10=$state("")

    let gestaciondesde = $state("")
    let gestacionhasta=$state("")

    let rciu = $state("")
    let temperatura_ingreso = $state("")

    let rem = $state("")
    let reanimacion = $state("")
    let liquido = $state("")
    let fallece = $state("")

    //antropometria
    let peso_rn = $state("")
    let peso_7 = $state("")
    let peso_14 = $state("")
    let peso_21 = $state("")
    let peso_28 = $state("")
    let peso_36 = $state("")


    let cefalico_rn = $state("")
    let cefalico_7 = $state("")
    let cefalico_14 = $state("")
    let cefalico_21 = $state("")
    let cefalico_28 = $state("")
    let cefalico_36 = $state("")



    let talla_rn = $state("")
    let talla_7 = $state("")
    let talla_14 = $state("")
    let talla_21 = $state("")
    let talla_28 = $state("")
    let talla_36 = $state("")



    let scorez_rn = $state("")
    let scorez_7 = $state("")
    let scorez_14 = $state("")
    let scorez_21 = $state("")
    let scorez_28 = $state("")
    let scorez_36 = $state("")

    let recuperarpeso = $state("")

    //datos maternos
    let edad_materna = $state("")
    let niveleducativo = $state("")
    let paridad = $state("")
    let gemelos = $state("")
    let controlparental = $state("")
    let tabaquismo = $state("")
    let adiccion = $state("")
    let egb=$state("")
    let sulfato = $state("")
    let diabetes = $state("")
    let colico = $state("")
    let congenita = $state("")
    let itu = $state("")

    let desprendimiento = $state("")
    let ht = $state("")
    let hie = $state("")
    let preeclampisa = $state("")
    let eclampsia = $state("")
    let colestasis = $state("")

    //Cateteres
    let umbilicalvenoso = $state("")
    let umbilicalarterial = $state("")
    let percutaneo = $state("")
    let central = $state("")

    //alimentacion
    let trofica = $state("")
    let volumenenteral = $state("")
    let caloriasenteral = $state("")
    let tipoenteral = $state("")
    let nutricionparental = $state("")

    let edadnpt = $state("")
    let duracionnpt = $state("")
    let comienzoaa = $state("")
    let aporteaa = $state("")
    let comienzolipido = $state("")
    let aportelipido = $state("")

    //infecciones
    let tempranoestado = $state("")
    let tempranogermen=$state("")
    let tempranoantibiotico = $state("")
    let tempranoatb=$state("")

    let tardeestado = $state("")
    let tardegermen=$state("")
    let tardeantibiotico = $state("")
    let tardeatb=$state("")


    //patologias respiratorios
    let emh = $state("")
    let apena = $state("")
    let neumotorax = $state("")
    let taquipnea = $state("")
    let hipertension = $state("")
    let interstecial = $state("")
    let dbp = $state("")
    let oxigeno = $state("")
    let surfactante = $state("")
    let arm = $state("")
    let intubado = $state("")
    let vafo = $state("")
    let cpap = $state("")
    let oaf = $state("")
    let cbf = $state("")

    let cafeina = $state("")
    let aminofilina = $state("")
    let corticoideinhalado = $state("")
    let corticoidepostnatal = $state("")
    let oxidonitrico = $state("")

    //Cardiovascular
    let ductus = $state("")
    let cardiocongenita = $state("")

    //inotropico
    let dopamina = $state("")
    let dobutamina = $state("")
    let adrenalina = $state("")
    let milrinona = $state("")
    let vasopresina = $state("")

    let furosemida = $state("")
    let espironolacta = $state("")
    let hidrocloritiazida = $state("")

    //hematologia
    let tgr = $state("")
    let plasma = $state("")
    let inmunoglobina = $state("")
    let transfusion = $state("")

    //neurologia
    let hiv = $state("")
    let convulsiones = $state("")
    let ehi = $state("")
    let hipo = $state("")

    //oftamologia 
    let fondoojo = $state("")
    let rop = $state("")
    let tratamientorop = $state("")

    //digestivo
    let nec = $state("")
    let perforacion = $state("")
    let onfalocele = $state("")
    let gastrosquisis = $state("")
    let atresia= $state("")
    let tqt = $state("")
    let drenajepleural = $state("")
    let drenajeventricular = $state("")

    //gentico
    let trisomia21 = $state("")
    let trisomia13=$state("")
    let trisomia18 = $state("")
    let vacterl = $state("")
    let turner = $state("")

    //medicacion
    let protectorgastrico=$state("")
    let inhibidor = $state("")
    let probiotico = $state("")
    let eritromicina = $state("")
    let fentanilo = $state("")
    let morfina = $state("")
    let midozolam = $state("")
    let precedex = $state("")
    let metadona = $state("")
    let vecuronio = $state("")
    let prostaglandinas  = $state("")

    //otros
    let malformacionescongenitas = $state("")
    let cirugias = $state("")
    let complicaciones = $state("")




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
        checked_otros: true,
    }
    let proxychecks = $state({
        ...defaultchecks,
    });
    let checksproxy = createStorageProxy("reportechecks", defaultchecks);



    let defaultfiltros = {
unidad:"",
area:"",
fechadesde:"",
fechahasta:"",
dnimadre:"",
nombremadre:"",
dnirn:"",
nombrern:"",
nacdesde:"",
nachasta:"",
ingresodesde:"",
ingresohasta:"",
egresodesde:"",
egresohasta:"",
tipoingreso:"",
sexorn:"",
tipoparto:"",
partodomicilio:"",
apgar_1:"",
apgar_5:"",
apgar_10:"",
gestaciondesde:"",
gestacionhasta:"",
rciu:"",
temperatura_ingreso:"",
rem:"",
reanimacion:"",
liquido:"",
fallece:"",
peso_rn:"",
peso_7:"",
peso_14:"",
peso_21:"",
peso_28:"",
peso_36:"",
cefalico_rn:"",
cefalico_7:"",
cefalico_14:"",
cefalico_21:"",
cefalico_28:"",
cefalico_36:"",
talla_rn:"",
talla_7:"",
talla_14:"",
talla_21:"",
talla_28:"",
talla_36:"",
scorez_rn:"",
scorez_7:"",
scorez_14:"",
scorez_21:"",
scorez_28:"",
scorez_36:"",
recuperarpeso:"",
edad_materna:"",
niveleducativo:"",
paridad:"",
gemelos:"",
controlparental:"",
tabaquismo:"",
adiccion:"",
egb:"",
sulfato:"",
diabetes:"",
colico:"",
congenita:"",
itu:"",
desprendimiento:"",
ht:"",
hie:"",
preeclampisa:"",
eclampsia:"",
colestasis:"",
umbilicalvenoso:"",
umbilicalarterial:"",
percutaneo:"",
central:"",
trofica:"",
volumenenteral:"",
caloriasenteral:"",
tipoenteral:"",
nutricionparental:"",
edadnpt:"",
duracionnpt:"",
comienzoaa:"",
aporteaa:"",
comienzolipido:"",
aportelipido:"",
tempranoestado:"",
tempranogermen:"",
tempranoantibiotico:"",
tempranoatb:"",
tardeestado:"",
tardegermen:"",
tardeantibiotico:"",
tardeatb:"",
emh:"",
apena:"",
neumotorax:"",
taquipnea:"",
hipertension:"",
interstecial:"",
dbp:"",
oxigeno:"",
surfactante:"",
arm:"",
intubado:"",
vafo:"",
cpap:"",
oaf:"",
cbf:"",
cafeina:"",
aminofilina:"",
corticoideinhalado:"",
corticoidepostnatal:"",
oxidonitrico:"",
ductus:"",
cardiocongenita:"",
dopamina:"",
dobutamina:"",
adrenalina:"",
milrinona:"",
vasopresina:"",
furosemida:"",
espironolacta:"",
hidrocloritiazida:"",
tgr:"",
plasma:"",
inmunoglobina:"",
transfusion:"",
hiv:"",
convulsiones:"",
ehi:"",
hipo:"",
fondoojo:"",
rop:"",
tratamientorop:"",
nec:"",
perforacion:"",
onfalocele:"",
gastrosquisis:"",
atresia:"",
tqt:"",
drenajepleural:"",
drenajeventricular:"",
trisomia21:"",
trisomia13:"",
trisomia18:"",
vacterl:"",
turner:"",
protectorgastrico:"",
inhibidor:"",
probiotico:"",
eritromicina:"",
fentanilo:"",
morfina:"",
midozolam:"",
precedex:"",
metadona:"",
vecuronio:"",
prostaglandinas:"",
malformacionescongenitas:"",
cirugias:"",
complicaciones:"",
    }
    let proxyfiltros = $state({
        ...defaultfiltros,
    });
    let proxy = createStorageProxy("reportebebes", defaultfiltros);
    function procesarHistorial() {
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
    function procesarFilas() {
        filas = [];
        for (let i = 0; i < historiasbebesrow.length; i++) {
            let h = historiasbebesrow[i];
            let ultimo_estado = h.estados[h.estados.length - 1];
            let fila = { ...ultimo_estado };
            filas.push(fila);
        }
    }
    function filterUpdate() {
        historiasbebesrow = historiasbebes;
        procesarFilas();
    }
    async function getHistorial() {
        historial = await pb.collection("historialbebes").getFullList({
            expand: "bebe",
            sort: "bebe,fecha",
            filter: "bebe.active=true",
        });
    }
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
        checked_otros = proxychecks.checked_otros;
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
        proxychecks.checked_otros = checked_otros;
    }
    function setFiltros() {
unidad=proxy.unidad
area=proxy.area
fechadesde=proxy.fechadesde
fechahasta=proxy.fechahasta
dnimadre=proxy.dnimadre
nombremadre=proxy.nombremadre
dnirn=proxy.dnirn
nombrern=proxy.nombrern
nacdesde=proxy.nacdesde
nachasta=proxy.nachasta
ingresodesde=proxy.ingresodesde
ingresohasta=proxy.ingresohasta
egresodesde=proxy.egresodesde
egresohasta=proxy.egresohasta
tipoingreso=proxy.tipoingreso
sexorn=proxy.sexorn
tipoparto=proxy.tipoparto
partodomicilio=proxy.partodomicilio
apgar_1=proxy.apgar_1
apgar_5=proxy.apgar_5
apgar_10=proxy.apgar_10
gestaciondesde=proxy.gestaciondesde
gestacionhasta=proxy.gestacionhasta
rciu=proxy.rciu
temperatura_ingreso=proxy.temperatura_ingreso
rem=proxy.rem
reanimacion=proxy.reanimacion
liquido=proxy.liquido
fallece=proxy.fallece
peso_rn=proxy.peso_rn
peso_7=proxy.peso_7
peso_14=proxy.peso_14
peso_21=proxy.peso_21
peso_28=proxy.peso_28
peso_36=proxy.peso_36
cefalico_rn=proxy.cefalico_rn
cefalico_7=proxy.cefalico_7
cefalico_14=proxy.cefalico_14
cefalico_21=proxy.cefalico_21
cefalico_28=proxy.cefalico_28
cefalico_36=proxy.cefalico_36
talla_rn=proxy.talla_rn
talla_7=proxy.talla_7
talla_14=proxy.talla_14
talla_21=proxy.talla_21
talla_28=proxy.talla_28
talla_36=proxy.talla_36
scorez_rn=proxy.scorez_rn
scorez_7=proxy.scorez_7
scorez_14=proxy.scorez_14
scorez_21=proxy.scorez_21
scorez_28=proxy.scorez_28
scorez_36=proxy.scorez_36
recuperarpeso=proxy.recuperarpeso
edad_materna=proxy.edad_materna
niveleducativo=proxy.niveleducativo
paridad=proxy.paridad
gemelos=proxy.gemelos
controlparental=proxy.controlparental
tabaquismo=proxy.tabaquismo
adiccion=proxy.adiccion
egb=proxy.egb
sulfato=proxy.sulfato
diabetes=proxy.diabetes
colico=proxy.colico
congenita=proxy.congenita
itu=proxy.itu
desprendimiento=proxy.desprendimiento
ht=proxy.ht
hie=proxy.hie
preeclampisa=proxy.preeclampisa
eclampsia=proxy.eclampsia
colestasis=proxy.colestasis
umbilicalvenoso=proxy.umbilicalvenoso
umbilicalarterial=proxy.umbilicalarterial
percutaneo=proxy.percutaneo
central=proxy.central
trofica=proxy.trofica
volumenenteral=proxy.volumenenteral
caloriasenteral=proxy.caloriasenteral
tipoenteral=proxy.tipoenteral
nutricionparental=proxy.nutricionparental
edadnpt=proxy.edadnpt
duracionnpt=proxy.duracionnpt
comienzoaa=proxy.comienzoaa
aporteaa=proxy.aporteaa
comienzolipido=proxy.comienzolipido
aportelipido=proxy.aportelipido
tempranoestado=proxy.tempranoestado
tempranogermen=proxy.tempranogermen
tempranoantibiotico=proxy.tempranoantibiotico
tempranoatb=proxy.tempranoatb
tardeestado=proxy.tardeestado
tardegermen=proxy.tardegermen
tardeantibiotico=proxy.tardeantibiotico
tardeatb=proxy.tardeatb
emh=proxy.emh
apena=proxy.apena
neumotorax=proxy.neumotorax
taquipnea=proxy.taquipnea
hipertension=proxy.hipertension
interstecial=proxy.interstecial
dbp=proxy.dbp
oxigeno=proxy.oxigeno
surfactante=proxy.surfactante
arm=proxy.arm
intubado=proxy.intubado
vafo=proxy.vafo
cpap=proxy.cpap
oaf=proxy.oaf
cbf=proxy.cbf
cafeina=proxy.cafeina
aminofilina=proxy.aminofilina
corticoideinhalado=proxy.corticoideinhalado
corticoidepostnatal=proxy.corticoidepostnatal
oxidonitrico=proxy.oxidonitrico
ductus=proxy.ductus
cardiocongenita=proxy.cardiocongenita
dopamina=proxy.dopamina
dobutamina=proxy.dobutamina
adrenalina=proxy.adrenalina
milrinona=proxy.milrinona
vasopresina=proxy.vasopresina
furosemida=proxy.furosemida
espironolacta=proxy.espironolacta
hidrocloritiazida=proxy.hidrocloritiazida
tgr=proxy.tgr
plasma=proxy.plasma
inmunoglobina=proxy.inmunoglobina
transfusion=proxy.transfusion
hiv=proxy.hiv
convulsiones=proxy.convulsiones
ehi=proxy.ehi
hipo=proxy.hipo
fondoojo=proxy.fondoojo
rop=proxy.rop
tratamientorop=proxy.tratamientorop
nec=proxy.nec
perforacion=proxy.perforacion
onfalocele=proxy.onfalocele
gastrosquisis=proxy.gastrosquisis
atresia=proxy.atresia
tqt=proxy.tqt
drenajepleural=proxy.drenajepleural
drenajeventricular=proxy.drenajeventricular
trisomia21=proxy.trisomia21
trisomia13=proxy.trisomia13
trisomia18=proxy.trisomia18
vacterl=proxy.vacterl
turner=proxy.turner
protectorgastrico=proxy.protectorgastrico
inhibidor=proxy.inhibidor
probiotico=proxy.probiotico
eritromicina=proxy.eritromicina
fentanilo=proxy.fentanilo
morfina=proxy.morfina
midozolam=proxy.midozolam
precedex=proxy.precedex
metadona=proxy.metadona
vecuronio=proxy.vecuronio
prostaglandinas=proxy.prostaglandinas
malformacionescongenitas=proxy.malformacionescongenitas
cirugias=proxy.cirugias
complicaciones=proxy.complicaciones
    }
    function setProxy() {
proxy.unidad=unidad
proxy.area=area
proxy.fechadesde=fechadesde
proxy.fechahasta=fechahasta
proxy.dnimadre=dnimadre
proxy.nombremadre=nombremadre
proxy.dnirn=dnirn
proxy.nombrern=nombrern
proxy.nacdesde=nacdesde
proxy.nachasta=nachasta
proxy.ingresodesde=ingresodesde
proxy.ingresohasta=ingresohasta
proxy.egresodesde=egresodesde
proxy.egresohasta=egresohasta
proxy.tipoingreso=tipoingreso
proxy.sexorn=sexorn
proxy.tipoparto=tipoparto
proxy.partodomicilio=partodomicilio
proxy.apgar_1=apgar_1
proxy.apgar_5=apgar_5
proxy.apgar_10=apgar_10
proxy.gestaciondesde=gestaciondesde
proxy.gestacionhasta=gestacionhasta
proxy.rciu=rciu
proxy.temperatura_ingreso=temperatura_ingreso
proxy.rem=rem
proxy.reanimacion=reanimacion
proxy.liquido=liquido
proxy.fallece=fallece
proxy.peso_rn=peso_rn
proxy.peso_7=peso_7
proxy.peso_14=peso_14
proxy.peso_21=peso_21
proxy.peso_28=peso_28
proxy.peso_36=peso_36
proxy.cefalico_rn=cefalico_rn
proxy.cefalico_7=cefalico_7
proxy.cefalico_14=cefalico_14
proxy.cefalico_21=cefalico_21
proxy.cefalico_28=cefalico_28
proxy.cefalico_36=cefalico_36
proxy.talla_rn=talla_rn
proxy.talla_7=talla_7
proxy.talla_14=talla_14
proxy.talla_21=talla_21
proxy.talla_28=talla_28
proxy.talla_36=talla_36
proxy.scorez_rn=scorez_rn
proxy.scorez_7=scorez_7
proxy.scorez_14=scorez_14
proxy.scorez_21=scorez_21
proxy.scorez_28=scorez_28
proxy.scorez_36=scorez_36
proxy.recuperarpeso=recuperarpeso
proxy.edad_materna=edad_materna
proxy.niveleducativo=niveleducativo
proxy.paridad=paridad
proxy.gemelos=gemelos
proxy.controlparental=controlparental
proxy.tabaquismo=tabaquismo
proxy.adiccion=adiccion
proxy.egb=egb
proxy.sulfato=sulfato
proxy.diabetes=diabetes
proxy.colico=colico
proxy.congenita=congenita
proxy.itu=itu
proxy.desprendimiento=desprendimiento
proxy.ht=ht
proxy.hie=hie
proxy.preeclampisa=preeclampisa
proxy.eclampsia=eclampsia
proxy.colestasis=colestasis
proxy.umbilicalvenoso=umbilicalvenoso
proxy.umbilicalarterial=umbilicalarterial
proxy.percutaneo=percutaneo
proxy.central=central
proxy.trofica=trofica
proxy.volumenenteral=volumenenteral
proxy.caloriasenteral=caloriasenteral
proxy.tipoenteral=tipoenteral
proxy.nutricionparental=nutricionparental
proxy.edadnpt=edadnpt
proxy.duracionnpt=duracionnpt
proxy.comienzoaa=comienzoaa
proxy.aporteaa=aporteaa
proxy.comienzolipido=comienzolipido
proxy.aportelipido=aportelipido
proxy.tempranoestado=tempranoestado
proxy.tempranogermen=tempranogermen
proxy.tempranoantibiotico=tempranoantibiotico
proxy.tempranoatb=tempranoatb
proxy.tardeestado=tardeestado
proxy.tardegermen=tardegermen
proxy.tardeantibiotico=tardeantibiotico
proxy.tardeatb=tardeatb
proxy.emh=emh
proxy.apena=apena
proxy.neumotorax=neumotorax
proxy.taquipnea=taquipnea
proxy.hipertension=hipertension
proxy.interstecial=interstecial
proxy.dbp=dbp
proxy.oxigeno=oxigeno
proxy.surfactante=surfactante
proxy.arm=arm
proxy.intubado=intubado
proxy.vafo=vafo
proxy.cpap=cpap
proxy.oaf=oaf
proxy.cbf=cbf
proxy.cafeina=cafeina
proxy.aminofilina=aminofilina
proxy.corticoideinhalado=corticoideinhalado
proxy.corticoidepostnatal=corticoidepostnatal
proxy.oxidonitrico=oxidonitrico
proxy.ductus=ductus
proxy.cardiocongenita=cardiocongenita
proxy.dopamina=dopamina
proxy.dobutamina=dobutamina
proxy.adrenalina=adrenalina
proxy.milrinona=milrinona
proxy.vasopresina=vasopresina
proxy.furosemida=furosemida
proxy.espironolacta=espironolacta
proxy.hidrocloritiazida=hidrocloritiazida
proxy.tgr=tgr
proxy.plasma=plasma
proxy.inmunoglobina=inmunoglobina
proxy.transfusion=transfusion
proxy.hiv=hiv
proxy.convulsiones=convulsiones
proxy.ehi=ehi
proxy.hipo=hipo
proxy.fondoojo=fondoojo
proxy.rop=rop
proxy.tratamientorop=tratamientorop
proxy.nec=nec
proxy.perforacion=perforacion
proxy.onfalocele=onfalocele
proxy.gastrosquisis=gastrosquisis
proxy.atresia=atresia
proxy.tqt=tqt
proxy.drenajepleural=drenajepleural
proxy.drenajeventricular=drenajeventricular
proxy.trisomia21=trisomia21
proxy.trisomia13=trisomia13
proxy.trisomia18=trisomia18
proxy.vacterl=vacterl
proxy.turner=turner
proxy.protectorgastrico=protectorgastrico
proxy.inhibidor=inhibidor
proxy.probiotico=probiotico
proxy.eritromicina=eritromicina
proxy.fentanilo=fentanilo
proxy.morfina=morfina
proxy.midozolam=midozolam
proxy.precedex=precedex
proxy.metadona=metadona
proxy.vecuronio=vecuronio
proxy.prostaglandinas=prostaglandinas
proxy.malformacionescongenitas=malformacionescongenitas
proxy.cirugias=cirugias
proxy.complicaciones=complicaciones
    }
    onMount(async () => {
        await getBebes();
        await getHistorial();
        procesarHistorial();
        filterUpdate();
    });
</script>

<Navbar>
    <Header />
    <Filtros
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
bind:edad_materna
bind:niveleducativo
bind:paridad
bind:gemelos
bind:controlparental
bind:tabaquismo
bind:adiccion
bind:egb
bind:sulfato
bind:diabetes
bind:colico
bind:congenita
bind:itu
bind:desprendimiento
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
bind:inmunoglobina
bind:transfusion
bind:hiv
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
     />
    <Listado bind:bebesrows={filas} />
</Navbar>
