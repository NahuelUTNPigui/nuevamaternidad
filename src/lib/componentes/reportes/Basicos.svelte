<script>
    import InputSelect from "../Formulario/InputSelect.svelte";
    import InputDate from "../Formulario/InputDate.svelte";
    import { onMount } from "svelte";
    import PocketBase from "pocketbase";

    let ruta = import.meta.env.VITE_RUTA;

    const pb = new PocketBase(ruta);
    let {
        unidad = $bindable(""),
        area = $bindable(""),
        fechadesde = $bindable(""),
        fechahasta = $bindable(""),
    } = $props();

    let unidades = $state([]);
    let areas = $state([]);
    let unidadesarea = $derived(
        unidades
            .filter((u) => u.area == area)
            .concat({ id: "", nombre: "Todas" }),
    );

    onMount(async () => {
        areas = await pb.collection("areas").getFullList({});
        areas.concat({ id: "", nombre: "Todas" });
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
        />
        <!-- Unidad -->
        <InputSelect
            idetiqueta="funidad"
            etiqueta="Unidad"
            modoedicion={true}
            bind:value={unidad}
            bind:lista={unidadesarea}
        />
        <!-- Fecha desde -->
        <InputDate
            idetiqueta="ffechadesde"
            etiqueta="Fecha desde"
            modoedicion={true}
            bind:value={fechadesde}
        />
        <!-- Fecha hasta -->
        <InputDate
            idetiqueta="ffechahasta"
            etiqueta="Fecha hasta"
            modoedicion={true}
            bind:value={fechahasta}
        />
    </div>
</div>
