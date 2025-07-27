<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    let oscuro = $derived(darker.oscurostate)
</script>
<!-- Sistema Neurológico -->
<div>
  <p 
    class={`
      font-semibold
      ${toDark(oscuro,"text-purple-300","text-purple-600")}
    `}
  >Sistema Neurológico</p>
  <div class="flex justify-between items-center">
    <span>Eco Transfontanelar</span>
    <span class="badge badge-warning">Sí</span>
  </div>
</div>

<!-- Sistema Digestivo -->
<div>
  <p 
    class={`
      font-semibold
      ${toDark(oscuro,"text-yellow-400","text-yellow-700")}
      
    `}
  >Sistema Digestivo</p>
  <div class="flex justify-between">
    <span>NEC (estadio)</span>
    <span class="font-semibold">II A</span>
  </div>
</div>

<!-- Defectos Congénitos -->
<div>
  <p 
    class={`
      font-semibold
      ${toDark(oscuro,"text-green-400","text-green-700")}
      
    `}
  >Defectos Congénitos</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <div class="flex justify-between">
      <span>Hernia Diafragmática</span>
      <span class="badge badge-warning">Sí</span>
    </div>
    <div class="flex justify-between">
      <span>Diagnóstico</span>
      <span class="font-semibold">PRENATAL</span>
    </div>
    <div class="flex justify-between">
      <span>Tratamiento</span>
      <span class="font-semibold">PROTESIS</span>
    </div>
    <div class="flex justify-between">
      <span>Drenaje Pleural</span>
      <span class="badge badge-warning">Sí</span>
    </div>
  </div>
</div>