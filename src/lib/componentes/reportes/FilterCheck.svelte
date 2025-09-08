<script>
    let { value = $bindable(false), label,idlabel } = $props();
</script>

<label class="label cursor-pointer justify-start gap-2">
    <input
        type="checkbox"
        class="checkbox checkbox-primary checkbox-sm"
        id={idlabel}
        bind:checked={value}
    />
    <span>{label}</span>
</label>
