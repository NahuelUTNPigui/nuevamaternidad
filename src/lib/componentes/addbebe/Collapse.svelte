<script>
    let { titulo, children } = $props();
    let collapseclass =
        "collapse collapse-plus bg-gradient-to-br from-white to-base-50 dark:from-base-300 dark:to-base-200 shadow-lg border border-primary/20  hover:shadow-xl transition-all duration-300 group";

    let collapsetitleclass =
        "collapse-title text-xl font-medium flex items-center gap-3 px-6 py-4 group-hover:bg-primary/5   transition-colors duration-200";

    let collapsepunto = "w-3 h-3 bg-primary rounded-full mr-3";

    let collapsetext =
        "text-black/90 dark:text-white font-semibold tracking-wide";

    let collapsecontent = "collapse-content";
</script>

<div class={collapseclass}>
    <input type="checkbox" />
    <div class={collapsetitleclass}>
        <div class={collapsepunto}></div>
        <h2
            class={`
      font-semibold text-lg mb-4 flex items-center gap-2 
      dark:text-blue-300 text-blue-600
      
    `}
        >
            {titulo}
        </h2>
    </div>
    <div class="collapse-content">
        {@render children()}
    </div>
</div>
