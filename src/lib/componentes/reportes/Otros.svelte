<!-- Malformaciones Congénitas -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Malformaciones Congénitas
        </h3>
        <div class="form-control">
                <label class="label">
                        <span class="label-text text-sm"
                                >Buscar por tipo de malformación (ej: atresia,
                                MAR, agenesia)</span
                        >
                </label>
                <input
                        type="text"
                        placeholder="Ej: atresia duodenal, MAR, agenesia de cuerpo calloso"
                        class="input input-bordered input-sm w-full focus:shadow-lg transition-all duration-300"
                        list="malformaciones-sugerencias"
                />
                <datalist id="malformaciones-sugerencias">
                        <option value="atresia duodenal"> </option><option
                                value="atresia yeyunal"
                        >
                        </option><option value="MAR (malrotación intestinal)">
                        </option><option value="fístula vestibular">
                        </option><option value="agenesia de cuerpo calloso">
                        </option><option value="gastrosquisis"> </option><option
                                value="onfalocele"
                        >
                        </option><option value="cardiopatía congénita">
                        </option></datalist
                >
        </div>
        <p class="text-xs text-base-content/60 mt-1 italic">
                Nota: Se busca en registros como: "MAR, agenesia de cuerpo
                calloso, colostomía..."
        </p>
</div>

<!-- Cirugías -->
<div>
        <h3 class="font-medium mb-3 text-base-content">Cirugías Realizadas</h3>
        <div class="form-control">
                <label class="label">
                        <span class="label-text text-sm"
                                >Buscar por procedimiento o descripción (ej:
                                Nissen, anastomosis, cierre)</span
                        >
                </label>
                <input
                        type="text"
                        placeholder="Ej: Nissen, anastomosis T-T, cierre de fístula, Bianchi"
                        class="input input-bordered input-sm w-full focus:shadow-lg transition-all duration-300"
                        list="cirugias-sugerencias"
                />
                <datalist id="cirugias-sugerencias">
                        <option value="Nissen"> </option><option
                                value="anastomosis T-T"
                        >
                        </option><option value="cierre de fístula">
                        </option><option value="colostomía"> </option><option
                                value="Bianchi"
                        >
                        </option><option value="derivación piso HN">
                        </option><option value="cierre de gastrosquisis">
                        </option></datalist
                >
        </div>
        <p class="text-xs text-base-content/60 mt-1 italic">
                Nota: Incluye fechas y detalles como: "28/12 cierre de fístula,
                cabos a tensión".
        </p>
</div>

<!-- Complicaciones -->
<div>
        <h3 class="font-medium mb-3 text-base-content">Complicaciones</h3>
        <div class="form-control">
                <label class="label">
                        <span class="label-text text-sm"
                                >Buscar por complicación o evolución (ej:
                                quilotórax, hemorragia, fallece)</span
                        >
                </label>
                <input
                        type="text"
                        placeholder="Ej: quilotórax, absceso de pared, fallece, AET"
                        class="input input-bordered input-sm w-full focus:shadow-lg transition-all duration-300"
                        list="complicaciones-sugerencias"
                />
                <datalist id="complicaciones-sugerencias">
                        <option value="quilotórax"> </option><option
                                value="absceso de pared"
                        >
                        </option><option value="hemorragia grado IV">
                        </option><option value="fallece"> </option><option
                                value="AET"
                        >
                        </option><option value="insuficiencia respiratoria">
                        </option><option value="dermatitis del pañal">
                        </option><option value="sepsis tardía">
                        </option></datalist
                >
        </div>
        <p class="text-xs text-base-content/60 mt-1 italic">
                Nota: Incluye eventos como: "Fallece con AET día 19/03/25" o
                "pupilas midriáticas fijas".
        </p>
</div>
