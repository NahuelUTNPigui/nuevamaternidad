<script>
    import opciones from "$lib/opciones";
    import { goto } from "$app/navigation";
    import { calcularEdad } from "$lib/string/string";

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
                        <div class="table-cell px-4 py-3">Dosis Surfactante</div>
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
                            <div class="table-cell px-4 py-3">  {getNombre(b.emh,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.salam,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.apneas,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.neumotorax,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.taquipneatransitoria,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">
                                {getNombre(b.hipertpulmonar,opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">{getNombre(b.enfermedadintersticial,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.bql,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.dbp36sem,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.o236sem,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.surfactante,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{b.ndosissurfactante}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.arm,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.intubadodesdeutpr,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.vafo,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.cpap,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.oaf,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.cbf,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.cafeina,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">{getNombre(b.aminofilina,opciones.SINO)}</div>
                            <div class="table-cell px-4 py-3">
                                
                                {getNombre(b.corticoideinhalado,opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                
                                {getNombre(b.corticoidepostnatal,opciones.SINO)}
                            </div>
                            <div class="table-cell px-4 py-3">
                                
                                {getNombre(b.oxidonitrico,opciones.SINO)}
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
            <div
                role="button"
                tabindex="0"
                onclick={() => handleClick(b.id)}
                onkeydown={(e) => {
                    e.preventDefault();
                }}
            >
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 font-semibold text-lg">
                        <span
                            class="h-2 w-2 bg-green-500 rounded-full inline-block"
                        >
                        </span>
                        {b.name}
                    </div>
                    <span
                        class={`
                            dark:bg-green-700 dark:text-green-100
                            bg-green-100 text-green-800
                            
                            
                            text-xs px-2 py-0.5 rounded-full
                        `}
                    >
                        {b.status}
                    </span>
                </div>

                <div class="mt-2 text-sm space-y-1">
                    <div>
                        <span class="font-medium">Madre:</span>{b.motherName}
                    </div>
                    <div>
                        <span class="font-medium">HC:</span>
                        {b.medicalRecordNumber}
                    </div>
                    <div>
                        <span class="hidden font-medium">Fecha Nac.:</span
                        >{b.birthDate}
                    </div>
                    <div>
                        <span class="font-medium">EG:</span>
                        <span
                            class="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-2 py-0.5 rounded-full text-xs"
                            >{b.gestationalAge}</span
                        >
                    </div>
                    <div><span class="font-medium">Peso:</span>{b.weight}</div>
                </div>
            </div>
        {/each}
    </div>
</div>
