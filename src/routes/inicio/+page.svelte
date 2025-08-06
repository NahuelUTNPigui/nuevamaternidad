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
    import CardHeader from "$lib/componentes/CardHeader.svelte";
    import StatCard from "$lib/componentes/StatCard.svelte";
    let oscuro = $derived(darker.oscurostate)
    let nombreuser = $state("")
    let header = $state("Areas")
    let title = $state("Acciones rápidas")
    let areas = [
        {id:"1",nombre:"UTI1",valor:3,total:5},
        {id:"2",nombre:"UTI2",valor:2,total:6},
        {id:"3",nombre:"UTI3",valor:1,total:5},
        {id:"4",nombre:"UCI1",valor:6,total:10},
        {id:"5",nombre:"UCI2",valor:5,total:5}
    ]
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
{#snippet childrenheader()}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {#each areas as a}
            <StatCard
                titulo={a.nombre}
                valor={a.valor}
                total ={a.total}
            />
        {/each}
    </div>
{/snippet}
{#snippet childrencard()}
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
{/snippet}

<Navbar>
    
    <div class="py-2">
        <CardHeader
            
            bind:header
            bind:title
            {childrencard}
            {childrenheader}
        />
    </div>
    
    
    
    

</Navbar>
