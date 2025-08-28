<!-- Hemoderivados -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Hemoderivados</h3>
    <div
        class="space-y-4 bg-base-100 rounded-lg p-4 border border-base-content/10 shadow-sm"
    >
        <!-- TGR (Concentrado de Glóbulos Rojos) -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium"
                    >TGR (Transf. de Glóbulos Rojos)</span
                >
            </label>
            <input
                type="number"
                min="0"
                placeholder="Número de transfusiones"
                class="input input-bordered input-sm w-full focus:shadow-lg transition-all duration-300"

            />
        </div>

        <!-- Plasma -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium"
                    >Plasma Fresco Congelado</span
                >
            </label>
            <input
                type="number"
                min="0"
                placeholder="Número de transfusiones"
                class="input input-bordered input-sm w-full focus:shadow-lg transition-all duration-300"

            />
        </div>

        <!-- Inmunoglobulina (Gamma) -->
        <div class="form-control">
            <label class="label">
                <span class="label-text font-medium"
                    >Inmunoglobulina (Gamma)</span
                >
            </label>
            <input
                type="number"
                min="0"
                placeholder="Número de dosis"
                class="input input-bordered input-sm w-full focus:shadow-lg transition-all duration-300"

            />
        </div>
    </div>
</div>

<!-- Exanguinotransfusión -->
<div>
    <h3 class="font-medium mb-3 text-base-content">Exanguinotransfusión</h3>
    <div class="form-control">
        <label
            class="label cursor-pointer justify-start hover:bg-error/5 rounded-lg p-2 transition-all duration-200"
        >
            <input
                type="checkbox"
                class="checkbox checkbox-error mr-2"
                
            />
            <span class="label-text font-medium"
                >Paciente recibió exanguinotransfusión</span
            >
        </label>
    </div>

    <!-- Nota opcional (visible si está marcado) -->
    <div
        id="exanguino-note"
        class="hidden mt-3 p-3 bg-error/10 border border-error/30 rounded-lg text-sm text-base-content"
    >
        <strong>Nota:</strong> Este procedimiento suele realizarse por hiperbilirrubinemia
        grave, incompatibilidad ABO/Rh o anemia severa.
    </div>
</div>
