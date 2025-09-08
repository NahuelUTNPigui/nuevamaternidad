<script>
    import estilos from "$lib/stores/estilos";
    let { limpiarFiltros } = $props();
</script>

<button
    onclick={limpiarFiltros}
    class={`
        bg-transparent border rounded-lg 
        focus:outline-none transition-colors 
        duration-200
        border-gray-800 text-gray-800 
        hover:bg-gray-800 hover:text-gray-100 
        dark:border-gray-200 dark:text-gray-200 
        dark:hover:bg-gray-200 dark:hover:text-gray-800 
        focus:ring-gray-400 dark:focus:ring-gray-600 
        dark:focus:ring-offset-gray-800 bg-transparent
        rounded-full
        px-4 pt-2 pb-3
    `}
    aria-label="Limpiar"
>
    <span class="text-xl font-semibold">Limpiar</span>
</button>
