<script>
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";
    
    let oscuro = $derived(darker.oscurostate)
    function td(_oscuro, op1, op2) {
        return toDark(_oscuro, op1, op2);
    }
    let {
        title = $bindable(""),
        header = $bindable(""),
        childrencard,
        childrenheader,
    } = $props();
</script>

<!-- Card con header -->
<div
    class={`
        bg-transparent 
        ${td(oscuro," border-dark-border"," border-gray-200")}
        rounded-lg  shadow-sm transition-colors duration-300
    `}
>
    <div
        class={`
            ${td(oscuro,"border-dark-border","border-gray-200")}
             
            px-4 py-3 sm:px-6 sm:py-4  
        `}
    >
        <h2
            class={`
                ${toDark(oscuro,"text-white","text-blue-500")}
                
                text-xl font-semibold mb-4 flex items-center gap-2
            `}
        >
            {header}
        </h2>
        {@render childrenheader()}
    </div>
    <div class="p-4 sm:p-6">
        {#if title.length > 0}
            <h3
                class={`
                    ${toDark(oscuro,"text-white","text-blue-500")}
                    
                    text-lg font-semibold mb-4 flex items-center gap-2
                `}
            >
                {title}
            </h3>
        {/if}
        <!--Aca podria un children render-->
        {@render childrencard()}
    </div>
</div>
