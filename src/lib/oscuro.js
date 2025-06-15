import { browser } from "$app/environment";
export function getOscuroStorage(){
    if(browser){
        let dark = localStorage.getItem("dark")
        if(dark != null){
            let esdark = dark == "dark"
            return esdark
        }
        else{
            return false
        }
        
    }
    else{
        return false
    }
}
export function setOscuroStorage(dark){
    if(browser){
        let esdark = dark == "dark"
        
        localStorage.setItem("dark",esdark?"dark":"light")
        
    }
}