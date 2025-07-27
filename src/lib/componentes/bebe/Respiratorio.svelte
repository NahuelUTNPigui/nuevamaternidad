<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<div>Enfermedad Membrana Hialina</div>
<div class="badge badge-warning">Sí</div>
<div>Dosis de Surfactante</div><div>1</div>
<div>Ventilación Mecánica</div>
<div class="badge badge-warning">Sí</div>
<div>Intubado desde UTPR</div>
<div class="badge badge-warning">Sí</div>
<div>DBP</div>
<div class="badge badge-warning">Sí</div>
<div>Oxígeno sem 36</div><div>FIO (+30/-30%)</div>
<div>Cafeína</div>
<div class="badge badge-warning">Sí</div>
<div>Corticoide Postnatal</div>
<div class="badge badge-warning">Sí</div>