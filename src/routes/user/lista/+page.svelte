<script>
    import Header from "$lib/componentes/usuarios/Header.svelte";
    import Buscador from "$lib/componentes/usuarios/Buscador.svelte";
    import Listado from "$lib/componentes/usuarios/Listado.svelte";
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import Formulario from "$lib/componentes/usuarios/Formulario.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import PocketBase from 'pocketbase'
    import Swal from "sweetalert2";
    let ruta = import.meta.env.VITE_RUTA
    let oscuro = $derived(darker.oscurostate)
    let buscar = $state("")
    let users = $state([])

    let usuariosrows = $derived(users.filter(u=>buscarUser(u)))
    
    //usuario
    let id = $state("")
    let nombre = $state("")
    let apellido = $state("")
    let correo = $state("")
    let rol = $state("")
    const pb = new PocketBase(ruta);
    onMount(async()=>{
        users = await pb.collection('users').getFullList({
            sort: '-name',
        });
    })
    function buscarUser(_u){
        let porNombre = _u.nombre.toLowerCase().includes(buscar.toLowerCase())
        let porApellido = _u.apellido.toLowerCase().includes(buscar.toLowerCase())

        return  porNombre || porApellido
    }
    function clickFila(id){ 
        userModal.showModal()
    }
    function cerrarModal(){
        userModal.close()
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
        <Listado bind:usuariosrows {clickFila}/>
    </div>
</Navbar>
<!-- Open the modal using ID.showModal() method -->

<dialog id="userModal" class="modal">
  <div class="modal-box bg-transparent  ">
    <Formulario
        {cancelar}
        {guardar}
        bind:id bind:nombre bind:apellido
        bind:correo bind:rol

    />
  </div>
</dialog>