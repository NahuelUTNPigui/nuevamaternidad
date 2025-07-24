export function isEmpty(str) {
    return (!str || str.length === 0 );
}
export function toDark(oscuro,op1,op2){
    return oscuro?op1:op2
}