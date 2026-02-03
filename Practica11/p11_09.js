/*
09. Descarga la imagen del coche. Crea un <img> con esa imagen y un botón “Agrandar”.
Cada vez que se pulse el botón, la anchura de la imagen debe aumentar un 50%.
Después de tres pulsaciones, el botón debe deshabilitarse.
*/

let contador = 0;
function agrandarImagen(src) {
    let boton = document.getElementById("btn");
    let imagen = document.getElementById("imagen");
    let anchoActual = imagen.getAttribute("width");
    imagen.setAttribute("width", anchoActual * 1.5);
    contador++;
    if (contador === 3) {
        boton.disabled = true;
    }
}





