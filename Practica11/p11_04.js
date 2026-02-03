/*
4. Partiendo de una lista con varios <li>, crea un botón “Eliminar último”. 
Al pulsarlo, debe borrarse el último elemento de la lista. 
*/

function eliminarUltimo() {
    let lista = document.getElementById("lista");
    if (lista.lastChild) { //si hay al menos un elemento podemos borrar
        lista.removeChild(lista.lastChild);
    }
}
