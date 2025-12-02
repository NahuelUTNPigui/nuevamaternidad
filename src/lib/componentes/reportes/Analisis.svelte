<script>
    import { beforeNavigate } from "$app/navigation";
    import Exportar from "../Exportar.svelte";

    import Estadisticas from "./estadisticas/Estadisticas.svelte";
    import Historico from "./estadisticas/Historico.svelte";
    
    let {
        totalcantidad = $bindable(""),
        totalpeso = $bindable(""),
        diaspromedio = $bindable(""),
        areas_estadisticas = $bindable([]),
        area_historico = $bindable([]),
        fechadesde = $bindable(""),
        fechahasta = $bindable(""),
        areas = $bindable([]),
        unidades_estadisticas = $bindable([]),
        unidad_historico = $bindable([]),
        unidades = $bindable([]),
        vergraficounidad = $bindable(false),
        verhistoricounidad = $bindable(false),
        vergraficoarea = $bindable(false),
        verhistoricoarea = $bindable(false),
    } = $props();
   
    function getNombreArea(area){
        let idx_area  =areas.findIndex(a=>a.id==area)
        if(idx_area!=-1){
            return areas[idx_area].nombre
        }
        else{
            return ""
        }
    }
    function prepararDataArea(item){
        return {
            "NOMBRE":item.nombre,
            "CANTIDAD":item.cantidad,
            "PESO PROMEDIO":item.peso
        };
    }
    function prepararDataUnidad(item){
        return {
            "NOMBRE":item.nombre,
            "AREA":getNombreArea(item.area),
            "CANTIDAD":item.cantidad,
            "PESO PROMEDIO":item.peso
        };
    }
</script>

<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-11/12 mb-2">
    <Estadisticas titulo={"Cantidad"} bind:valor={totalcantidad} />
    <Estadisticas titulo={"Peso promedio"} bind:valor={totalpeso} />
    <div class="hidden">
        <Estadisticas titulo={"Dias promedio"} bind:valor={diaspromedio} />
    </div>
    
</div>
<div
    class={`
                p-2 rounded-md
                tabs tabs-bordered 
                dark:bg-gray-800  bg-white
                mb-2 
            `}
>
    <input
        type="radio"
        name="grupos_tabs"
        class="tab"
        aria-label="Areas"
        checked
    />
    <div
        class={`
                tab-content rounded-md p-2 space-y-4
                dark:bg-gray-900 bg-white
                
            `}
    >
        <Exportar
            data = {areas_estadisticas}
            titulo = "Estadisticas areas"

            prepararData={prepararDataArea}
        />
        <Historico
            singrupo="Sin area"
            estadisticas={areas_estadisticas}
            historico={area_historico}
            {fechadesde}
            {fechahasta}
            grupos={areas.filter((a) => a.id != "")}
            bind:vergrafico={vergraficoarea}
            bind:verhistorico={verhistoricoarea}
        />
    </div>

    <input
        type="radio"
        name="grupos_tabs"
        class="tab"
        aria-label="Unidades"
        checked
    />
    <div
        class={`
                tab-content rounded-md p-2 space-y-4
                dark:bg-gray-900 bg-white
                
            `}
    >
        <Exportar
            data = {unidades_estadisticas}
            titulo = "Estadisticas unidades"
            
            prepararData={prepararDataUnidad}
        />
        <Historico
            singrupo="Sin unidad"
            estadisticas={unidades_estadisticas}
            historico={unidad_historico}
            {fechadesde}
            {fechahasta}
            grupos={unidades
                .filter((u) => u.id !== "")
                .sort((u1, u2) => {
                    const areaCompare = u1.area.localeCompare(u2.area);
                    if (areaCompare !== 0) {
                        return areaCompare;
                    }
                    // Si las áreas son iguales, ordenar por nombre
                    return u1.nombre.localeCompare(u2.nombre);
                })}
            conarea={true}
            bind:areas
            bind:vergrafico={vergraficounidad}
            bind:verhistorico={verhistoricounidad}
        />
    </div>
</div>
