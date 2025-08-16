<!-- Edad Materna y Nivel Educativo -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Información Demográfica
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Edad Materna -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Edad Materna (años)</span
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

                <!-- Nivel Educativo -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Nivel Educativo</span
                                >
                        </label>
                        <select
                                class="selecat select-bordered select-sm focus:shadow-lg transition-all duration-300"
                                >a
                                <option value="" disabled selected
                                        >Seleccionar nivel</option
                                >
                                <option value="analfabeta">Analfabeta</option>
                                <option value="primario-ci"
                                        >Primario (C.I.)</option
                                >
                                <option value="secundario-ci"
                                        >Secundario (C.I.)</option
                                >
                                <option value="terc-uni-ci"
                                        >Terciario/Universitario (C.I.)</option
                                >
                        </select>
                </div>
        </div>
</div>

<!-- Paridad y Gemelos -->
<div>
        <h3 class="font-medium mb-3 text-base-content">Embarazo y Parto</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Paridad -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Paridad</span
                                >
                        </label>
                        <input
                                type="number"
                                placeholder="Número de partos"
                                class="input input-bordered input-sm focus:shadow-lg transition-all duration-300"
                        />
                </div>

                <!-- Gemelos -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text font-medium"
                                        >Gemelo (cantidad)</span
                                >
                        </label>
                        <select
                                class="select select-bordered select-sm focus:shadow-lg transition-all duration-300"
                        >
                                <option value="no">No</option>
                                <option value="1">Gemelo (2)</option>
                                <option value="2">Trillizo (3)</option>
                                <option value="3">Más de 3</option>
                        </select>
                </div>
        </div>
</div>

<!-- Control Prenatal, Tabaquismo, Adicción -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Factores de Riesgo Conductuales
        </h3>
        <div class="space-y-2">
                <!-- Control Prenatal -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text">Control Prenatal</span>
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="si">Sí</option>
                                        <option value="ci">C/I</option>
                                        <option value="no">No</option>
                                </select>
                        </label>
                </div>

                <!-- Tabaquismo -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text">Tabaquismo</span>
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Adicción -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Adicción (drogas/alcohol)</span
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

<!-- Infecciones e Inmunización -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Infecciones y Condiciones
        </h3>
        <div class="space-y-2">
                <!-- EGB -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >EGB (Estreptococo Grupo B)</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="negativo"
                                                >Negativo</option
                                        >
                                        <option value="positivo"
                                                >Positivo</option
                                        >
                                </select>
                        </label>
                </div>

                <!-- Sulfato de Magnesio -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Sulfato de Mg (neuroprotector)</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Diabetes -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text">Diabetes</span>
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-28"
                                >
                                        <option value="no">No</option>
                                        <option value="previa">Previa</option>
                                        <option value="gestacional"
                                                >Gestacional</option
                                        >
                                </select>
                        </label>
                </div>

                <!-- Criomaninitis -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Cólico/Criomaninitis</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- Infección Congénita -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >Infección Congénita</span
                                >
                                <select
                                        class="select select-bordered select-xs ml-auto min-w-24"
                                >
                                        <option value="no">No</option>
                                        <option value="si">Sí</option>
                                </select>
                        </label>
                </div>

                <!-- ITU -->
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <span class="label-text"
                                        >ITU (Infección Urinaria)</span
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

<!-- Complicaciones Obstétricas -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Complicaciones Obstétricas
        </h3>
        <div class="space-y-2 flex flex-col gap-1.5">
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-error/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <input
                                        type="checkbox"
                                        class="checkbox checkbox-error mr-2"
                                />
                                <span class="label-text"
                                        >Desprendimiento de Placenta</span
                                >
                        </label>
                </div>
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-error/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <input
                                        type="checkbox"
                                        class="checkbox checkbox-error mr-2"
                                />
                                <span class="label-text">HT Crónica</span>
                        </label>
                </div>
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-error/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <input
                                        type="checkbox"
                                        class="checkbox checkbox-error mr-2"
                                />
                                <span class="label-text"
                                        >HIE (Hipertensión Inducida por
                                        Embarazo)</span
                                >
                        </label>
                </div>
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-error/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <input
                                        type="checkbox"
                                        class="checkbox checkbox-error mr-2"
                                />
                                <span class="label-text">Preeclampsia</span>
                        </label>
                </div>
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-error/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <input
                                        type="checkbox"
                                        class="checkbox checkbox-error mr-2"
                                />
                                <span class="label-text">Eclampsia</span>
                        </label>
                </div>
                <div class="form-control">
                        <label
                                class="label cursor-pointer justify-start hover:bg-error/5 rounded-lg p-2 transition-all duration-200"
                        >
                                <input
                                        type="checkbox"
                                        class="checkbox checkbox-error mr-2"
                                />
                                <span class="label-text">Colestasis</span>
                        </label>
                </div>
        </div>
</div>
