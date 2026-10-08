<script>  
    import CommandPalette from "$lib/componentes/CommandPalette.svelte";
    import "../app.css";
    let { children } = $props();  
    
    let isCommandPaletteOpen = $state(false);
	 // Listener global para Ctrl+E (o Cmd+E en Mac)
    function handleGlobalKeydown(event) {
        // Detectar Ctrl+E o Cmd+E
        if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
            event.preventDefault();
            isCommandPaletteOpen = !isCommandPaletteOpen;
        }
    }
    
    // Agregar listener al montar
    $effect(() => {
        document.addEventListener('keydown', handleGlobalKeydown);
        
        return () => {
            document.removeEventListener('keydown', handleGlobalKeydown);
        };
    });

</script>
{@render children()}
<!-- Command Palette disponible en todas las páginas -->
<CommandPalette isOpen={isCommandPaletteOpen} />