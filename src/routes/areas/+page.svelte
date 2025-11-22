<script>
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Buscador from "$lib/componentes/areas/Buscador.svelte";
    import Header from "$lib/componentes/areas/Header.svelte";
    import Listado from "$lib/componentes/areas/Listado.svelte";
    import Modal from "$lib/componentes/areas/Modal.svelte";
    import Swal from "sweetalert2";
    import PocketBase from "pocketbase";
    import { onMount } from "svelte";
    let ruta = import.meta.env.VITE_RUTA;
    let oscuro = $derived(darker.oscurostate);
    let areas = $state([]);
    let buscar = $state("");
    let cantidades = $state([]);
    let areasrows = $state([]);
    //let areasrows = $derived(
    //    areas.filter((a) =>
    //        a.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase()),
    //    )
    //);

    //usuario
    let id = $state("");
    let nombre = $state("");

    onMount(async () => {
        const records = await pb.collection("areacount").getFullList({
            filter: "active=True",
        });
        areas = records;
        filterUpdate();
    });

    const pb = new PocketBase(ruta);
    function td(oscuro, o1, o2) {
        return toDark(oscuro, o1, o2);
    }
    function clickFila(_id) {
        id = _id;
        if (id == "") {
            nombre = "";
        } else {
            let a_idx = areas.findIndex((a) => a.id == id);
            if (a_idx != -1) {
                nombre = areas[a_idx].nombre;
            }
        }
        areaModal.showModal();
    }
    function cerrarModal() {
        areaModal.close();
    }
    async function eliminar() {
        areaModal.close();
        Swal.fire({
            title: "Eliminar área",
            text: "¿Seguro que deseas eliminar el área? Unidades y bebés se pueden ver afectados",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then(async (result) => {
            if (result.value) {
                try {
                    let data = { active: false };
                    let unidades = await pb
                        .collection("unidadesbebe")
                        .getFullList({
                            filter: `area='${id}'`,
                        });
                    for (let i = 0; i < unidades.length; i++) {
                        if (unidades[i].bebe.length > 0) {
                            await pb
                                .collection("bebes")
                                .update(unidades[i].bebe, { unidad: "" });
                        }
                        await pb
                            .collection("unidades")
                            .update(unidades[i].id, data);
                    }
                    await pb.collection("areas").update(id, data);
                    const records = await pb.collection("areas").getFullList({
                        sort: "-nombre",
                        filter: "active=true",
                    });

                    areas = records;
                    filterUpdate();
                    Swal.fire(
                        "Área eliminada!",
                        "Se eliminó el área correctamente.",
                        "success",
                    );
                } catch (e) {
                    Swal.fire(
                        "Acción cancelada",
                        "No se pudo eliminar el área",
                        "error",
                    );
                }
                id = "";
            }
        });
    }
    async function soloGuardar(data) {
        try {
            await pb.collection("areas").create(data);
            const records = await pb.collection("areacount").getFullList({
                sort: "-nombre",
                filter: "active=true",
            });
            areas = records;
            filterUpdate();
            Swal.fire(
                "Éxito guardar",
                "Se logró guardar el área con éxito",
                "success",
            );
        } catch (err) {
            console.error(err);
            Swal.fire("Error guardar", "No se logró guardar el área ", "error");
        }
    }
    async function guardar() {
        let data = {
            nombre,
            active: true,
        };
        if (id == "") {
            let existearea = false;
            let sareas = areas.filter(
                (a) =>
                    a.nombre.toLocaleLowerCase() == nombre.toLocaleLowerCase(),
            );
            existearea = sareas.length>0
            if (!existearea) {
                await soloGuardar(data)
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
                        await soloGuardar(data)
                    }
                });
            }
        } else {
            try {
                let idx_areas = areas.findIndex((a) => a.id == id);
                areas[idx_areas] = {
                    ...areas[idx_areas],
                    ...data,
                };
                await pb.collection("areas").update(id, data);
                filterUpdate();
                Swal.fire(
                    "Éxito editar",
                    "Se logró editar el área con éxito",
                    "success",
                );
                const records = await pb.collection("areas").getFullList({
                    sort: "-nombre",
                    filter: "active=true",
                });
                areas = records;
            } catch (err) {
                console.error(err);
                Swal.fire(
                    "Error editar",
                    "No se logró editar el área ",
                    "error",
                );
            }
        }
        cerrarModal();
    }
    function cancelar() {
        cerrarModal();
    }
    function filterUpdate() {
        areasrows = areas.filter((ar, idx) =>
            ar.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase()),
        );
        areasrows.sort((a1,a2)=>a1.nombre.toLocaleLowerCase()<a2.nombre.toLocaleLowerCase()?-1:1)
    }
</script>

<Navbar>
    <div class="container mx-auto py-6 px-4 max-w-7xl">
        <Header {clickFila} />
        <Buscador bind:buscar {filterUpdate} />
        <Listado bind:areasrows {clickFila} />
    </div>
</Navbar>

<dialog id="areaModal" class="modal">
    <div class="modal-box bg-transparent max-w-2xl">
        <Modal {cancelar} {guardar} {eliminar} bind:id bind:nombre />
    </div>
</dialog>
