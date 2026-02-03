/*
10. Crea una página donde aparezcan las siguientes imágenes: perro.png, gato.jpg, conejo.jpg, coche.png, moto.jpg
Añade un botón que, al pulsarlo, muestre en la propia página el número de imágenes que hay 
junto con los datos de cada imagen (nombre.extensión).
*/

function contarImagen() {

 let imagenes = document.getElementsByTagName("img");
 let parrafo= document.getElementById("infoImagenes");
 parrafo.innerHTML = "Número de imágenes: " + imagenes.length;
 for (let i = 0; i < imagenes.length; i++) {
    parrafo.innerHTML += "<br>Imagen " + (i+1) + ": " + imagenes[i].getAttribute("src");
  }
}