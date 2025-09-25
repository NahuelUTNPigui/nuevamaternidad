<script>
  import InputText from "../Formulario/InputText.svelte";
  import InputDate from "../Formulario/InputDate.svelte";
  import InputSelect from "../Formulario/InputSelect.svelte";
  import InputOpcionalText from "../Formulario/InputOpcionalText.svelte";
  import opciones from "$lib/opciones";
  let {
    modoedicion = $bindable(false),

    nombremama = $bindable(""),
    fechanacimientomama = $bindable(""),
    educacionmama = $bindable(""),
    paridad = $bindable(""),
    gemelocantidad = $bindable(""),
    gemelonumero = $bindable(""),
    controlprenatal = $bindable(""),
    corticoideprenatal = $bindable(""),
    tabaquismo = $bindable(""),
    adiccion = $bindable(""),
    egb = $bindable(""),
    sulfatomg = $bindable(""),
    diabetesprevia = $bindable(""),
    diabetesgestacional = $bindable(""),
    crioaminitis = $bindable(""),
    infeccioncongenita = $bindable(""),
    itu = $bindable(""),
    desprendimientoplacenta = $bindable(""),
    sufrimientofetal = $bindable(""),
    htcronica = $bindable(""),
    hie = $bindable(""),
    eclampsia = $bindable(""),
    preeclampsia = $bindable(""),
    colestasis = $bindable(""),
  } = $props();
</script>

<div
  class={`
    tab-content rounded-md p-4 space-y-4
    dark:bg-gray-900 bg-white
    
  `}
>
  
  <div class="grid md:grid-cols-1 gap-4">
    <!-- Sección: Información Básica -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
        Información Básica
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputText
          bind:value={nombremama}
          etiqueta="Nombre"
          idetiqueta="nombremama"
          bind:modoedicion
        />

        <InputDate
          bind:value={fechanacimientomama}
          etiqueta="Fecha de Nacimiento"
          idetiqueta="fechanacimientomama"
          
          bind:modoedicion
        />

        <InputSelect
          lista={opciones.NIVEL_EDUCACION}
          bind:value={educacionmama}
          etiqueta="Nivel de Educación"
          idetiqueta="educacionmama"
          bind:modoedicion
        />

        <InputText
          bind:value={paridad}
          etiqueta="Paridad (número de partos)"
          idetiqueta="paridad"
          bind:modoedicion
        />

        <InputText
          bind:value={gemelocantidad}
          etiqueta="Cantidad de Gemelos"
          idetiqueta="gemelocantidad"
          tipo="number"
          bind:modoedicion
        />

        <InputText
          bind:value={gemelonumero}
          etiqueta="Número en Embarazo Gemelar"
          idetiqueta="gemelonumero"
          tipo="number"
          bind:modoedicion
        />
      </div>
    </div>

    <!-- Sección: Antecedentes y Cuidados Prenatales -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-secondary">
        Antecedentes y Cuidados Prenatales
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputOpcionalText
          
          bind:value={controlprenatal}
          etiqueta="Control Prenatal"
          idetiqueta="controlprenatal"
          bind:modoedicion
        />

        <InputOpcionalText
          bind:value={corticoideprenatal}
          etiqueta="Corticoides Prenatales"
          idetiqueta="corticoideprenatal"
          bind:modoedicion
        />

        <InputSelect
          lista={opciones.SINO}
          bind:value={tabaquismo}
          etiqueta="Tabaquismo"
          idetiqueta="tabaquismo"
          bind:modoedicion
        />

        <InputSelect
          lista={opciones.SINO}
          bind:value={adiccion}
          etiqueta="Adicciones"
          idetiqueta="adiccion"
          bind:modoedicion
        />

        <InputText
          bind:value={egb}
          etiqueta="Edad Gestacional al Nacer (EG en semanas)"
          idetiqueta="egb"
          bind:modoedicion
        />
      </div>
    </div>
    <!-- Sección: Antecedentes Maternos Adicionales -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-secondary">
        Antecedentes Maternos Adicionales
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Sulfato de Magnesio -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={sulfatomg}
          etiqueta="Sulfato de Mg"
          idetiqueta="sulfato_mg"
          bind:modoedicion
        />

        <!-- Diabetes -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={diabetesgestacional}
          etiqueta="Diabetes"
          idetiqueta="diabetes"
          bind:modoedicion
        />

        <!-- Crioaminitis -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={crioaminitis}
          etiqueta="Crioaminitis"
          idetiqueta="crioaminitis"
          bind:modoedicion
        />

        <!-- Infección Congénita -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={infeccioncongenita}
          etiqueta="Infección Congénita"
          idetiqueta="infeccion_congenita"
          bind:modoedicion
        />

        <!-- ITU -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={itu}
          etiqueta="ITU"
          idetiqueta="itu"
          bind:modoedicion
        />

        <!-- Desprendimiento de Placenta -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={desprendimientoplacenta}
          etiqueta="Desprendimiento de Placenta"
          idetiqueta="desprendimiento_placenta"
          bind:modoedicion
        />

        <!-- Sufrimiento Fetal -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={sufrimientofetal}
          etiqueta="Sufrimiento Fetal"
          idetiqueta="sufrimiento_fetal"
          bind:modoedicion
        />

        <!-- HT Crónica -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={htcronica}
          etiqueta="HT Crónica"
          idetiqueta="ht_cronica"
          bind:modoedicion
        />

        <!-- HIE -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={hie}
          etiqueta="HIE"
          idetiqueta="hie"
          bind:modoedicion
        />

        <!-- Eclampsia -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={eclampsia}
          etiqueta="Eclampsia"
          idetiqueta="eclampsia"
          bind:modoedicion
        />

        <!-- Preeclampsia -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={preeclampsia}
          etiqueta="Preeclampsia"
          idetiqueta="preeclampsia"
          bind:modoedicion
        />

        <!-- Colestasis -->
        <InputSelect
          lista={opciones.SINO}
          bind:value={colestasis}
          etiqueta="Colestasis"
          idetiqueta="colestasis"
          bind:modoedicion
        />
      </div>
    </div>
  </div>
</div>
