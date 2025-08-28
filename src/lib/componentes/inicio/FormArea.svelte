<script>
    let { nombre = $bindable(""), guardar, cancelar } = $props();
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
            Agregar Nueva Area
        </h2>
    </div>
    <div class="space-y-2">
        <label
            for="unombre"
            class={`
                dark:text-gray-300
                text-gray-700
                block text-sm font-medium 
            `}>Nombre</label
        >
        <input
            id="unombre"
            type="text"
            placeholder="Nombre de la unidad"
            bind:value={nombre}
            class={`
                w-full px-3 py-2 border rounded-md 
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                text-gray-900 bg-white border-gray-300
                
            `}
        />
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
