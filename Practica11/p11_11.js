/*
Crea una página con un botón “Imagen aleatoria” y una imagen de las que hemos estado utilizando.
Al pulsar el botón, debe cambiar la imagen mostrada por una de las siguientes, elegida de forma aleatoria: 
perro.png, gato.jpg, conejo.jpg, coche.png, moto.jpg.
*/

function aleatorizarImagen() {

    let imagenes = ["perro.png", "gato.jpg", "conejo.jpg", "coche.png", "moto.jpg"];
    let indice = Math.floor(Math.random() * imagenes.length);
    let nuevaImagen = document.getElementById("imagen");
    nuevaImagen.setAttribute("src", imagenes[indice]);
}