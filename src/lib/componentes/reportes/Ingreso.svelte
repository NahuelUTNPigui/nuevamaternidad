<!-- Tipo de Ingreso y Sexo -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Origen y Características</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Tipo de Ingreso -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Tipo de Ingreso</span>
            </label>
            <select
                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
            >
                <option value="" disabled selected>Seleccionar tipo</option>
                <option value="derivado">Derivado</option>
                <option value="propio">Propio</option>
            </select>
        </div>

        <!-- Sexo -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Sexo</span>
            </label>
            <select
                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
            >
                <option value="" disabled selected>Seleccionar sexo</option>
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
            </select>
        </div>
    </div>
</div>

<!-- Tipo de Parto y Parto Domiciliario -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Parto</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Tipo de Parto -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Tipo de Parto</span>
            </label>
            <select
                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
            >
                <option value="" disabled selected>Seleccionar tipo</option>
                <option value="vaginal">Vaginal</option>
                <option value="cesarea-stp">Cesárea STP</option>
                <option value="cesarea-ctp">Cesárea CTP</option>
            </select>
        </div>

        <!-- Parto Domiciliario -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Parto Domiciliario</span>
            </label>
            <select
                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
            >
                <option value="no">No</option>
                <option value="si">Sí</option>
            </select>
        </div>
    </div>
</div>

<!-- APGAR y Edad Gestacional -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Evaluación Neonatal</h3>
    <div class="space-y-3">
        <!-- APGAR -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">APGAR (minutos)</span>
            </label>
            <div class="grid grid-cols-3 gap-2">
                <input
                    type="number"
                    placeholder="1 min"
                    min="0"
                    max="10"
                    class="input input-bordered input-sm text-center focus:shadow-lg transition-all duration-300"
                />
                <input
                    type="number"
                    placeholder="5 min"
                    min="0"
                    max="10"
                    class="input input-bordered input-sm text-center focus:shadow-lg transition-all duration-300"
                />
                <input
                    type="number"
                    placeholder="10 min"
                    min="0"
                    max="10"
                    class="input input-bordered input-sm text-center focus:shadow-lg transition-all duration-300"
                />
            </div>
        </div>

        <!-- Edad Gestacional -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium"
                    >Edad Gestacional (semanas)</span
                >
            </label>
            <div class="flex gap-2">
                <input
                    type="number"
                    placeholder="Desde"
                    class="input input-bordered flex-1 input-sm focus:shadow-lg transition-all duration-300"
                />
                <input
                    type="number"
                    placeholder="Hasta"
                    class="input input-bordered flex-1 input-sm focus:shadow-lg transition-all duration-300"
                />
            </div>
        </div>
    </div>
</div>

<!-- T Ingreso y RCIU -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Detalles Clínicos</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- T Ingreso -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">T° de Ingreso (°C)</span>
            </label>
            <input
                type="number"
                placeholder="36.5"
                step="0.1"
                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
            />
        </div>

        <!-- RCIU -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">RCIU</span>
            </label>
            <select
                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
            >
                <option value="no">No</option>
                <option value="si-tipo1">Sí (Tipo I)</option>
                <option value="si-tipo2">Sí (Tipo II)</option>
                <option value="si-tipo3">Sí (Tipo III)</option>
            </select>
        </div>
    </div>
</div>

<!-- REM, Reanimación, Líquido Meconial, Fallece en Sala de Parto -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Eventos Críticos</h3>
    <div class="space-y-3">
        <!-- REM -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">REM</span>
            </label>
            <select
                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
            >
                <option value="no">No</option>
                <option value="menos-24"> {"<24"} horas </option>
                <option value="1-7">1-7 días</option>
                <option value="mas-7">>7 días</option>
            </select>
        </div>

        <!-- Reanimación -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Reanimación</span>
            </label>
            <div class="space-y-1">
                <label
                    class="label cursor-pointer justify-start hover:bg-primary/5 rounded p-1 px-2 transition-all duration-200"
                >
                    <input
                        type="checkbox"
                        class="checkbox checkbox-primary mr-2"
                    />
                    <span class="label-text text-sm">No</span>
                </label>
                <label
                    class="label cursor-pointer justify-start hover:bg-primary/5 rounded p-1 px-2 transition-all duration-200"
                >
                    <input
                        type="checkbox"
                        class="checkbox checkbox-primary mr-2"
                    />
                    <span class="label-text text-sm">FIO2</span>
                </label>
                <label
                    class="label cursor-pointer justify-start hover:bg-primary/5 rounded p-1 px-2 transition-all duration-200"
                >
                    <input
                        type="checkbox"
                        class="checkbox checkbox-primary mr-2"
                    />
                    <span class="label-text text-sm">VPP / Neopuff</span>
                </label>
                <label
                    class="label cursor-pointer justify-start hover:bg-primary/5 rounded p-1 px-2 transition-all duration-200"
                >
                    <input
                        type="checkbox"
                        class="checkbox checkbox-primary mr-2"
                    />
                    <span class="label-text text-sm">Intubación + VPP</span>
                </label>
            </div>
        </div>

        <!-- Líquido Meconial -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Líquido Meconial</span>
            </label>
            <select
                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
            >
                <option value="no">No</option>
                <option value="si">Sí</option>
            </select>
        </div>

        <!-- Fallece en Sala de Parto -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium"
                    >Fallece en Sala de Parto</span
                >
            </label>
            <select
                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
            >
                <option value="no">No</option>
                <option value="si">Sí</option>
            </select>
        </div>
    </div>
</div>
