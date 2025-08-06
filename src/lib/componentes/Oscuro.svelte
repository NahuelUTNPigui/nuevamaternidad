<script>
    import { onMount } from "svelte";
    import Moon from "./svgs/Moon.svelte";
    import Sun from "./svgs/Sun.svelte";
    import { setOscuroStorage,getOscuroStorage } from "$lib/oscuro";
    import { darker } from "$lib/stores/oscuro.svelte";
    
    let oscuro = $derived(darker.oscurostate)
    onMount(()=>{
        oscuro = getOscuroStorage()
        darker.setOscurostate(oscuro)
    })
    function toggleDarkmode(){
        oscuro = !oscuro
        if(!oscuro){
            document.querySelector("html").setAttribute("data-theme","light")     
            document.documentElement.classList.remove('dark');
        }
        else{
            
            document.querySelector("html").setAttribute("data-theme","dark")   
            document.documentElement.classList.add('dark');
        }
        setOscuroStorage(oscuro?"dark":"light")
        darker.setOscurostate(oscuro)
    }
</script>
<button
    onclick={toggleDarkmode}
    class={`
        cursor-pointer
        p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 
        ${
            oscuro?
            "text-slate-300 hover:text-white hover:bg-slate-700":
            "text-blue-600 hover:text-blue-800 hover:bg-blue-100"
        }
        
        
    `}
    aria-label="Cambiar tema"
>
    {#if oscuro}
        <Sun></Sun>
    {:else}
        <Moon></Moon>
    {/if}
    
</button>