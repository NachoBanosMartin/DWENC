/*
18. Crea una galería de imágenes donde al pasar el ratón sobre una imagen, se agrande.
*/

let imagenes = document.getElementsByTagName("img");

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("mouseover", function () {
        this.style.width = "300px";
    });

    imagenes[i].addEventListener("mouseout", function () {
        this.style.width = "100px";
    });
}


