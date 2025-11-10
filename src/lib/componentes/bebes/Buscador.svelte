<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate);
    let estados = [
        { id: "", nombre: "Todos" },
        { id: false, nombre: "Sin alta" },
        { id: true, nombre: "Con alta" },
    ];
    let {
        buscar = $bindable(""),
        estado = $bindable(""),
        unidad = $bindable(""),
        area = $bindable(""),
        unidades = $bindable(""),
        areas = $bindable(""),
    } = $props();
</script>

<div
    class={`
        rounded-md p-4 shadow-sm mb-4
        ${toDark(oscuro, "bg-slate-900", "bg-white")}
        
    `}
>
    <div class="grid grid-cols-1 md:grid-cols-4 sm:items-center gap-3">
        <!-- 🔍 Input de búsqueda -->
        <div
            class={`
                rounded-md px-3 py-2
                flex items-center flex-1 border 
                dark:border-gray-600 dark:bg-gray-900
                border-gray-300 bg-white
                
                
            `}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class={`w-5 h-5 ${toDark(oscuro, "text-gray-500", "text-gray-400")} mr-2`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"
                />
            </svg>
            <input
                type="text"
                placeholder="Buscar por nombre..."
                bind:value={buscar}
                class={`
                    ${toDark(oscuro, "placeholder-gray-500 text-gray-100", "placeholder-gray-400 text-gray-800")}
                    w-full bg-transparent focus:outline-none
                `}
            />
        </div>
        <div>
            <label for="estado" class="label mb-0">
                <span class="label-text text-base">Estado</span>
            </label>
            <label class="input-group">
                <select
                    class={`
                                        select select-bordered w-full
                                        rounded-md
                                        focus:outline-none focus:ring-2 
                                        focus:ring-green-500 
                                        focus:border-green-500
                                        
                                        border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-gray-900 dark:text-gray-100
                                    `}
                    bind:value={estado}
                >
                    {#each estados as s}
                        <option value={s.id} class="rounded">{s.nombre}</option>
                    {/each}
                </select>
            </label>
        </div>
        <div>
            <label for="area" class="label mb-0">
                <span class="label-text text-base">Área</span>
            </label>
            <label class="input-group">
                <select
                    class={`
                                        select select-bordered w-full
                                        rounded-md
                                        focus:outline-none focus:ring-2 
                                        focus:ring-green-500 
                                        focus:border-green-500
                                        
                                        border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-gray-900 dark:text-gray-100
                                    `}
                    bind:value={area}
                >
                    {#each areas as s}
                        <option value={s.id} class="rounded">{s.nombre}</option>
                    {/each}
                </select>
            </label>
        </div>
        <div>
            <label for="unidad" class="label mb-0">
                <span class="label-text text-base">Unidad</span>
            </label>
            <label class="input-group">
                <select
                    class={`
                                        select select-bordered w-full
                                        rounded-md
                                        focus:outline-none focus:ring-2 
                                        focus:ring-green-500 
                                        focus:border-green-500
                                        
                                        border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-gray-900 dark:text-gray-100
                                    `}
                    bind:value={unidad}
                >
                    {#each unidades as s}
                        <option value={s.id} class="rounded">{s.nombre}</option>
                    {/each}
                </select>
            </label>
        </div>
        
    </div>
</div>
