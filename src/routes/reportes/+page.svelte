<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import Buildin from "$lib/componentes/buildin.svelte";
    import Header from "$lib/componentes/reportes/Header.svelte";
    import Listado from "$lib/componentes/reportes/Listado.svelte";
    import Filtros from "$lib/componentes/reportes/Filtros.svelte";
</script>
<Navbar>
    <Header/>
    <Filtros/>
    <Listado bebesrows={[]}/>
    
</Navbar>