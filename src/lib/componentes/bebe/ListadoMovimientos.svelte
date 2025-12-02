<script>
    import Exportar from "../Exportar.svelte";
    import { goto } from "$app/navigation";
    let {
        movimientos = $bindable(),
        unidades = $bindable([]),
        areas = $bindable([]),
    } = $props();
    function getNombre(id, lista) {
        let fila = { id: "", nombre: "" };
        let idx = lista.findIndex((o) => o.id == id);
        if (idx != -1) {
            fila = lista[idx];
        }
        return fila.nombre;
    }
    function prepararData(item) {
        return {
            AREA: getNombre(item.area, areas),
            UNIDAD: getNombre(item.unidad, unidades),
            "FECHA:": new Date(item.fecha).toLocaleDateString(),
            DIAS: item.dias,
        };
    }
</script>

<div
    class={`
        bg-transparent
        
        dark:text-gray-100
        text-gray-800
        min-h-screen p-4 
    `}
>
    <!-- Título -->
    <div class="mb-4">
        <h2 class="text-xl font-bold flex items-center gap-2">
            Movimiento bebé
            <span
                class={`
                    text-sm 
                    dark:bg-blue-800
                    dark:text-blue-200
                    bg-blue-100 text-blue-800
                    
                    
                    rounded-full px-2 py-0.5`}
            >
                {movimientos.length}
            </span>
        </h2>
    </div>
    <div class="my-2">
        <Exportar
            titulo = "Movimientos unidades"
            data= {movimientos}
            {prepararData}
        />

    </div>
    <!-- Tabla -->
    <div
        class={`
            dark:bg-gray-800
            bg-white
            
            overflow-x-auto  shadow-md rounded-lg
        `}
    >
        <div class="hidden sm:table w-full text-sm text-left">
            <div
                class={`
                    table-header-group
                    dark:bg-gray-700 dark:text-gray-200
                    bg-gray-100 text-gray-700
                    
                `}
            >
                <div class="table-row">
                    <div class="table-cell px-4 py-3">Area</div>
                    <div class="table-cell px-4 py-3">Unidad</div>
                    <div class="table-cell px-4 py-3">Fecha</div>
                    <div class="table-cell px-4 py-3">Días</div>
                </div>
            </div>
            <div class="table-row-group">
                {#each movimientos as b, i}
                    <div
                        class={`
                            table-row border-b
                            dark:border-gray-700
                            border-gray-200
                            dark:hover:bg-gray-700
                            hover:bg-gray-100
                            cursor-pointer
                        `}
                    >
                        <div class="table-cell px-4 py-3">
                            {getNombre(b.area, areas)}
                        </div>
                        <div class="table-cell px-4 py-3">
                            {getNombre(b.unidad, unidades)}
                        </div>
                        <div class="table-cell px-4 py-3">
                            {new Date(b.fecha).toLocaleDateString()}
                        </div>
                        <div class="table-cell px-4 py-3">
                            {b.dias}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <!-- Mobile: tarjeta colapsada -->
    <div
        class={`
            sm:hidden p-4 
        `}
    >
        {#each movimientos as b}
            <div
                class="
                    border-b
                    dark:border-gray-700 border-gray-200
                "
            >
                <!-- Info principal -->
                <div class="mt-3 text-sm space-y-1">
                    <div>
                        <span class="font-medium">Área:</span>
                        {getNombre(b.area, areas)}
                    </div>
                    <div>
                        <span class="font-medium">Unidad:</span>
                        {getNombre(b.unidad, unidades)}
                    </div>
                    <div>
                        <span class="font-medium">Fecha:</span>
                        {new Date(b.fecha).toLocaleDateString()}
                    </div>
                    <div>
                        <span class="font-medium">Días:</span>
                        {b.dias}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
