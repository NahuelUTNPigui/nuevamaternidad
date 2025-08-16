<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Buscador from "$lib/componentes/areas/Buscador.svelte";
    import Header from "$lib/componentes/areas/Header.svelte";
    import Listado from "$lib/componentes/areas/Listado.svelte";
    import Modal from "$lib/componentes/areas/Modal.svelte";
    import Swal from "sweetalert2";
    import PocketBase from 'pocketbase'
    let ruta = import.meta.env.VITE_RUTA
    let oscuro = $derived(darker.oscurostate)
    let areas = $state([])
    let buscar = $state("")
    let areasrows = $derived(areas.filter(a=>a.nombre.toLowerCase().includes(buscar.toLowerCase())))

    //usuario
    let id = $state("")
    let nombre = $state("")
    
    
    
    const pb = new PocketBase(ruta);
    function td(oscuro,o1,o2){
        return toDark(oscuro,o1,o2)
    }
    function clickFila(id){ 
        areaModal.showModal()
    }
    function cerrarModal(){
        areaModal.close()
    }
    function guardar(){
        cerrarModal()
    }
    function cancelar(){
        cerrarModal()
    }
</script>
<Navbar>
    <div class="container mx-auto py-6 px-4 max-w-7xl">
        <Header {clickFila}/>
        <Buscador bind:buscar />
        <Listado bind:areasrows  {clickFila}/>
        
    </div>
</Navbar>

<dialog id="areaModal" class="modal">
  <div class="modal-box bg-transparent  ">
    <Modal
        {cancelar}
        {guardar}
        bind:id bind:nombre 

    />
  </div>
</dialog>