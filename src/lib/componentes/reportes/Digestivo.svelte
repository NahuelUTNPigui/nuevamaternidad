<!-- NEC - Enterocolitis Necrotizante -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                NEC (Enterocolitis Necrotizante)
        </h3>
        <div class="form-control space-y-3">
                <select
                        class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"
                        
                >
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                </select>
                <div id="nec-estadio" class="hidden pl-2">
                        <label class="label">
                                <span class="label-text text-sm font-medium"
                                        >Estadio de NEC (Bell)</span
                                >
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="1">Estadio I (leve)</option>
                                <option value="2">Estadio II (moderado)</option>
                                <option value="3"
                                        >Estadio III (grave, con neumoperitoneo)</option
                                >
                        </select>
                </div>
        </div>
</div>

<!-- Perforación Única -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Perforación Intestinal Única
        </h3>
        <div class="form-control">
                <label
                        class="label cursor-pointer justify-start hover:bg-error/5 rounded-lg p-2 transition-all duration-200"
                >
                        <input
                                type="checkbox"
                                class="checkbox checkbox-error mr-2"
                                
                        />
                        <span class="label-text"
                                >Presentó perforación única</span
                        >
                </label>
        </div>
        <div
                id="perforacion-note"
                class="hidden mt-2 p-3 bg-error/10 border border-error/30 rounded-lg text-sm text-base-content"
        >
                <strong>Nota:</strong> Puede asociarse a NEC, uso de inotrópicos
                o catéter umbilical.
        </div>
</div>

<!-- Malformaciones Congénitas -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Malformaciones Congénitas
        </h3>
        <div class="space-y-3">
                <!-- Onfalocele -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text">Onfalocele</span>
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                        </select>
                </div>

                <!-- Gastrosquisis -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text">Gastrosquisis</span>
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                        </select>
                </div>

                <!-- Atresia de Colon (HDC) -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text"
                                        >Atresia de Colon (HDC)</span
                                >
                        </label>
                        <select
                                class="select select-bordered select-sm w-full"
                                
                        >
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                        </select>
                </div>

                <!-- Diagnóstico de HDC -->
                <div id="hdc-diagnostico" class="hidden pl-4 space-y-2">
                        <label class="label">
                                <span class="label-text text-sm font-medium"
                                        >Momento del Diagnóstico</span
                                >
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="prenatal"
                                        >Prenatal (eco fetal)</option
                                >
                                <option value="postnatal"
                                        >Postnatal (clínico + Rx)</option
                                >
                        </select>
                </div>

                <!-- Tratamiento Quirúrgico de HDC -->
                <div id="hdc-tto" class="hidden pl-4 space-y-2">
                        <label class="label">
                                <span class="label-text text-sm font-medium"
                                        >Tipo de Tratamiento Quirúrgico</span
                                >
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="protesis"
                                        >Colostomía con prótesis</option
                                >
                                <option value="cierre-inmediato"
                                        >Cierre primario inmediato</option
                                >
                                <option value="cierre-diferido"
                                        >Cierre diferido</option
                                >
                        </select>
                </div>
        </div>
</div>

<!-- TQT (Tratamiento Quirúrgico Temprano) -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                TQT (Trat. Quirúrgico Temprano)
        </h3>
        <div class="form-control">
                <label
                        class="label cursor-pointer justify-start hover:bg-secondary/5 rounded-lg p-2 transition-all duration-200"
                >
                        <input
                                type="checkbox"
                                class="checkbox checkbox-secondary mr-2"
                        />
                        <span class="label-text"
                                >Recibió cirugía en las primeras 72h de vida</span
                        >
                </label>
        </div>
</div>

<!-- Drenajes -->
<div>
        <h3 class="font-medium mb-3 text-base-content">Drenajes Realizados</h3>
        <div class="space-y-3">
                <!-- Drenaje Pleural -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text">Drenaje Pleural</span>
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                        </select>
                </div>

                <!-- Drenaje Ventricular -->
                <div class="form-control">
                        <label class="label">
                                <span class="label-text"
                                        >Drenaje Ventricular (EVD/LP)</span
                                >
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                        </select>
                </div>
        </div>
</div>
