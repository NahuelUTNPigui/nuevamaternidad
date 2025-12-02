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
    //listas
    let unidades = $state([]);
    let areas = $state([]);
    let unidadesarea = $derived(
        unidades
            .filter((u) => u.area == area || u.id=="-1" ||u.id==""  )
            
    );
    let estado = $state("")
    let buscar = $state("")
    let unidad = $state("-1")
    let area = $state("-1")
    
    let defaultfiltros = {
        estado:"",
        buscar:"",
        unidad:"",
        area:""
    }
    
    function filtrarBebe(bebe){

        const matchesSearch =
            bebe.nombremama.toLowerCase().includes(buscar.toLowerCase()) ||
            bebe.nombrebebe.toLowerCase().includes(buscar.toLowerCase()) ||
            bebe.hcbebe.toLowerCase().includes(buscar.toLowerCase());
        let result = matchesSearch
        result &&= unidad == "-1" || bebe.unidad == unidad
        result &&= area == "-1" || bebe.area == area
        result &&= estado === "" || bebe.conalta == estado
            //&&
            //bebe.unidad == unidad &&
            //bebe.area == area 

        return result //&& matchesStatus
    }
    let bebes = $state([])
    let bebesrows = $derived(bebes.filter(bebe=>filtrarBebe(bebe)))
    const handleSort = (key) => {
        let direction = "asc"//"desc"
    }
    
    
    
    function nuevo(){
     goto("/bebes/nuevo")
    }
    function cambioArea(){
        unidad = "-1"
    }
    onMount(async ()=>{
        let records  = await pb.collection("bebes").getFullList({
            filter:"active=True"
        })
        bebes = records.map(b=>b)
        areas = [{ id: "", nombre: "Sin área" },{ id: "-1", nombre: "Todas" }]
        let resareas = await pb.collection("areas").getFullList({
            filter:"active = True"
        });
        areas = areas.concat(resareas)
        //areas = areas.concat({ id: "", nombre: "Todas" });
        unidades = [{ id: "", nombre: "Sin unidad" },{ id: "-1", nombre: "Todas" }]

        let resunidades = await pb.collection("Unidades").getFullList({});
        unidades =unidades.concat(resunidades)

    })
</script>
<Navbar>
    <div class="container mx-auto py-6 px-4 max-w-7xl">
        <Header
            bind:bebesrows 
            bind:unidades 
            bind:areas
        />
        <Buscador 
            bind:buscar 
            bind:estado 
            bind:area 
            bind:unidad 
            bind:unidades = {unidadesarea}
            bind:areas
            {cambioArea}
        />
        <Listado 
            bind:bebesrows 
            bind:unidades 
            bind:areas
        />
    </div>
</Navbar>
