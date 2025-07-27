<script>
    import { goto } from "$app/navigation";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    
    let{
        titulo,
        onclick
    } = $props()
    let oscuro = $derived(darker.oscurostate)
</script>

<button 
    {onclick}
    class="cursor-pointer bg-sky-600 hover:bg-sky-500 text-white font-medium py-2 rounded-xl transition-all shadow-md hover:shadow-lg">
      {titulo}
</button>