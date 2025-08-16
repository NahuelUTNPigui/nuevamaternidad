<!-- Alimentación Enteral Trófica -->
<div>
    <h3 class="font-medium mb-3 text-base-content">
        Alimentación Enteral Trófica
    </h3>
    <div class="form-control">
        <label
            class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
        >
            <select
                class="select select-bordered select-sm flex-1"
            >
                <option value="no">No</option>
                <option value="si">Sí</option>
            </select>
        </label>
    </div>
</div>

<!-- Alimentación Enteral Completa -->
<div>
    <h3 class="font-medium mb-3 text-base-content">
        Alimentación Enteral Completa
    </h3>
    <div class="form-control space-y-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
                <label class="label">
                    <span class="label-text font-medium"
                        >Volumen (ml/kg/día)</span
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
            <div>
                <label class="label">
                    <span class="label-text font-medium"
                        >Calorías Totales (kcal/kg/día)</span
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
</div>

<!-- Tipo de Alimentación Enteral -->
<div>
    <h3 class="font-medium mb-3 text-base-content">
        Tipo de Alimentación Enteral
    </h3>
    <div class="form-control">
        <select
            class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"
        >
            <option value="" disabled selected>Seleccionar tipo</option>
            <option value="materna">Leche Materna</option>
            <option value="artificial">Fórmula Artificial</option>
            <option value="mixta">Mixta (Materna + Artificial)</option>
        </select>
    </div>
</div>

<!-- Nutrición Parenteral -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Nutrición Parenteral</h3>
    <div class="form-control">
        <label
            class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
        >
            <select
                class="select select-bordered select-sm flex-1"
                id="npt-select"
            >
                <option value="no">No</option>
                <option value="si">Sí</option>
            </select>
        </label>
    </div>
</div>

<!-- Campos de NPT (se pueden mostrar/ocultar con JS si es necesario) -->
<div
    id="npt-fields"
    class="space-y-4 bg-base-100 rounded-lg p-4 border border-base-content/10"
>
    <h4 class="font-medium text-base-content text-sm tracking-wide">
        Detalles de Nutrición Parenteral Total (NPT)
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Edad de inicio -->
        <div class="form-control">
            <label class="label">
                <span class="label-text text-sm font-medium"
                    >Edad de Inicio (días de vida)</span
                >
            </label>
            <input
                type="number"
                placeholder="Ej. 1"
                class="input input-bordered input-xs focus:shadow-sm transition-all duration-300"
            />
        </div>

        <!-- Duración en días -->
        <div class="form-control">
            <label class="label">
                <span class="label-text text-sm font-medium"
                    >Duración (días)</span
                >
            </label>
            <input
                type="number"
                placeholder="Ej. 10"
                class="input input-bordered input-xs focus:shadow-sm transition-all duration-300"
            />
        </div>

        <!-- Día de inicio de Aminoácidos -->
        <div class="form-control">
            <label class="label">
                <span class="label-text text-sm font-medium"
                    >Día de inicio de Aminoácidos</span
                >
            </label>
            <input
                type="number"
                placeholder="Día de vida"
                class="input input-bordered input-xs focus:shadow-sm transition-all duration-300"
            />
        </div>

        <!-- Aporte total de aminoácidos -->
        <div class="form-control">
            <label class="label">
                <span class="label-text text-sm font-medium"
                    >Aporte Total de AA (g/kg/día)</span
                >
            </label>
            <input
                type="number"
                step="0.1"
                placeholder="Ej. 3.5"
                class="input input-bordered input-xs focus:shadow-sm transition-all duration-300"
            />
        </div>

        <!-- Día de inicio de lípidos -->
        <div class="form-control">
            <label class="label">
                <span class="label-text text-sm font-medium"
                    >Día de inicio de Lípidos</span
                >
            </label>
            <input
                type="number"
                placeholder="Día de vida"
                class="input input-bordered input-xs focus:shadow-sm transition-all duration-300"
            />
        </div>

        <!-- Aporte total de lípidos -->
        <div class="form-control">
            <label class="label">
                <span class="label-text text-sm font-medium"
                    >Aporte Total de Lípidos (g/kg/día)</span
                >
            </label>
            <input
                type="number"
                step="0.1"
                placeholder="Ej. 3.0"
                class="input input-bordered input-xs focus:shadow-sm transition-all duration-300"
            />
        </div>
    </div>
</div>
