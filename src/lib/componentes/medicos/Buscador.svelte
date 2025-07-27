<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
    let {
        buscar=$bindable("")
    } = $props()

</script>
<div 
    class={`
        rounded-md p-4 shadow-sm mb-4
        ${toDark(oscuro,"bg-gray-800","bg-white")}
        
    `}
>
    <div class="flex flex-col sm:flex-row sm:items-center gap-3">
        <!-- 🔍 Input de búsqueda -->
        <div 
          class={`
            flex items-center flex-1 border
            rounded-md px-3 py-2
            ${toDark(oscuro,"border-gray-600 bg-gray-900","border-gray-300 bg-white")}
          `}
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z" />
            </svg>
            <input
                type="text"
                placeholder="Buscar por nombre, especialidad, ..."
                class={`
                    ${toDark(oscuro,"placeholder-gray-500 text-gray-100","placeholder-gray-400 text-gray-800")}
                    w-full bg-transparent focus:outline-none
                `}

            />
        </div>
    </div>
</div>