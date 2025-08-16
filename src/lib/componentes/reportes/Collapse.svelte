<script>
    let{
        titulo,
        children
    } = $props()
</script>
<div class="collapse collapse-plus bg-base-100 shadow-sm border border-base-300">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium flex items-center">
        <div class="w-3 h-3 bg-primary rounded-full mr-3"></div>
        {titulo}
    </div>
    <div class="collapse-content">
        {@render children()}
    </div>
</div>