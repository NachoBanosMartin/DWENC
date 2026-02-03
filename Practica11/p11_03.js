/*
3. Crea una página con un botón “Añadir elemento”. Cada vez que se pulse, se debe
crear un nuevo <li> con el texto “Elemento X”, donde X es un contador que se
incremente cada vez que se pulse el botón.
Puedes ayudarte del apartado Node() en la chuleta.
*/

let contador = 1;

function agregarElemento() {
    let lista = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerText = "Elemento " + contador++;
    lista.appendChild(li);
}
