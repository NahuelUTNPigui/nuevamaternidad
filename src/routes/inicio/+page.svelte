<script>
    import { goto } from "$app/navigation";
    import { setLocalStorageDefault } from "$lib/localstore";
    import { user } from "$lib/stores/user.svelte";
    import { onMount } from "svelte";
    import Boton from "$lib/componentes/inicio/Boton.svelte";
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Swal from "sweetalert2";
    let oscuro = $derived(darker.oscurostate)
    let nombreuser = $state("")
    function salir(){
        setLocalStorageDefault()
        user.setDefault()
        console.log("salir")
        goto("/")
    }
    onMount(()=>{
        let u = user.userstate
        nombreuser = u.nombre
    })
    function clickBebe(){
        goto("/bebes/nuevo")
    }
    function clickMedico(){
        Swal.fire("Nuevo medico","En construcción","info")
    }
    function clickUsuario(){
        Swal.fire("Nuevo usuario","En construcción","info")
    }
    function clickUnidad(){
        goto("/unidades")
    }
</script>
<Navbar>
    
    <h2 
        class={`
            ${toDark(oscuro,"text-white","text-blue-500")}
            
            text-lg font-semibold mb-4 flex items-center gap-2
        `}
    >
        <svg class={`w-5 h-5 ${toDark(oscuro,"text-white","text-blue-500")}`} fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
        </svg>
        Acciones rápidas
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Boton
            onclick={clickBebe}
            titulo="Nuevo bebé" 
        ></Boton>
        <Boton
            onclick={clickMedico}
            titulo="Nuevo medico" 
        ></Boton>
        <Boton
            onclick={clickUsuario}
            titulo="Nuevo usuario" 
        ></Boton>
        <Boton
            onclick={clickUnidad}
            titulo="Unidades" 
        ></Boton>
    </div>
    

</Navbar>
