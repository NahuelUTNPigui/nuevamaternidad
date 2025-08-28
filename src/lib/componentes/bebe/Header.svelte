<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<!-- Título -->
<div class="mb-4">
  <h1 class="text-2xl font-bold">Perfil del Bebé</h1>
  <p class={`text-sm  dark:text-gray-400 text-gray-500`}>Sistema de Gestión Neonatal</p>
</div>