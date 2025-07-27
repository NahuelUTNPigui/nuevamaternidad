<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import Header from "$lib/componentes/addbebe/Header.svelte";
    import Formbebe from "$lib/componentes/addbebe/Formbebe.svelte";
    import Formmama from "$lib/componentes/addbebe/Formmama.svelte";
    import { onMount } from "svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import PocketBase from 'pocketbase'
    import constantes from "$lib/constantes";
    import Swal from "sweetalert2";
    import { goto } from "$app/navigation";
    let ruta = import.meta.env.VITE_RUTA
    let oscuro = $derived(darker.oscurostate)
    const pb = new PocketBase(ruta);
    //mama
    let nombremama = $state("")
    let dnimama = $state("")
    let hcmama = $state("")
    //bebe
    let nombrebebe = $state("")
    let dnibebe = $state("")
    let hcbebe = $state("")
    let fechanacimientobebe = $state("")
    let fechaingresobebe = $state("")
    let pesoingresobebe = $state("")

    async function guardar() {
        let ingresobebe = {
            nombremama,
            dnimama,
            hcmama,
            nombrebebe,
            dnibebe,
            hcbebe ,
            fechanacimientobebe:fechanacimientobebe+" 03:00:00",
            fechaingresobebe:fechaingresobebe+" 03:00:00",
            pesoingresobebe,
            active:false,
            conalta:false
        }
        try{
            let record = await pb.collection("bebes").create(ingresobebe)
            Swal.fire("Éxito guardar","Se pudo guardar el bebe","success")
            goto("/bebes")
        }
        catch(err){
            Swal.fire("Error guardar","No se pudo guardar el bebe","error")
        }
        
    }
    
</script>
<Navbar>
    <div 
        class={`
            min-h-screen  p-4  bg-transparentt
            ${toDark(oscuro,"text-white","text-gray-900 ")}
        `}
    >
        <Header/>
        <!-- Contenedor principal -->
        <div class="grid gap-4 md:grid-cols-2">
            <Formbebe
                bind:nombre ={nombrebebe}
                bind:dni= {dnibebe}
                bind:hc= {hcbebe}
                bind:fechanacimiento = {fechanacimientobebe}
                bind:fechaingreso = {fechanacimientobebe}
                bind:pesoingreso = {pesoingresobebe}
            ></Formbebe>
            <Formmama
                bind:nombre={nombremama}
                bind:dni={dnimama}
                bind:hc={hcmama}
            ></Formmama>
        </div>
        <div class="pt-4">
            <button 
                onclick={guardar}
                class={`
                    w-full 
                    font-semibold py-2 px-4 rounded-lg shadow hover:shadow-lg transition duration-200
                    bg-sky-600 hover:bg-sky-700 text-white 
                    
                `}
            >
                Agregar Bebé
            </button>
        </div>
    </div>
</Navbar>