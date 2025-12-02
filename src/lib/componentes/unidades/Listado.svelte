<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Swal from "sweetalert2";
    let oscuro = $derived(darker.oscurostate);
    let { unidadesrows = $bindable([]), clickFila } = $props();
    function handleClick(id) {
        clickFila(id);
        //Swal.fire("Modificar unidad", "En desarrollo", "info");
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
            Unidades
            <span
                class={`
                    text-sm 
                    dark:bg-blue-800 dark:text-blue-200
                    bg-blue-100 text-blue-800
                    rounded-full px-2 py-0.5`}
            >
                {unidadesrows.length}
            </span>
        </h2>
    </div>
    <!-- Tabla en Escritorio y Tarjetas en Mobile -->
    <div class="container mx-auto px-4 pb-12">
        <div class="hidden md:block overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr class="bg-base-200">
                        <th class="text-base-content font-bold">Unidad</th>
                        <th class="text-base-content font-bold">Área</th>
                        <th class="text-base-content font-bold">Bebé</th>
                        <th class="text-base-content font-bold">Activa</th>
                    </tr>
                </thead>
                <tbody>
                    {#each unidadesrows as fila, i}
                        <tr
                            class="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900"
                            onclick={() => handleClick(fila.id)}
                        >
                            <td>
                                {fila.nombre}
                            </td>
                            <td>
                                {fila.expand.area.nombre}
                            </td>
                            <td>
                                {fila.nombrebebe}
                            </td>
                            <td>
                                <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" disabled bind:checked={fila.active}/>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>

    <!-- Cards Mobile -->
    <div class="md:hidden space-y-4">
        {#each unidadesrows as fila, i}
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
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-base-content/70">Área:</span>
                                <span class="text-right"
                                    >{fila.expand.area.nombre}</span
                                >
                            </div>
                            <div class="flex justify-between">
                                <span class="text-base-content/70">Bebé:</span>
                                <span class="text-right"
                                    >{fila.nombrebebe}</span
                                >
                            </div>
                            <div class="flex justify-between">
                                <span class="text-base-content/70">Activa:</span>
                                <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" disabled bind:checked={fila.active}/>
                            </div>
                            
                        </div>
                    </div>
                </button>
            </div>
        {/each}
    </div>
</div>
