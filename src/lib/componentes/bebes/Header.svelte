<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<header class="mb-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <div    
            class={`
                ${toDark(oscuro,"bg-gray-900","bg-gray-50")} 
                px-4 py-4 transition-colors duration-200 
            `}
        >
            <h1 class={`text-2xl font-bold ${toDark(oscuro,"text-white","text-gray-900")}`}>
                Listado de Bebés
            </h1>
            <p class={`text-sm ${toDark(oscuro,"text-gray-400","text-gray-500")} `}>
                Sistema de Gestión Neonatal
            </p>
        </div>
        <button
            class={`
                cursor-pointer flex items-center gap-2 px-4 py-2 
                transition-colors rounded-md
                text-white
                ${toDark(oscuro,"bg-blue-500 hover:bg-blue-600 ","bg-blue-600 hover:bg-blue-700")}
                  
            `}
        >
            <span class="text-lg font-bold">+</span>
            <span class="text-sm font-medium">Nuevo Ingreso</span>
        </button>
    </div>
</header>