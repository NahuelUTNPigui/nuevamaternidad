<!-- Ductus Arterioso -->
<div>
        <h3 class="font-medium mb-3 text-base-content">Ductus Arterioso</h3>
        <div class="space-y-4">
                <!-- Presencia de Ductus -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Ductus Persistente</span
                                >
                        </label>
                        <select
                                class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"

                        >
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                        </select>
                </div>

                <!-- Diagnóstico del Ductus -->
                <div
                        class="form-control"
                        id="diagnostico-ductus"
                        style="display: none;"
                >
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Método de Diagnóstico</span
                                >
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="" disabled selected
                                        >Seleccionar método</option
                                >
                                <option value="ecografico">Ecográfico</option>
                                <option value="clinico">Clínico</option>
                                <option value="mixto"
                                        >Mixto (clínico + eco)</option
                                >
                        </select>
                </div>

                <!-- Tratamiento Farmacológico -->
                <div
                        class="form-control"
                        id="tratamiento-farmaco"
                        style="display: none;"
                >
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Tratamiento Farmacológico</span
                                >
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="" disabled selected
                                        >Seleccionar medicamento</option
                                >
                                <option value="indometacina"
                                        >Indometacina</option
                                >
                                <option value="ibuprofeno">Ibuprofeno</option>
                                <option value="otros">Otros</option>
                                <option value="ninguno">No recibió</option>
                        </select>
                </div>

                <!-- Tratamiento Quirúrgico -->
                <div
                        class="form-control"
                        id="tratamiento-quirurgico"
                        style="display: none;"
                >
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Tratamiento Quirúrgico</span
                                >
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                        </select>
                </div>
        </div>
</div>

<!-- Cardiopatía Congénita -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Cardiopatía Congénita (CC)
        </h3>
        <div class="space-y-3">
                <!-- Presencia de CC -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Presenta Cardiopatía Congénita</span
                                >
                        </label>
                        <select
                                class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"

                        >
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                        </select>
                </div>

                <!-- Diagnóstico de CC -->
                <div
                        class="form-control"
                        id="diagnostico-cc"
                        style="display: none;"
                >
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Momento del Diagnóstico</span
                                >
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="" disabled selected
                                        >Seleccionar momento</option
                                >
                                <option value="prenatal"
                                        >Prenatal (eco fetal)</option
                                >
                                <option value="postnatal"
                                        >Postnatal (eco neonatal)</option
                                >
                        </select>
                </div>
        </div>
</div>
