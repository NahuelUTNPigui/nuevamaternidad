<script>
    import Oscuro from "$lib/componentes/Oscuro.svelte";
    import Check from "$lib/componentes/svgs/Check.svelte";
    import Xcircle from "$lib/componentes/svgs/Xcircle.svelte";
    import Mail from "$lib/componentes/svgs/Mail.svelte";
    import Lock from "$lib/componentes/svgs/Lock.svelte";
    import Eye from "$lib/componentes/svgs/Eye.svelte";
    import Eyeoff from "$lib/componentes/svgs/Eyeoff.svelte";
    import { goto } from "$app/navigation";
    import { setLocalStorage } from "$lib/localstore";
    import { user } from "$lib/stores/user.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import PocketBase from "pocketbase";
    import constantes from "$lib/constantes";
    import estilo from "$lib/estilo";
    let ruta = import.meta.env.VITE_RUTA;
    let showpass = $state(false);
    let oscuro = $derived(darker.oscurostate);
    //tipo 0 nada, 1 error, 2 exito
    let mensaje = $state({ tipo: 0, texto: "" });
    let email = $state("");
    let pass = $state("");
    let contentwidth = estilo.contentwidth; //"mx-auto lg:mx-4 px-4 sm:px-6 lg:px-8"
    let nombreapp = constantes.nombreapp; //"Maternidad"
    function togglePassVissibility() {
        showpass = !showpass;
    }
    async function cambiarContra() {
        goto("/newpass")
    }
    async function ingresar() {
        if (email == "") {
            mensaje.tipo = 1;
            mensaje.texto = "El email esta vacio";
            return;
        }
        if (pass == "") {
            mensaje.tipo = 1;
            mensaje.texto = "La contraseña esta vacia";
            return;
        }
        mensaje.tipo = 2;
        mensaje.texto = "Credenciales correctas";
        const pb = new PocketBase(ruta);
        try {
            const authData = await pb
                .collection("users")
                .authWithPassword(email, pass);
            if (pb.authStore.isValid) {
                if (pb.authStore.model.active) {
                    user.setUserstate(authData.record.id, email, "general");
                    setLocalStorage(authData.record.id, email, "general");
                    goto("/");
                }
            } else {
                mensaje.tipo = 1;
                mensaje.texto = "Credenciales incorrectas";
            }
        } catch (err) {
            console.error(err);
            mensaje.tipo = 1;
            mensaje.texto = "Usuario inválido";
        }
    }
    function crearCuenta() {
        goto("/signup");
    }
    async function keyEvent(e) {
        if (e.code == "Enter") {
            await ingresar();
        }
    }
    //class={`min-h-screen transition-colors duration-300 ${oscuro ? "dark bg-slate-900" : "bg-gray-50"}`}
</script>
<svelte:window on:keydown={keyEvent}></svelte:window>
<div
    
    class="min-h-screen transition-colors duration-300 dark:bg-slate-900 bg-gray-50"
>
    <div class="fixed top-4 right-4 z-10">
        <Oscuro></Oscuro>
    </div>
    <!--Contenido principal-->
    <main class="flex items-center justify-center px-4 py-12 min-h-screen">
        <div class="w-full max-w-md">
            <!--Card de login-->
            <div
                class={`
                    rounded-lg shadow-xl border p-8 transition-colors duration-300 
                    ${
                        oscuro
                            ? "bg-slate-800 border-slate-700"
                            : "bg-white border-gray-200"
                    }
                `}
            >
                <div class="text-center mb-8">
                    <h2
                        class={`
                            text-2xl font-bold transition-colors duration-300 
                            ${oscuro ? "text-white" : "text-gray-900"}
                        `}
                    >
                        Iniciar Sesión
                    </h2>
                    <p
                        class={`
                            mt-2 text-sm transition-colors duration-300 
                            ${oscuro ? "text-slate-400" : "text-gray-600"}
                        `}
                    >
                        Ingresa tus credenciales para acceder
                    </p>
                </div>
                <!--Mensajes de error y exito-->
                {#if mensaje.tipo > 0}
                    <div
                        class={`
                        mb-6 p-4 rounded-md flex items-center space-x-2 transition-all duration-300 
                            ${
                                mensaje.tipo == 1
                                    ? oscuro
                                        ? "bg-red-900/20 border border-red-800 text-red-400"
                                        : "bg-red-50 border border-red-200 text-red-700"
                                    : oscuro
                                      ? "bg-green-900/20 border border-green-800 text-green-400"
                                      : "bg-green-50 border border-green-200 text-green-700"
                            }
                        `}
                    >
                        {#if mensaje.tipo == 1}
                            <Xcircle size={"size-5"}></Xcircle>
                        {:else}
                            <Check size={"size-5"}></Check>
                        {/if}
                        <span class="text-sm font-medium">{mensaje.texto}</span>
                    </div>
                {/if}
                <!--Formulario-->
                <div class="space-y-6">
                    <!--Email-->
                    <div>
                        <label
                            for="email"
                            class={`block text-sm font-medium mb-2 transition-colors duration-300 
                                ${oscuro ? "text-slate-300" : "text-gray-700"}
                            `}
                        >
                            Email
                        </label>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                            >
                                <div
                                    class={`
                                        transition-colors duration-300 ${
                                            oscuro
                                                ? "text-slate-400"
                                                : "text-gray-400"
                                        }`}
                                >
                                    <Mail size={"size-5"}></Mail>
                                </div>
                            </div>
                            <input
                                id="email"
                                type="email"
                                bind:value={email}
                                class={`
                                    w-full pl-10 pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 
                                    ${
                                        oscuro
                                            ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                                    }
                                `}
                                placeholder="tu@email.com"
                            />
                        </div>
                    </div>
                    <!--Contraseña-->
                    <div>
                        <label
                            for="password"
                            class={`
                                block text-sm font-medium mb-2 transition-colors duration-300 
                                ${oscuro ? "text-slate-300" : "text-gray-700"}
                            `}
                        >
                            Contraseña
                        </label>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                            >
                                <div
                                    class={`
                                        transition-colors duration-300 
                                        ${
                                            oscuro
                                                ? "text-slate-400"
                                                : "text-gray-400"
                                        }`}
                                >
                                    <Lock size={"size-5"}></Lock>
                                </div>
                            </div>
                            <input
                                id="password"
                                type={showpass ? "text" : "password"}
                                bind:value={pass}
                                class={`
                                    w-full pl-10 pr-10 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 
                                    ${
                                        oscuro
                                            ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                                    }
                                `}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onclick={togglePassVissibility}
                                class={`
                                    cursor-pointer
                                    absolute inset-y-0 right-0 pr-3 flex items-center transition-colors duration-200 
                                    ${
                                        oscuro
                                            ? "text-slate-400 hover:text-slate-300"
                                            : "text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                {#if showpass}
                                    <Eyeoff size={"size-5"}></Eyeoff>
                                {:else}
                                    <Eye size={"size-5"}></Eye>
                                {/if}
                            </button>
                        </div>
                    </div>
                    <!--Boton submit-->
                    <button
                        type="button"
                        onclick={ingresar}
                        class={`
                        cursor-pointer
                            w-full py-3 px-4 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                            bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-95
                            text-white shadow-lg
                        `}
                    >
                        Iniciar Sesión
                    </button>
                    <!--Boton crear cuenta-->
                    <button
                        type="button"
                        onclick={crearCuenta}
                        class={`
                        cursor-pointer
                            w-full py-3 px-4 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                            bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-95
                            text-white shadow-lg
                        `}
                    >
                        Crear cuenta
                    </button>
                    <button
                        type="button"
                        onclick={cambiarContra}
                        class={`
                            hidden
                        cursor-pointer
                            w-full py-3 px-4 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                            bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-95
                            text-white shadow-lg
                        `}
                    >
                        Cambiar contraseña
                    </button>
                </div>
            </div>
        </div>
    </main>
</div>
