/*
3. Dado el array ["Ana", "Pedro", "Marta", "Pedro", "Lucía", "Javier"], elimina todas las
ocurrencias del nombre que introduzca el usuario hasta que escriba “salir” o el
array no tenga elementos.
*/

let nombres = ["Ana", "Pedro", "Marta", "Pedro", "Lucía", "Javier"];
let eleccion = prompt("Indica el nombre que quieras eliminar: ");
let nombresFinal;

let posicion = nombres.indexOf(eleccion);



if(nombres.includes(eleccion)){
    nombresFinal = nombres.splice(posicion, 1);
}else{
    alert("El nombre indicado no se encuentra en el array");
}   

console.log(nombresFinal);



