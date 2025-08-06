export const roles =  [
    {id:"admin",nombre:"Administrador"},
    {id:"esc",nombre:"Escritor"},
    {id:"leer",nombre:"Lector"}
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