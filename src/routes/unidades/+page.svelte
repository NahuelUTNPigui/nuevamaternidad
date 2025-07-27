<script>
    import Header from "$lib/componentes/unidades/Header.svelte";
    import Buscador from "$lib/componentes/unidades/Buscador.svelte";
    import Listado from "$lib/componentes/unidades/Listado.svelte";
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
    let buscar = $state("")
</script>
<Navbar>
    <div class="container mx-auto py-6 px-4 max-w-7xl">
        <Header/>
        <Buscador bind:buscar />
        <Listado/>
    </div>
</Navbar>