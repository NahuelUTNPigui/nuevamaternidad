let oscurostate = $state(false)
export const darker = {
    get oscurostate(){
        return oscurostate;
    },
    setOscurostate(oscuro){
        oscurostate = oscuro
    },
    setDefault(){
        this.setOscurostate(false)
    }
}