<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import constantes from "$lib/constantes"
    import Header from "$lib/componentes/bebe/Header.svelte";
    import Compartido from "$lib/componentes/bebe/Compartido.svelte";
    import Identificacion from "$lib/componentes/bebe/Identificacion.svelte";
    import Ingreso from "$lib/componentes/bebe/Ingreso.svelte";
    import Inter from "$lib/componentes/bebe/Inter.svelte";
    import Materno from "$lib/componentes/bebe/Materno.svelte";
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Antro from "$lib/componentes/bebe/Antro.svelte";
    let oscuro = $derived(darker.oscurostate)

    let slug = $state("")
    let bebe = $state({})

    //Datos
    let nombre=$state("")
    let birthDate=$state("")
    let madre=$state("")
    let peso=$state("")
    let edadGestacional=$state("")
    let sexo=$state("")
    let clinicNumber=$state("")
    //Datos viejos
    let nombreviejo=$state("")
    let birthDateviejo=$state("")
    let madreviejo=$state("")
    let pesoviejo=$state("")
    let edadGestacionalviejo=$state("")
    let sexoviejo=$state("")
    let clinicNumberviejo=$state("")
    function setViejo(){

    }
    function recoverViejo(){

    }
    onMount(()=>{
        slug = $page.params.slug
        bebe = constantes.bebescte.filter(b=>b.id==slug)[0]
        nombre=bebe.name
        madre=bebe.motherName
        birthDate=bebe.birthDate
        peso=bebe.weight
        edadGestacional=bebe.gestationalAge
        sexo=bebe.gender
        clinicNumber=bebe.medicalRecordNumber
    })
</script>
<Navbar>
    
    <div 
        class={`
            min-h-screen p-4 
            ${toDark(oscuro,"bg-gray-900 text-white","bg-gray-50 text-gray-900 ")}
        `}
    >
        <Header/>
        <Compartido
            bind:nombre
            bind:madre
            bind:birthDate
            bind:peso
            bind:edadGestacional
            bind:sexo
            bind:clinicNumber
        />
        <!--Tabs 2-->
        <div 
            class={`
                p-4 rounded-md
                tabs tabs-bordered 
                ${toDark(oscuro,"bg-gray-800 ","bg-white")}

            `}
        >
            <!-- Identificación -->
            <input type="radio" name="perfil_tabs" class="tab" aria-label="Identificación" checked />
            <Identificacion/>
            <!-- Ingreso -->
            <input type="radio" name="perfil_tabs" class="tab" aria-label="Ingreso" />
            <Ingreso/>
            <!-- Antropometría -->
            <input type="radio" name="perfil_tabs" class="tab" aria-label="Antropometría" />
            <Antro/>
            <!-- Datos maternos -->
            <input type="radio" name="perfil_tabs" class="tab" aria-label="Materno" />
            <Materno/>
            <!-- Internacion -->
            <input type="radio" name="perfil_tabs" class="tab" aria-label="Internación" />
            <Inter/>
        </div>
        
        
    </div>
    
</Navbar>