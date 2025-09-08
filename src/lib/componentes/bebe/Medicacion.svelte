<script>
    import InputText from "../Formulario/InputText.svelte";
    import Modoedicion from "./Modoedicion.svelte";
    let {
        modoedicion = $bindable(false),
    medprotectorgastricodias = $bindable(""),
    medinhibidorbombahdias = $bindable(""),
    medprobiodias = $bindable(""),
    meleritromicinadias = $bindable(""),
    medfentanilodias = $bindable(""),
    medmorfinadias = $bindable(""),
    medmidazolamdias = $bindable(""),
    medprecedexdias = $bindable(""),
    medmetadonadias = $bindable(""),
    medvecuroniadias = $bindable(""),
    medprostagldias = $bindable(""),
    } = $props();
</script>
<!-- Sección: Medicamentos Gastrointestinales y Analgésicos -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
    Medicamentos Gastrointestinales y Analgésicos
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Protector Gástrico -->
    <InputText
      bind:value={medprotectorgastricodias}
      etiqueta="Protector Gástrico (días)"
      idetiqueta="medprotectorgastricodias"
      bind:modoedicion
    />

    <!-- Inhibidor de la Bomba de Protones -->
    <InputText
      bind:value={medinhibidorbombahdias}
      etiqueta="Inhibidor de la Bomba de Protones (días)"
      idetiqueta="medinhibidorbombahdias"
      bind:modoedicion
    />

    <!-- Probiótico -->
    <InputText
      bind:value={medprobiodias}
      etiqueta="Probiótico (días)"
      idetiqueta="medprobiodias"
      bind:modoedicion
    />

    <!-- Eritromicina -->
    <InputText
      bind:value={meleritromicinadias}
      etiqueta="Eritromicina (días)"
      idetiqueta="meleritromicinadias"
      bind:modoedicion
    />

    <!-- Fentanilo -->
    <InputText
      bind:value={medfentanilodias}
      etiqueta="Fentanilo (días)"
      idetiqueta="medfentanilodias"
      bind:modoedicion
    />

    <!-- Morfina -->
    <InputText
      bind:value={medmorfinadias}
      etiqueta="Morfina (días)"
      idetiqueta="medmorfinadias"
      bind:modoedicion
    />

    <!-- Midazolam -->
    <InputText
      bind:value={medmidazolamdias}
      etiqueta="Midazolam (días)"
      idetiqueta="medmidazolamdias"
      bind:modoedicion
    />

    <!-- Dexmedetomidina (Precedex) -->
    <InputText
      bind:value={medprecedexdias}
      etiqueta="Dexmedetomidina (Precedex) (días)"
      idetiqueta="medprecedexdias"
      bind:modoedicion
    />

    <!-- Metadona -->
    <InputText
      bind:value={medmetadonadias}
      etiqueta="Metadona (días)"
      idetiqueta="medmetadonadias"
      bind:modoedicion
    />
  </div>
</div>

<!-- Sección: Medicamentos Musculares y Cardiovasculares -->
<div class="mb-8">
  <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-secondary">
    Medicamentos Musculares y Cardiovasculares
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Vecuronio -->
    <InputText
      bind:value={medvecuroniadias}
      etiqueta="Vecuronio (días)"
      idetiqueta="medvecuroniadias"
      bind:modoedicion
    />

    <!-- Prostaglandina E1 (ProstagL) -->
    <InputText
      bind:value={medprostagldias}
      etiqueta="Prostaglandina E1 (ProstagL) (días)"
      idetiqueta="medprostagldias"
      bind:modoedicion
    />
  </div>
</div>