<script>

</script>
<div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Unidad -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Unidad</span>
            </label>
            <select
                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
            >
                <option value="" disabled selected>Seleccionar unidad</option>
                <option value="urgencias">Todas</option>
                <option value="cuidados-intensivos">unidad 1</option>
            </select>
        </div>

        <!-- Área -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Área</span>
            </label>
            <select
                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
            >
                <option value="" disabled selected>Seleccionar área</option>
                <option value="norte">Todas</option>
                <option value="norte">UCI 1</option>
                <option value="sur">UTI 1</option>
            </select>
        </div>
    </div>
</div>

<div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Fecha Desde</span>
            </label>
            <input
                type="date"
                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
            />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium">Fecha Hasta</span>
            </label>
            <input
                type="date"
                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
            />
        </div>
    </div>
</div>
