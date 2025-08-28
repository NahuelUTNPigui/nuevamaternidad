<script>
  import Modoedicion from "./Modoedicion.svelte";
  let {
    modoedicion = $bindable(false),
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
  <div class="grid md:grid-cols-2 gap-4">
    <div
      class={`
          dark:bg-gray-800 bg-white
          
          rounded-md p-1 shadow
        `}
    >
      <h3 class="font-semibold text-lg mb-2">Datos del Bebé</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="form-control">
          <label class="label" for="area">
            <span class="label-text font-medium">Area</span>
          </label>
          {#snippet childrenviewarea()}
            <p class=" bg-transparent font-medium m-1">
              {areabebe}
            </p>
          {/snippet}
          {#snippet childreneditarea()}
            <input
              class="input input-bordered font-medium"
              bind:value={areabebe}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewarea}
            childrenedit={childreneditarea}
          />
        </div>
        <div class="form-control">
          <label class="label" for="Unidad">
            <span class="label-text font-medium">Unidad</span>
          </label>
          {#snippet childrenviewunidad()}
            <p class=" bg-transparent font-medium m-1">
              {unidadbebe}
            </p>
          {/snippet}
          {#snippet childreneditunidad()}
            <input
              class="input input-bordered font-medium"
              bind:value={unidadbebe}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewunidad}
            childrenedit={childreneditunidad}
          />
        </div>
        <div class="form-control">
          <label class="label" for="sexo">
            <span class="label-text font-medium">Sexo</span>
          </label>
          {#snippet childrenviewsexo()}
            <p class=" bg-transparent font-medium m-1">
              {sexo}
            </p>
          {/snippet}
          {#snippet childreneditsexo()}
            <input
              class="input input-bordered font-medium"
              bind:value={sexo}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewsexo}
            childrenedit={childreneditsexo}
          />
        </div>
        <div class="form-control">
          <label class="label" for="nombre">
            <span class="label-text font-medium">Nombre</span>
          </label>
          {#snippet childrenviewnombre()}
            <p class=" bg-transparent font-medium m-1">
              {nombrebebe}
            </p>
          {/snippet}
          {#snippet childreneditnombre()}
            <input
              class="input input-bordered font-medium"
              bind:value={nombrebebe}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewnombre}
            childrenedit={childreneditnombre}
          />
        </div>
        <div class="form-control">
          <label class="label" for="dni">
            <span class="label-text font-medium">DNI</span>
          </label>
          {#snippet childrenviewdni()}
            <p class=" bg-transparent font-medium m-1">
              {dnibebe}
            </p>
          {/snippet}
          {#snippet childreneditdni()}
            <input
              class="input input-bordered font-medium"
              bind:value={dnibebe}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewdni}
            childrenedit={childreneditdni}
          />
        </div>
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
        <div class="form-control">
          <label class="label" for="fecha">
            <span class="label-text font-medium">Fecha de Nacimiento</span>
          </label>
          {#snippet childrenviewnac()}
            <p class=" bg-transparent font-medium m-1">
              {new Date(fechanacimientobebe).toLocaleDateString()}
            </p>
          {/snippet}
          {#snippet childreneditnac()}
            <input
              id="bdate"
              type="date"
              bind:value={fechanacimientobebe}
              class={`
                input input-bordered
                w-full 
                dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 border dark:border-gray-700 dark:focus:ring-2 dark:focus:ring-sky-500
                bg-white text-gray-900 placeholder-gray-400  border-gray-300 focus:ring-2 focus:ring-sky-400
                
              `}
            />
          {/snippet}
          <Modoedicion
            bind:modoedicion
            childrenview={childrenviewnac}
            childrenedit={childreneditnac}
          />
        </div>
      </div>
    </div>
    <div
      class={`
          dark:bg-gray-800 bg-white
          
          rounded-md p-4 shadow
        `}
    >
      <h3 class="font-semibold text-lg mb-2">Identificación</h3>
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
          dark:bg-gray-800 bg-white
          
          rounded-md p-4 shadow
        `}
    >
      <h3 class="font-semibold text-lg mb-2">Datos de la Madre</h3>
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
