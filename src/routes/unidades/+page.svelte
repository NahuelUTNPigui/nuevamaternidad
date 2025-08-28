<script>
    import Header from "$lib/componentes/unidades/Header.svelte";
    import Buscador from "$lib/componentes/unidades/Buscador.svelte";
    import Listado from "$lib/componentes/unidades/Listado.svelte";
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import Formulario from "$lib/componentes/unidades/Formulario.svelte";
    import { onMount } from "svelte";
    import Swal from "sweetalert2";
    import PocketBase from "pocketbase";
    import { applyAction } from "$app/forms";
    let ruta = import.meta.env.VITE_RUTA;
    const pb = new PocketBase(ruta);
    let oscuro = $derived(darker.oscurostate);

    let areas = $state([]);
    let bebes = $state([]);
    let unidades = $state([]);
    let unidadesrows = $derived(unidades.filter((u) => filtrarUnidad(u)));
    //filtros
    //Activas y desactivadas
    let todos = $state(false);
    //Vacias y llenas
    let vacias = $state(false);
    let buscar = $state("");
    let buscararea = $state("");

    //unidad
    let id = $state("");
    let nombre = $state("");
    let area = $state("");
    let bebe = $state("");
    let bebeviejo = $state("");
    let activa = $state(true);
    function filtrarUnidad(u) {
        let result = true;
        if (buscar != "") {
            result = u.nombre
                .toLowerCase()
                .includes(buscar.toLocaleLowerCase());
            if (!result) {
                return result;
            }
        }
        if (!todos) {
            result = u.active;
            if (!result) {
                return result;
            }
        }
        if (vacias) {
            result = u.bebe == "";
            if (result) {
                return result;
            }
        }
        if (buscararea != "") {
            result = u.area == buscararea;
            if (!result) {
                return result;
            }
        }
        return result;
    }
    async function readUnidades() {
        const records = await pb.collection("unidadesbebe").getFullList({
            expand: "area",
            filter: "eliminada = false",
        });
        unidades = records;
    }
    onMount(async () => {
        areas = await pb.collection("areas").getFullList({
            sort: "-nombre",
        });
        bebes = await pb.collection("bebes").getFullList({});
        await readUnidades();
    });
    function clickFila(_id) {
        id = _id;
        if (id == "") {
            nombre = "";
            area = "";
            bebe = "";
            activa = true;
        } else {
            let u_idx = unidades.findIndex((u) => u.id == id);
            if (u_idx != -1) {
                let u = unidades[u_idx];
                nombre = u.nombre;
                area = u.area;
                bebeviejo = u.bebe;
                bebe = u.bebe;
                activa = u.active;
            }
        }
        unidadModal.showModal();
    }
    function cerrarModal() {
        nombre = "";
        area = "";
        bebe = "";
        activa = true;
        unidadModal.close();
    }
    async function cambiarUnidad(_area, _unidad, _bebe) {
        await pb
            .collection("bebes")
            .update(_bebe, { unidad: _unidad, area: _area });
    }
    async function eliminar() {
        unidadModal.close();
        Swal.fire({
            title: "Eliminar unidad",
            text: "¿Seguro que deseas eliminar la unidad? Bebés se pueden ver afectados",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then(async (result) => {
            if (result.value) {
                try {
                    let data = { eliminada: true };
                    await pb.collection("Unidades").update(id, data);
                    if (bebe != "") {
                        await cambiarUnidad("", "", bebe);
                    }

                    await readUnidades();
                    Swal.fire(
                        "Unidad eliminada!",
                        "Se eliminó la unidad correctamente.",
                        "success",
                    );
                } catch (e) {
                    Swal.fire(
                        "Acción cancelada",
                        "No se pudo eliminar la unidad",
                        "error",
                    );
                }
                id = "";
            }
        });
    }
    async function guardar() {
        if (id == "") {
            try {
                let data = {
                    bebe,
                    nombre,
                    active:activa,
                    eliminada: false,
                    area,
                };

                let record = await pb.collection("Unidades").create(data);
                if (bebe != "") {
                    await cambiarUnidad(area, record.id, bebe);
                }

                await readUnidades();
                Swal.fire(
                    "Éxito guardar",
                    "Se logró guardar la unidad",
                    "success",
                );
            } catch (err) {
                console.error(err);
                Swal.fire(
                    "Error guardar",
                    "No se logró guardar la unidad",
                    "error",
                );
            }
        } else {
            try {
                let data = {
                    bebe,
                    nombre,
                    active:activa,
                    area,
                };
                await pb.collection("Unidades").update(id, data);
                if (bebe != bebeviejo) {
                    if (bebeviejo != "") {
                        await cambiarUnidad("", "", bebeviejo);
                    }
                }
                if (bebe != "") {
                    await cambiarUnidad(area, id, bebeviejo);
                }

                await readUnidades();
                Swal.fire(
                    "Éxito editar",
                    "Se logró editar la unidad",
                    "success",
                );
            } catch (err) {
                console.error(err);
                Swal.fire(
                    "Error editar",
                    "No se logró editar la unidad",
                    "error",
                );
            }
        }
        cerrarModal();
    }
    function cancelar() {
        cerrarModal();
    }
</script>

<Navbar>
    <div class="container mx-auto py-6 px-4 max-w-7xl">
        <Header {clickFila} />
        <Buscador
            bind:buscar
            bind:todos
            bind:vacias
            bind:area={buscararea}
            bind:areas
        />
        <Listado bind:unidadesrows {clickFila} />
    </div>
</Navbar>

<dialog id="unidadModal" class="modal">
    <div class="modal-box bg-transparent">
        <Formulario
            {cancelar}
            {guardar}
            {eliminar}
            {bebes}
            bind:id
            bind:nombre
            bind:area
            bind:bebe
            bind:areas
            bind:activa
        />
    </div>
</dialog>
