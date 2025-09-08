<script>
    let{
        titulo,
        children,
        show = $bindable(true)
    } = $props()
    
    
    let collapseclass=$derived(`
            collapse collapse-plus bg-gradient-to-br 
            from-white to-base-50 dark:from-base-300 
            dark:to-base-200 shadow-lg border border-primary/20 
            dark:border-primary/30 hover:shadow-xl 
            transition-all duration-300 group
            ${show?"":"hidden"}
    `)
    
    let collapsetitleclass="collapse-title text-xl font-medium flex items-center gap-3 px-6 py-4 group-hover:bg-primary/5  transition-colors duration-200"
    
    
    let collapsepunto="w-3 h-3 bg-primary rounded-full mr-3"
    
    let collapsetext="text-black/90 dark:text-white font-semibold tracking-wide"
    
    let collapsecontent="collapse-content"
</script>
<div class={collapseclass}>
    <input type="checkbox"/>
    <div class={collapsetitleclass}>
        <div class={collapsepunto}></div>
        <span class={collapsetext}>{titulo}</span>
        
    </div>
    <div class="collapse-content">
        {@render children()}
    </div>
</div>