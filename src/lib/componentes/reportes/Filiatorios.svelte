<script>
    import InputDate from "../Formulario/InputDate.svelte";
    import InputText from "../Formulario/InputText.svelte";
    import InputSelect from "../Formulario/InputSelect.svelte";
    import opciones from "$lib/opciones";
    let {
        dnimadre = $bindable(""),
        nombremadre = $bindable(""),
        dnirn = $bindable(""),
        nombrern = $bindable(""),
        nacdesde = $bindable(""),
        nachasta = $bindable(""),
        sexorn = $bindable(""),
        egresodesde = $bindable(""),
        egresohasta = $bindable(""),
    } = $props();
</script>

<div>
    <h3 class="font-medium mb-3 text-base-content">Identificación</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- DNI Rn -->
        <InputText
            idetiqueta="dnirn"
            etiqueta="DNI RN"
            modoedicion={true}
            bind:value={dnirn}
        />
        <!-- DNI Madre -->
        <InputText
            idetiqueta="dnimadre"
            etiqueta="DNI Madre"
            modoedicion={true}
            bind:value={dnimadre}
        />
        <!-- NOmbre rn -->
        <InputText
            idetiqueta="nombrern"
            etiqueta="Nombre RN"
            modoedicion={true}
            bind:value={nombrern}
        />
        <!-- NOmbre madre -->
        <InputText
            idetiqueta="nombremadre"
            etiqueta="Nombre madre"
            modoedicion={true}
            bind:value={nombremadre}
        />
        <!-- Sexo rn -->
        <InputSelect
            idetiqueta="sexorn"
            etiqueta="Sexo  RN"
            modoedicion={true}
            bind:value={sexorn}
            lista={opciones.SEXO}
        />
    </div>
</div>

<div>
    <h3 class="font-medium mb-3 text-base-content">Fechas Clave</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Fecha de Nacimiento desde -->
        <InputDate
            idetiqueta="nacdesde"
            etiqueta="Nacimiento desde"
            modoedicion={true}
            bind:value={nacdesde}
        />
        <!-- Fecha de Nacimiento hasta-->
        <InputDate
            idetiqueta="nachasta"
            etiqueta="Nacimiento hasta"
            modoedicion={true}
            bind:value={nachasta}
        />
        <!-- Fecha de egreso desde -->
        <InputDate
            idetiqueta="nachasta"
            etiqueta="Egreso hasta"
            modoedicion={true}
            bind:value={egresodesde}
        />
        <!-- Fecha de egreso hasta-->
        <InputDate
            idetiqueta="nachasta"
            etiqueta="Egreso hasta"
            modoedicion={true}
            bind:value={egresohasta}
        />
        
    </div>
</div>
