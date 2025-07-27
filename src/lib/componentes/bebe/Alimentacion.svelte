<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<div>Alimentación Enteral Trófica</div>
<div class="badge badge-success">Sí</div>
<div>Alimentación Enteral Completa</div>
<div 
    class={`${toDark(oscuro,"text-gray-400","text-gray-500")}`}
>No registrado</div>
<div>Tipo Alimentación Enteral</div><div>mixta</div>
<div>Nutrición Parenteral</div>
<div class="badge badge-warning">Sí</div>

<div class="col-span-2 mt-4 font-semibold">Detalles Nutrición Parenteral</div>
<div>Edad Inicio</div><div>RN</div>
<div>Día Comienzo AA</div><div>1</div>
<div>Duración (días)</div>
<div 
    class={`${toDark(oscuro,"text-gray-400","text-gray-500")}`}
>No registrado</div>
<div>Día Comienzo Lípido</div><div>1</div>
<div>Aporte Total AA</div><div>3.5</div>
<div>Aporte Total Lípido</div>
<div 
    class={`${toDark(oscuro,"text-gray-400","text-gray-500")}`}
>No registrado</div>