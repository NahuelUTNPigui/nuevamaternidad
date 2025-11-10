export function isEmpty(str) {
    return (!str || str.length === 0);
}
export function toDark(oscuro, op1, op2) {
    return oscuro ? op1 : op2
}
export function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
export function capitalize(s) {
 return (s && String(s[0]).toUpperCase() + String(s).slice(1)) || ""
}
export function calcularEdad(fechaNacimiento) {
    // Asegurarse de que la fecha de nacimiento sea un objeto Date válido
    const nacimiento = new Date(fechaNacimiento);

    // Verificar si la fecha es válida
    if (isNaN(nacimiento.getTime())) {
        return -1;
    }

    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    // Si el mes actual es menor que el mes de nacimiento,
    // o si estamos en el mismo mes pero el día aún no ha llegado,
    // restamos un año.
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad -= 1;
    }

    return edad;
}