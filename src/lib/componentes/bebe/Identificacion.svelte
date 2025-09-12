<script>
  import Modoedicion from "./Modoedicion.svelte";

  import InputSelect from "../Formulario/InputSelect.svelte";
  import opciones from "$lib/opciones";
  import InputText from "../Formulario/InputText.svelte";
  import InputDate from "../Formulario/InputDate.svelte";
  let {
    modoedicion = $bindable(false),
    areas = $bindable([]),
    unidadesarea=$bindable([]),

    //bebe
    sexo = $bindable(""),
    unidadbebe = $bindable(""),
    areabebe = $bindable(""),
    nombrebebe = $bindable(""),
    dnibebe = $bindable(""),
    hcbebe = $bindable(""),
    fechanacimientobebe = $bindable(""),
    pesobebe = $bindable(""),

    identificacion = $bindable("state"),
    codigo = $bindable(""),
    //madre
    nombremama = $bindable(""),
    dnimama = $bindable(""),
    hcmama = $bindable(""),
  } = $props();

</script>

<div
  class={`
    tab-content rounded-md p-2 space-y-4
    dark:bg-gray-900 bg-white
    
  `}
>
  <div class="grid grid-cols-1 gap-4">
    <div
      class={`
          
          rounded-md p-1 shadow
        `}
    >
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">Información del Bebé</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputSelect
          idetiqueta={"areabebe"}
          etiqueta="Area"
          bind:modoedicion
          bind:value={areabebe}
          bind:lista={areas}
        />
        <InputSelect
          idetiqueta={"unidadbebe"}
          etiqueta="Unidad"
          bind:modoedicion
          bind:value={unidadbebe}
          bind:lista={unidadesarea}
        />
        <InputSelect
          idetiqueta={"sexobebe"}
          etiqueta="Sexo"
          bind:modoedicion
          bind:value={sexo}
          lista={opciones.SEXO}
        />
        <InputText
        idetiqueta={"nombrebebe"}
          etiqueta="Nombre"
          bind:modoedicion
          bind:value={nombrebebe}
        />
        <InputText
        idetiqueta={"dnibebe"}
          etiqueta="DNI"
          bind:modoedicion
          bind:value={dnibebe}
        />
        <InputText
        idetiqueta={"hc"}
          etiqueta="Historia Clínica"
          bind:modoedicion
          bind:value={pesobebe}
        />
        <InputText
        idetiqueta={"Peso (g)"}
          etiqueta="Peso (g)"
          bind:modoedicion
          bind:value={hcbebe}
        />
        <InputDate
        idetiqueta={"fechanac"}
          etiqueta="Fecha nacimiento"
          bind:modoedicion
          bind:value={fechanacimientobebe}
        />
      </div>
    </div>
    <div
      class={`
          
          rounded-md p-4 shadow
        `}
    >
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">Identificación del Registro</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputText
        idetiqueta={"Identificación unico"}
          etiqueta="Identificación unico"
          bind:modoedicion
          bind:value={identificacion}
        />
        <InputText
        idetiqueta={"Código"}
          etiqueta="Código"
          bind:modoedicion
          bind:value={codigo}
        />
      </div>
    </div>
    <div
      class={`
          
          rounded-md p-4 shadow
        `}
    >
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">Información de la Madre</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputText
          idetiqueta={"Nombremadre"}
          etiqueta="Nombre"
          bind:modoedicion
          bind:value={nombremama}
        />
        <InputText
          idetiqueta={"DNImadre"}
          etiqueta="DNI"
          bind:modoedicion
          bind:value={dnimama}
        />
        <InputText
          idetiqueta={"Historia Clínica madre"}
          etiqueta="Historia Clínica "
          bind:modoedicion
          bind:value={hcmama}
        />
      </div>
    </div>
  </div>
</div>
