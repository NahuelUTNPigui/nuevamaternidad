<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import Header from "$lib/componentes/bebes/Header.svelte";
    import Listado from "$lib/componentes/bebes/Listado.svelte";
    import Buscador from "$lib/componentes/bebes/Buscador.svelte";
    import constantes from "$lib/constantes"
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    
    //Filtros
    let estado = $state("")
    let buscar = $state("")

    function filtrarBebe(bebe){
        const matchesSearch =
            bebe.name.toLowerCase().includes(buscar.toLowerCase()) ||
            bebe.motherName.toLowerCase().includes(buscar.toLowerCase()) ||
            bebe.medicalRecordNumber.toLowerCase().includes(buscar.toLowerCase());

        const matchesStatus = estado ? baby.status === estado : true

        return matchesSearch && matchesStatus
    }
    let bebes = $state([])
    let bebesrows = $derived(bebes.filter(bebe=>filtrarBebe(bebe)))
    const handleSort = (key) => {
        let direction = "asc"//"desc"
    }

   
    onMount(()=>{
        bebes = constantes.bebescte.map(b=>b)
    })
</script>
<Navbar>
    <div class="container mx-auto py-6 px-4 max-w-7xl">
        <Header/>
        <Buscador bind:buscar bind:estado/>
        <Listado bind:bebesrows/>
    </div>
</Navbar>
