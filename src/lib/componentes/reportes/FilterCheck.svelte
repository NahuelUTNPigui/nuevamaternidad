<script>
    let { value = $bindable(false), label,idlabel,cambiar=()=>{} } = $props();
</script>

<label class="label cursor-pointer justify-start gap-2">
    <input
        type="checkbox"
        class="checkbox checkbox-primary checkbox-sm"
        id={idlabel}
        onchange={cambiar}
        
        bind:checked={value}
    />
    <span>{label}</span>
</label>
