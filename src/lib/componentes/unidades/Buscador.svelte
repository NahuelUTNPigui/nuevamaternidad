<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate);
    let {
        areas = $bindable([]),
        buscar = $bindable(""),
        area = $bindable(""),
        todos = $bindable(false),
        vacias = $bindable(false),
    } = $props();
</script>

<div
    class={`
        rounded-md p-4 shadow-xl mb-4
        dark:bg-slate-900 bg-white
    `}
>
    <div class="flex flex-col  gap-3">
        <!-- 🔍 Input de búsqueda -->
        <div
            class={`
            flex items-center flex-1 border
            rounded-md px-3 py-2
            dark:border-gray-600 dark:bg-gray-900
            border-gray-300 bg-white
          `}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2"
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
                placeholder="Buscar por nombre"
                class={`
                    dark:placeholder-gray-500 dark:text-gray-100
                    placeholder-gray-400 text-gray-800
                    
                    w-full bg-transparent focus:outline-none
                `}
                bind:value={buscar}
            />
        </div>
        <div class="grid grid-cols-2 gap-1">
            <div>
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Activas</legend>
                    <select class="select" bind:value={todos}>
                        <option value={false}>Solo activas</option>
                        <option value={true}>Todas</option>
                    </select>
                </fieldset>
            </div>
            <div>
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Solo vacias</legend>
                    <select class="select" bind:value={vacias}>
                        
                        <option value={false}>No</option>
                        <option value={true}>Si</option>
                    </select>
                </fieldset>
            </div>
        </div>
        <div>
            <fieldset class="fieldset">
                <legend class="fieldset-legend">Area</legend>
                <select class="select" bind:value={area}>
                    <option value="">Todas</option> 
                    {#each areas as a}
                        <option value={a.id}>{a.nombre}</option>    
                    {/each}
                    
                </select>
            </fieldset>
        </div>
    </div>
</div>
