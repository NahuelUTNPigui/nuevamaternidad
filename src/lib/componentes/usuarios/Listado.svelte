<script>
    import Swal from "sweetalert2";
    import estilo from "$lib/estilo";
    import { roles, getNombre } from "$lib/roles";

    let { usuariosrows = $bindable([{ name: "xxx" }]), clickFila } = $props();

    function handleClick(id) {
        clickFila(id);
        //Swal.fire("Modificar usuario","En desarrollo","info")
    }
    let pyfila = "py-2";
</script>

<div
    class={`
        bg-transparent
        dark:text-gray-100
        text-gray-800
        min-h-screen p-4 
    `}
>
    <!-- Título -->
    <div class="mb-4">
        <h2 class="text-xl font-bold flex items-center gap-2">
            Usuarios
            <span
                class={`
                    hidden
                    text-sm 
                    dark:bg-blue-800 dark:text-blue-200
                    bg-blue-100 text-blue-800
                    
                    
                    rounded-full px-2 py-0.5`}
            >
                {usuariosrows.length}
            </span>
        </h2>
    </div>
    <!--Tabla-->
    <div
        class={`
                    dark:bg-gray-800
                    bg-white
                    
                    overflow-x-auto  shadow-md rounded-lg
                `}
    >
        <div class="hidden sm:table w-full text-sm text-left">
            <div
                class={`
                    table-header-group
                    dark:bg-gray-700 dark:text-gray-200
                    bg-gray-100 text-gray-700
                    
                `}
            >
                <div class="table-row">
                    <div class="table-cell px-4 py-3">Correo</div>
                    <div class="table-cell px-4 py-3">Nombre</div>
                    <div class="table-cell px-4 py-3">Apellido</div>
                    <div class="table-cell px-4 py-3">Rol</div>
                </div>
            </div>
            <div class="table-row-group">
                {#each usuariosrows as u, i}
                    <div
                        role="button"
                        tabindex="0"
                        class={`
                            table-row border-b
                            dark:border-gray-700 border-gray-200
                            dark:hover:bg-gray-700 hover:bg-gray-100
                            cursor-pointer
                            w-full
                        `}
                        onclick={() => handleClick(u.id)}
                        onkeydown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div
                            class="table-cell px-4 py-3 font-semibold flex items-center gap-2"
                        >
                            <span
                                class="h-2 w-2 bg-green-500 rounded-full inline-block"
                            ></span>
                            {u.name}
                        </div>
                        <div class="table-cell px-4 py-3">{u.nombre}</div>
                        <div class="table-cell px-4 py-3">{u.apellido}</div>
                        <div class="table-cell px-4 py-3">
                            {getNombre(u.rol)}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!--Celu-->
    <div
        class={`
            md:hidden
            w-full grid grid-cols-1
            mx-auto py-3 px-4 max-w-7xl
        `}
    >
        {#each usuariosrows as u, i}
            <div
                role="button"
                tabindex="0"
                onclick={() => handleClick(u.id)}
                onkeydown={(e) => {
                    e.preventDefault();
                }}
            >
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 font-semibold text-lg">
                        {u.name}
                    </div>
                </div>
                <div class="mt-2 text-sm space-y-1">
                    <div>
                        <span class="font-medium">Rol:</span>{getNombre(u.rol)}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <!--Fin-->
</div>
