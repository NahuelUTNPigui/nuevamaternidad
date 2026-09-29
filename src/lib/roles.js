export const roles =  [
    {id:"admin",nombre:"Administrador",nivel:3},
    {id:"esc",nombre:"Escritor",nivel:2},
    {id:"leer",nombre:"Lector",nivel:1}
]
export function getNombre(id){
    let rols = roles.filter(r=>r.id==id)
    if(rols.length>0){
        return rols[0].nombre
    }
    else{
        return ""
    }
}