<script>
    import { goto } from "$app/navigation";
    let {
        bebesrows = $bindable(),
        unidades = $bindable([]),
        areas = $bindable([]),
        rol = "",
    } = $props();
    function handleClick(id) {
        goto("/bebes/" + id);
    }
    function getNombre(id, lista) {
        let fila = { id: "", nombre: "" };
        let idx = lista.findIndex((o) => o.id == id);
        if (idx != -1) {
            fila = lista[idx];
        }
        return fila.nombre;
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
            Bebés
            <span
                class={`
                    text-sm 
                    dark:bg-blue-800
                    dark:text-blue-200
                    bg-blue-100 text-blue-800
                    
                    
                    rounded-full px-2 py-0.5`}
            >
                {bebesrows.length}
            </span>
        </h2>
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
                    <div class="table-cell px-4 py-3">Estado</div>
                    <div class="table-cell px-4 py-3">Nombre</div>
                    <div class="table-cell px-4 py-3">Peso</div>
                    <div class="table-cell px-4 py-3">Area</div>
                    <div class="table-cell px-4 py-3">Unidad</div>
                </div>
            </div>
            <div class="table-row-group">
                {#each bebesrows as b, i}
                    <div
                        role="button"
                        tabindex="0"
                        class={`
                            table-row border-b
                            dark:border-gray-700
                            border-gray-200
                            dark:hover:bg-gray-700
                            hover:bg-gray-100
                            cursor-pointer
                        `}
                        onclick={() => handleClick(b.id)}
                        onkeydown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div class="table-cell px-4 py-3">
                            {#if b.conalta}
                                <span
                                    class="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 px-2 py-0.5 rounded-full"
                                    >{"Con alta"}</span
                                >
                            {:else}
                                <span
                                    class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-2 py-0.5 rounded-full"
                                    >{"Sin alta"}</span
                                >
                            {/if}
                        </div>
                        <div
                            class="table-cell px-4 py-3 font-semibold flex items-center gap-2"
                        >
                            {b.nombrebebe}
                        </div>

                        <div class="table-cell px-4 py-3">
                            {rol == "admin" ? b.pesobebe : "-"}
                        </div>
                        <div class="table-cell px-4 py-3">
                            {rol == "admin" ? getNombre(b.area, areas) : "-"}
                        </div>
                        <div class="table-cell px-4 py-3">
                            {rol == "admin"
                                ? getNombre(b.unidad, unidades)
                                : "-"}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <!-- Cards Mobile -->
    <div class="md:hidden space-y-4">
        {#each bebesrows as b}
            <div
                class="card bg-base-100 dark:bg-slate-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900 shadow-xl border border-base-200"
            >
                <button onclick={() => handleClick(b.id)}>
                    <div class="card-body p-5">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="card-title text-lg">
                                {b.nombrebebe}
                            </h3>
                            {#if b.conalta}
                                <span
                                    class="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 px-2 py-0.5 rounded-full"
                                    >{"Con alta"}</span
                                >
                            {:else}
                                <span
                                    class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-2 py-0.5 rounded-full"
                                    >{"Sin alta"}</span
                                >
                            {/if}
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-base-content/70">Peso:</span>
                                <span class="text-right"
                                    >{rol == "admin" ? b.pesobebe : "-"}</span
                                >
                            </div>
                            <div class="flex justify-between">
                                <span class="text-base-content/70">Área:</span>
                                <span class="text-right"
                                    >{rol == "admin"
                                        ? getNombre(b.area, areas)
                                        : "-"}</span
                                >
                            </div>
                            <div class="flex justify-between">
                                <span class="text-base-content/70">Unidad:</span
                                >
                                <span class="text-right"
                                    >{rol == "admin"
                                        ? getNombre(b.unidad, unidades)
                                        : "-"}</span
                                >
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        {/each}
    </div>
    
</div>
