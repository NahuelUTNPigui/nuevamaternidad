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
    <InputText
      bind:value={ecotf}
      etiqueta="Ecografía Transfontanela (ECOTF)"
      idetiqueta="ecotf"
      bind:modoedicion
      placeholder="Normal, alterada, hemorragia"
    />

    <!-- Hemorragia Intraventricular (HIV) - Grado -->
    <InputOpcionalText
      bind:value={hivgrado}
      etiqueta="Hemorragia Intraventricular (HIV) - Grado"
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
    <InputOpcionalText
      bind:value={ehi}
      etiqueta="Encefalopatía Hipóxico-Isquémica (EHI)"
      idetiqueta="ehi"
      bind:modoedicion
    />

    <!-- Hipotermia Terapéutica - Tipo -->
    <InputOpcionalText
      bind:value={hipotermiatipo}
      etiqueta="Hipotermia Terapéutica - Tipo"
      idetiqueta="hipotermiatipo"
      bind:modoedicion
    />
  </div>
</div>