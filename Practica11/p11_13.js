/*
13. Crea un <img> en la página con cualquiera de las imágenes
y al pulsar un botón, reemplaza la imagen existente por otra imagen.
*/

function cambiarImagen() {
    let img = document.getElementById("imagen");
    img.setAttribute("src", "moto.jpg");
    img.setAttribute("width", "300");
}
//evento para cambiar imagen
document.getElementById("cambiar").addEventListener("click", cambiarImagen);


