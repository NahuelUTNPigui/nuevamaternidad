<div>
    <h3 class="font-medium mb-3 text-base-content">Identificación</h3>
    <div class="grid grid-cols-1 gap-4">
        <!-- DNI Madre -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">DNI de la Madre</span>
            </label>
            <input
                type="text"
                placeholder="Ingresar DNI"
                maxlength="8"
                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
            />
        </div>

        <!-- DNI Recién Nacido -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">DNI del Recién Nacido</span
                >
            </label>
            <input
                type="text"
                placeholder="Ingresar DNI (si aplica)"
                maxlength="8"
                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
            />
        </div>

        <!-- Nombre del Recién Nacido -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium"
                    >Nombre del Recién Nacido</span
                >
            </label>
            <input
                type="text"
                placeholder="Nombre completo"
                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
            />
        </div>
    </div>
</div>

<div>
    <h3 class="font-medium mb-3 text-base-content">Fechas Clave</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Fecha de Nacimiento -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Fecha de Nacimiento</span>
            </label>
            <input
                type="date"
                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
            />
        </div>

        <!-- Fecha de Ingreso -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Fecha de Ingreso</span>
            </label>
            <input
                type="date"
                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
            />
        </div>

        <!-- Fecha de Egreso -->
        <div class="form-control md:col-span-2">
            <label class="label">
                <span class="label-text font-medium">Fecha de Egreso</span>
            </label>
            <input
                type="date"
                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
            />
        </div>
    </div>
</div>
