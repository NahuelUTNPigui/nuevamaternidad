<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<div class="font-semibold">Inotrópicos</div>
    <div class="flex gap-2 flex-wrap">
        <span class="badge badge-outline badge-error">MILRINONA</span>
        <span class="badge badge-outline badge-error">LEVOSIMENDAN</span>
    </div>
    <div class="font-semibold mt-2">Diuréticos</div>
<div><span class="badge badge-outline badge-info">FUROSEMIDA</span></div>