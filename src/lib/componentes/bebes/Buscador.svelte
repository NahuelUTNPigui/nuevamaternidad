<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
    let estados = ["Todos","Activos","Alta"]
    let {
        buscar=$bindable(""),
        status=$bindable("")
    } = $props()

</script>
<div 
    class={`
        rounded-md p-4 shadow-sm mb-4
        ${toDark(oscuro,"bg-slate-900","bg-white")}
        
    `}
>
    <div class="flex flex-col sm:flex-row sm:items-center gap-3">
        <!-- 🔍 Input de búsqueda -->
        <div 
            class={`
                rounded-md px-3 py-2
                flex items-center flex-1 border 
                ${toDark(oscuro,"border-gray-600 bg-gray-900","border-gray-300 bg-white")}
                
            `}
        >
            <svg xmlns="http://www.w3.org/2000/svg" 
                class={`w-5 h-5 ${toDark(oscuro,"text-gray-500","text-gray-400")} mr-2`} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z" />
            </svg>
            <input
                type="text"
                placeholder="Buscar por nombre, madre o HC..."
                class={`
                    ${toDark(oscuro,"placeholder-gray-500 text-gray-100","placeholder-gray-400 text-gray-800")}
                    w-full bg-transparent focus:outline-none
                `}

            />
        </div>
        <details class="dropdown">
            <summary 
                class={`
                    flex items-center  border 
                    rounded-md px-3 py-2 text-sm font-medium
                    ${toDark(oscuro,"border-gray-600 bg-gray-900 text-gray-200","border-gray-300 bg-white text-gray-700 ")}
                     
                    
                `}
            >
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V18a1 1 0 01-.553.894l-4 2A1 1 0 019 20v-6.586L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
                    Estado
                <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.586l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
            </summary>
            <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>Todos</li>
                <li>Activos</li>
                <li>Con alta</li>
            </ul>
        </details>
    </div>
</div>