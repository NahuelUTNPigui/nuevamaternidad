<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<div class="font-semibold col-span-2">Sepsis Temprana</div>
<div>Estado</div><div class="badge badge-warning">Sospecha</div>
<div>Germen</div><div class="font-semibold">No registrado</div>
<div>ATB (días)</div>
<div 
    class={`${toDark(oscuro,"text-gray-400","text-gray-500")}`}
>No registrado</div>

<div class="font-semibold col-span-2 mt-4">Sepsis Tardía</div>
<div>Estado</div><div class="badge badge-success">No</div>