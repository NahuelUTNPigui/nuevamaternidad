<!-- HIV - Hemorragia Intraventricular -->
            <div>
                <h3 class="font-medium mb-3 text-base-content">HIV (Hemorragia Intraventricular)</h3>
                <div class="form-control space-y-3">
                    <select class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"
                            
                            >
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                    </select>
                    <div id="hiv-grado" class="hidden pl-2">
                        <label class="label">
                            <span class="label-text text-sm font-medium">Grado de HIV</span>
                        </label>
                        <select class="select select-bordered select-sm w-full">
                            <option value="1">Grado I</option>
                            <option value="2">Grado II</option>
                            <option value="3">Grado III</option>
                            <option value="4">Grado IV</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Convulsiones -->
            <div>
                <h3 class="font-medium mb-3 text-base-content">Convulsiones</h3>
                <div class="form-control">
                    <label class="label cursor-pointer justify-start hover:bg-error/5 rounded-lg p-2 transition-all duration-200">
                        <input type="checkbox" class="checkbox checkbox-error mr-2"
                               >
                        <span class="label-text">Paciente presentó convulsiones</span>
                    </label>
                </div>
                <div id="convulsiones-note" class="hidden mt-2 p-3 bg-error/10 border border-error/30 rounded-lg text-sm text-base-content">
                    <strong>Nota:</strong> Puede asociarse a EHI, HIV, infección, hipoglucemia o alteraciones metabólicas.
                </div>
            </div>

            <!-- EHI - Encefalopatía Hipóxico-Isquémica -->
            <div>
                <h3 class="font-medium mb-3 text-base-content">EHI (Encefalopatía Hipóxico-Isquémica)</h3>
                <div class="form-control space-y-3">
                    <select class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"
                            >
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                    </select>
                    <div id="ehi-grado" class="hidden pl-2">
                        <label class="label">
                            <span class="label-text text-sm font-medium">Grado de EHI</span>
                        </label>
                        <select class="select select-bordered select-sm w-full">
                            <option value="leve">Leve (Grado I)</option>
                            <option value="moderado">Moderado (Grado II)</option>
                            <option value="severo">Severo (Grado III)</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Hipotermia -->
            <div>
                <h3 class="font-medium mb-3 text-base-content">Hipotermia</h3>
                <div class="form-control space-y-3">
                    <select class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"
                            >
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                    </select>
                    <div id="hipotermia-tipo" class="hidden pl-2">
                        <label class="label">
                            <span class="label-text text-sm font-medium">Tipo de Hipotermia</span>
                        </label>
                        <select class="select select-bordered select-sm w-full">
                            <option value="cefalica">Cefálica (caput succedaneum tipo especial)</option>
                            <option value="corporal">Corporal (T° central {"<"} 36.5°C)</option>
                        </select>
                    </div>
                </div>
            </div>