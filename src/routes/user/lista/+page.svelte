<script>
    import Header from "$lib/componentes/usuarios/Header.svelte";
    import Buscador from "$lib/componentes/usuarios/Buscador.svelte";
    import Listado from "$lib/componentes/usuarios/Listado.svelte";
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import PocketBase from 'pocketbase'
    let ruta = import.meta.env.VITE_RUTA
    let oscuro = $derived(darker.oscurostate)
    let buscar = $state("")
    let users = $state([])
    let usuariosrows = $derived(users.filter(u=>u.name.toLowerCase().includes(buscar.toLowerCase())))
    const pb = new PocketBase(ruta);
    onMount(async()=>{
        users = await pb.collection('users').getFullList({
            sort: '-name',
        });
    })
</script>
<Navbar>
    <div class="container mx-auto py-6 px-4 max-w-7xl">
        <Header/>
        <Buscador bind:buscar />
        <Listado bind:usuariosrows/>
    </div>
</Navbar>