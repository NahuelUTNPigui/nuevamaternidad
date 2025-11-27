<script>
    let {
        bebes = $bindable([]),
        areas = $bindable([]),
        unidades = $bindable([]),
        bebe = $bindable(""),
        unidad = $bindable(""),
        area = $bindable(""),
        guardar,
        cancelar,
    } = $props();
    
    function onChangeUnidad(){
        let idx_b = bebes.findIndex(b=>b.unidad == unidad)
        
        if(idx_b != -1){

            bebe = bebes[idx_b].id

        }
    }
    function onChangeBebe(){
        let idx_u = unidades.findIndex(u=>u.bebe == bebe)
        
        if(idx_u != -1){
            unidad = unidades[idx_u].id
        }
    }
</script>

<div
    class={`
        dark:bg-gray-900 bg-white
        
        w-full max-w-md mx-auto rounded-xl shadow-lg p-6 space-y-4
    `}
>
    <div class="flex items-center space-x-2">
        <h2
            class={`
              dark:text-gray-100 text-gray-800
              
              text-lg font-semibold 
            `}
        >
            Desocupar Unidad
        </h2>
    </div>
    <div class="space-y-2">
        <label
            for="area"
            class={`
            dark:text-gray-300 text-gray-700
                
            block text-sm font-medium 
            `}
        >
            Area
        </label>
        <select
            class={`select
                w-full px-3 py-2 border rounded-md 
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                text-gray-900 bg-white border-gray-300
            `}
            bind:value={area}
        >
            {#each areas as r}
                <option value={r.id}>{r.nombre}</option>
            {/each}
        </select>
    </div>
    <div class="space-y-2">
        <label
            for="area"
            class={`
        dark:text-gray-300 text-gray-700
        
        block text-sm font-medium 
      `}>Unidad</label
        >
        <select
            class={`select
                w-full px-3 py-2 border rounded-md 
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                text-gray-900 bg-white border-gray-300
            `}
            bind:value={unidad}
            onchange={onChangeUnidad}
        >   
            {#if unidades.length > 0}
                {#each unidades as r}
                    <option value={r.id}>{r.nombre}</option>
                {/each}
            {:else}
                <option value="">No hay unidades disponibles</option>
            {/if}
        </select>
    </div>
    <div class="space-y-2">
        <label
            for="area"
            class={`
        dark:text-gray-300 text-gray-700
        
        block text-sm font-medium 
      `}>Bebé</label
        >
        <select
            class={`select
                w-full px-3 py-2 border rounded-md 
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                text-gray-900 bg-white border-gray-300
            `}
            bind:value={bebe}
            onchange={onChangeBebe}
        >
            <option value="">Vacia</option>
            {#each bebes.filter((b) => b.area==area ) as be}
                <option value={be.id}>{be.nombrebebe}</option>
            {/each}
        </select>
    </div>
    <div class="flex justify-end gap-3 pt-4">
        <button
            onclick={cancelar}
            class={`
                cursor-pointer
                px-4 py-2 rounded-md 
                dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
                bg-gray-100 text-gray-800 hover:bg-gray-200
        
            `}>Cancelar</button
        >
        <button
            onclick={guardar}
            class={`
                cursor-pointer
                px-4 py-2 rounded-md 

                bg-blue-600 text-white 
                hover:bg-blue-700 transition-colors
            `}>Guardar</button
        >
    </div>
</div>
