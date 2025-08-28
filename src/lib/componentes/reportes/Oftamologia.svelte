<!-- Fondo de Ojo -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                Fondo de Ojo Realizado
        </h3>
        <div class="form-control">
                <label
                        class="label cursor-pointer justify-start hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                >
                        <select
                                class="select select-bordered select-sm w-full"
                        >
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                        </select>
                </label>
        </div>
</div>

<!-- ROP (Retinopatía del Prematuro) -->
<div>
        <h3 class="font-medium mb-3 text-base-content">
                ROP (Retinopatía del Prematuro)
        </h3>
        <div class="form-control space-y-3">
                <select
                        class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"

                >
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                </select>
                <div id="rop-grado" class="hidden pl-2">
                        <label class="label">
                                <span class="label-text text-sm font-medium"
                                        >Grado de ROP</span
                                >
                        </label>
                        <select class="select select-bordered select-sm w-full">
                                <option value="1">Etapa 1</option>
                                <option value="2">Etapa 2</option>
                                <option value="3">Etapa 3</option>
                                <option value="4"
                                        >Etapa 4 (desprendimiento parcial)</option
                                >
                                <option value="5"
                                        >Etapa 5 (desprendimiento total)</option
                                >
                        </select>
                </div>
        </div>
</div>

<!-- Tratamiento de ROP -->
<div>
        <h3 class="font-medium mb-3 text-base-content">Tratamiento de ROP</h3>
        <div class="form-control space-y-3">
                <select
                        class="select select-bordered select-sm w-full focus:shadow-lg transition-all duration-300"

                >
                        <option value="ninguno">Ninguno</option>
                        <option value="laser">Láser</option>
                        <option value="antiangiogenico"
                                >Antiangiogénico (ej. Bevacizumab)</option
                        >
                        <option value="ambos">Láser + Antiangiogénico</option>
                </select>
                <div
                        id="rop-tto-info"
                        class="hidden pl-2 text-sm text-base-content/70"
                >
                        <p>
                                El tratamiento se indica generalmente en ROP en
                                "zona de plus" o etapa 3 en zona 1/2.
                        </p>
                </div>
        </div>
</div>
