<script>
    import { goto } from "$app/navigation";
    import { darker } from "$lib/stores/oscuro.svelte";
    import { toDark } from "$lib/string/string";

    let oscuro = $derived(darker.oscurostate);
    function td(_oscuro, op1, op2) {
        return toDark(_oscuro, op1, op2);
    }
    // Función para determinar el color del texto basado en la condición
    function getTextColor(oscuro, valor, total) {
        if (valor === total) {
            return toDark(oscuro, "text-sky-400", "text-sky-600");
        } else {
            return toDark(oscuro, "text-white", "text-gray-800");
        }
    }
    let { titulo, valor,total, titsize = "text-xl", urlto = "" } = $props();
</script>

<div
    class={`
        ${td(oscuro,"bg-slate-900","bg-white")}
        rounded-lg shadow-md p-2 transition-colors duration-200
    `}
>
    <button onclick={() => goto(urlto)} class="cursor-pointer text-left">
        <h3
            class={`${titsize} font-semibold ${td(oscuro,"text-gray-300","text-gray-700")} mb-2`}
        >
            {titulo}
        </h3>
        <p  
            class={`
                ${td(oscuro,"text-sky-400","text-sky-600")}
                text-3xl font-bold`
            }
        >
            <span class={`${getTextColor(oscuro,valor,total)}`}>
                {valor}
            </span>
            /{total}
        </p>
    </button>
</div>
