<!-- Sepsis Temprana -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Sepsis Temprana (≤72 h)
        </h3>
        <div
                class="space-y-3 bg-base-100 rounded-lg p-4 border border-base-content/10 shadow-sm"
        >
                <!-- Estado -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Estado</span
                                >
                        </label>
                        <select
                                class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"
                        >
                                <option value="no">No</option>
                                <option value="sospecha"
                                        >Sospecha clínica</option
                                >
                                <option value="confirmada">Confirmada</option>
                        </select>
                </div>

                <!-- Germen (solo si confirmada) -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Germen Identificado</span
                                >
                        </label>
                        <input
                                type="text"
                                placeholder="Ej. E. coli, S. agalactiae"
                                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
                        />
                </div>

                <!-- Antibiótico -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Antibiótico Utilizado</span
                                >
                        </label>
                        <input
                                type="text"
                                placeholder="Ej. Ampicilina + Gentamicina"
                                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
                        />
                </div>

                <!-- Duración (días) -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Duración del Tratamiento (días)</span
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

<!-- Sepsis Tardía -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Sepsis Tardía (>72 h)
        </h3>
        <div
                class="space-y-3 bg-base-100 rounded-lg p-4 border border-base-content/10 shadow-sm"
        >
                <!-- Estado -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Estado</span
                                >
                        </label>
                        <select
                                class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"
                        >
                                <option value="no">No</option>
                                <option value="sospecha"
                                        >Sospecha clínica</option
                                >
                                <option value="confirmada">Confirmada</option>
                        </select>
                </div>

                <!-- Germen -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Germen Identificado</span
                                >
                        </label>
                        <input
                                type="text"
                                placeholder="Ej. Klebsiella, Candida, S. aureus"
                                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
                        />
                </div>

                <!-- Antibiótico -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Antibiótico Utilizado</span
                                >
                        </label>
                        <input
                                type="text"
                                placeholder="Ej. Vancomicina, Meropenem, Anfotericina"
                                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
                        />
                </div>

                <!-- Duración (días) -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Duración del Tratamiento (días)</span
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
