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
        <div class="form-control">
          <label class="label" for="hc">
            <span class="label-text font-medium">Historia Clínica (HC)</span>
          </label>
          {#snippet childrenviewhc()}
            <p class=" bg-transparent font-medium m-1">
              {hcbebe}
            </p>
          {/snippet}
          {#snippet childrenedithc()}
            <input
              class="input input-bordered font-medium"
              bind:value={hcbebe}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewhc}
            childrenedit={childrenedithc}
          />
        </div>
        <div class="form-control">
          <label class="label" for="peso">
            <span class="label-text font-medium">Peso (g)</span>
          </label>
          {#snippet childrenviewpeso()}
            <p class=" bg-transparent font-medium m-1">
              {pesobebe}
            </p>
          {/snippet}
          {#snippet childreneditpeso()}
            <input
              class="input input-bordered font-medium"
              bind:value={pesobebe}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewpeso}
            childrenedit={childreneditpeso}
          />
        </div>
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
        <div class="form-control">
          <label class="label" for="nombre">
            <span class="label-text font-medium">Identificación unico</span>
          </label>
          {#snippet childrenviewide()}
            <p class=" bg-transparent font-medium m-1">
              {identificacion}
            </p>
          {/snippet}
          {#snippet childreneditide()}
            <input
              class="input input-bordered font-medium"
              bind:value={identificacion}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewide}
            childrenedit={childreneditide}
          />
        </div>
        <div class="form-control">
          <label class="label" for="codigo">
            <span class="label-text font-medium">Código</span>
          </label>

          {#snippet childrenviewcodigo()}
            <p class=" bg-transparent font-medium m-1">
              {codigo}
            </p>
          {/snippet}
          {#snippet childreneditcodigo()}
            <input
              class="input input-bordered font-medium"
              bind:value={codigo}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewcodigo}
            childrenedit={childreneditcodigo}
          />
        </div>
      </div>
    </div>
    <div
      class={`
          
          rounded-md p-4 shadow
        `}
    >
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">Información de la Madre</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="form-control">
          <label class="label" for="nombremama">
            <span class="label-text font-medium">Nombre</span>
          </label>
          {#snippet childrenviewcodigo()}
            <p class=" bg-transparent font-medium m-1">
              {codigo}
            </p>
          {/snippet}
          {#snippet childreneditcodigo()}
            <input
              class="input input-bordered font-medium"
              bind:value={codigo}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewcodigo}
            childrenedit={childreneditcodigo}
          />
        </div>
        <div class="form-control">
          <label class="label" for="dnimama">
            <span class="label-text font-medium">DNI</span>
          </label>
          {#snippet childrenviewcodigo()}
            <p class=" bg-transparent font-medium m-1">
              {codigo}
            </p>
          {/snippet}
          {#snippet childreneditcodigo()}
            <input
              class="input input-bordered font-medium"
              bind:value={codigo}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewcodigo}
            childrenedit={childreneditcodigo}
          />
        </div>
        <div class="form-control">
          <label class="label" for="hcmama">
            <span class="label-text font-medium">Historia Clínica (HC)</span>
          </label>
          {#snippet childrenviewhcmama()}
            <p class=" bg-transparent font-medium m-1">
              {hcmama}
            </p>
          {/snippet}
          {#snippet childrenedithcmama()}
            <input
              class="input input-bordered font-medium"
              bind:value={hcmama}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewhcmama}
            childrenedit={childrenedithcmama}
          />
        </div>
      </div>
    </div>
  </div>
</div>
