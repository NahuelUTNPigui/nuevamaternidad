<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Swal from "sweetalert2";
    import constantes from "$lib/constantes";
    import Exportar from "../Exportar.svelte";
    let oscuro = $derived(darker.oscurostate)
    let {
        clickFila
    } = $props()
    function nuevo(id){
        clickFila(id)
    }
</script>
<!-- Título -->
<header class="mb-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <div    
            class={`
                ${toDark(oscuro,"bg-gray-900","bg-gray-50")} 
                px-4 py-4 transition-colors duration-200 
            `}
        >
            <h1 class={`text-2xl font-bold ${toDark(oscuro,"text-white","text-gray-900")}`}>
                Listado de unidades
            </h1>
            <p class={`text-sm ${toDark(oscuro,"text-gray-400","text-gray-500")} `}>
                Sistema de {constantes.nombreapp}
            </p>
        </div>
        <button
            class={`
                cursor-pointer text-center items-center gap-2 px-4 py-2 
                transition-colors rounded-md
                text-white
                ${toDark(oscuro,"bg-blue-500 hover:bg-blue-600 ","bg-blue-600 hover:bg-blue-700")}
                  
            `}
            onclick={()=>nuevo("")}
        >
            <span class="text-xl font-medium">Nueva unidad</span>
        </button>
        <Exportar
            data={[]}
            titulo={""}
            confiltro={false}
            filtros={[]}
            prepararData={[]}
            sheetname={""}
        />
    </div>
</header>