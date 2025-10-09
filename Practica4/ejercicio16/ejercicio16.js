/*
16. Pide al usuario su fecha de nacimiento (yyyy-mm-dd) y calcula cuántos días faltan
para su próximo cumpleaños. Ayúdate usando Math.ceil para el redondeo hacia
arriba de días. Ejemplo: faltan 2.3 días → Math.ceil(2.3) = 3. Recuerda que en
JavaScript, los objetos Date internamente se representan como milisegundos.
*/

let fechaNac = prompt("Introduce la fecha de nacimiento (yyyy-mm-dd):");
let nacimiento =  new Date (fechaNac);
let hoy = new Date();

let proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());

if(proximoCumple < hoy){
    proximoCumple.getFullYear(hoy.getFullYear() + 1);
}

let diasFaltan  = 0;
let fechaTemp  = new Date();

while(fechaTemp.getFullYear() !== proximoCumple.getFullYear() || fechaTemp.getMonth() !== proximoCumple.getMonth() || 
        fechaTemp.getDate() !== proximoCumple.getDate()){

            fechaTemp.setDate(fechaTemp.getDate() + 1);
            diasFaltan ++;
    }

console.log(diasFaltan);
