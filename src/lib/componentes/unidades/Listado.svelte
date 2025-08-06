<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Swal from "sweetalert2";
    let oscuro = $derived(darker.oscurostate)
    function handleClick(id){
        Swal.fire("Modificar unidad","En desarrollo","info")
    }
</script>
<div class={`
        bg-transparent
        ${toDark(oscuro," text-gray-100","text-gray-800")}
        min-h-screen p-4 
    `}
>
    <!-- Título -->
    <div class="mb-4">
        <h2 class="text-xl font-bold flex items-center gap-2">
            Unidades
            <span class={`
                    text-sm 
                    ${toDark(oscuro,"bg-blue-800 text-blue-200","bg-blue-100 text-blue-800")}
                    
                    rounded-full px-2 py-0.5`
                }
            >
                1
            </span>
        </h2>
    </div>
  <!-- Tabla en Escritorio y Tarjetas en Mobile -->
  <div class="hidden sm:table text-sm text-left">
    <div 
        class={`
            ${toDark(oscuro,"bg-gray-800","bg-white")}
            overflow-x-auto  shadow-md rounded-lg
        `}
    >
        <div 
            class={`
                table-header-group
                ${toDark(oscuro,"bg-gray-700 text-gray-200","bg-gray-100 text-gray-700 ")}
            `}
        >
            <div class="table-row">
                <div class="table-cell px-4 py-3">Nombre</div>
                <div class="table-cell px-4 py-3">Bebes</div>
            </div>
        </div>
        <div class="table-row-group">
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
                        onclick={()=>handleClick(0)}
                        onkeydown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div class="table-cell px-4 py-3 font-semibold flex items-center gap-2">
                            <span class="h-2 w-2 bg-green-500 rounded-full inline-block"></span> UCI
                        </div>
                        <div class="table-cell px-4 py-3">10</div>
                </div>
            </div>
        </div>
        
    </div>
  </div>

    <!-- Cards Mobile -->
    <div 
        class={`
            sm:hidden p-4 border-b
            ${toDark(oscuro,"border-gray-700","border-gray-200")}
        `}
    >
        <div
                role="button"
                tabindex="0"
                onclick={()=>handleClick(0)}
                onkeydown={(e) => {
                    e.preventDefault();
                }}
            >
                <div 
                    class="flex items-center justify-between"
                >
                    <div class="flex items-center gap-2 font-semibold text-lg">
                        
                        UCI
                    </div>
                </div>
                <div class="mt-2 text-sm space-y-1">
                    <div><span class="font-medium">Bebés:</span>0</div>
                </div>
            </div>
    </div>
</div>
<div class="p-4 sm:p-6 dark:bg-base-200">

  <!-- Tabla en Escritorio y Tarjetas en Mobile -->
  <div class="hidden sm:block">
    <div class="overflow-x-auto bg-base-100 rounded-lg shadow border border-base-300">
      <table class="table table-zebra">
        <thead class="text-sm text-gray-500 dark:text-gray-400">
          <tr>
            <th>Nombre </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="flex items-center gap-2"><span class="badge badge-success w-2 h-2 p-0"></span>UCI</span></td>
            
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>

  <!-- Cards Mobile -->
  <div class="sm:hidden flex flex-col gap-3">
    <div class="card bg-base-100 shadow border border-base-300">
      <div class="card-body p-4">
        <div class="flex justify-between items-center mb-2">
          <div class="text-base font-semibold dark:text-white">UCI</div>
        </div>
      </div>
      
    </div>
    <!-- ... más tarjetas ... -->
  </div>
</div>