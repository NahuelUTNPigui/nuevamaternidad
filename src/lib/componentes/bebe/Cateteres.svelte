<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<div>Catéter Umbilical Venoso (días)</div><div>5</div>
<div>Catéter Umbilical Arterial (días)</div><div>5</div>
<div>Percutánea (días)</div><div class="text-gray-500 dark:text-gray-400">No registrado</div>
<div>Vía Central (días)</div><div class="text-gray-500 dark:text-gray-400">No registrado</div>