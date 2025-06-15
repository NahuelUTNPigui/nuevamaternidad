import { browser } from "$app/environment";
export function getLocalStorage(){
    if(browser){
        let json_user = localStorage.getItem("usuario")
        if(json_user != null){
            return JSON.parse(json_user)
        }
        else{
            return {id:"",nombre:"",rol:""}
        }
        
    }
    else{
        return {id:"",nombre:"",rol:""}
    }
}
export function setLocalStorage(id,nombre,rol){
    let json_user = JSON.stringify({id,nombre,rol})
    if(browser){
        localStorage.setItem("usuario",json_user)
    }
}
export function setLocalStorageDefault(){
    let json_user = JSON.stringify({id:"",nombre:"",rol:""})
    if(browser){
        localStorage.setItem("usuario",json_user)
    }
}


