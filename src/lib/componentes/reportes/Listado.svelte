<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import { goto } from "$app/navigation";
    let {bebesrows = $bindable([])} = $props()
    let oscuro = $derived(darker.oscurostate)
    function handleClick(id){
        goto("/bebes/"+id)
    }
</script>
<div class={`
        bg-transparent
        dark:text-gray-100 text-gray-800
        
        min-h-screen p-4 
    `}
>
    <!-- Título -->
    <div class="mb-4">
        <h2 class="text-xl font-bold flex items-center gap-2">
            Historial bebés
            <span class={`
                    text-sm 
                    dark:bg-blue-800 dark:text-blue-200
                    bg-blue-100 text-blue-800
                    
                    
                    rounded-full px-2 py-0.5`
                }
            >
                {bebesrows.length}
            </span>
        </h2>
    </div>
    <!-- Tabla -->
    <div 
        class={`
            dark:bg-gray-800 bg-white
            
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
                <div class="table-row overflow-x-auto">
                    <div class="table-cell px-4 py-3">Fecha ingreso</div>
                    <div class="table-cell px-4 py-3">Tipo parto</div>
                    <div class="table-cell px-4 py-3">Domiciliario</div>
                    <div class="table-cell px-4 py-3">Tipo ingreso</div>
                    <div class="table-cell px-4 py-3">Edad gestacional</div>
                    <div class="table-cell px-4 py-3">APGAR 1</div>
                    <div class="table-cell px-4 py-3">APGAR 5</div>
                    <div class="table-cell px-4 py-3">APGAR 10</div>
                    <div class="table-cell px-4 py-3">Nombre</div>
                    <div class="table-cell px-4 py-3">Temperatura</div>
                    <div class="table-cell px-4 py-3">RCIU</div>
                    <div class="table-cell px-4 py-3">REM</div>
                    <div class="table-cell px-4 py-3">Reanimacion</div>
                    <div class="table-cell px-4 py-3">Liquido</div>
                    <div class="table-cell px-4 py-3">Fallece</div>
                    <div class="table-cell px-4 py-3">Sexo</div>
                    <div class="table-cell px-4 py-3">HC</div>
                    <div class="table-cell px-4 py-3">Madre</div>
                    <div class="table-cell px-4 py-3">Fecha Nac.</div>
                    <div class="table-cell px-4 py-3">Peso</div>
                    <div class="table-cell px-4 py-3">Estado</div>
                </div>

            </div>
            <div class="table-row-group">
                {#each bebesrows as b,i}
                    <div
                        role="button"
                        tabindex="0"
                        class={`
                            table-row border-b
                            dark:border-gray-700 dark:hover:bg-gray-700
                            border-gray-200 hover:bg-gray-100
                            cursor-pointer overflow-x-auto
                        `}
                        onclick={()=>handleClick(b.id)}
                        onkeydown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div class="table-cell px-4 py-3">{new Date(b.fechaingresobebe)?new Date(b.fechaingresobebe).toLocaleDateString():""}</div>
                        <div class="table-cell px-4 py-3">{b.tipo_parto}</div>
                        <div class="table-cell px-4 py-3">{b.parto_domiciliario}</div>
                        <div class="table-cell px-4 py-3">{b.tipoingreso}</div>
                        <div class="table-cell px-4 py-3">{b.edad_gestacional}</div>
                        <div class="table-cell px-4 py-3">{b.apgar_1}</div>
                        <div class="table-cell px-4 py-3">{b.apgar_5}</div>
                        <div class="table-cell px-4 py-3">{b.apgar_10}</div>
                        
                        <div class="table-cell px-4 py-3 font-semibold flex items-center gap-2">
                            {b.nombrebebe}
                        </div>
                        <div class="table-cell px-4 py-3">{b.temperatura_ingreso}</div>
                        <div class="table-cell px-4 py-3">{b.rciu}</div>
                        <div class="table-cell px-4 py-3">{b.rem}</div>
                        <div class="table-cell px-4 py-3">{b.reanimacion}</div>
                        <div class="table-cell px-4 py-3">{b.liquido_meconial}</div>
                        <div class="table-cell px-4 py-3">{b.fallece}</div>
                        <div class="table-cell px-4 py-3">{b.sexo}</div>
                        <div class="table-cell px-4 py-3">{b.nombremama}</div>
                        <div class="table-cell px-4 py-3">{b.hcbebe}</div>
                        <div class="table-cell px-4 py-3">{new Date(b.fechanacimientobebe)?new Date(b.fechanacimientobebe).toLocaleDateString():""}</div>
                        
                        <div class="table-cell px-4 py-3">{b.pesoingresobebe}</div>
                        <div class="table-cell px-4 py-3">
                            {#if b.conalta}
                            <span class="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 px-2 py-0.5 rounded-full">{"Con alta"}</span>
                            {:else}
                                <span class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-2 py-0.5 rounded-full">{"Sin alta"}</span>
                            {/if}
                            
                        </div>
                        
                    </div>
                {/each}
                
            </div>
        </div>
    </div>
    <!-- Mobile: tarjeta colapsada -->
    <div 
        class={`
            sm:hidden p-4 border-b
            dark:border-gray-700 border-gray-200
            
        `}
    >
        {#each bebesrows as b}
            <div
                role="button"
                tabindex="0"
                onclick={()=>handleClick(b.id)}
                onkeydown={(e) => {
                    e.preventDefault();
                }}
            >

            
                <div 
                    
                    class="flex items-center justify-between"
                    
                >
                    <div class="flex items-center gap-2 font-semibold text-lg">
                        <span class="h-2 w-2 bg-green-500 rounded-full inline-block">
                        </span>
                        {b.name}
                    </div>
                    <span 
                        class={`
                            dark:bg-green-700 dark:text-green-100
                            bg-green-100 text-green-800
                            
                            
                            text-xs px-2 py-0.5 rounded-full
                        `}
                    >
                        {b.status}
                    </span>
                </div>

                <div class="mt-2 text-sm space-y-1">
                    <div><span class="font-medium">Madre:</span>{b.motherName}</div>
                    <div><span class="font-medium">HC:</span> {b.medicalRecordNumber}</div>
                    <div><span class="hidden font-medium">Fecha Nac.:</span>{b.birthDate}</div>
                    <div>
                        <span class="font-medium">EG:</span>
                        <span class="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-2 py-0.5 rounded-full text-xs">{b.gestationalAge}</span>
                    </div>
                    <div><span class="font-medium">Peso:</span>{b.weight}</div>
                </div>
            </div>
        {/each}
    </div>
    
</div>