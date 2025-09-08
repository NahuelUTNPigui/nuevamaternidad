<script>
    let { titulo, children } = $props();

</script>
<div
    class={`
    
      collapse collapse-arrow rounded-box border 
      dark:bg-gray-800 dak:border-gray-700
      border-base-300 bg-white
      
    `}
  >
    <input type="checkbox" />
    <div class="collapse-title text-md font-medium flex items-center gap-2">
      {titulo}
    </div>
    <div class="collapse-content">
      {@render children()}
    </div>
  </div>