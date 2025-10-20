<script>
    let { value = $bindable(false),verde=$bindable(false), label,idlabel,cambiar=()=>{} } = $props();
</script>

<label class="label cursor-pointer justify-start gap-2">
    <input
        type="checkbox"
        class={`checkbox ${verde?"checkbox-success":"checkbox-primary"} checkbox-sm`}
        id={idlabel}
        onchange={cambiar}
        
        bind:checked={value}
    />
    <span>{label}</span>
</label>
