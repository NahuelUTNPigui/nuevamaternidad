<script>
    import { goto } from "$app/navigation";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    
    let{
        titulo,
        onclick
    } = $props()
    let oscuro = $derived(darker.oscurostate)
    let classbutton = $derived(`
        cursor-pointer
        w-full flex items-center 
        justify-center space-x-4 
        font-bold py-6 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 
        focus:outline-none focus:ring-2  focus:ring-opacity-50 
        focus:ring-blue-500 text-white 
        ${toDark(oscuro,"bg-sky-700 hover:bg-sky-600","bg-sky-600 hover:bg-sky-700 ")}
    `);
    let classoriginal = "cursor-pointer bg-sky-600 hover:bg-sky-500 text-white font-medium py-2 rounded-xl transition-all shadow-md hover:shadow-lg"
</script>

<button 
    {onclick}
    class={classbutton}>
      {titulo}
</button>