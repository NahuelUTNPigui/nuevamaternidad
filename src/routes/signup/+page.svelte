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
    import PocketBase from 'pocketbase'
    import { user } from "$lib/stores/user.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { isEmpty } from "$lib/string/string";
    import Swal from "sweetalert2";

    import constantes from "$lib/constantes";
    import estilo from "$lib/estilo";

    let ruta = import.meta.env.VITE_RUTA
    const pb = new PocketBase(ruta);

    let showpass = $state(false)
    let oscuro = $derived(darker.oscurostate)
    //tipo 0 nada, 1 error, 2 exito
    let mensaje = $state({tipo:0,texto:""})
    let email = $state("")
    let pass = $state("")
    let confirmpass = $state("")
    let contentwidth=estilo.contentwidth//"mx-auto lg:mx-4 px-4 sm:px-6 lg:px-8"
    let nombreapp=constantes.nombreapp//"Maternidad"

    let botonValido = $state(false)
    let maluser = $state("")
    let malpass = $state("")
    let malconfpass = $state("")
    function togglePassVissibility(){
        showpass = !showpass
    }
    function validarBoton(){
        botonValido = true
        if(isEmpty(email)){
            botonValido = false
        }
        if(isEmpty(pass)){

            botonValido = false
        }
        if(isEmpty(confirmpass)){
            botonValido = false
        }
        if(pass.length<9){
            botonValido = false
        }
        if(pass == confirmpass){
            botonValido = false
        }
        
    }
    function validarCampos(campo){
        validarBoton()
        if(campo=="user"){
            if(isEmpty(email)){
                maluser = true
            }
            else{
                maluser = false
            }
        }
        if(campo == "pass"){
            if(isEmpty(pass)){
                malpass = true
            }
            else{
                malpass = false
            }
            if(pass.length < 9){
                malpass = true
            }
            else{
                malpass = false
            }
        }
        if(campo == "conf"){
            if(isEmpty(confirmpass)){
                malconfpass = true
            }
            else{
                malconfpass = false
            }
            if(confirmpass != pass){
                malconfpass = true
            }
            else{
                malconfpass = false
            }
        }
    }
    async function existeCorreo() {
        
        const record = await pb.collection('users').getList(1,1,
        {
            filter:`email = '${email}' && active = true`
        });
        
        if(record.totalItems != 0){
            return true
        }
        else{
            return false
        }
    }
    function keyEvent(e){
        if(e.code=="Enter"){
            if(usuarioemail !="" && contra !="" && confirmcontra !=""){
                crearUsuario()
            }
        }
    }
    async function crearUsuario(){
        if(isEmpty(email)){
            Swal.fire('Error guardar', 'Nombre usuario vacio', 'error');
            return
        }
        if (isEmpty(pass)){
            Swal.fire('Error guardar', 'Contraseña vacia', 'error');
            return
        }
        if (isEmpty(confirmpass)){
            Swal.fire('Error guardar', 'Confirmar contraseña no puede estar vacio', 'error');
            return
        }
        let coincide = await existeCorreo(email)
        if(coincide){
            Swal.fire('Error guardar', 'Ya existe un usuario con ese correo', 'error');
            return
        }
        try{
            
            const data = {
                "username": email.trim(),
                "email": email.trim(),
                "emailVisibility": true,
                "password": pass,
                "passwordConfirm": confirmpass,
                "name": email.trim(),
                "nombre":"",
                "apellido":"",
                "rol":"admin",
                "active": true
            };
            const record = await pb.collection('users').create(data);
            Swal.fire('Éxito guardar', 'Se logró guardar el nuevo usuario. Ingrese a la aplicación', 'success');
            goto("/login")
        }catch(e){
            console.error(e)
            Swal.fire('Error guardar', 'No se puede crear el nuevo usuario', 'error');
        }
    }
    function volver(){
        goto("/login")
    }
</script>
<div class={`min-h-screen transition-colors duration-300 ${oscuro ? "dark bg-slate-900" : "bg-gray-50"}`}>
    <div class="fixed top-4 right-4 z-10">
        <Oscuro></Oscuro>
    </div>
    <!--Contenido principal-->
    <main class="flex items-center justify-center px-4 py-12 min-h-screen">
        <div class="w-full max-w-md">
            <!--Card de signup-->
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
                            ${
                                oscuro 
                                ? "text-white" 
                                : "text-gray-900"
                            }
                        `}
                    >
                        Crear cuenta 
                    </h2>
                    <p
                        class={`
                            mt-2 text-sm transition-colors duration-300 
                            ${
                                oscuro 
                                ? "text-slate-400" 
                                : "text-gray-600"
                            }
                        `}
                    >
                        Ingresa las nuevas credenciales
                    </p>
                </div>
                <!--Mensajes de error y exito-->
                {#if mensaje.tipo > 0}
                    {"todo bien"}
                {/if}
                <!--Formulario-->
                <div class="space-y-6">
                    <!--Email-->
                    <div>
                        <label
                            for="email"
                            class={`block text-sm font-medium mb-2 transition-colors duration-300 
                                ${
                                    oscuro 
                                    ? "text-slate-300"
                                    : "text-gray-700"
                                }
                            `}
                        >
                            Email
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <div 
                                    class={`
                                        transition-colors duration-300 ${
                                        oscuro ? "text-slate-400" : "text-gray-400"
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
                                ${
                                    oscuro 
                                    ? "text-slate-300" 
                                    : "text-gray-700"
                                }
                            `}
                        >
                            Contraseña
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <div class={`
                                        transition-colors duration-300 
                                        ${
                                            oscuro 
                                            ? "text-slate-400" 
                                            : "text-gray-400"
                                        }`
                                    }
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
                    <!--Confirmar Contraseña-->
                    <div>
                        <label
                            for="confpassword"
                            class={`
                                block text-sm font-medium mb-2 transition-colors duration-300 
                                ${
                                    oscuro 
                                    ? "text-slate-300" 
                                    : "text-gray-700"
                                }
                            `}
                        >
                            Confirmar contraseña
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <div class={`
                                        transition-colors duration-300 
                                        ${
                                            oscuro 
                                            ? "text-slate-400" 
                                            : "text-gray-400"
                                        }`
                                    }
                                >
                                    <Lock size={"size-5"}></Lock>    
                                </div>
                                
                            </div>
                            <input
                                id="confpassword"
                                type={showpass ? "text" : "password"}
                                bind:value={confirmpass}
                                
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
                        onclick={crearUsuario}
                        class={`
                        cursor-pointer
                            w-full py-3 px-4 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                            bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-95
                            text-white shadow-lg
                        `}
                    >
                        Crear usuario
                    </button>
                    <!--Boton volver-->
                    <button
                        type="button"
                        onclick={volver}
                        class={`
                        cursor-pointer
                            w-full py-3 px-4 rounded-md font-medium transition-all duration-200 
                            focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 
                            bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 
                            hover:to-gray-700 active:scale-95
                            text-white shadow-lg
                        `}
                    >
                        Volver
                    </button>
                </div>
                <!--FIn Formulario-->
            </div>
            <!--Fin Card de signup-->
        </div>
    </main>
</div>