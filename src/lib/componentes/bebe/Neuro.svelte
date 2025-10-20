<script>
    import InputText from "../Formulario/InputText.svelte";
    import InputOpcionalText from "../Formulario/InputOpcionalText.svelte";
    import Modoedicion from "./Modoedicion.svelte";
    import InputSelect from "../Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let {
        modoedicion=$bindable(false),
        ecotf = $bindable(""),
    hivgrado = $bindable(""),
    convulsiones = $bindable(""),
    ehi = $bindable(""),
    hipotermiatipo = $bindable(""),
    } = $props()
</script>
<!-- Sección: Evaluación Neurológica -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
    Evaluación Neurológica
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Ecografía Transfontanela (ECOTF) -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={ecotf}
      etiqueta="ECOTF"
      idetiqueta="ecotf"
      bind:modoedicion
    />

    <!-- Hemorragia Intraventricular (HIV) - Grado -->
    <InputSelect
      lista={opciones.HIV}
      bind:value={hivgrado}
      etiqueta="HIV - Grado"
      idetiqueta="hivgrado"
      bind:modoedicion
    />

    <!-- Convulsiones -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={convulsiones}
      etiqueta="Convulsiones"
      idetiqueta="convulsiones"
      bind:modoedicion
    />

    <!-- Encefalopatía Hipóxico-Isquémica (EHI) -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={ehi}
      etiqueta="EHI"
      idetiqueta="ehi"
      bind:modoedicion
    />

    <!-- Hipotermia-->
    <InputSelect
      lista={opciones.HIPOTERMIA}
      bind:value={hipotermiatipo}
      etiqueta="Hipotermia "
      idetiqueta="hipotermiatipo"
      bind:modoedicion
    />
  </div>
</div>