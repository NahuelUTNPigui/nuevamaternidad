<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    import { goto } from "$app/navigation";
    let oscuro = $derived(darker.oscurostate)
    function volver(){
        goto("/bebes")
    }
</script>
<!-- Título -->
<div class="mb-4">
  <h1 class="text-2xl font-bold">Perfil del Bebé</h1>
  <p class={`text-sm  ${toDark(oscuro,"text-gray-400","text-gray-500")}`}>Sistema de Gestión Neonatal</p>
</div>