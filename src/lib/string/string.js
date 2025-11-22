import { expoOut } from "svelte/easing";

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
export function diasEntreFechas(startDate, endDate) {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    const time1 = date1.getTime();
    const time2 = date2.getTime();

    const differenceInMilliseconds = Math.abs(time2 - time1); // Use Math.abs for absolute difference

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysDifference = Math.round(differenceInMilliseconds / millisecondsPerDay);

    return daysDifference;
}
export function calcularEdadShow(fechaNacimiento, fechaReferencia = new Date()) {
    const nacimiento = new Date(fechaNacimiento);
    const referencia = new Date(fechaReferencia);

    let años = referencia.getFullYear() - nacimiento.getFullYear();
    let meses = referencia.getMonth() - nacimiento.getMonth();
    let dias = referencia.getDate() - nacimiento.getDate();

    if (dias < 0) {
        // Restar un mes y calcular días exactos
        meses -= 1;
        const ultimoMes = new Date(
            referencia.getFullYear(),
            referencia.getMonth(),
            0,
        );
        dias += ultimoMes.getDate();
    }

    if (meses < 0) {
        años -= 1;
        meses += 12;
    }

    return `${años} A ${meses} M ${dias} D`;
}