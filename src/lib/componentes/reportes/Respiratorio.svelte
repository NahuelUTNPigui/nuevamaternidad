<!-- Diagnósticos Respiratorios -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Diagnósticos Respiratorios
        </h3>
        <div class="space-y-2">
                <!-- EMH -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Enfermedad de Membrana Hialina (EMH)</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                        
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Número de dosis de surfactante (condicional) -->
                <div id="surfactant-doses" class="form-control hidden pl-4">
                        <label class="label">
                                <span class="label-text text-sm"
                                        >N° de Dosis de Surfactante</span
                                >
                        </label>
                        <input
                                type="number"
                                min="1"
                                max="3"
                                placeholder="1-3"
                                class="input input-bordered input-xs w-full focus:shadow-sm transition-all duration-300"
                        />
                </div>

                <!-- Apneas -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Apneas del Prematuro</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Neumotórax -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text">Neumotórax</span>
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Taquipnea Transitoria -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Taquipnea Transitoria</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Hipertensión Pulmonar -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Hipertensión Pulmonar</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Enfermedad Intersticial -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Enfermedad Intersticial</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>
        </div>
</div>

<!-- DBP y O2 a las 36 semanas -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Evaluación a las 36 semanas
        </h3>
        <div class="space-y-3">
                <!-- DBP -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >DBP (intentado a 36 sem)</span
                                >
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                        </select>
                </div>

                <!-- O2 a las 36 semanas -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Oxígeno a las 36 semanas</span
                                >
                        </label>
                        <select
                                class="select select-bordered select-sm w-full"
                                
                        >
                                <option value="no">No</option>
                                <option value="cpap">CPAP</option>
                                <option value="vni">VNI</option>
                                <option value="o2">O2 (FiO₂)</option>
                        </select>
                </div>

                <!-- FiO2 ±30% -->
                <div id="fio2-input" class="form-control hidden">
                        <label class="label">
                                <span class="label-text text-sm"
                                        >FiO₂ (%) ±30%</span
                                >
                        </label>
                        <div class="flex gap-2">
                                <input
                                        type="number"
                                        step="0.01"
                                        placeholder="Desde"
                                        class="input input-bordered flex-1 input-xs focus:shadow-sm transition-all duration-300"
                                />
                                <input
                                        type="number"
                                        step="0.01"
                                        placeholder="Hasta"
                                        class="input input-bordered flex-1 input-xs focus:shadow-sm transition-all duration-300"
                                />
                        </div>
                </div>
        </div>
</div>

<!-- Soportes Respiratorios -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Soportes Respiratorios
        </h3>
        <div class="space-y-2 text-sm">
                <!-- Surfactante -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-secondary/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text">Surfactante</span>
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- ARM -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-secondary/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >ARM (maniobras de reclutamiento)</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Intubado desde UTPR -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-secondary/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Intubado desde UTPR</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- VAFO -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-secondary/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >VAFO (Vent. Asist. Flujo Espont.)</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- CPAP -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-secondary/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text">CPAP</span>
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- OAF -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-secondary/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >OAF (Oxígeno de Alto Flujo)</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- CBF -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-secondary/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >CBF (Canula Biflujo)</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>
        </div>
</div>

<!-- Medicamentos Respiratorios -->
<div>
        <h3 class="font-medium mb-3 text-base-content">Medicamentos</h3>
        <div class="space-y-2">
                <!-- Cafeína -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-accent/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text">Cafeína</span>
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Aminofilina -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-accent/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text">Aminofilina</span>
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Corticoide Inhalado -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-accent/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Corticoide Inhalado</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Corticoide Postnatal -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-accent/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Corticoide Postnatal</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Óxido Nítrico -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-accent/5 rounded p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Óxido Nítrico (NO)</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>
        </div>
</div>
