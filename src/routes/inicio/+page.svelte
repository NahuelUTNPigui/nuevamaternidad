<script>
    import { goto } from "$app/navigation";
    import { setLocalStorageDefault } from "$lib/localstore";
    import { user } from "$lib/stores/user.svelte";
    import { onMount } from "svelte";
    import Boton from "$lib/componentes/inicio/Boton.svelte";
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import Swal from "sweetalert2";
    import CardHeader from "$lib/componentes/CardHeader.svelte";
    import StatCard from "$lib/componentes/StatCard.svelte";
    import PocketBase from "pocketbase";
    import FormArea from "$lib/componentes/inicio/FormArea.svelte";
    import FormUnidad from "$lib/componentes/inicio/FormUnidad.svelte";
    import UbicarBebe from "$lib/componentes/inicio/UbicarBebe.svelte";
    import DesubicarBebe from "$lib/componentes/inicio/DesubicarBebe.svelte";

    let ruta = import.meta.env.VITE_RUTA;
    const pb = new PocketBase(ruta);
    let isSaving = $state(false);
    let nombreuser = $state("");
    let header = $state("Areas");
    let title = $state("Acciones rápidas");
    let areas = $state([]);
    let bebes = $state([]);
    let unidades = $state([]);
    let unidadesocupacion = $derived(
        unidades.filter((u) => u.area == areaocupacion && u.bebe == ""),
    );
    let unidadesdesocupacion = $derived(
        unidades.filter((u) => u.area == areadesocupacion && u.bebe != ""),
    );

    //Area
    let nombrearea = $state("");
    //unidad
    let nombreunidad = $state("");
    let areaunidad = $state("");
    let activa = $state(true);
    let bebeunidad = $state("");
    //desocupacion
    let bebedesocupacion = $state("");
    let unidaddesocupacion = $state("");
    let areadesocupacion = $state("");
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
    function openModalDesocupar() {
        bebedesocupacion = "";
        unidaddesocupacion = "";
        desocuparInicioModal.showModal();
    }
    function openModalOcupar() {
        bebeocupacion = "";
        unidadocupacion = "";
        ocuparInicioModal.showModal();
    }
    async function soloGuardarArea(data) {
        try {
            await pb.collection("areas").create(data);
            await getAreas();
            Swal.fire(
                "Éxito guardar",
                "Se logró guardar el área con éxito",
                "success",
            );
        } catch (err) {
            console.error(err);
            Swal.fire("Error guardar", "No se logró guardar el área ", "error");
        } finally {
            isSaving = false;
        }
    }
    async function guardarArea() {
        if (isSaving) {
            return;
        }
        if (nombrearea != "") {
            let data = {
                nombre: nombrearea,
                active: true,
            };
            let existearea = false;
            let sareas = areas.filter(
                (a) =>
                    a.nombre.toLocaleLowerCase() ==
                    nombrearea.toLocaleLowerCase(),
            );
            existearea = sareas.length > 0;
            if (!existearea) {
                isSaving = true;
                await soloGuardarArea(data);
            } else {
                Swal.fire({
                    title: "Ya existe un área con un nombre similar",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Guardar",
                    denyButtonText: `No guardar`,
                }).then(async (result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        isSaving = true;
                        await soloGuardarArea(data);
                    }
                });
            }
            areaInicioModal.close();
        } else {
            areaInicioModal.close();
        }
    }
    async function cambiarUnidad(_area, _unidad, _bebe) {
        let historial = {
            ..._bebe,
            bebe: _bebe,
        };
        delete historial.id;
        await pb.collection("historialbebes").create(historial);
        await pb
            .collection("bebes")
            .update(_bebe, { unidad: _unidad, area: _area });
        await getUnidades();
        bebes = await pb.collection("bebes").getFullList({
            filter: "active=true",
        });
    }
    async function guardarUnidad() {
        if (isSaving) {
            return;
        }
        if (nombreunidad != "" && areaunidad != "") {
            let data = {
                bebe: bebeunidad,
                nombre: nombreunidad,
                active: activa,
                eliminada: false,
                area: areaunidad,
            };
            try {
                isSaving = true;
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
            } finally {
                isSaving = false;
            }
        } else {
            unidadInicioModal.close();
        }
    }
    async function guardarDesocupar() {
        if (isSaving) {
            return;
        }
        if (
            bebedesocupacion != "" &&
            unidaddesocupacion != "" &&
            areadesocupacion != ""
        ) {
            isSaving = true;
            try {
                isSaving = true;

                await cambiarUnidad(
                    "",
                    "",
                    bebedesocupacion,
                );
                await getAreas();
                desocuparInicioModal.close();
                Swal.fire(
                    "Éxito ocupar",
                    "Se logró ocupar la unidad",
                    "success",
                );
            } catch (err) {
                desocuparInicioModal.close();
                Swal.fire(
                    "Error ocupar",
                    "No se logró ocupar la unidad",
                    "error",
                );
            } finally {
                isSaving = false;
            }
        }
        else{
            desocuparInicioModal.close();
        }
    }
    async function guardarOcupar() {
        if (isSaving) {
            return;
        }
        if (
            bebeocupacion != "" &&
            unidadocupacion != "" &&
            areaocupacion != ""
        ) {
            try {
                isSaving = true;

                await cambiarUnidad(
                    areaocupacion,
                    unidadocupacion,
                    bebeocupacion,
                );
                await getAreas();
                ocuparInicioModal.close();
                Swal.fire(
                    "Éxito ocupar",
                    "Se logró ocupar la unidad",
                    "success",
                );
            } catch (err) {
                ocuparInicioModal.close();
                Swal.fire(
                    "Error ocupar",
                    "No se logró ocupar la unidad",
                    "error",
                );
            } finally {
                isSaving = false;
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
    function closeDesocupar() {
        areadesocupacion = ""
        unidaddesocupacion = ""
        bebedesocupacion = ""
        desocuparInicioModal.close();
    }
    function salir() {
        setLocalStorageDefault();
        user.setDefault();

        goto("/");
    }
    async function getUnidades() {
        unidades = await pb.collection("unidadesbebe").getFullList({
            filter: "active = true && eliminada = false",
        });
    }
    async function getAreas() {
        const records = await pb
            .collection("areacount")
            .getFullList({ filter: "active=true" });
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
    function clickDesocuparUnidad(_area) {
        areadesocupacion = _area;
        openModalDesocupar();
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
        <Boton onclick={clickDesocuparUnidad} titulo="Desocupar unidad"></Boton>
        <Boton onclick={() => goto("/reportes")} titulo="Ver reporte"></Boton>
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
<dialog id="desocuparInicioModal" class="modal">
    <div class="modal-box bg-transparent">
        <DesubicarBebe
            bind:area={areadesocupacion}
            bind:unidad={unidaddesocupacion}
            bind:bebe={bebedesocupacion}
            bind:bebes
            bind:areas
            bind:unidades={unidadesdesocupacion}
            guardar={guardarDesocupar}
            cancelar={closeDesocupar}
        />
    </div>
</dialog>
