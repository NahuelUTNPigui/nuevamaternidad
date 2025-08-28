<script>
  import { darker } from "$lib/stores/oscuro.svelte";
  import { toDark } from "$lib/string/string";
  import { goto } from "$app/navigation";
  let oscuro = $derived(darker.oscurostate);
  function volver() {
    goto("/bebes");
  }
</script>

<!-- Título -->
<div class="mb-4">
  <h1 class="text-2xl font-bold">
    <button class="cursor-pointer hover:scale-125" onclick={volver} aria-label="volver">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </button>
    Perfil del Bebé
  </h1>
  <p class={`text-sm  ${toDark(oscuro, "text-gray-400", "text-gray-500")}`}>
    Sistema de Gestión Neonatal
  </p>
</div>
