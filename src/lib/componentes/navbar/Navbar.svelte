<script>
    import PocketBase from 'pocketbase'
    import { user } from "$lib/stores/user.svelte";
    import { getLocalStorage,setLocalStorage,setLocalStorageDefault } from "$lib/localstore";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import Oscuro from '../Oscuro.svelte';
    import { page } from '$app/stores';  
    import { darker } from '$lib/stores/oscuro.svelte';
    import Home from '../svgs/Home.svelte';
    import Menu from '../svgs/Menu.svelte';
    import Xmark from '../svgs/Xmark.svelte';
    import Bebe from '../svgs/Bebe.svelte';
    import Medicos from '../svgs/Medicos.svelte';
    import Reportes from '../svgs/Reportes.svelte';
    import Unidad from '../svgs/Unidad.svelte';
    import User from '../svgs/User.svelte';
    import  estilos  from '$lib/estilo';
    import  CONSTANTES  from '$lib/constantes';
    import { toDark } from '$lib/string/string';
    let { children } = $props();  
    let pageurl = $page.url.pathname 
    let ruta = import.meta.env.VITE_RUTA
    const menuItems = [
        {id:"inicio", icon:Home, label: "Inicio", href: "/inicio" },
        {id:"users",icon:User,  label: "Usuarios", href: "/user/lista" },
        {id:"areas",icon:Medicos,  label: "Áreas", href: "/areas" },
        {id:"unidades",icon:Unidad,  label: "Unidades", href: "/unidades" },
        {id:"bebes",icon:Bebe,  label: "Bebes", href: "/bebes" },
        {id:"reportes",icon:Reportes,  label: "Reportes", href: "/reportes" }
    ]
    let sidebar = $state(false)
    let nombreuser = $state("")
    let letra = $derived(nombreuser.length>0?nombreuser[0]:"")
    let oscuro = $derived(darker.oscurostate)
    let contentwidth=estilos.contentwidth//"mx-auto lg:mx-4 px-4 sm:px-6 lg:px-8"
    let nombreapp=CONSTANTES.nombreapp//"Maternidad"
    let color = estilos.light_color
    let darkcolor = estilos.dark_color
    let menuAbierto = $state(false)
    onMount(()=>{
        let u = user.userstate
        if(u.id==""){
            let localuser = getLocalStorage()
            if(localuser.id ==""){
                goto("/login")
            }
            else{
                user.setUserstate(localuser.id,localuser.nombre,localuser.rols)
                nombreuser = localuser.nombre    
            }
        }
        else{
            nombreuser = u.nombre
        }
    })
    function salir(){
        const pb = new PocketBase(ruta);
        pb.authStore.clear();
        setLocalStorageDefault()
        user.setDefault()
        goto("/")    
    }
    function toggleSidebar(){
        sidebar = !sidebar
    }
    function closeSidebar(){
        sidebar =  false
    }
    function handleKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            closeSidebar();
        }
    }
    function irAConfiguracion() {
        // reemplazá esto por tu lógica de navegación
        goto("/user/config")
    }
    function toggleMenu() {
        menuAbierto = !menuAbierto;
    }

    let mainclassnavbar = $derived(`
        min-h-screen transition-colors duration-300 
        ${
            oscuro
            ? `bg-slate-900`
            : `bg-blue-50`}
    `)
    let navclass=$derived(`
        shadow-lg border-b fixed w-full top-0 z-50 transition-colors duration-300 
        ${
            oscuro
            ? `bg-slate-800 border-slate-700`
            : `bg-white border-blue-200`}     
    `)
</script>
<div class="{mainclassnavbar}">
    <!--Navbarr-->
    <nav class="{navclass}">
        <div class={contentwidth}>
            <div class="flex justify-between items-center h-16 w-full">
                <!--Logo y botón hamburguesa Izquierda-->
                <div class="flex items-center space-x-4 flex-1">
                    <button
                        onclick={toggleSidebar}
                        class={`
                            cursor-pointer
                            p-2 rounded-md  flex items-center gap-2
                            focus:outline-none focus:ring-2 
                            focus:ring-${color}-500 transition-colors 
                            duration-100 
                            ${  
                                oscuro
                                ? `text-${darkcolor}-300 hover:text-white hover:bg-${darkcolor}-700`
                                : `text-${color}-600 hover:text-${color}-800 hover:bg-${color}-100`
                            }
                        `}
                        aria-label="Abrir menú"
                    >
                        <Menu  />
                        <span class="hidden md:inline font-medium">Menú</span>
                    </button>
                    <div class="flex items-center">
                        <h1
                            class={`
                                text-xl font-bold transition-colors duration-10
                                ${
                                    oscuro
                                    ? "text-white"
                                    : `text-${color}-500`
                                }
                            `}
                        >
                            {nombreapp}
                            
                        </h1>
                    </div>
                </div>
                <!--Elementos del navbar derecho -->
                <div class="flex items-center justify-end space-x-4 flex-1">
                    <!--Toggle Dark Mode-->
                    <Oscuro></Oscuro>
                    <!--Nombre del usuario-->
                    
                    <!--<div class={`h-8 w-8 bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-full flex items-center justify-center shadow-md`}>
                        <span class="text-dark dark:text-white  text-sm font-medium">{letra}</span>
                    </div>-->
                    <div class="relative">
                        <!-- Botón del usuario -->
                        <button
                            onclick={toggleMenu}
                            class={`
                                hover:scale-105 
                                transition duration-100
                                cursor-pointer
                                h-8 w-8 bg-gradient-to-r 
                                from-${color}-500 to-${color}-600 
                                rounded-full flex items-center 
                                justify-center shadow-md focus:outline-none
                            `}

                        >
                            <span class="text-dark dark:text-white text-sm font-medium">{letra}</span>
                        </button>

                        <!-- Dropdown -->
                        {#if menuAbierto}
                            <div class={`

                                    absolute right-0 mt-2 w-40
                                    ${toDark(oscuro,"bg-gray-800","bg-white")}
                                    ${toDark(oscuro,"border-gray-700","border-gray-200")}
                                    rounded-md shadow-lg z-50
                                `}
                            >
                                <button
                                    class={`
                                        cursor-pointer
                                        block w-full text-left 
                                        px-4 py-2 text-sm 
                                        ${toDark(oscuro,"text-gray-100","text-gray-700")}
                                        ${toDark(oscuro,"hover:bg-gray-700","hover:bg-gray-100")}
                                    `}
                                    onclick={irAConfiguracion}
                                >
                                    Configuración
                                </button>
                                <!-- Podés agregar más opciones si querés -->
                                 <button
                                    class={`
                                        cursor-pointer
                                        block w-full text-left 
                                        px-4 py-2 text-sm 
                                        dark:text-gray-100 text-gray-700
                                        dark:hover:bg-gray-700 hover:bg-gray-100
                                        
                                    `}
                                    onclick={salir}
                                >
                                    Salir
                                </button>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!--Overlay -->
    {#if sidebar}
        <!-- Overlay con div (Recomendado) -->
        <div 
            class="fixed inset-0 bg-black/50 z-40 cursor-pointer"
            onclick={closeSidebar}
            onkeydown={handleKeydown}
            role="button"
            tabindex="0"
            aria-label="Cerrar menú lateral"
        >
        </div>
    {/if}
    <!--Sidebar -->
    <div
        class={`
            fixed top-0 left-0 h-full w-64 shadow-xl z-50 
            transform transition-all duration-300 ease-in-out 
            ${
                oscuro
                ? `bg-slate-800 border-r border-slate-700`
                : `bg-white border-r border-blue-200`
            }
            ${
                sidebar ? "translate-x-0" : "-translate-x-full"
            } 
        `}
    >
        <!--Header Sidebar -->
        <div
            class={`
                flex items-center justify-between 
                p-4 border-b transition-colors duration-300 
                ${
                    oscuro
                    ? `border-slate-700`
                    : `border-blue-200`
                }
            `}
        >
            <h2
                class={`
                    text-lg font-semibold 
                    transition-colors 
                    duration-300
                    ${
                        oscuro
                        ? "text-white"
                        : `text-blue-900`
                    }
                `}
            >
                Menú
            </h2>
            <button
                onclick={closeSidebar}
                class={`
                    p-2 rounded-md focus:outline-none 
                    focus:ring-2 focus:ring-blue-500 
                    transition-colors duration-200
                    ${
                        oscuro
                        ? `text-slate-300 hover:text-white hover:bg-slate-700`
                        : `text-blue-600 hover:text-blue-800 hover:bg-blue-100`
                    }
                `}
                aria-label="Cerrar menú"
            >
                <Xmark />
            </button>
        </div>
        <!--CONTENIDO DEL SIDEBER-->
        <div class="p-4">
            <!--Perfil del usuario-->
            <div
                class={`
                    flex items-center space-x-3 
                    mb-6 p-3 rounded-lg transition-colors 
                    duration-300 
                    ${
                        oscuro 
                        ? `bg-slate-700`
                        : `bg-blue-50`
                    }
                `}
            >
                <div 
                    class={`
                        h-10 w-10 bg-gradient-to-r 
                        from-blue-500 to-blue-600 rounded-full 
                        flex  items-center justify-center shadow-md
                    `}
                >
                    <span class="text-white font-medium">{letra}</span>
                </div>
                <div>
                    <p
                        class={`
                            text-sm font-medium transition-colors duration-300 
                            ${
                                oscuro 
                                ? "text-white" 
                                : `text-blue-900`
                            }
                        `}
                    >
                        {nombreuser}
                    </p>
                </div>
            </div>
            <!--Elemento del menu-->
            <nav class ="space-y-2">
                {#each menuItems as item,index}
                    <a 
                        key={index}
                        href={`${item.href}`}
                        class={`
                            flex items-center space-x-3 px-3 
                            py-2 rounded-md transition-colors 
                            duration-200 group 
                            ${
                                pageurl.includes(item.id)?
                                    oscuro
                                    ? `bg-blue-600 text-white`
                                    : `bg-blue-500 text-white`
                                :
                                    oscuro
                                        ? `text-slate-300 hover:bg-slate-700 hover:text-white`
                                        : `text-blue-700 hover:bg-blue-100 hover:text-blue-800`
                            }
                        `}
                        onclick={closeSidebar}
                    >   
                        <item.icon
                            class={`
                                h-5 w-5 
                                transition-colors duration-200 
                                ${
                                    oscuro 
                                    ? `text-slate-400 group-hover:text-white`
                                    : `text-blue-500 group-hover:text-blue-800`
                                }
                            `}
                        />    
                        <span class="font-medium">{item.label}</span>
                    </a>  
                {/each}
            </nav>
            <!--Separador-->
            <div
                class={`
                    my-6 border-t transition-colors 
                    duration-300 
                    ${
                        oscuro 
                        ? `border-${darkcolor}-700` 
                        : `border-${color}-200`
                    }
                `}
            ></div>
            <!--Boton cerrar sesion-->
            <button
                class={`
                    w-full flex items-center 
                    space-x-3 px-3 py-2 
                    rounded-md transition-colors 
                    duration-200 
                    cursor-pointer
                    ${
                        oscuro 
                        ? "text-red-400 hover:bg-red-900/20" 
                        : "text-red-600 hover:bg-red-50"
                    }
                `}
                onclick={salir}
            >
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
                </svg>
                <span class="font-medium">Cerrar Sesión</span>
            </button>
        </div>
    </div>
    <!--Contenido principal -->
    <main class="pt-16">
        <div class={contentwidth}>
            {@render children()}
        </div>
    </main>
</div>
