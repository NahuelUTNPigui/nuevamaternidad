<script>

  import Swal from "sweetalert2";

  
    let {
        data=$bindable([]),
        titulo,
        filtros,
        confiltros,
        prepararData=(item)=>{},
        sheetname=""
    } = $props()
    import * as XLSX from "xlsx";
    function exportar(){
        Swal.fire("Exportar","En construccion","info")
    }
    function exportar2(){
        let csvdata = data.map(prepararData)
        
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet([])
        ws['A1']={t:'s',v:"Maternidad ",s:{}}
        
        ws['C1']={t:'s',v:new Date().toLocaleDateString(),s:{}}
        ws['D1']={t:'s',v:titulo.replace(/\//g, "-"),s:{}}
        //const range = XLSX.utils.decode_range('A1:K1');
        //ws['!merges'] = [{ s: { r: range.s.r, c: range.s.c }, e: { r: range.e.r, c: range.e.c } }];
        XLSX.utils.sheet_add_json(ws, csvdata, { origin: 'A3' });
        XLSX.utils.book_append_sheet(wb, ws, titulo.replace(/\//g, "-"));
        if(confiltros){
            const wsFilter = XLSX.utils.aoa_to_sheet(filtros)
            XLSX.utils.book_append_sheet(wb, wsFilter, 'Filtros aplicados');
        }
        XLSX.writeFile(wb, `${titulo.replace(/\//g, "-")}.xlsx`, { cellStyles: true });
        
    }

</script>
<button
    onclick={exportar2}
    class={`
        cursor-pointer
        bg-transparent border rounded-lg focus:outline-none transition-colors duration-200
        dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800
        focus:ring-gray-400 border-gray-800 text-gray-800  hover:bg-gray-800 hover:text-gray-100
        rounded-full
        px-4 pt-2 pb-3
    `} 
    aria-label="Exportar"
>
    <span  class="text-xl font-semibold ">Exportar</span>
    
</button>