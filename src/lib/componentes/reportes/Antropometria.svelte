<script>
    import Peso from "./antro/Peso.svelte";
    import Perimetro from "./antro/Perimetro.svelte";
    import Talla from "./antro/Talla.svelte";
    import ZScore from "./antro/ZScore.svelte";
    import Edad from "./antro/Edad.svelte";

    let {
        cambiarFiltro,
        peso_rn = $bindable(""),
        peso_7 = $bindable(""),
        peso_14 = $bindable(""),
        peso_21 = $bindable(""),
        peso_28 = $bindable(""),
        peso_36 = $bindable(""),
        
        cefalico_rn = $bindable(""),
        cefalico_7 = $bindable(""),
        cefalico_14 = $bindable(""),
        cefalico_21 = $bindable(""),
        cefalico_28 = $bindable(""),
        cefalico_36 = $bindable(""),
        
        talla_rn = $bindable(""),
        talla_7 = $bindable(""),
        talla_14 = $bindable(""),
        talla_21 = $bindable(""),
        talla_28 = $bindable(""),
        talla_36 = $bindable(""),
        
        scorez_rn = $bindable(""),
        scorez_7 = $bindable(""),
        scorez_14 = $bindable(""),
        scorez_21 = $bindable(""),
        scorez_28 = $bindable(""),
        scorez_36 = $bindable(""),
        
        recuperarpesodesde = $bindable(""),
        recuperarpesohasta = $bindable(""),
    }=$props()

</script>
<Peso
bind:peso_rn
bind:peso_7
bind:peso_14
bind:peso_21
bind:peso_28
bind:peso_36
/>
<Perimetro
bind:cefalico_rn
bind:cefalico_7
bind:cefalico_14
bind:cefalico_21
bind:cefalico_28
bind:cefalico_36
/>
<Talla
bind:talla_rn
bind:talla_7
bind:talla_14
bind:talla_21
bind:talla_28
bind:talla_36
/>
<ZScore
bind:scorez_rn
bind:scorez_7
bind:scorez_14
bind:scorez_21
bind:scorez_28
bind:scorez_36
/>
<Edad
bind:recuperarpesodesde
bind:recuperarpesohasta
/>





