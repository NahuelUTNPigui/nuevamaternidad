<script>
  import InputText from "../Formulario/InputText.svelte";
  let {
    modoedicion = $bindable(false),
    pesorn = $bindable(""),
    peso7d = $bindable(""),
    peso14d = $bindable(""),
    peso21d = $bindable(""),
    peso28d = $bindable(""),
    peso36sem = $bindable(""),
    
    tallarn = $bindable(""),
    talla7d = $bindable(""),
    talla14d = $bindable(""),
    talla21d = $bindable(""),
    talla28d = $bindable(""),
    talla36sem = $bindable(""),

    perimetrorn = $bindable(""),
    perimetro7d = $bindable(""),
    perimetro14d = $bindable(""),
    perimetro21d = $bindable(""),
    perimetro28d = $bindable(""),
    perimetro36sem = $bindable(""),

    scorezrn = $bindable(""),
    scorez7d = $bindable(""),
    scorez14d = $bindable(""),
    scorez21d = $bindable(""),
    scorez28d = $bindable(""),
    scorez36sem = $bindable(""),
    edadrecuperapeso = $bindable(""),
  } = $props();
</script>

<div
  class={`
      tab-content rounded-md p-4 space-y-4
      dark:bg-gray-900 bg-white
      
    `}
>
  <div class="grid grid-cols-1 gap-4">
    <!-- Sección: Peso -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-primary">
        Peso (kg)
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InputText
          bind:value={pesorn}
          etiqueta="Peso recién nacido"
          idetiqueta="pesorn"
          bind:modoedicion
        />
        <InputText
          bind:value={peso7d}
          etiqueta="Peso 7 días"
          idetiqueta="peso7d"
          bind:modoedicion
        />
        <InputText
          bind:value={peso14d}
          etiqueta="Peso 14 días"
          idetiqueta="peso14d"
          bind:modoedicion
        />
        <InputText
          bind:value={peso21d}
          etiqueta="Peso 21 días"
          idetiqueta="peso21d"
          bind:modoedicion
        />
        <InputText
          bind:value={peso28d}
          etiqueta="Peso 28 días"
          idetiqueta="peso28d"
          bind:modoedicion
        />
        <InputText
          bind:value={peso36sem}
          etiqueta="Peso 36 semanas"
          idetiqueta="peso36sem"
          bind:modoedicion
        />
      </div>
    </div>
    <!-- Sección: PC -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-blue-500">
        Perimetro Céfalico (cm)
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InputText
          bind:value={perimetrorn}
          etiqueta="Perímetro al nacer (RN)"
          idetiqueta="perimetrorn"
          bind:modoedicion
        />
        <InputText
          bind:value={perimetro7d}
          etiqueta="Perímetro 7 días"
          idetiqueta="perimetro7d"
          bind:modoedicion
        />
        <InputText
          bind:value={perimetro14d}
          etiqueta="Perímetro 14 días"
          idetiqueta="perimetro14d"
          bind:modoedicion
        />
        <InputText
          bind:value={perimetro21d}
          etiqueta="Perímetro 21 días"
          idetiqueta="perimetro21d"
          bind:modoedicion
        />
        <InputText
          bind:value={perimetro28d}
          etiqueta="Perímetro 28 días"
          idetiqueta="perimetro28d"
          bind:modoedicion
        />
        <InputText
          bind:value={perimetro36sem}
          etiqueta="Perímetro 36 semanas"
          idetiqueta="perimetro36sem"
          bind:modoedicion
        />
      </div>
    </div>
    <!-- Sección: Talla -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-secondary">
        Talla (cm)
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InputText
          bind:value={tallarn}
          etiqueta="Talla al nacer (RN)"
          idetiqueta="tallarn"
          bind:modoedicion
        />
        <InputText
          bind:value={talla7d}
          etiqueta="Talla 7 días"
          idetiqueta="talla7d"
          bind:modoedicion
        />
        <InputText
          bind:value={talla14d}
          etiqueta="Talla 14 días"
          idetiqueta="talla14d"
          bind:modoedicion
        />
        <InputText
          bind:value={talla21d}
          etiqueta="Talla 21 días"
          idetiqueta="talla21d"
          bind:modoedicion
        />
        <InputText
          bind:value={talla28d}
          etiqueta="Talla 28 días"
          idetiqueta="talla28d"
          bind:modoedicion
        />
        <InputText
          bind:value={talla36sem}
          etiqueta="Talla 36 semanas"
          idetiqueta="talla36sem"
          bind:modoedicion
        />
      </div>
    </div>

    <!-- Sección: Score Z -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold border-b pb-2 mb-4 text-accent">
        Score Z
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InputText
          bind:value={scorezrn}
          etiqueta="Score Z al nacer (RN)"
          idetiqueta="scorezrn"
          bind:modoedicion
        />
        <InputText
          bind:value={scorez7d}
          etiqueta="Score Z 7 días"
          idetiqueta="scorez7d"
          bind:modoedicion
        />
        <InputText
          bind:value={scorez14d}
          etiqueta="Score Z 14 días"
          idetiqueta="scorez14d"
          bind:modoedicion
        />
        <InputText
          bind:value={scorez21d}
          etiqueta="Score Z 21 días"
          idetiqueta="scorez21d"
          bind:modoedicion
        />
        <InputText
          bind:value={scorez28d}
          etiqueta="Score Z 28 días"
          idetiqueta="scorez28d"
          bind:modoedicion
        />
        <InputText
          bind:value={scorez36sem}
          etiqueta="Score Z 36 semanas"
          idetiqueta="scorez36sem"
          bind:modoedicion
        />
      </div>
    </div>
    <!-- Sección: Recuperar peso -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold border-b pb-2 mb-4">
        Edad recuperar pesos
      </h3>
      <InputText
        bind:value={edadrecuperapeso}
        etiqueta="Edad recuperar pesos nacimiento"
        idetiqueta="edadrecupera"
        bind:modoedicion
      />
    </div>
  </div>
</div>
