<script>
    let { value = $bindable("") } = $props();
    function getTags(str) {
        return str
            ? str
                  .split("+")
                  .map((tag) => tag.trim())
                  .filter((tag) => tag !== "")
            : [];
    }
</script>

<div class="flex flex-wrap gap-2 mt-1 min-h-[2.5rem]">
    {#if value?.trim()}
        {#each getTags(value) as tag}
            <span
                class="badge badge-soft badge-primary badge-lg px-2 py-1 break-all"
            >
                {tag}
            </span>
        {/each}
    
    {/if}
</div>
