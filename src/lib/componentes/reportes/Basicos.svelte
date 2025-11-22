<script>
    import InputSelect from "../Formulario/InputSelect.svelte";
    import InputDate from "../Formulario/InputDate.svelte";
    import { onMount } from "svelte";
    import PocketBase from "pocketbase";

    let ruta = import.meta.env.VITE_RUTA;

    const pb = new PocketBase(ruta);
    let {
        cambiarFiltro,
        areas = $bindable([]),
        unidades = $bindable([]),
        unidadesarea = $bindable([]),
        unidad = $bindable(""),
        area = $bindable(""),
        fechadesde = $bindable(""),
        fechahasta = $bindable(""),
    } = $props();
    function cambiarArea() {
        unidad = "";
        cambiarFiltro()
    }

    onMount(async () => {
        areas = await pb.collection("areas").getFullList({});
        areas = areas.concat({ id: "", nombre: "Todas" });
        unidades = await pb.collection("Unidades").getFullList({});
    });
</script>

<div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Área -->
        <InputSelect
            idetiqueta="farea"
            etiqueta="Área"
            modoedicion={true}
            bind:value={area}
            bind:lista={areas}
            cambiar={cambiarArea}
        />
        <!-- Unidad -->
        <InputSelect
            idetiqueta="funidad"
            etiqueta="Unidad"
            modoedicion={true}
            bind:value={unidad}
            bind:lista={unidadesarea}
            cambiar={cambiarFiltro}
        />
        <!-- Fecha desde -->
        <InputDate
            idetiqueta="ffechadesde"
            etiqueta="Fecha desde"
            modoedicion={true}
            bind:value={fechadesde}
            cambiar={cambiarFiltro}
            escribir={cambiarFiltro}
        />
        <!-- Fecha hasta -->
        <InputDate
            idetiqueta="ffechahasta"
            etiqueta="Fecha hasta"
            modoedicion={true}
            bind:value={fechahasta}
            cambiar={cambiarFiltro}
            escribir={cambiarFiltro}
        />
    </div>
</div>
