<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Swal from "sweetalert2";
    import constantes from "$lib/constantes";
    import Exportar from "../Exportar.svelte";
    let oscuro = $derived(darker.oscurostate);
    let {
        clickFila = (id) => {},
        unidadesrows = [],
        rol = "esc",
        area = $bindable(""),
        todos = $bindable(false),
        vacias = $bindable(false),
        buscar = $bindable(""),
        areas = [],
    } = $props();
    function nuevo(id) {
        clickFila(id);
    }
    function prepararData(item) {
        return {
            UNIDAD: item.nombre,
            AREA: item.expand.area.nombre,
            BEBE: item.nombrebebe,
        };
    }
</script>

<!-- Título -->
<header class="mb-8 container mx-auto py-1 px-4 max-w-7xl w-full">
    <!--Header-->
    <div
        class={`
            rounded-xl p-1 shadow-2xl mb-1
            dark:bg-slate-900 bg-white
            px-6
        `}
    >
        <div
            class="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
            <div
                class={`
                dark:bg-gray-900 bg-gray-50
                px-4 py-4 transition-colors duration-200 
            `}
            >
                <h1 class={`text-2xl font-bold dark:text-white text-gray-900`}>
                    Listado de unidades
                </h1>
                <p class={`text-sm dark:text-gray-400 text-gray-500 `}>
                    Sistema de {constantes.nombreapp}
                </p>
            </div>
            {#if rol == "admin"}
                <button
                    class={`
                cursor-pointer text-center items-center gap-2 px-4 py-2 
                transition-colors rounded-md
                text-white
                dark:bg-blue-500 dark:hover:bg-blue-600
                bg-blue-600 hover:bg-blue-700
                
                  
            `}
                    onclick={() => nuevo("")}
                >
                    <span class="text-xl font-medium">Nueva unidad</span>
                </button>
                <Exportar
                    data={unidadesrows}
                    titulo={"Unidades"}
                    confiltro={false}
                    filtros={[]}
                    {prepararData}
                    sheetname={""}
                />
            {/if}
        </div>
        <div class="flex flex-col gap-3 mt-2">
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
</header>
