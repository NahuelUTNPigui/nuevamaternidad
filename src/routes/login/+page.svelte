<script>
    import { goto } from "$app/navigation";
    import { setLocalStorage } from "$lib/localstore";
    import { user } from "$lib/stores/user.svelte";
    function ingresar(){
        let u = {id:1,nombre:"nah",rol:"general"}
        user.setUserstate(u.id,u.nombre,u.rol)
        setLocalStorage(u.id,u.nombre,u.rol)
        goto("/")
    }
</script>
login
<button class="btn btn-xl" onclick={ingresar}>Ingresar</button>
