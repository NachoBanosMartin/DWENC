/*
6. Descarga las imágenes de los animales. Crea un <img> y tres botones:
- Perro
- Gato
- Conejo

Cuando el usuario pulse cada botón, se debe cambiar la imagen al animal elegido usando setAttribute().
*/

function cambiarImagen(animal) {
    let imagen = document.getElementById("imagen");
    
    if (animal === "perro") {
        imagen.setAttribute("src", "perro.png");
    } else if (animal === "gato") {
        imagen.setAttribute("src", "gato.jpg");
    } else if (animal === "conejo") {
        imagen.setAttribute("src", "conejo.jpg");
    }
}