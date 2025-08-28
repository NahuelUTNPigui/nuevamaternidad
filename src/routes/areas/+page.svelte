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
    let areasrows = $derived(
        areas.filter((a) =>
            a.nombre.toLowerCase().includes(buscar.toLowerCase()),
        ),
    );

    //usuario
    let id = $state("");
    let nombre = $state("");

    onMount(async () => {
        const records = await pb.collection("areas").getFullList({
            sort: "-nombre",
            filter:"active=true"
        });
        areas = records;
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
                    await pb.collection("areas").update(id, data);

                    const records = await pb.collection("areas").getFullList({
                        sort: "-nombre",
                        filter:"active=true"
                    });
                    areas = records;
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
    async function guardar() {
        if (id == "") {
            let data = {
                nombre,
                active: true,
            };
            try {
                await pb.collection("areas").create(data);
                const records = await pb.collection("areas").getFullList({
                    sort: "-nombre",
                    filter:"active=true"
                });
                areas = records;
                Swal.fire(
                    "Éxito guardar",
                    "Se logró guardar el área con éxito",
                    "success",
                );
            } catch (err) {
                console.error(err);
                Swal.fire(
                    "Error guardar",
                    "No se logró guardar el área ",
                    "error",
                );
            }
        } else {
            try {
                let data = {nombre}
                await pb.collection("areas").update(id, data);

                Swal.fire(
                    "Éxito editar",
                    "Se logró editar el área con éxito",
                    "success",
                );
                const records = await pb.collection("areas").getFullList({
                    sort: "-nombre",
                    filter:"active=true"
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
    function filterUpdate() {}
</script>

<Navbar>
    <div class="container mx-auto py-6 px-4 max-w-7xl">
        <Header {clickFila} />
        <Buscador bind:buscar />
        <Listado bind:areasrows {clickFila} />
    </div>
</Navbar>

<dialog id="areaModal" class="modal">
    <div class="modal-box bg-transparent">
        <Modal {cancelar} {guardar} {eliminar} bind:id bind:nombre />
    </div>
</dialog>
