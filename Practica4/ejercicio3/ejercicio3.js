/*
3. Dado el array ["Ana", "Pedro", "Marta", "Pedro", "Lucía", "Javier"], elimina todas las
ocurrencias del nombre que introduzca el usuario hasta que escriba “salir” o el
array no tenga elementos.
*/

let nombres = ["Ana", "Pedro", "Marta", "Pedro", "Lucía", "Javier"];
let eleccion;

do{

    eleccion = prompt("Indica el nombre que quieras eliminar: ");

    if(nombres.includes(eleccion)){
        let posicion = nombres.indexOf(eleccion);
        nombres.splice(posicion, 1);
        console.log("El nombre", eleccion, "se ha eliminado");
    }else{
        alert("El nombre indicado no se encuentra en el array");
    } 

    if(nombres.length == 0){
        alert("Se ha eliminado todo el contenido del array");
        break;
    }
    
    console.log(nombres);

}while(eleccion != "salir");



