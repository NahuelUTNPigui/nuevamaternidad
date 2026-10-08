<script>
    import Swal from "sweetalert2";
    let {
        unidadesrows = $bindable([]),
        clickFila = (id) => {},
        rol = "esc",
    } = $props();
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
                    <div class="table-cell px-4 py-3">Unidad</div>
                    <div class="table-cell px-4 py-3">Área</div>
                    <div class="table-cell px-4 py-3">Bebé</div>
                    <div class="table-cell px-4 py-3">Activa</div>
                </div>
            </div>
            <div class="table-row-group">
                {#each unidadesrows as fila, i}
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
                        onclick={() => handleClick(fila.id)}
                        onkeydown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div
                            class="table-cell px-4 py-3 font-semibold flex items-center gap-2"
                        >
                            {fila.nombre}
                        </div>
                        <div
                            class="table-cell px-4 py-3 font-semibold flex items-center gap-2"
                        >
                            {fila.expand.area.nombre}
                        </div>
                        <div
                            class="table-cell px-4 py-3 font-semibold flex items-center gap-2"
                        >
                            {#if rol == "admin"}
                                {fila.nombrebebe.length > 0
                                    ? fila.nombrebebe
                                    : "Desocupada"}
                            {:else}
                                {fila.nombrebebe.length > 0
                                    ? "Ocupada"
                                    : "Desocupada"}
                            {/if}
                        </div>
                        <div
                            class="table-cell px-4 py-3 font-semibold flex items-center gap-2"
                        >
                            <input
                                type="checkbox"
                                class="checkbox checkbox-primary checkbox-sm"
                                disabled
                                bind:checked={fila.active}
                            />
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    

    <!-- Cards Mobile -->
    <div class="md:hidden space-y-4">
        {#each unidadesrows as fila, i}
            <div
                class="card bg-base-100 dark:bg-slate-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900 shadow-xl border border-base-200"
            >
                <button onclick={() => handleClick(fila.id)}>
                    <div class="card-body p-5">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="card-title text-lg">
                                Unidad: {fila.nombre}
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
                                {#if rol == "admin"}
                                    <span class="text-right"
                                        >{fila.nombrebebe.length > 0
                                            ? fila.nombrebebe
                                            : "Desocupada"}</span
                                    >
                                {:else}
                                    <span class="text-right"
                                        >{fila.nombrebebe.length > 0
                                            ? "Ocupada"
                                            : "Desocupada"}</span
                                    >
                                {/if}
                            </div>
                            <div class="flex justify-between">
                                <span class="text-base-content/70">Activa:</span
                                >
                                <input
                                    type="checkbox"
                                    class="checkbox checkbox-primary checkbox-sm"
                                    disabled
                                    bind:checked={fila.active}
                                />
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        {/each}
    </div>
</div>
