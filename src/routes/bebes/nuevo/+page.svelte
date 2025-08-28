<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import Header from "$lib/componentes/addbebe/Header.svelte";
    import Formbebe from "$lib/componentes/addbebe/Formbebe.svelte";
    import Formmama from "$lib/componentes/addbebe/Formmama.svelte";
    import Parto from "$lib/componentes/addbebe/Parto.svelte";
    import Complicaciones from "$lib/componentes/addbebe/Complicaciones.svelte";
    import { onMount } from "svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import PocketBase from "pocketbase";
    import constantes from "$lib/constantes";
    import Swal from "sweetalert2";
    import { goto } from "$app/navigation";
    import Collapse from "$lib/componentes/addbebe/Collapse.svelte";
    import Basicos from "$lib/componentes/addbebe/Basicos.svelte";
    let areas = $state([]);
    let unidades = $state([]);
    let unidadesrows = $derived(unidades.filter((u) => u.area == area));
    let ruta = import.meta.env.VITE_RUTA;
    let oscuro = $derived(darker.oscurostate);
    const pb = new PocketBase(ruta);
    //mama
    let nombremama = $state("");
    let dnimama = $state("");
    let hcmama = $state("");
    //bebe
    //ubicacion
    let area = $state("");
    let unidad = $state("");
    //basico
    let identificacion = $state("");
    let codigo = $state("");
    let nombrebebe = $state("");
    let dnibebe = $state("");
    let hcbebe = $state("");
    let fechanacimientobebe = $state("");
    //ingreso
    let fechaingresobebe = $state("");
    let tipoingreso = $state("");
    let edadingreso = $state("");
    let sexo = $state("");
    let pesoingresobebe = $state("");
    let temperaturaingreso = $state("");
    //parto
    let tipo_parto = $state("");
    let rem = $state("");
    let parto_domicilio = $state("");
    let liquido_meconial = $state("");
    let apgar_1 = $state("");
    let apgar_5 = $state("");
    let apgar_10 = $state("");
    //reanimacion
    let reanimacion = $state("");
    let fallece = $state(0);
    let rciu = $state("");

    async function guardar() {
        let ingresobebe = {
            //ubicacion
            area,
            unidad,
            //basico
            identificacion,
            codigo,
            nombrebebe,
            dnibebe,
            hcbebe,
            fechanacimientobebe: fechanacimientobebe + " 03:00:00",
            //ingreso
            fechaingresobebe:fechaingresobebe + " 03:00:00",
            tipoingreso,
            edadingreso,
            sexo,
            pesoingresobebe,
            pesobebe:pesoingresobebe,
            temperatura_ingreso:temperaturaingreso,
            //parto
            tipo_parto,
            rem,
            parto_domiciliario:parto_domicilio,
            liquido_meconial,
            apgar_1,
            apgar_5,
            apgar_10,
            //reanimacion
            reanimacion,
            fallece,
            rciu,
            //mama
            nombremama,
            dnimama,
            hcmama,
            active: true,
            conalta: false,
        };
        try {
            let record = await pb.collection("bebes").create(ingresobebe);
            Swal.fire("Éxito guardar", "Se pudo guardar el bebe", "success");
            goto("/bebes");
        } catch (err) {
            Swal.fire("Error guardar", "No se pudo guardar el bebe", "error");
        }
    }
    onMount(async () => {
        const recordsareas = await pb.collection("areas").getFullList({
            sort: "-nombre",
            filter: "active=true",
        });
        areas = recordsareas;
        const recordsunidades = await pb
            .collection("unidadesbebe")
            .getFullList({
                expand: "area",
                filter: "eliminada = false",
            });
        unidades = recordsunidades;
    });
</script>

<Navbar>
    <div
        class={`
            min-h-screen  p-4  bg-transparentt
            dark:text-white text-gray-900
            
        `}
    >
        <Header />
        <!-- Contenedor principal -->
        <div class="max-w-4xl mx-auto space-y-2">
            <Collapse titulo="Datos básicos e ingreso">
                <Basicos
                    bind:areas
                    bind:area
                    bind:unidadesrows
                    bind:unidad
                    bind:codigo
                    bind:identificacion
                    bind:nombrebebe
                    bind:dnibebe
                    bind:hcbebe
                    bind:fechanacimientobebe
                    bind:fechaingresobebe
                    bind:tipoingreso
                    bind:edadingreso
                    bind:sexo
                    bind:pesoingresobebe
                    bind:temperaturaingreso
                />
            </Collapse>
            <Collapse titulo="Datos madre">
                <Formmama
                    bind:nombre={nombremama}
                    bind:dni={dnimama}
                    bind:hc={hcmama}
                ></Formmama>
            </Collapse>
            <Collapse titulo="Datos parto">
                <Parto
                    bind:tipo_parto
                    bind:rem
                    bind:parto_domicilio
                    bind:liquido_meconial
                    bind:apgar_1
                    bind:apgar_5
                    bind:apgar_10
                />
            </Collapse>
            <Collapse titulo="Complicaciones">
                <Complicaciones bind:reanimacion bind:fallece bind:rciu />
            </Collapse>
        </div>

        <div class="max-w-4xl mx-auto space-y-2 pt-4">
            <button
                onclick={guardar}
                class={`
                    w-full cursor-pointer
                    font-semibold py-2 px-4 rounded-lg shadow hover:shadow-lg transition duration-200
                    bg-sky-600 hover:bg-sky-700 text-white 
                    
                `}
            >
                Agregar Bebé
            </button>
        </div>
    </div>
</Navbar>
