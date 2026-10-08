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

    import { isEmpty } from "$lib/string/string";
    let rolusuario = $state("esc");
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
    let contra = $state("");
    let confirmcontra = $state("");
    const pb = new PocketBase(ruta);
    async function getData() {
        users = await pb.collection("users").getFullList({
            sort: "-name",
        });
    }
    onMount(async () => {
        let localuser = getLocalStorage();
        rolusuario = localuser.rol;
        await getData();
    });
    function buscarUser(_u) {
        let porNombre = _u.nombre.toLowerCase().includes(buscar.toLowerCase());
        let porApellido = _u.apellido
            .toLowerCase()
            .includes(buscar.toLowerCase());

        return porNombre || porApellido;
    }
    function clickFila(_id) {
        if (_id != "") {
            let idx_u = usuariosrows.findIndex((u) => u.id == _id);
            if (idx_u != -1) {
                let u = usuariosrows[idx_u];
                id = _id;
                nombre = u.nombre;
                apellido = u.apellido;
                correo = u.email;
                rol = u.rol;
            }
        }

        userModal.showModal();
    }
    function cerrarModal() {
        userModal.close();
    }
    async function existeCorreo() {
        const record = await pb.collection("users").getList(1, 1, {
            filter: `email = '${correo}' && active = true`,
        });

        if (record.totalItems != 0) {
            return true;
        } else {
            return false;
        }
    }
    async function guardar() {
        if (isEmpty(correo)) {
            Swal.fire("Error guardar", "Nombre de usuario vacio", "error");
            return;
        }
        if (isEmpty(rol)) {
            Swal.fire("Error guardar", "Rol de usuario vacio", "error");
            return;
        }
        if (isEmpty(contra)) {
            Swal.fire("Error guardar", "Contraseña vacia", "error");
            return;
        }

        let coincide = await existeCorreo(correo);
        if (coincide) {
            Swal.fire(
                "Error guardar",
                "Ya existe un usuario con ese correo",
                "error",
            );
            return;
        }

        try {
            const data = {
                username: correo.trim(),
                email: correo.trim(),
                emailVisibility: true,
                password: contra,
                passwordConfirm: contra,
                name: correo.trim(),
                nombre: "",
                apellido: "",
                rol: rol,
                active: true,
            };
            const record = await pb.collection("users").create(data);
            await getData();
            Swal.fire(
                "Éxito guardar",
                "Se logró guardar el nuevo usuario. Ingrese a la aplicación",
                "success",
            );
        } catch (e) {
            console.error(e);
            Swal.fire(
                "Error guardar",
                "No se puede crear el nuevo usuario",
                "error",
            );
        }
        cerrarModal();
    }
    function cancelar() {
        cerrarModal();
    }
    $effect(()=>{
        console.log(buscar)
    })
</script>

<Navbar>
    <div class="container mx-auto py-6 px-4 max-w-7xl">
        <Header {clickFila} rol={rolusuario} bind:buscar />
        <div class="hidden">
            <Buscador bind:buscar />
        </div>

        <Listado bind:usuariosrows {clickFila} rol={rolusuario} />
    </div>
</Navbar>
<!-- Open the modal using ID.showModal() method -->

<dialog id="userModal" class="modal">
    <div class="modal-box bg-white dark:bg-slate-900">
        <Formulario
            {cancelar}
            {guardar}
            {id}
            bind:nombre
            bind:apellido
            bind:correo
            bind:rol
            bind:contra
        />
    </div>
</dialog>
