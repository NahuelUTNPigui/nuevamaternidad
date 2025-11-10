<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import PocketBase from "pocketbase";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    let unidades = $state([])
    let slug = $state("")
    let nombre = $state("")
    let ruta = import.meta.env.VITE_RUTA;

    const pb = new PocketBase(ruta);
    function irBebe(id){
        goto("/bebes/"+id)
    }
    async function getUnidades() {
        unidades = await pb.collection("unidadesbebe").getFullList({
            filter:`area='${slug}'`,
            expand:"bebe"
        })
    }
    async function getArea() {
        const record = await pb.collection('areas').getOne(slug, {});
        nombre = record.nombre
    }
    function handleClick(id){
        if(id.length>0){
            irBebe(id)
        }
    }
    onMount(async ()=>{
        slug = $page.params.slug;
        await getArea()
        await getUnidades()
        
    })
</script>
<Navbar>
    <div class="mb-4">
      <h1 class="text-2xl font-bold">Unidades del area {nombre}</h1>
      <p class={`text-sm  dark:text-gray-400 text-gray-500`}>Sistema de Gestión Neonatal</p>
    </div>

<div
    class={`
        bg-transparent
        dark:text-gray-100 text-gray-800
        
         
    `}
>
    <!-- Título -->
    <div class="mb-4">
        <h2 class="text-xl font-bold flex items-center gap-2">
            Unidades
            <span
                class={`
                    text-sm
                    dark:bg-blue-800 dark:text-blue-200
                    bg-blue-100 text-blue-800
                    rounded-full px-2 py-0.5`}
            >
                {unidades.length}
            </span>
        </h2>
    </div>
    <!-- Tabla en Escritorio y Tarjetas en Mobile -->
    <div class="container mx-auto px-4 pb-12">
        <div class="hidden md:block overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr class="bg-base-200">
                        <th class="text-base-content font-bold">Unidad</th>
                        <th class="text-base-content font-bold">Bebé</th>

                        
                    </tr>
                </thead>
                <tbody>
                    {#each unidades as fila, i}
                        <tr
                            class="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900"
                            onclick={() => handleClick(fila.bebe)}
                        >
                            <td>
                                {fila.nombre}
                            </td>
                            
                            <td>
                                {fila.expand.bebe?fila.expand.bebe.nombrebebe:"Sin bebé"}
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>

    <!-- Cards Mobile -->
    <div class="md:hidden space-y-4">
        {#each unidades as fila, i}
            <div
                class="card bg-base-100 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900 shadow-xl border border-base-200"
            >
                <button onclick={() => handleClick(fila.bebe)}>
                    <div class="card-body p-5">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="card-title text-lg">
                                {fila.nombre}
                            </h3>
                        </div>
                        <div class="space-y-2 text-sm">
                            
                            <div class="flex justify-between">
                                <span class="text-base-content/70">Bebé:</span>
                                <span class="text-right"
                                    >{fila.expand.bebe?fila.expand.bebe.nombrebebe:"Sin bebé"}</span
                                >
                            </div>
                            
                        </div>
                    </div>
                </button>
            </div>
        {/each}
    </div>
</div>

</Navbar>