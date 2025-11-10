<script>

    import Swal from "sweetalert2";
    import { roles, getNombre } from "$lib/roles";
    let { areasrows = $bindable([]), clickFila } = $props();

    function handleClick(id) {
        clickFila(id);
        //Swal.fire("Modificar usuario","En desarrollo","info")
    }
</script>

<div
    class={`
        bg-transparent
        dark:text-gray-100 text-gray-800
        
        min-h-screen p-4 
    `}
>
    <!-- Título -->
    <div class="mb-4">
        <h2 class="text-xl font-bold flex items-center gap-2">
            Áreas
            <span
                class={`
                    text-lg
                    dark:bg-blue-800 dark:text-blue-200
                    bg-blue-100 text-blue-800
                    
                    
                    rounded-full px-2 py-0.5`}
            >
                {areasrows.length}
            </span>
        </h2>
    </div>
    <!-- Tabla en Escritorio y Tarjetas en Mobile -->
    <div class="container mx-auto px-4 pb-12">
        <div class="hidden md:block overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr class="bg-base-200">
                        <th class="text-base-content font-bold">Área</th>
                    
                        <th class="text-base-content font-bold">Bebés</th>
                    
                        <th class="text-base-content font-bold">Unidades</th>
                    </tr>
                </thead>
                <tbody>
                    {#each areasrows as fila, i}
                        <tr
                            class="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900"
                            onclick={() => handleClick(fila.id)}
                        >
                            <td>
                                {fila.nombre}
                            </td>
                            <td>
                                {fila.total_bebes}
                            </td>
                            <td>
                                {fila.total_unidades}
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    <!-- Cards Mobile -->
    <div class="md:hidden space-y-4">
        {#each areasrows as fila, i}
            <div
                class="card bg-base-100 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900 shadow-xl border border-base-200"
            >
                <button onclick={() => handleClick(fila.id)}>
                    <div class="card-body p-5">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="card-title text-lg">
                                {fila.nombre}
                            </h3>
                        </div>
                        <div class="mt-3 text-sm space-y-1">
                            <div>
                                <span class="font-medium">Bebés:</span>
                                {fila.total_bebes}
                            </div>
                        </div>
                        <div class="mt-3 text-sm space-y-1">
                            <div>
                                <span class="font-medium">Unidades:</span>
                                {fila.total_unidades}
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        {/each}
    </div>
</div>
