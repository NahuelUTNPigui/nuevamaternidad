<script>
    import { goto } from "$app/navigation";
    import { setLocalStorageDefault } from "$lib/localstore";
    import { user } from "$lib/stores/user.svelte";
    import { onMount } from "svelte";
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
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
</script>
<Navbar>
<h1 class="text-xl">Inicio</h1>
<h2 class="text-lg">User {nombreuser}</h2>
<button class="btn btn-xl" onclick={salir}>Salir</button>
</Navbar>
