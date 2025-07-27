<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<div class="p-4 sm:p-6 bg-transparent">
  <!-- Tabla -->
    <div 
        class={`
            ${toDark(oscuro,"bg-gray-800","bg-white")}
            overflow-x-auto  shadow-md rounded-lg
        `}
    >
        <div class="hidden sm:table w-full text-sm text-left">
            <div 
                class={`
                    table-header-group
                    ${toDark(oscuro,"bg-gray-700 text-gray-200","bg-gray-100 text-gray-700 ")}
                `}
            >
                <div class="table-row">
                    <div class="table-cell px-4 py-3">Nombre</div>
                    <div class="table-cell px-4 py-3">Especialidad</div>
                    <div class="table-cell px-4 py-3">Estado</div>
                    <div class="table-cell px-4 py-3">Fecha Registro</div>
                    
                    
                </div>

            </div>
            <div class="table-row-group">
                
              <div
                  role="button"
                  tabindex="0"
                  class={`
                      table-row border-b
                      ${toDark(oscuro,"border-gray-700","border-gray-200")}
                      ${toDark(oscuro,"hover:bg-gray-700","hover:bg-gray-100")}
                      cursor-pointer
                  `}
                  onclick={()=>handleClick(b.id)}
                  onkeydown={(e) => {
                      e.preventDefault();
                  }}
              >
                  <div class="table-cell px-4 py-3 font-semibold flex items-center gap-2">
                      Dr. María González
                  </div>
                  <div class="table-cell px-4 py-3">Neonatología</div>
                  <div class="table-cell px-4 py-3">Activo</div>
                  <div class="table-cell px-4 py-3">14/1/2024</div>
              </div>
                
                
            </div>
        </div>
    </div>
  

  <!-- Cards Mobile -->
  <div class="sm:hidden flex flex-col gap-3">
    <div class="card bg-base-100 shadow border border-base-300">
      <div class="card-body p-4">
        <div class="flex justify-between items-center mb-2">
          <div class="text-base font-semibold dark:text-white">Dr. María González</div>
          <div class="badge badge-success">Activo</div>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Especialidad: <span class="badge badge-purple">Neonatología</span></p>
        <p class="text-sm text-gray-500 dark:text-gray-400">Registrado: 14/1/2024</p>
      </div>
      <button class="btn btn-ghost w-full rounded-t-none"><i class="lucide lucide-chevron-down"></i> Opciones</button>
    </div>
    <!-- ... más tarjetas ... -->
  </div>
</div>