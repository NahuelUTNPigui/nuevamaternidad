<script>
    import Header from "$lib/componentes/unidades/Header.svelte";
    import Buscador from "$lib/componentes/unidades/Buscador.svelte";
    import Listado from "$lib/componentes/unidades/Listado.svelte";
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Formulario from "$lib/componentes/unidades/Formulario.svelte";
    let oscuro = $derived(darker.oscurostate)
    let buscar = $state("")
    let unidades = $state([])
    let unidadesrows = $derived(unidades)
    //unidad
    let id=$state("")
    let nombre=$state("")
    let area=$state("")
    let temporal = $state(false)
    function clickFila(id){ 
        unidadModal.showModal()
    }
    function cerrarModal(){
        unidadModal.close()
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
        <Listado bind:unidadesrows {clickFila}/>
    </div>
</Navbar>

<dialog id="unidadModal" class="modal">
  <div class="modal-box bg-transparent  ">
    <Formulario
        {cancelar}
        {guardar}
        bind:id bind:nombre 
        bind:temporal bind:area

    />
  </div>
</dialog>