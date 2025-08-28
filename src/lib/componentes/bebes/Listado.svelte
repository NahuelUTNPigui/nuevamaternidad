<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import { goto } from "$app/navigation";
    let { bebesrows = $bindable() } = $props();
    let oscuro = $derived(darker.oscurostate);
    function handleClick(id) {
        goto("/bebes/" + id);
    }
</script>

<div
    class={`
        bg-transparent
        ${toDark(oscuro, "text-gray-100", "text-gray-800")}
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
                    ${toDark(oscuro, "bg-blue-800 text-blue-200", "bg-blue-100 text-blue-800")}
                    
                    rounded-full px-2 py-0.5`}
            >
                {bebesrows.length}
            </span>
        </h2>
    </div>
    <!-- Tabla -->
    <div
        class={`
            ${toDark(oscuro, "bg-gray-800", "bg-white")}
            overflow-x-auto  shadow-md rounded-lg
        `}
    >
        <div class="hidden sm:table w-full text-sm text-left">
            <div
                class={`
                    table-header-group
                    ${toDark(oscuro, "bg-gray-700 text-gray-200", "bg-gray-100 text-gray-700 ")}
                `}
            >
                <div class="table-row">
                    <div class="table-cell px-4 py-3">Nombre</div>
                    <div class="table-cell px-4 py-3">Madre</div>
                    <div class="table-cell px-4 py-3">HC</div>
                    <div class="table-cell px-4 py-3">Fecha Nac.</div>
                    <div class="table-cell px-4 py-3">EG</div>
                    <div class="table-cell px-4 py-3">Peso</div>
                    <div class="table-cell px-4 py-3">Estado</div>
                </div>
            </div>
            <div class="table-row-group">
                {#each bebesrows as b, i}
                    <div
                        role="button"
                        tabindex="0"
                        class={`
                            table-row border-b
                            ${toDark(oscuro, "border-gray-700", "border-gray-200")}
                            ${toDark(oscuro, "hover:bg-gray-700", "hover:bg-gray-100")}
                            cursor-pointer
                        `}
                        onclick={() => handleClick(b.id)}
                        onkeydown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div
                            class="table-cell px-4 py-3 font-semibold flex items-center gap-2"
                        >
                            <span
                                class="h-2 w-2 bg-green-500 rounded-full inline-block"
                            ></span>
                            {b.nombrebebe}
                        </div>
                        <div class="table-cell px-4 py-3">{b.nombremama}</div>
                        <div class="table-cell px-4 py-3">{b.hcbebe}</div>
                        <div class="table-cell px-4 py-3">
                            {b.fechanacimientobebe
                                ? new Date(
                                      b.fechanacimientobebe,
                                  ).toLocaleDateString()
                                : ""}
                        </div>
                        <div class="table-cell px-4 py-3">
                            <span
                                class="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-2 py-0.5 rounded-full"
                                >{20}</span
                            >
                        </div>
                        <div class="table-cell px-4 py-3">
                            {b.pesoingresobebe}
                        </div>
                        <div class="table-cell px-4 py-3">
                            <span
                                class="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 px-2 py-0.5 rounded-full"
                                >{b.active ? "Activo" : ""}</span
                            >
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
        {#each bebesrows as b}
            <div
                role="button"
                tabindex="0"
                onclick={() => handleClick(b.id)}
                onkeydown={(e) => {
                    e.preventDefault();
                }}
                class="
                    border-b
                    dark:border-gray-700  border-gray-200
                "
            >
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 font-semibold text-lg">
                        <span
                            class="h-2 w-2 bg-green-500 rounded-full inline-block"
                        >
                        </span>
                        {b.nombrebebe}
                    </div>
                    
                </div>

                <div class="mt-2 text-sm space-y-1">
                    <div>
                        <span class="font-medium">Madre:</span>{b.nombrebebe}
                    </div>
                    <div>
                        <span class="font-medium">HC:</span>
                        {b.hcbebe}
                    </div>
                    <div>
                        <span class="font-medium">Fecha Nac.:</span
                        >{b.fechanacimientobebe?new Date(b.fechanacimientobebe):""}
                    </div>
                    
                    <div><span class="font-medium">Peso:</span>{b.pesoingresobebe}</div>
                </div>
            </div>
        {/each}
    </div>
</div>
