/*
2. Crea una página con un párrafo y un botón.
Cuando el usuario haga clic en el botón, el texto del párrafo debe cambiar a:
"El contenido ha sido actualizado mediante DOM."
*/

function cambiarTexto() {
    let parrafo = document.getElementById("texto");
    parrafo.innerText = "El contenido ha sido actualizado mediante DOM.";
}
