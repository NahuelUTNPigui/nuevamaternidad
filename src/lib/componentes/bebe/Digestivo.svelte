<script>
  import InputText from "../Formulario/InputText.svelte";
  import InputOpcionalText from "../Formulario/InputOpcionalText.svelte";
  import InputSelect from "../Formulario/InputSelect.svelte";
  import Modoedicion from "./Modoedicion.svelte";
  import opciones from "$lib/opciones";
  let {
    modoedicion = $bindable(false),
    necestadio = $bindable(""),
    perforacionunica = $bindable(""),
    onfalocele = $bindable(""),
    gastroquisis = $bindable(""),
    hdc = $bindable(""),
    hdcdiagnostico = $bindable(""),
    hdcttoquirurgico = $bindable(""),
    tot = $bindable(""),
    drenajepleural = $bindable(""),
    drenajeventricular = $bindable(""),
  } = $props();
</script>

<!-- Sección: Sistema Digestivo -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
    Evaluación Digestiva y Anomalías
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- NEC - Estadio -->
    <InputOpcionalText
      bind:value={necestadio}
      etiqueta="NEC - Estadio"
      idetiqueta="necestadio"
      bind:modoedicion
    />

    <!-- Perforación Única -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={perforacionunica}
      etiqueta="Perforación Única"
      idetiqueta="perforacionunica"
      bind:modoedicion
    />

    <!-- Onfalocele -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={onfalocele}
      etiqueta="Onfalocele"
      idetiqueta="onfalocele"
      bind:modoedicion
    />

    <!-- Gastrosquisis -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={gastroquisis}
      etiqueta="Gastrosquisis"
      idetiqueta="gastroquisis"
      bind:modoedicion
    />

    <!-- Hernia Diafragmática Congénita (HDC) -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={hdc}
      etiqueta="Hernia Diafragmática Congénita (HDC)"
      idetiqueta="hdc"
      bind:modoedicion
    />

    <!-- Diagnóstico de HDC -->
    <InputSelect
      lista={opciones.HDC_DIAGNOSTICO}
      bind:value={hdcdiagnostico}
      etiqueta="Diagnóstico de HDC"
      idetiqueta="hdcdiagnostico"
      bind:modoedicion
    />

    <!-- Tratamiento Quirúrgico de HDC -->
    <InputSelect
      lista={opciones.HDC_TTO_QUIRURGICO}
      bind:value={hdcttoquirurgico}
      etiqueta="Tratamiento Quirúrgico de HDC"
      idetiqueta="hdcttoquirurgico"
      bind:modoedicion
    />
    <!-- TOT -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={tot}
      etiqueta="TOT"
      idetiqueta="tot"
      bind:modoedicion
    />
    <!-- Drenaje Pleural -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={drenajepleural}
      etiqueta="Drenaje Pleural"
      idetiqueta="drenajepleural"
      bind:modoedicion
    />

    <!-- Drenaje Ventricular -->
    <InputSelect
      lista={opciones.SINO}
      bind:value={drenajeventricular}
      etiqueta="Drenaje Ventricular"
      idetiqueta="drenajeventricular"
      bind:modoedicion
    />
  </div>
</div>
