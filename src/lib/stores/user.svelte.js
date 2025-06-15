
let userstate = $state({
    id:"",
    nombre:"",
    rol:""
})
export const user = {
    get userstate(){
        return userstate;
    },
    setUserstate(id,nombre,rol){
        userstate = {id,nombre,rol}
    },
    setDefault(){
        this.setUserstate("","","")
    }
}