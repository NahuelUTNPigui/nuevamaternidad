<script>

    import { goto } from "$app/navigation";
    import Exportar from "../Exportar.svelte";
    import  CONSTANTES  from '$lib/constantes';
    import Swal from "sweetalert2";
    import InputSelect from "../Formulario/InputSelect.svelte";
    let {
        sinhistorial=$bindable(false),
        limpiar
    } = $props()
    
    
</script>
<header class="mb-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <div    
            class={`
                dark:bg-gray-900 bg-gray-50
                
                px-4 py-4 transition-colors duration-200 
            `}
        >
            <h1 class={`text-2xl font-bold dark:text-white text-gray-900`}>
                Reporte de Bebés
            </h1>
            <p class={`text-sm dark:text-gray-400 text-gray-500  `}>
                Sistema de {CONSTANTES.nombreapp}
            </p>
        </div>
        <button
            class={`
                cursor-pointer flex items-center gap-2 px-4 py-2 
                transition-colors rounded-md
                text-white justify-center
                dark:bg-blue-500 dark:hover:bg-blue-600
                bg-blue-600 hover:bg-blue-700

                
                  
            `}
            onclick={limpiar}
        >
            
            <span class="text-lg font-medium">Limpiar</span>
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
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <InputSelect
            idetiqueta="fhistorial"
            etiqueta="Sin historial"
            modoedicion={true}
            bind:value={sinhistorial}
            lista={[{id:false,nombre:"Todos"},{id:true,nombre:"Sin historial"}]}
        />

    </div>
</header>