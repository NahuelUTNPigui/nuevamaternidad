<script>
    import opciones from "$lib/opciones";
    import { goto } from "$app/navigation";
    import { calcularEdad } from "$lib/string/string";

    import Mas from "./Mas.svelte";
    let {
        checked_identificacion = $bindable(true),
        checked_ingreso = $bindable(true),
        checked_antropometria = $bindable(true),
        checked_maternos = $bindable(true),
        checked_respiratorias = $bindable(true),
        checked_neurologicas = $bindable(true),
        checked_medicacion = $bindable(true),
        checked_avanzados = $bindable(true),
        checked_cateteres = $bindable(true),
        checked_alimentacion = $bindable(true),
        checked_infecciones = $bindable(true),
        checked_cardiovascular = $bindable(true),
        checked_inotropicos = $bindable(true),
        checked_sangre = $bindable(true),
        checked_oftalmologia = $bindable(true),
        checked_digestivo = $bindable(true),
        checked_genetica = $bindable(true),
        checked_alta = $bindable(true),
        checked_otros = $bindable(true),
        checked_diagnostico = $bindable(true),
        bebesrows = $bindable([]),
        unidades = $bindable([]),
        areas = $bindable([]),
    } = $props();
    function handleClick(id) {
        goto("/bebes/" + id);
    }
    function getNombre(id, lista) {
        let fila = { id: "", nombre: "" };
        let idx = lista.findIndex((o) => o.id == id);
        if (idx != -1) {
            fila = lista[idx];
        }
        return fila.nombre;
    }
</script>

<div
    class={`
        bg-transparent
        dark:text-gray-100 text-gray-800
        
        min-h-screen p-4 
    `}
>
    <!-- Título -->
    <div class="mb-4">
        <h2 class="text-xl font-bold flex items-center gap-2">
            Historial bebés
            <span
                class={`
                    text-sm 
                    dark:bg-blue-800 dark:text-blue-200
                    bg-blue-100 text-blue-800
                    
                    
                    rounded-full px-2 py-0.5`}
            >
                {bebesrows.length}
            </span>
        </h2>
    </div>
    <!-- Tabla -->
    <div
        class={`
            dark:bg-gray-800 bg-white
            
            overflow-x-auto  shadow-md rounded-lg
        `}
    >
        <div class="hidden sm:table w-full text-sm text-left">
            <div
                class={`
                    table-header-group
                    dark:bg-gray-700 dark:text-gray-200
                    bg-gray-100 text-gray-700
                    

                `}
            >
                <div class="table-row overflow-x-auto">
                    <div class="table-cell px-4 py-3">Estado</div>
                    <div class="table-cell px-4 py-3">Nombre</div>
                    <div class="table-cell px-4 py-3">Peso</div>
                    <div class="table-cell px-4 py-3">Area</div>
                    <div class="table-cell px-4 py-3">Unidad</div>
                    {#if checked_identificacion}
                        <div class="table-cell px-4 py-3">HC</div>
                        <div class="table-cell px-4 py-3">DNI</div>
                        <div class="table-cell px-4 py-3">DNI madre</div>
                        <div class="table-cell px-4 py-3">Madre</div>
                        <div class="table-cell px-4 py-3">Sexo</div>
                        <div class="table-cell px-4 py-3">Nacimiento</div>
                    {/if}
                    {#if checked_ingreso}
                        <div class="table-cell px-4 py-3">Fecha ingreso</div>
                        <div class="table-cell px-4 py-3">Tipo parto</div>
                        <div class="table-cell px-4 py-3">Domiciliario</div>
                        <div class="table-cell px-4 py-3">Tipo ingreso</div>
                        <div class="table-cell px-4 py-3">APGAR 1</div>
                        <div class="table-cell px-4 py-3">APGAR 5</div>
                        <div class="table-cell px-4 py-3">APGAR 10</div>
                        <div class="table-cell px-4 py-3">Edad gestacional</div>
                        <div class="table-cell px-4 py-3">Temperatura</div>
                        <div class="table-cell px-4 py-3">Peso Ingreso</div>
                        <div class="table-cell px-4 py-3">RCIU</div>
                        <div class="table-cell px-4 py-3">REM</div>
                        <div class="table-cell px-4 py-3">Reanimacion</div>
                        <div class="table-cell px-4 py-3">Liquido</div>
                        <div class="table-cell px-4 py-3">Fallece</div>
                    {/if}
                    {#if checked_antropometria}
                        <div class="table-cell px-4 py-3">
                            Edad recuperar peso
                        </div>

                        <div class="table-cell px-4 py-3">Peso RN</div>
                        <div class="table-cell px-4 py-3">Peso 7 días</div>
                        <div class="table-cell px-4 py-3">Peso 14 días</div>
                        <div class="table-cell px-4 py-3">Peso 21 días</div>
                        <div class="table-cell px-4 py-3">Peso 28 días</div>
                        <div class="table-cell px-4 py-3">Peso 36 semanas</div>

                        <div class="table-cell px-4 py-3">Perímetro RN</div>
                        <div class="table-cell px-4 py-3">Perímetro 7 días</div>
                        <div class="table-cell px-4 py-3">
                            Perímetro 14 días
                        </div>
                        <div class="table-cell px-4 py-3">
                            Perímetro 21 días
                        </div>
                        <div class="table-cell px-4 py-3">
                            Perímetro 28 días
                        </div>
                        <div class="table-cell px-4 py-3">
                            Perímetro 36 semanas
                        </div>

                        <div class="table-cell px-4 py-3">Talla RN</div>
                        <div class="table-cell px-4 py-3">Talla 7 días</div>
                        <div class="table-cell px-4 py-3">Talla 14 días</div>
                        <div class="table-cell px-4 py-3">Talla 21 días</div>
                        <div class="table-cell px-4 py-3">Talla 28 días</div>
                        <div class="table-cell px-4 py-3">Talla 36 semanas</div>

                        <div class="table-cell px-4 py-3">Score z RN</div>
                        <div class="table-cell px-4 py-3">Score z 7 días</div>
                        <div class="table-cell px-4 py-3">Score z 14 días</div>
                        <div class="table-cell px-4 py-3">Score z 21 días</div>
                        <div class="table-cell px-4 py-3">Score z 28 días</div>
                        <div class="table-cell px-4 py-3">
                            Score z 36 semanas
                        </div>
                    {/if}
                    {#if checked_maternos}
                        <div class="table-cell px-4 py-3">Nombre mama</div>
                        <div class="table-cell px-4 py-3">Edad materna</div>
                        <div class="table-cell px-4 py-3">
                            Educación materna
                        </div>
                        <div class="table-cell px-4 py-3">Paridad</div>
                        <div class="table-cell px-4 py-3">Gemelos</div>
                        <div class="table-cell px-4 py-3">Control prenatal</div>
                        <div class="table-cell px-4 py-3">Corticoides</div>
                        <div class="table-cell px-4 py-3">Tabaquismo</div>
                        <div class="table-cell px-4 py-3">Adicción</div>
                        <div class="table-cell px-4 py-3">EGB</div>
                        <div class="table-cell px-4 py-3">
                            Sulfato de Magnesio
                        </div>
                        <div class="table-cell px-4 py-3">Diabetes previa</div>
                        <div class="table-cell px-4 py-3">
                            Diabetes gestacional
                        </div>
                        <div class="table-cell px-4 py-3">Criomanintis</div>
                        <div class="table-cell px-4 py-3">
                            Infección congénita
                        </div>
                        <div class="table-cell px-4 py-3">ITU</div>
                        <div class="table-cell px-4 py-3">Desprendimiento</div>
                        <div class="table-cell px-4 py-3">
                            Sufrimiento fetal
                        </div>
                        <div class="table-cell px-4 py-3">HT Crónica</div>
                        <div class="table-cell px-4 py-3">HIE</div>
                        <div class="table-cell px-4 py-3">Preeclampsia</div>
                        <div class="table-cell px-4 py-3">Eclampsia</div>
                        <div class="table-cell px-4 py-3">Colestasis</div>
                    {/if}
                    {#if checked_respiratorias}
                        <div class="table-cell px-4 py-3">EMH</div>
                        <div class="table-cell px-4 py-3">SALAM</div>
                        <div class="table-cell px-4 py-3">Apneas</div>
                        <div class="table-cell px-4 py-3">Neumotorax</div>
                        <div class="table-cell px-4 py-3">Taquipnea</div>
                        <div class="table-cell px-4 py-3">
                            Hipertensión pulmonar
                        </div>
                        <div class="table-cell px-4 py-3">Intersticial</div>
                        <div class="table-cell px-4 py-3">BQL</div>
                        <div class="table-cell px-4 py-3">DBP</div>
                        <div class="table-cell px-4 py-3">O2</div>
                        <div class="table-cell px-4 py-3">Surfactante</div>
                        <div class="table-cell px-4 py-3">
                            Dosis Surfactante
                        </div>
                        <div class="table-cell px-4 py-3">ARM</div>
                        <div class="table-cell px-4 py-3">Intubado</div>
                        <div class="table-cell px-4 py-3">VAFO</div>
                        <div class="table-cell px-4 py-3">CPAP</div>
                        <div class="table-cell px-4 py-3">OAF</div>
                        <div class="table-cell px-4 py-3">CBF</div>
                        <div class="table-cell px-4 py-3">Cafeina</div>
                        <div class="table-cell px-4 py-3">Aminofilina</div>
                        <div class="table-cell px-4 py-3">Cort Inhalado</div>
                        <div class="table-cell px-4 py-3">Cort Postnatal</div>
                        <div class="table-cell px-4 py-3">óxido nítrico</div>
                    {/if}
                    {#if checked_neurologicas}
                        <div class="table-cell px-4 py-3">ECO TF</div>
                        <div class="table-cell px-4 py-3">HIV</div>
                        <div class="table-cell px-4 py-3">Convulsiones</div>
                        <div class="table-cell px-4 py-3">EHI</div>
                        <div class="table-cell px-4 py-3">Hipotermia</div>
                    {/if}
                    {#if checked_medicacion}
                        <div class="table-cell px-4 py-3">Gástrico</div>
                        <div class="table-cell px-4 py-3">Inhibidor</div>
                        <div class="table-cell px-4 py-3">Probiotico</div>
                        <div class="table-cell px-4 py-3">Eritromicina</div>
                        <div class="table-cell px-4 py-3">Fentanilo</div>
                        <div class="table-cell px-4 py-3">Morfina</div>
                        <div class="table-cell px-4 py-3">Midazolam</div>
                        <div class="table-cell px-4 py-3">Precedex</div>
                        <div class="table-cell px-4 py-3">Medatona</div>
                        <div class="table-cell px-4 py-3">Vecuronio</div>
                        <div class="table-cell px-4 py-3">Prostaglandinas</div>
                    {/if}
                    {#if checked_cateteres}
                        <div class="table-cell px-4 py-3">CUV</div>
                        <div class="table-cell px-4 py-3">CUA</div>
                        <div class="table-cell px-4 py-3">Percutáneo</div>
                        <div class="table-cell px-4 py-3">Vía central</div>
                    {/if}
                    {#if checked_alimentacion}
                        <div class="table-cell px-4 py-3">Enteral trófica</div>
                        <div class="table-cell px-4 py-3">
                            Edad alimentación completa
                        </div>
                        <div class="table-cell px-4 py-3">Calorías inicio</div>
                        <div class="table-cell px-4 py-3">
                            Tipo Alimentación
                        </div>

                        <div class="table-cell px-4 py-3">
                            Nutrición parental
                        </div>
                        <div class="table-cell px-4 py-3">Edad inicio</div>
                        <div class="table-cell px-4 py-3">Duración</div>

                        <div class="table-cell px-4 py-3">Inicio AA</div>
                        <div class="table-cell px-4 py-3">Aporte AA</div>
                        <div class="table-cell px-4 py-3">Inicio lípido</div>
                        <div class="table-cell px-4 py-3">Aporte lípido</div>
                    {/if}
                    {#if checked_infecciones}
                        <div class="table-cell px-4 py-3">Sepsis temprana</div>
                        <div class="table-cell px-4 py-3">Germen</div>
                        <div class="table-cell px-4 py-3">Días antibiotico</div>

                        <div class="table-cell px-4 py-3">Sepsis tardía</div>
                        <div class="table-cell px-4 py-3">Germen</div>
                        <div class="table-cell px-4 py-3">Días antibiotico</div>
                    {/if}
                    {#if checked_cardiovascular}
                        <div class="table-cell px-4 py-3">Ductus</div>
                        <div class="table-cell px-4 py-3">
                            Cardiopatía congénita
                        </div>
                    {/if}
                    {#if checked_inotropicos}
                        <div class="table-cell px-4 py-3">Dopamina</div>
                        <div class="table-cell px-4 py-3">Dobutamina</div>
                        <div class="table-cell px-4 py-3">Adrenalina</div>
                        <div class="table-cell px-4 py-3">Milrinona</div>
                        <div class="table-cell px-4 py-3">Vasopresina</div>
                        <div class="table-cell px-4 py-3">Furosemida</div>
                        <div class="table-cell px-4 py-3">Espironolactona</div>
                        <div class="table-cell px-4 py-3">
                            HIdroclorotiazida
                        </div>
                    {/if}
                    {#if checked_sangre}
                        <div class="table-cell px-4 py-3">TGR</div>
                        <div class="table-cell px-4 py-3">Plasma</div>
                        <div class="table-cell px-4 py-3">Plaqueta</div>
                        <div class="table-cell px-4 py-3">Gamma</div>
                        <div class="table-cell px-4 py-3">
                            Exanguineo transfusión
                        </div>
                    {/if}
                    {#if checked_oftalmologia}
                        <div class="table-cell px-4 py-3">Fondo de ojo</div>
                        <div class="table-cell px-4 py-3">ROP</div>
                        <div class="table-cell px-4 py-3">Tratamiento</div>
                    {/if}
                    {#if checked_digestivo}
                        <div class="table-cell px-4 py-3">NEC</div>
                        <div class="table-cell px-4 py-3">
                            Perforación única
                        </div>
                        <div class="table-cell px-4 py-3">Onfalocele</div>
                        <div class="table-cell px-4 py-3">Gastrosquisis</div>
                        <div class="table-cell px-4 py-3">HDC</div>
                        <div class="table-cell px-4 py-3">Diagnóstico HDC</div>
                        <div class="table-cell px-4 py-3">Tratamiento HDC</div>
                        <div class="table-cell px-4 py-3">TQT</div>
                        <div class="table-cell px-4 py-3">Drenaje pleural</div>
                        <div class="table-cell px-4 py-3">
                            Drenaje ventricular
                        </div>
                    {/if}
                    {#if checked_genetica}
                        <div class="table-cell px-4 py-3">Trisomía 21</div>
                        <div class="table-cell px-4 py-3">Trisomía 13</div>
                        <div class="table-cell px-4 py-3">Trisomía 18</div>
                        <div class="table-cell px-4 py-3">VACTERL</div>
                        <div class="table-cell px-4 py-3">TURNER</div>
                    {/if}
                    {#if checked_otros}
                        <div class="table-cell px-4 py-3">
                            Malformacionaciones congénitas
                        </div>
                        <div class="table-cell px-4 py-3">Cirugías</div>
                        <div class="table-cell px-4 py-3">Complicaciones</div>
                        <div class="table-cell px-4 py-3">Observación</div>
                    {/if}
                    {#if checked_diagnostico}
                        <div class="table-cell px-4 py-3">Diagnostico</div>
                    {/if}
                    {#if checked_alta}
                        <div class="table-cell px-4 py-3">Fecha alta</div>
                    {/if}
                </div>
            </div>
            <div class="table-row-group">
                {#each bebesrows as b, i}
                    <div
                        role="button"
                        tabindex="0"
                        class={`
                            table-row border-b
                            dark:border-gray-700 dark:hover:bg-gray-700
                            border-gray-200 hover:bg-gray-100
                            cursor-pointer overflow-x-auto
                        `}
                        onclick={() => handleClick(b.id)}
                        onkeydown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div class="table-cell px-4 py-3">
                            {#if b.conalta}
                                <span
                                    class="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 px-2 py-0.5 rounded-full"
                                    >{"Con alta"}</span
                                >
                            {:else}
                                <span
                                    class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-2 py-0.5 rounded-full"
                                    >{"Sin alta"}</span
                                >
                            {/if}
                        </div>
                        <div
                            class="table-cell px-4 py-3 font-semibold flex items-center gap-2"
                        >
                            {b.nombrebebe}
                        </div>
                        <div class="table-cell px-4 py-3">
                            {b.pesobebe}
                        </div>
                        <div class="table-cell px-4 py-3">
                            {getNombre(b.area, areas)}
                        </div>
                        <div class="table-cell px-4 py-3">
                            {getNombre(b.unidad, unidades)}
                        </div>
                        {#if checked_identificacion}
                            <div class="table-cell px-4 py-3">{b.hcbebe}</div>
                            <div class="table-cell px-4 py-3">{b.dnibebe}</div>
                            <div class="table-cell px-4 py-3">{b.dnimama}</div>
                            <div class="table-cell px-4 py-3">
                                {b.nombremama}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.sexo, opciones.SEXO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.fechanacimientobebe.length > 0
                                    ? new Date(
                                          b.fechanacimientobebe,
                                      ).toLocaleDateString()
                                    : ""}
                            </div>
                        {/if}
                        {#if checked_ingreso}
                            <div class="table-cell px-4 py-3">
                                {b.fechaingresobebe.length > 0
                                    ? new Date(
                                          b.fechaingresobebe,
                                      ).toLocaleDateString()
                                    : ""}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.tipo_parto, opciones.TIPOPARTO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.parto_domiciliario,
                                    opciones.DOMICILIARIO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.tipoingreso, opciones.INGRESOS)}
                            </div>
                            <div class="table-cell px-4 py-3">{b.apgar_1}</div>
                            <div class="table-cell px-4 py-3">{b.apgar_5}</div>
                            <div class="table-cell px-4 py-3">{b.apgar_10}</div>
                            <div class="table-cell px-4 py-3">
                                {b.edad_gestacional}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.temperatura_ingreso}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.pesoingresobebe}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.rciu, opciones.RCIU)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.rem, opciones.REM)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.reanimacion, opciones.REANIMACION)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.liquido_meconial,
                                    opciones.LIQUIDO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.fallece, opciones.FALLECE)}
                            </div>
                        {/if}
                        {#if checked_antropometria}
                            <div class="table-cell px-4 py-3">
                                {b.edadrecuperapeso}
                            </div>

                            <div class="table-cell px-4 py-3">{b.pesorn}</div>
                            <div class="table-cell px-4 py-3">{b.peso7d}</div>
                            <div class="table-cell px-4 py-3">{b.peso14d}</div>
                            <div class="table-cell px-4 py-3">{b.peso21d}</div>
                            <div class="table-cell px-4 py-3">{b.peso28d}</div>
                            <div class="table-cell px-4 py-3">
                                {b.peso36sem}
                            </div>

                            <div class="table-cell px-4 py-3">
                                {b.perimetrorn}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.perimetro7d}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.perimetro14d}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.perimetro21d}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.perimetro28d}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.perimetro36sem}
                            </div>

                            <div class="table-cell px-4 py-3">{b.tallarn}</div>
                            <div class="table-cell px-4 py-3">{b.talla7d}</div>
                            <div class="table-cell px-4 py-3">{b.talla14d}</div>
                            <div class="table-cell px-4 py-3">{b.talla21d}</div>
                            <div class="table-cell px-4 py-3">{b.talla28d}</div>
                            <div class="table-cell px-4 py-3">
                                {b.talla36sem}
                            </div>

                            <div class="table-cell px-4 py-3">{b.scorezrn}</div>
                            <div class="table-cell px-4 py-3">{b.scorez7d}</div>
                            <div class="table-cell px-4 py-3">
                                {b.scorez14d}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.scorez21d}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.scorez28d}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.scorez36sem}
                            </div>
                        {/if}
                        {#if checked_maternos}
                            <div class="table-cell px-4 py-3">
                                {b.nombremama}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.fechanacimientomama
                                    ? calcularEdad(b.fechanacimientomama)
                                    : ""}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.educacionmama,
                                    opciones.NIVEL_EDUCACION,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">{b.paridad}</div>
                            <div class="table-cell px-4 py-3">
                                {b.gemelocantidad}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.controlprenatal, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.corticoideprenatal, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.tabaquismo, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.adiccion, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.egb, opciones.EGB)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.sulfatomg, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.diabetesprevia, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.diabetesgestacionala,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.crioaminitis, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.infeccioncongenita, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.itu, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.desprendimientoplacenta,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.sufrimientofetal, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.htcronica, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.hie, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.preeclampsia, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.eclampsia, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.colestasis, opciones.SINO)}
                            </div>
                        {/if}
                        {#if checked_respiratorias}
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.emh, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.salam, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.apneas, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.neumotorax, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.taquipneatransitoria,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.hipertpulmonar, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.enfermedadintersticial,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.bql, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.dbp36sem, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.o236sem, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.surfactante, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.ndosissurfactante}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.arm, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.intubadodesdeutpr, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.vafo, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.cpap, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.oaf, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.cbf, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.cafeina, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.aminofilina, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.corticoideinhalado, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.corticoidepostnatal,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.oxidonitrico, opciones.SINO)}
                            </div>
                        {/if}
                        {#if checked_neurologicas}
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.ecotf, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.hivgrado, opciones.HIV)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.convulsiones, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.ehi, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.ecotf, opciones.HIPOTERMIA)}
                            </div>
                        {/if}
                        {#if checked_medicacion}
                            <div class="table-cell px-4 py-3">
                                {b.medprotectorgastricodias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.medinhibidorbombahdias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.medprobiodias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.meleritromicinadias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.medfentanilodias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.medmorfinadias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.medmidazolamdias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.medprecedexdias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.medmetadonadias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.medvecuroniadias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.medprostagldias}
                            </div>
                        {/if}
                        {#if checked_cateteres}
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.cateteresumbilicalvenoso,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.cateteresumbilicalarterial,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.percutanea, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.viacentral, opciones.SINO)}
                            </div>
                        {/if}
                        {#if checked_alimentacion}
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.alimentacionenteraltrofica,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.alimentacionenteralcompletoedad}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.alimentacionenteralcalorias}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.tipoalimentacionenteral,
                                    opciones.ALIMENTACION_ENTERAL_TROFICA,
                                )}
                            </div>

                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.nutricionparenteral,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.nptedadinicio}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.nptduraciondias}
                            </div>

                            <div class="table-cell px-4 py-3">
                                {b.nptdiacomienzoaa}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.nptaportetotalaa}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.nptdiacomienzolipido}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.nptaportetotallipido}
                            </div>
                        {/if}
                        {#if checked_infecciones}
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.sepsistemprana,
                                    opciones.SEPSIS_TEMPRANA,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.sepsistempranagermen}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.sepsistempranaatbdias}
                            </div>

                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.sepsistardia,
                                    opciones.SEPSIS_TARDIA,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.sepsistardiagermen}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.sepsistardiaatbdias}
                            </div>
                        {/if}
                        {#if checked_cardiovascular}
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.ductus, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.cardiopatiacongenita,
                                    opciones.SINO,
                                )}
                            </div>
                        {/if}
                        {#if checked_inotropicos}
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.inotropicosdopamina,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.inotropicosdobutamina,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.inotropicosadrenalina,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.inotropicosmilrinona,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.inotropicosvasopresina,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.diureticosfurosemida,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.diureticosespironolac,
                                    opciones.SINO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.diureticoshidroclotiaz,
                                    opciones.SINO,
                                )}
                            </div>
                        {/if}
                        {#if checked_sangre}
                            <div class="table-cell px-4 py-3">
                                {b.hemoderivadostgrn}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.hemoderivadosplasman}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.hemoderivadosplaquetasn}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.hemoderivadosgamman}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.exanguineotransfusion,
                                    opciones.SINO,
                                )}
                            </div>
                        {/if}
                        {#if checked_oftalmologia}
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.fondoojo, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.rop, opciones.ROP)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.roptto, opciones.ROP_TTO)}
                            </div>
                        {/if}
                        {#if checked_digestivo}
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.necestadio, opciones.NEC)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.perforacionunica, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.onfalocele, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.gastroquisis, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.hdc, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.hdcdiagnostico,
                                    opciones.HDC_DIAGNOSTICO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(
                                    b.hdcttoquirurgico,
                                    opciones.HDC_TTO_QUIRURGICO,
                                )}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.tot, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.drenajepleural, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.drenajeventricular, opciones.SINO)}
                            </div>
                        {/if}
                        {#if checked_genetica}
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.geneticat21, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.geneticat13, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.geneticat18, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.geneticavacterl, opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.geneticaturner, opciones.SINO)}
                            </div>
                        {/if}
                        {#if checked_otros}
                            <div class="table-cell px-4 py-3">
                                <Mas bind:value={b.malformacionescongenitas} />
                            </div>
                            <div class="table-cell px-4 py-3">
                                <Mas bind:value={b.cirugias} />
                            </div>
                            <div class="table-cell px-4 py-3">
                                <Mas bind:value={b.complicaciones} />
                            </div>
                            <div class="table-cell px-4 py-3">
                                {b.observacion}
                            </div>
                        {/if}
                        {#if checked_diagnostico}
                            <div class="table-cell px-4 py-3">
                                <Mas bind:value={b.diagnostico} />
                            </div>
                        {/if}
                        {#if checked_alta}
                            <div class="table-cell px-4 py-3">
                                {b.altafecha.length > 0
                                    ? new Date(b.altafecha).toLocaleDateString()
                                    : ""}
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <!-- Mobile: tarjeta colapsada -->
    <div
        class={`
            sm:hidden p-4 border-b
            dark:border-gray-700 border-gray-200
            
        `}
    >
        {#each bebesrows as b}
            <div>
                <!-- Cabecera de la tarjeta -->
                <div
                    class="flex justify-between items-center"
                    role="button"
                    tabindex="0"
                    onclick={() => handleClick(b.id)}
                    onkeydown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div class="font-semibold text-lg flex items-center gap-2">
                        <span
                            class={`h-2 w-2 rounded-full ${
                                b.conalta ? "bg-green-500" : "bg-gray-400"
                            }`}
                        ></span>
                        {b.nombrebebe}
                    </div>
                    <span
                        class={`text-xs px-2 py-0.5 rounded-full ${
                            b.conalta
                                ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                        }`}
                    >
                        {b.conalta ? "Con alta" : "Sin alta"}
                    </span>
                </div>
                <!-- Info principal -->
                <div class="mt-3 text-sm space-y-1">
                    <div>
                        <span class="font-medium">Peso:</span>
                        {b.pesobebe}
                    </div>
                    <div>
                        <span class="font-medium">Área:</span>
                        {getNombre(b.area, areas)}
                    </div>
                    <div>
                        <span class="font-medium">Unidad:</span>
                        {getNombre(b.unidad, unidades)}
                    </div>
                </div>
                <!-- Identificación -->
                {#if checked_identificacion}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Identificación</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>Nacimiento:</b>
                                {b.fechanacimientobebe.length > 0
                                    ? new Date(
                                          b.fechanacimientobebe,
                                      ).toLocaleDateString()
                                    : ""}
                            </div>
                            <div><b>HC:</b> {b.hcbebe}</div>
                            <div><b>DNI bebé:</b> {b.dnibebe}</div>
                            <div><b>DNI madre:</b> {b.dnimama}</div>
                            <div><b>Madre:</b> {b.nombremama}</div>
                            <div>
                                <b>Sexo:</b>
                                {getNombre(b.sexo, opciones.SEXO)}
                            </div>
                        </div>
                    </details>
                {/if}
                <!-- Ingreso -->
                {#if checked_ingreso}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Ingreso</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>Fecha ingreso:</b>
                                {b.fechaingresobebe.length > 0
                                    ? new Date(
                                          b.fechaingresobebe,
                                      ).toLocaleDateString()
                                    : ""}
                            </div>
                            <div>
                                <b>Tipo ingreso:</b>
                                {getNombre(b.tipoingreso, opciones.INGRESOS)}
                            </div>
                            <div>
                                <b>Tipo parto:</b>
                                {getNombre(b.tipo_parto, opciones.TIPOPARTO)}
                            </div>
                            <div>
                                <b>Domiciliario:</b>
                                {getNombre(
                                    b.parto_domiciliario,
                                    opciones.DOMICILIARIO,
                                )}
                            </div>

                            <div>
                                <b>Edad gestacional:</b>
                                {b.edad_gestacional}
                            </div>
                            <div><b>APGAR 1 MINUTO:</b> {b.apgar_1}</div>
                            <div><b>APGAR 5 MINUTO:</b> {b.apgar_5}</div>
                            <div><b>APGAR 10 MINUTO:</b> {b.apgar_10}</div>
                            <div><b>Peso ingreso:</b> {b.pesoingresobebe}</div>
                            <div>
                                <b>Temperatura ingreso:</b>
                                {b.temperatura_ingreso}
                            </div>
                            <div>
                                <b>RCIU:</b>
                                {getNombre(b.rciu, opciones.RCIU)}
                            </div>
                            <div>
                                <b>REM:</b>
                                {getNombre(b.rem, opciones.REM)}
                            </div>
                            <div>
                                <b>Reanimacion:</b>
                                {getNombre(b.reanimacion, opciones.REANIMACION)}
                            </div>
                            <div>
                                <b>Líquido meconial:</b>
                                {getNombre(
                                    b.liquido_meconial,
                                    opciones.LIQUIDO,
                                )}
                            </div>
                            <div>
                                <b>Fallece:</b>
                                {getNombre(b.fallece, opciones.FALLECE)}
                            </div>
                        </div>
                    </details>
                {/if}
                <!-- Antropometría -->
                {#if checked_antropometria}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Antropometría</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>Edad recupera peso:</b>
                                {b.edadrecuperapeso}
                            </div>
                        </div>
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div><b>Peso RN:</b> {b.pesorn}</div>
                            <div><b>Peso 7d:</b> {b.peso7d}</div>
                            <div><b>Peso 14d:</b> {b.peso14d}</div>
                            <div><b>Peso 21d:</b> {b.peso21d}</div>
                            <div><b>Peso 28d:</b> {b.peso28d}</div>
                            <div><b>Peso 36sem:</b> {b.peso36sem}</div>
                        </div>
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div><b>Perímetro RN:</b> {b.perimetrorn}</div>
                            <div><b>Perímetro 7d:</b> {b.perimetro7d}</div>
                            <div><b>Perímetro 14d:</b> {b.perimetro14d}</div>
                            <div><b>Perímetro 21d:</b> {b.perimetro21d}</div>
                            <div><b>Perímetro 28d:</b> {b.perimetro28d}</div>
                            <div>
                                <b>Perímetro 36sem:</b>
                                {b.perimetro36sem}
                            </div>
                        </div>
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div><b>Talla RN:</b> {b.tallarn}</div>
                            <div><b>Talla 7d:</b> {b.talla7d}</div>
                            <div><b>Talla 14d:</b> {b.talla14d}</div>
                            <div><b>Talla 21d:</b> {b.talla21d}</div>
                            <div><b>Talla 28d:</b> {b.talla28d}</div>
                            <div><b>Talla 36sem:</b> {b.talla36sem}</div>
                        </div>
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div><b>Score z RN:</b> {b.scorezrn}</div>
                            <div><b>Score z 7d:</b> {b.scorez7d}</div>
                            <div><b>Score z 14d:</b> {b.scorez14d}</div>
                            <div><b>Score z 21d:</b> {b.scorez21d}</div>
                            <div><b>Score z 28d:</b> {b.scorez28d}</div>
                            <div><b>Score z 36sem:</b> {b.scorez36sem}</div>
                        </div>
                    </details>
                {/if}
                <!-- Maternos -->
                {#if checked_maternos}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Maternos</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div><b>Nombre mamá:</b> {b.nombremama}</div>
                            <div>
                                <b>Edad:</b>
                                {b.fechanacimientomama
                                    ? calcularEdad(b.fechanacimientomama)
                                    : ""}
                            </div>
                            <div>
                                <b>Educación:</b>
                                {getNombre(
                                    b.educacionmama,
                                    opciones.NIVEL_EDUCACION,
                                )}
                            </div>
                            <div><b>Paridad:</b> {b.paridad}</div>
                            <div><b>Gemelos:</b> {b.gemelocantidad}</div>
                            <div>
                                <b>Control prenatal:</b>
                                {getNombre(b.controlprenatal, opciones.SINO)}
                            </div>
                            <div>
                                <b>Corticoide prenatal:</b>
                                {getNombre(b.corticoideprenatal, opciones.SINO)}
                            </div>
                            <div>
                                <b>Tabaquismo:</b>
                                {getNombre(b.tabaquismo, opciones.SINO)}
                            </div>
                            <div>
                                <b>Adicción:</b>
                                {getNombre(b.adiccion, opciones.SINO)}
                            </div>
                            <div>
                                <b>EGB:</b>
                                {getNombre(b.egb, opciones.EGB)}
                            </div>
                            <div>
                                <b>Sulfato Mg:</b>
                                {getNombre(b.sulfatomg, opciones.SINO)}
                            </div>
                            <div>
                                <b>Diabetes previa:</b>
                                {getNombre(b.diabetesprevia, opciones.SINO)}
                            </div>
                            <div>
                                <b>Diabetes gestacional:</b>
                                {getNombre(
                                    b.diabetesgestacionala,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Crioaminitis:</b>
                                {getNombre(b.crioaminitis, opciones.SINO)}
                            </div>
                            <div>
                                <b>Infección congénita:</b>
                                {getNombre(b.infeccioncongenita, opciones.SINO)}
                            </div>
                            <div>
                                <b>ITU:</b>
                                {getNombre(b.itu, opciones.SINO)}
                            </div>
                            <div>
                                <b>Desprendimiento de placenta:</b>
                                {getNombre(
                                    b.desprendimientoplacenta,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Sufrimiento fetal:</b>
                                {getNombre(b.sufrimientofetal, opciones.SINO)}
                            </div>
                            <div>
                                <b>HT crónica:</b>
                                {getNombre(b.htcronica, opciones.SINO)}
                            </div>
                            <div>
                                <b>HIE:</b>
                                {getNombre(b.hie, opciones.SINO)}
                            </div>
                            <div>
                                <b>Preeclampsia:</b>
                                {getNombre(b.preeclampsia, opciones.SINO)}
                            </div>
                            <div>
                                <b>Eclampsia:</b>
                                {getNombre(b.eclampsia, opciones.SINO)}
                            </div>
                            <div>
                                <b>Colestasis:</b>
                                {getNombre(b.colestasis, opciones.SINO)}
                            </div>
                        </div>
                    </details>
                {/if}

                <!-- Respiratorias -->
                {#if checked_respiratorias}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Respiratorias</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>EMH:</b>
                                {getNombre(b.emh, opciones.SINO)}
                            </div>
                            <div>
                                <b>SALAM:</b>
                                {getNombre(b.salam, opciones.SINO)}
                            </div>
                            <div>
                                <b>Apneas:</b>
                                {getNombre(b.apneas, opciones.SINO)}
                            </div>
                            <div>
                                <b>Neumotórax:</b>
                                {getNombre(b.neumotorax, opciones.SINO)}
                            </div>
                            <div>
                                <b>Taquipnea transitoria:</b>
                                {getNombre(
                                    b.taquipneatransitoria,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Hipertensión pulmonar:</b>
                                {getNombre(b.hipertpulmonar, opciones.SINO)}
                            </div>
                            <div>
                                <b>Enfermedad intersticial:</b>
                                {getNombre(
                                    b.enfermedadintersticial,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>BQL:</b>
                                {getNombre(b.bql, opciones.SINO)}
                            </div>
                            <div>
                                <b>DBP 36 sem:</b>
                                {getNombre(b.dbp36sem, opciones.SINO)}
                            </div>
                            <div>
                                <b>O₂ 36 sem:</b>
                                {getNombre(b.o236sem, opciones.SINO)}
                            </div>
                            <div>
                                <b>Surfactante:</b>
                                {getNombre(b.surfactante, opciones.SINO)}
                            </div>
                            <div>
                                <b>N° dosis de surfactante:</b>
                                {b.ndosissurfactante}
                            </div>
                            <div>
                                <b>ARM:</b>
                                {getNombre(b.arm, opciones.SINO)}
                            </div>
                            <div>
                                <b>Intubado desde UTPR:</b>
                                {getNombre(b.intubadodesdeutpr, opciones.SINO)}
                            </div>
                            <div>
                                <b>VAFO:</b>
                                {getNombre(b.vafo, opciones.SINO)}
                            </div>
                            <div>
                                <b>CPAP:</b>
                                {getNombre(b.cpap, opciones.SINO)}
                            </div>
                            <div>
                                <b>OAF:</b>
                                {getNombre(b.oaf, opciones.SINO)}
                            </div>
                            <div>
                                <b>CBF:</b>
                                {getNombre(b.cbf, opciones.SINO)}
                            </div>
                            <div>
                                <b>Cafeína:</b>
                                {getNombre(b.cafeina, opciones.SINO)}
                            </div>
                            <div>
                                <b>Aminofilina:</b>
                                {getNombre(b.aminofilina, opciones.SINO)}
                            </div>
                            <div>
                                <b>Corticoide inhalado:</b>
                                {getNombre(b.corticoideinhalado, opciones.SINO)}
                            </div>
                            <div>
                                <b>Corticoide postnatal:</b>
                                {getNombre(
                                    b.corticoidepostnatal,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Óxido nítrico:</b>
                                {getNombre(b.oxidonitrico, opciones.SINO)}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_neurologicas}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Neurológicas</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>ECO TF:</b>
                                {getNombre(b.ecotf, opciones.SINO)}
                            </div>
                            <div>
                                <b>HIV grado:</b>
                                {getNombre(b.hivgrado, opciones.HIV)}
                            </div>
                            <div>
                                <b>Convulsiones:</b>
                                {getNombre(b.convulsiones, opciones.SINO)}
                            </div>
                            <div>
                                <b>EHI:</b>
                                {getNombre(b.ehi, opciones.SINO)}
                            </div>
                            <div>
                                <b>Hipotermia:</b>
                                {getNombre(b.hipotermia, opciones.HIPOTERMIA)}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_medicacion}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Medicación</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>Protector gástrico (días):</b>
                                {b.medprotectorgastricodias}
                            </div>
                            <div>
                                <b>Inhibidor bomba H (días):</b>
                                {b.medinhibidorbombahdias}
                            </div>
                            <div>
                                <b>Probióticos (días):</b>
                                {b.medprobiodias}
                            </div>
                            <div>
                                <b>Eritromicina (días):</b>
                                {b.meleritromicinadias}
                            </div>
                            <div>
                                <b>Fentanilo (días):</b>
                                {b.medfentanilodias}
                            </div>
                            <div><b>Morfina (días):</b> {b.medmorfinadias}</div>
                            <div>
                                <b>Midazolam (días):</b>
                                {b.medmidazolamdias}
                            </div>
                            <div>
                                <b>Precedex (días):</b>
                                {b.medprecedexdias}
                            </div>
                            <div>
                                <b>Metadona (días):</b>
                                {b.medmetadonadias}
                            </div>
                            <div>
                                <b>Vecuronio (días):</b>
                                {b.medvecuroniadias}
                            </div>
                            <div>
                                <b>Prostaglandinas (días):</b>
                                {b.medprostagldias}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_cateteres}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Catéteres</summary
                        >
                        <div class="mt-1 pl-2 text-sm space-y-1">
                            <div>
                                <b>Umbilical venoso:</b>
                                {getNombre(
                                    b.cateteresumbilicalvenoso,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Umbilical arterial:</b>
                                {getNombre(
                                    b.cateteresumbilicalarterial,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Percutánea:</b>
                                {getNombre(b.percutanea, opciones.SINO)}
                            </div>
                            <div>
                                <b>Vía central:</b>
                                {getNombre(b.viacentral, opciones.SINO)}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_alimentacion}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Alimentación</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>Alimentación enteral trófica:</b>
                                {getNombre(
                                    b.alimentacionenteraltrofica,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Edad alimentación enteral completa:</b>
                                {b.alimentacionenteralcompletoedad}
                            </div>
                            <div>
                                <b>Calorías alimentación enteral:</b>
                                {b.alimentacionenteralcalorias}
                            </div>
                            <div>
                                <b>Tipo alimentación enteral:</b>
                                {getNombre(
                                    b.tipoalimentacionenteral,
                                    opciones.ALIMENTACION_ENTERAL_TROFICA,
                                )}
                            </div>

                            <div
                                class="pt-2 border-t border-gray-300 dark:border-gray-600"
                            ></div>

                            <div>
                                <b>Nutrición parenteral:</b>
                                {getNombre(
                                    b.nutricionparenteral,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Edad inicio NPT:</b>
                                {b.nptedadinicio}
                            </div>
                            <div>
                                <b>Duración NPT (días):</b>
                                {b.nptduraciondias}
                            </div>
                            <div>
                                <b>Día comienzo AA:</b>
                                {b.nptdiacomienzoaa}
                            </div>
                            <div>
                                <b>Aporte total AA:</b>
                                {b.nptaportetotalaa}
                            </div>
                            <div>
                                <b>Día comienzo lípido:</b>
                                {b.nptdiacomienzolipido}
                            </div>
                            <div>
                                <b>Aporte total lípido:</b>
                                {b.nptaportetotallipido}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_infecciones}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Infecciones</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>Sepsis temprana:</b>
                                {getNombre(
                                    b.sepsistemprana,
                                    opciones.SEPSIS_TEMPRANA,
                                )}
                            </div>
                            <div>
                                <b>Germen sepsis temprana:</b>
                                {b.sepsistempranagermen}
                            </div>
                            <div>
                                <b>Duración ATB (días) sepsis temprana:</b>
                                {b.sepsistempranaatbdias}
                            </div>

                            <div
                                class="pt-2 border-t border-gray-300 dark:border-gray-600"
                            ></div>

                            <div>
                                <b>Sepsis tardía:</b>
                                {getNombre(
                                    b.sepsistardia,
                                    opciones.SEPSIS_TARDIA,
                                )}
                            </div>
                            <div>
                                <b>Germen sepsis tardía:</b>
                                {b.sepsistardiagermen}
                            </div>
                            <div>
                                <b>Duración ATB (días) sepsis tardía:</b>
                                {b.sepsistardiaatbdias}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_cardiovascular}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Cardiovascular</summary
                        >
                        <div class="mt-1 pl-2 text-sm space-y-1">
                            <div>
                                <b>Ductus:</b>
                                {getNombre(b.ductus, opciones.SINO)}
                            </div>
                            <div>
                                <b>Cardiopatía congénita:</b>
                                {getNombre(
                                    b.cardiopatiacongenita,
                                    opciones.SINO,
                                )}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_inotropicos}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Inotrópicos / Diuréticos</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>Dopamina:</b>
                                {getNombre(
                                    b.inotropicosdopamina,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Dobutamina:</b>
                                {getNombre(
                                    b.inotropicosdobutamina,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Adrenalina:</b>
                                {getNombre(
                                    b.inotropicosadrenalina,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Milrinona:</b>
                                {getNombre(
                                    b.inotropicosmilrinona,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Vasopresina:</b>
                                {getNombre(
                                    b.inotropicosvasopresina,
                                    opciones.SINO,
                                )}
                            </div>

                            <hr
                                class="border-gray-300 dark:border-gray-700 my-2"
                            />

                            <div>
                                <b>Furosemida:</b>
                                {getNombre(
                                    b.diureticosfurosemida,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Espironolactona:</b>
                                {getNombre(
                                    b.diureticosespironolac,
                                    opciones.SINO,
                                )}
                            </div>
                            <div>
                                <b>Hidroclotiazida:</b>
                                {getNombre(
                                    b.diureticoshidroclotiaz,
                                    opciones.SINO,
                                )}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_sangre}
                    <!-- 🧬 Hemoderivados -->
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Hemoderivados</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>Concentrado de GR:</b>
                                {b.hemoderivadostgrn}
                            </div>
                            <div><b>Plasma:</b> {b.hemoderivadosplasman}</div>
                            <div>
                                <b>Plaquetas:</b>
                                {b.hemoderivadosplaquetasn}
                            </div>
                            <div><b>Gamma:</b> {b.hemoderivadosgamman}</div>
                            <div>
                                <b>Exanguinotransfusión:</b>
                                {getNombre(
                                    b.exanguineotransfusion,
                                    opciones.SINO,
                                )}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_oftalmologia}
                    <!-- 👁️ Oftalmología -->
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Oftalmología</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>Fondo de ojo:</b>
                                {getNombre(b.fondoojo, opciones.SINO)}
                            </div>
                            <div>
                                <b>ROP:</b>
                                {getNombre(b.rop, opciones.ROP)}
                            </div>
                            <div>
                                <b>Tratamiento ROP:</b>
                                {getNombre(b.roptto, opciones.ROP_TTO)}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_digestivo}
                    <!-- 🍽️ Digestivo / Quirúrgico -->
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Digestivo / Quirúrgico</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>NEC Estadio:</b>
                                {getNombre(b.necestadio, opciones.NEC)}
                            </div>
                            <div>
                                <b>Perforación única:</b>
                                {getNombre(b.perforacionunica, opciones.SINO)}
                            </div>
                            <div>
                                <b>Onfalocele:</b>
                                {getNombre(b.onfalocele, opciones.SINO)}
                            </div>
                            <div>
                                <b>Gastroquisis:</b>
                                {getNombre(b.gastroquisis, opciones.SINO)}
                            </div>
                            <div>
                                <b>HDC:</b>
                                {getNombre(b.hdc, opciones.SINO)}
                            </div>
                            <div>
                                <b>HDC Diagnóstico:</b>
                                {getNombre(
                                    b.hdcdiagnostico,
                                    opciones.HDC_DIAGNOSTICO,
                                )}
                            </div>
                            <div>
                                <b>HDC Tratamiento Quirúrgico:</b>
                                {getNombre(
                                    b.hdcttoquirurgico,
                                    opciones.HDC_TTO_QUIRURGICO,
                                )}
                            </div>
                            <div>
                                <b>TOT:</b>
                                {getNombre(b.tot, opciones.SINO)}
                            </div>
                            <div>
                                <b>Drenaje Pleural:</b>
                                {getNombre(b.drenajepleural, opciones.SINO)}
                            </div>
                            <div>
                                <b>Drenaje Ventricular:</b>
                                {getNombre(b.drenajeventricular, opciones.SINO)}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_genetica}
                    <!-- 🧬 Genética -->
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Genética</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>T21:</b>
                                {getNombre(b.geneticat21, opciones.SINO)}
                            </div>
                            <div>
                                <b>T13:</b>
                                {getNombre(b.geneticat13, opciones.SINO)}
                            </div>
                            <div>
                                <b>T18:</b>
                                {getNombre(b.geneticat18, opciones.SINO)}
                            </div>
                            <div>
                                <b>VACTERL:</b>
                                {getNombre(b.geneticavacterl, opciones.SINO)}
                            </div>
                            <div>
                                <b>Turner:</b>
                                {getNombre(b.geneticaturner, opciones.SINO)}
                            </div>
                        </div>
                    </details>
                {/if}
                {#if checked_otros}
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Otros</summary
                        >
                        <div class="mt-1 pl-2 text-sm space-y-1">
                            <div>
                                <b>Malformaciones congénitas:</b>
                                <Mas bind:value={b.malformacionescongenitas} />
                            </div>
                            <div>
                                <b>Cirugías:</b>
                                <Mas bind:value={b.cirugias} />
                            </div>
                            <div>
                                <b>Complicaciones:</b>
                                <Mas bind:value={b.complicaciones} />
                            </div>
                            <div><b>Observación:</b> {b.observacion}</div>
                        </div>
                    </details>
                {/if}
                {#if checked_diagnostico}
                    <!-- 🧾 Diagnóstico  -->
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium"
                            >Diagnóstico
                        </summary>
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <b>Diagnóstico:</b> <Mas bind:value={b.diagnostico} />
                        </div>
                    </details>
                {/if}
                {#if checked_alta}
                    <!--  Alta -->
                    <details class="mt-3">
                        <summary class="cursor-pointer font-medium">
                            Alta</summary
                        >
                        <div class="mt-1 pl-2 text-md space-y-1">
                            <div>
                                <b>Fecha alta:</b>
                                {b.altafecha
                                    ? new Date(b.altafecha).toLocaleDateString()
                                    : ""}
                            </div>
                        </div>
                    </details>
                {/if}
            </div>
        {/each}
    </div>
</div>
