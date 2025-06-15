<script>
    import { onMount } from "svelte";
    import { user } from "$lib/stores/user.svelte";
    import { getLocalStorage,setLocalStorage } from "$lib/localstore";
    import { goto } from "$app/navigation";
    onMount(()=>{
        let u = user.userstate
        if(u.id==""){
            let localuser = getLocalStorage()
            if(localuser.id ==""){
                goto("/login")
            }
            else{
                user.setUserstate(localuser.id,localuser.nombre,localuser.rols)
                goto("/inicio")
            }
        }
        else{
            goto("/inicio")
        }
    })
</script>
<h1 >Nueva maternidad</h1>

