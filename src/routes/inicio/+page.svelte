<script>
    import { goto } from "$app/navigation";
    import { setLocalStorageDefault } from "$lib/localstore";
    import { user } from "$lib/stores/user.svelte";
    import { onMount } from "svelte";
    import Boton from "$lib/componentes/inicio/Boton.svelte";
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Swal from "sweetalert2";
    import CardHeader from "$lib/componentes/CardHeader.svelte";
    import StatCard from "$lib/componentes/StatCard.svelte";
    import PocketBase from "pocketbase";
    import FormArea from "$lib/componentes/inicio/FormArea.svelte";
    import FormUnidad from "$lib/componentes/inicio/FormUnidad.svelte";
    import UbicarBebe from "$lib/componentes/inicio/UbicarBebe.svelte";

    let ruta = import.meta.env.VITE_RUTA;
    const pb = new PocketBase(ruta);
    let oscuro = $derived(darker.oscurostate);
    let nombreuser = $state("");
    let header = $state("Areas");
    let title = $state("Acciones rápidas");
    let areas = $state([]);
    let bebes = $state([]);
    let unidades = $state([]);
    let unidadesocupacion = $derived(
        unidades.filter((u) => u.area == areaocupacion && u.bebe == ""),
    );

    //Area
    let nombrearea = $state("");
    //unidad
    let nombreunidad = $state("");
    let areaunidad = $state("");
    let activa = $state(true);
    let bebeunidad = $state("");
    //ocupacion
    let bebeocupacion = $state("");
    let unidadocupacion = $state("");
    let areaocupacion = $state("");
    function openModalArea() {
        nombrearea = "";
        areaInicioModal.showModal();
    }
    function openModalUnidad() {
        nombreunidad = "";
        activa = true;
        areaunidad = "";
        bebeunidad = "";
        unidadInicioModal.showModal();
    }
    function openModalOcupar() {
        bebeocupacion = "";
        unidadocupacion = "";
        ocuparInicioModal.showModal();
    }
    async function guardarArea() {
        if (nombrearea != "") {
            let data = {
                nombre: nombrearea,
                active: true,
            };
            try {
                await pb.collection("areas").create(data);

                await getAreas();
                areaInicioModal.close();
                Swal.fire(
                    "Éxito guardar",
                    "Se logró guardar el área con éxito",
                    "success",
                );
            } catch (err) {
                areaInicioModal.close();
                Swal.fire(
                    "Error guardar",
                    "No se logró guardar el área ",
                    "error",
                );
            }
        } else {
            areaInicioModal.close();
        }
    }
    async function cambiarUnidad(_area, _unidad, _bebe) {
        await pb
            .collection("bebes")
            .update(_bebe, { unidad: _unidad, area: _area });
    }
    async function guardarUnidad() {
        if (nombreunidad != "" && areaunidad != "") {
            let data = {
                bebe: bebeunidad,
                nombre: nombreunidad,
                active: activa,
                eliminada: false,
                area: areaunidad,
            };
            try {
                let record = await pb.collection("Unidades").create(data);
                if (bebeunidad != "") {
                    await cambiarUnidad(areaunidad, record.id, bebeunidad);
                }
                await getUnidades();
                await getAreas();
                unidadInicioModal.close();
                Swal.fire(
                    "Éxito guardar",
                    "Se logró guardar la unidad",
                    "success",
                );
            } catch (err) {
                unidadInicioModal.close();
                Swal.fire(
                    "Error guardar",
                    "No se logró guardar la unidad",
                    "error",
                );
            }
        } else {
            unidadInicioModal.close();
        }
    }
    async function guardarOcupar() {
        if (
            bebeocupacion != "" &&
            unidadocupacion != "" &&
            areaocupacion != ""
        ) {
            try {
                ocuparInicioModal.close();
                await cambiarUnidad(
                    areaocupacion,
                    unidadocupacion,
                    bebeocupacion,
                );
                await getAreas();

                Swal.fire(
                    "Éxito ocupar",
                    "Se logró ocupar la unidad",
                    "success",
                );
            } catch (err) {
                Swal.fire(
                    "Error ocupar",
                    "No se logró ocupar la unidad",
                    "error",
                );
                ocuparInicioModal.close();
            }
        } else {
            ocuparInicioModal.close();
        }
    }
    function closeArea() {
        areaInicioModal.close();
    }
    function closeUnidad() {
        unidadInicioModal.close();
    }
    function closeOcupar() {
        ocuparInicioModal.close();
    }
    function salir() {
        setLocalStorageDefault();
        user.setDefault();

        goto("/");
    }
    async function getUnidades() {
        unidades = await pb.collection("unidadesbebe").getFullList({
            filter: "active = true",
        });
    }
    async function getAreas() {
        const records = await pb.collection("areacount").getFullList({});
        areas = records.map((a) => ({
            id: a.id,
            nombre: a.area_nombre,
            valor: a.total_bebes,
            total: a.total_unidades,
        }));
    }
    onMount(async () => {
        let u = user.userstate;
        nombreuser = u.nombre;
        await getAreas();
        await getUnidades();
        bebes = await pb.collection("bebes").getFullList({
            filter: "active=true",
        });
    });
    function clickBebe() {
        goto("/bebes/nuevo");
    }
    function clickArea() {
        openModalArea();
        //Swal.fire("Nueva área", "En construcción", "info");
    }
    function clickUnidad() {
        openModalUnidad();
        //Swal.fire("Nueva unidad", "En construcción", "info");
    }
    function clickOcuparUnidad(_area) {
        areaocupacion = _area;
        openModalOcupar();
    }
</script>

{#snippet childrenheader()}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {#each areas as a}
            <button onclick={() => clickOcuparUnidad(a.id)}>
                <StatCard titulo={a.nombre} valor={a.valor} total={a.total} />
            </button>
        {/each}
    </div>
{/snippet}
{#snippet childrencard()}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Boton onclick={clickBebe} titulo="Nuevo bebé"></Boton>
        <Boton onclick={clickArea} titulo="Nueva area"></Boton>
        <Boton onclick={clickUnidad} titulo="Nueva Unidad"></Boton>
        <Boton onclick={clickOcuparUnidad} titulo="Ocupar unidad"></Boton>
    </div>
{/snippet}

<Navbar>
    <div class="py-2">
        <CardHeader bind:header bind:title {childrencard} {childrenheader} />
    </div>
</Navbar>
<dialog id="areaInicioModal" class="modal">
    <div class="modal-box bg-transparent">
        <FormArea
            bind:nombre={nombrearea}
            guardar={guardarArea}
            cancelar={closeArea}
        />
    </div>
</dialog>

<dialog id="unidadInicioModal" class="modal">
    <div class="modal-box bg-transparent">
        <FormUnidad
            bind:nombre={nombreunidad}
            bind:area={areaunidad}
            bind:areas
            bind:bebes
            bind:bebe={bebeunidad}
            guardar={guardarUnidad}
            cancelar={closeUnidad}
        />
    </div>
</dialog>

<dialog id="ocuparInicioModal" class="modal">
    <div class="modal-box bg-transparent">
        <UbicarBebe
            bind:area={areaocupacion}
            bind:unidad={unidadocupacion}
            bind:bebe={bebeocupacion}
            bind:bebes
            bind:areas
            bind:unidades={unidadesocupacion}
            guardar={guardarOcupar}
            cancelar={closeOcupar}
        />
    </div>
</dialog>
