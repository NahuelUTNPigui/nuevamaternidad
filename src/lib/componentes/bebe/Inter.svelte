<script>
  import Alimentacion from "./Alimentacion.svelte";
  import Cardio from "./Cardio.svelte";
  import Cateteres from "./Cateteres.svelte";
  import Otros from "./Otros.svelte";
  import Respiratorio from "./Respiratorio.svelte";
  import Digestivo from "./Digestivo.svelte";
  import Sepsis from "./Sepsis.svelte";
  import Collapse from "./Collapse.svelte";
  import Ductus from "./Ductus.svelte";
  import Sangre from "./Sangre.svelte";
  import Neuro from "./Neuro.svelte";
  import Ofta from "./Ofta.svelte";
  import Medicacion from "./Medicacion.svelte";
  import Genetica from "./Genetica.svelte";

  let {
    modoedicion = $bindable(false),
    cateteresumbilicalvenoso = $bindable(""),
    cateteresumbilicalarterial = $bindable(""),
    percutanea = $bindable(""),
    viacentral = $bindable(""),
    alimentacionenteraltrofica = $bindable(""),
    alimentacionenteralcompletoedad = $bindable(""),
    alimentacionenteralcalorias = $bindable(""),
    tipoalimentacionenteral = $bindable(""),
    nutricionparenteral = $bindable(""),
    nptedadinicio = $bindable(""),
    nptduraciondias = $bindable(""),
    nptdiacomienzo = $bindable(""),
    nptaportetotal = $bindable(""),
    nptdiacomienzolipido = $bindable(""),
    nptaportetotallipido = $bindable(""),
    sepsistemprana = $bindable(""),
    sepsistempranagermen = $bindable(""),
    sepsistempranaatbdias = $bindable(""),
    sepsistardia = $bindable(""),
    sepsistardiagermen = $bindable(""),
    sepsistardiaatbdias = $bindable(""),
    emh = $bindable(""),
    ndosissurfactante = $bindable(""),
    salam = $bindable(""),
    apneas = $bindable(""),
    neumotorax = $bindable(""),
    taquipneatransitoria = $bindable(""),
    hipertpulmonar = $bindable(""),
    enfermedadintersticial = $bindable(""),
    bql = $bindable(""),
    dbp36sem = $bindable(""),
    o236sem = $bindable(""),
    surfactante = $bindable(""),
    arm = $bindable(""),
    intubadodesdeutpr = $bindable(""),
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
    ductusdiagnostico = $bindable(""),
    ductusttofarmacologico1ciclo = $bindable(""),
    ductusttofarmacologico2ciclo = $bindable(""),
    ductusttoquirurgico = $bindable(""),
    cardiopatiacongenita = $bindable(""),
    diagcc = $bindable(""),
    inotropicosdopamina = $bindable(""),
    inotropicosdobutamina = $bindable(""),
    inotropicosadrenalina = $bindable(""),
    inotropicosmilrinona = $bindable(""),
    inotropicosvasopresina = $bindable(""),
    diureticosfurosemida = $bindable(""),
    diureticosespironolac = $bindable(""),
    diureticoshidroclotiaz = $bindable(""),
    hemoderivadostgrn = $bindable(""),
    hemoderivadosplasman = $bindable(""),
    hemoderivadosplaquetasn = $bindable(""),
    hemoderivadosgamman = $bindable(""),
    exanguineotransfusion = $bindable(""),
    ecotf = $bindable(""),
    hivgrado = $bindable(""),
    convulsiones = $bindable(""),
    ehi = $bindable(""),
    hipotermiatipo = $bindable(""),
    fondoojo = $bindable(""),
    rop = $bindable(""),
    roptto = $bindable(""),
    necestadio = $bindable(""),
    perforacionunica = $bindable(""),
    onfalocele = $bindable(""),
    gastroquisis = $bindable(""),
    hdc = $bindable(""),
    hdcdiagnostico = $bindable(""),
    hdcttoquirurgico = $bindable(""),
    tot = $bindable(""),
    drenajepleural = $bindable(""),
    drenajeventricular = $bindable(""),
    geneticat21 = $bindable(""),
    geneticat13 = $bindable(""),
    geneticat18 = $bindable(""),
    geneticavacterl = $bindable(""),
    geneticaturner = $bindable(""),
    medprotectorgastricodias = $bindable(""),
    medinhibidorbombahdias = $bindable(""),
    medprobiodias = $bindable(""),
    meleritromicinadias = $bindable(""),
    medfentanilodias = $bindable(""),
    medmorfinadias = $bindable(""),
    medmidazolamdias = $bindable(""),
    medprecedexdias = $bindable(""),
    medmetadonadias = $bindable(""),
    medvecuroniadias = $bindable(""),
    medprostagldias = $bindable(""),
    malformacionescongenitas = $bindable(""),
    cirugias = $bindable(""),
    complicaciones = $bindable(""),
  } = $props();
</script>

<div
  class={`
    tab-content rounded-md p-4 space-y-4
    dark:bg-gray-900 bg-white
    

  `}
>
  <!-- Catéteres -->
  <Collapse titulo="Catéres">
    <Cateteres
      bind:modoedicion
      bind:cateteresumbilicalvenoso
      bind:cateteresumbilicalarterial
      bind:percutanea
      bind:viacentral
    />
  </Collapse>

  <!-- Alimentación -->
  <Collapse titulo="Alimentación">
    <Alimentacion 
    bind:modoedicion
    bind:alimentacionenteraltrofica
    bind:alimentacionenteralcompletoedad
    bind:alimentacionenteralcalorias
    bind:tipoalimentacionenteral
    bind:nutricionparenteral
    bind:nptedadinicio
    bind:nptduraciondias
    bind:nptdiacomienzo
    bind:nptaportetotal
    bind:nptdiacomienzolipido
    bind:nptaportetotallipido
    />
  </Collapse>

  <!-- Sepsis -->
  <Collapse titulo="Sepsis">
    <Sepsis
      bind:modoedicion
      bind:sepsistemprana
      bind:sepsistempranagermen
      bind:sepsistempranaatbdias
      bind:sepsistardia
      bind:sepsistardiagermen
      bind:sepsistardiaatbdias
    />
  </Collapse>
  <!-- Sistema Respiratorio -->
  <Collapse titulo="Sistema respiratorio">
    <Respiratorio
      bind:modoedicion
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
    />
  </Collapse>

  <!-- Sistema Cardiovascular -->
  <Collapse titulo="Sistema cardiovascular">
    <Cardio
      bind:modoedicion
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
    />
  </Collapse>
  <!-- Neurología -->
  <Collapse titulo="Neurología">
    <Neuro
      bind:modoedicion
      bind:ecotf
      bind:hivgrado
      bind:convulsiones
      bind:ehi
      bind:hipotermiatipo
      bind:fondoojo
    />
  </Collapse>
  <!-- Oftamología -->
  <Collapse titulo="Oftamología">
    <Ofta bind:modoedicion bind:fondoojo bind:rop bind:roptto />
  </Collapse>
  <!--Digestivo -->
  <Collapse titulo="Digestivo">
    <Digestivo
      bind:modoedicion
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
    />
  </Collapse>
  <!--Medicacion -->
  <Collapse titulo="Medicacion">
    <Medicacion
      bind:modoedicion
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
    />
  </Collapse>
  <!-- Genetica -->
  <Collapse titulo="Genetica">
    <Genetica
      bind:modoedicion
      bind:geneticat21
      bind:geneticat13
      bind:geneticat18
      bind:geneticavacterl
      bind:geneticaturner
    />
  </Collapse>

  <!-- Otros Sistemas -->
  <Collapse titulo="Otros ">
    <Otros
      bind:modoedicion
      bind:malformacionescongenitas
      bind:cirugias
      bind:complicaciones
    />
  </Collapse>
</div>
