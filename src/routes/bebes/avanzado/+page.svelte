<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import Header from "$lib/componentes/bebes/Header.svelte";
    import Listado from "$lib/componentes/bebes/Listado.svelte";
    import Buscador from "$lib/componentes/bebes/Buscador.svelte";
    import constantes from "$lib/constantes"
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import PocketBase from 'pocketbase'
    let ruta = import.meta.env.VITE_RUTA
    const pb = new PocketBase(ruta);
    //Filtros
    let estado = $state("")
    let buscar = $state("")

    function filtrarBebe(bebe){
        const matchesSearch =
            bebe.nombremama.toLowerCase().includes(buscar.toLowerCase()) ||
            bebe.nombrebebe.toLowerCase().includes(buscar.toLowerCase()) ||
            bebe.hcbebe.toLowerCase().includes(buscar.toLowerCase());

        //const matchesStatus = estado ? baby.status === estado : true

        return matchesSearch //&& matchesStatus
    }
    let bebes = $state([])
    let bebesrows = $derived(bebes.filter(bebe=>filtrarBebe(bebe)))
    const handleSort = (key) => {
        let direction = "asc"//"desc"
    }

   function nuevo(){
    goto("/bebes/nuevo")
   }
    onMount(async ()=>{
        let records  = await pb.collection("bebes").getFullList({})
        bebes = records.map(b=>b)
    })
</script>
<Navbar>
    <div class="container mx-auto py-6 px-4 max-w-7xl">
        <p>Hacer click en el boto para ver el ingreso del bebe</p>
        <Header/>
        <Buscador bind:buscar bind:estado/>
        <p>Hacer click en alguna fila para ver el perfil del bebe</p>
        <Listado bind:bebesrows/>
    </div>
</Navbar>
