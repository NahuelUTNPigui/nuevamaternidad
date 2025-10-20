<script>
    import InputText from "../Formulario/InputText.svelte";
    import InputSelect from "../Formulario/InputSelect.svelte";
    import InputOpcionalText from "../Formulario/InputOpcionalText.svelte";
    import Modoedicion from "./Modoedicion.svelte";
    import opciones from "$lib/opciones";
    let {
        modoedicion=$bindable(false),
        cateteresumbilicalvenoso = $bindable(""),
        cateteresumbilicalarterial = $bindable(""),
        percutanea = $bindable(""),
        viacentral = $bindable(""),
    } = $props()
</script>
<!-- Sección: Catéteres -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
    Tipos de Catéteres Utilizados
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Catéter Umbilical Venoso (CUV) -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={cateteresumbilicalvenoso}
      etiqueta="Catéter Umbilical Venoso (CUV)"
      idetiqueta="cateteresumbilicalvenoso"
      bind:modoedicion
    />

    <!-- Catéter Umbilical Arterial (CUA) -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={cateteresumbilicalarterial}
      etiqueta="Catéter Umbilical Arterial (CUA)"
      idetiqueta="cateteresumbilicalarterial"
      bind:modoedicion
    />

    <!-- Acceso Percutáneo -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={percutanea}
      etiqueta="Acceso Percutáneo"
      idetiqueta="percutanea"
      bind:modoedicion
    />

    <!-- Vía Central  -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={viacentral}
      etiqueta="Vía Central"
      idetiqueta="viacentral"
      bind:modoedicion
    />
  </div>
</div>