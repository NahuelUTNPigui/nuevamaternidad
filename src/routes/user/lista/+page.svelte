<script>
    import Header from "$lib/componentes/usuarios/Header.svelte";
    import Buscador from "$lib/componentes/usuarios/Buscador.svelte";
    import Listado from "$lib/componentes/usuarios/Listado.svelte";
    import Navbar from "$lib/componentes/navbar/Navbar.svelte";
    import Formulario from "$lib/componentes/usuarios/Formulario.svelte";

    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import PocketBase from "pocketbase";
    import Swal from "sweetalert2";
    import Sangre from "$lib/componentes/bebe/Sangre.svelte";
    import { user } from "$lib/stores/user.svelte";
    import {
        getLocalStorage,
        setLocalStorage,
        setLocalStorageDefault,
    } from "$lib/localstore";
    let ruta = import.meta.env.VITE_RUTA;

    let buscar = $state("");
    let users = $state([]);

    let usuariosrows = $derived(users.filter((u) => buscarUser(u)));

    //usuario
    let id = $state("");
    let nombre = $state("");
    let apellido = $state("");
    let correo = $state("");
    let rol = $state("");
    let contra= $state("")
    const pb = new PocketBase(ruta);
    onMount(async () => {
        users = await pb.collection("users").getFullList({
            sort: "-name",
        });
    });
    function buscarUser(_u) {
        let porNombre = _u.nombre.toLowerCase().includes(buscar.toLowerCase());
        let porApellido = _u.apellido
            .toLowerCase()
            .includes(buscar.toLowerCase());

        return porNombre || porApellido;
    }
    function clickFila(id) {
        //userModal.showModal();
    }
    function cerrarModal() {
        userModal.close();
    }
    async function guardar() {
        const authData = await pb.collection("users").authRefresh();
        if (pb.authStore.isValid) {
            if (pb.authStore.model.active) {
                if (authData.record.rol != "admin") {
                    Swal.fire(
                        "Usuario no válido",
                        "El usuario no es válido",
                        "error",
                    );
                } else {
                    
                    user.setUserstate(
                        authData.record.id,
                        email,
                        authData.record.rol,
                    );
                    setLocalStorage(
                        authData.record.id,
                        email,
                        authData.record.rol,
                    );
                }
            } else {
                Swal.fire(
                    "Usuario no válido",
                    "El usuario no es válido",
                    "error",
                );
            }
        } else {
            Swal.fire("Usuario no válido", "El usuario no es válido", "error");
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
        <Buscador bind:buscar />
        <Listado bind:usuariosrows {clickFila} />
    </div>
</Navbar>
<!-- Open the modal using ID.showModal() method -->

<dialog id="userModal" class="modal">
    <div class="modal-box bg-transparent">
        <Formulario
            {cancelar}
            {guardar}
            bind:id
            bind:nombre
            bind:apellido
            bind:correo
            bind:rol
        />
    </div>
</dialog>
