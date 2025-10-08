/*
10.Un tienda vende monitores, teclados y ratones. Los productos se almacenan en un
array donde cada elemento es “producto, precio”. Por ejemplo; [ [“monitor”, 150],
[“teclado”, 30], [“raton”, 20] ] Crea un array con varios productos y precios. Diseña
un programa que pida el nombre de un producto (en minúscula) y devuelva su
precio.
*/

let productos = [
    ["monitor", 150],
    ["teclado", 30],
    ["raton", 20],
    ["altavoz", 50],
    ["auriculares", 40]
];

let producto = prompt("Introduce el nombre del producto (en minúscula):");
let precio = null;

for (let i = 0; i < productos.length; i++) {
    if (productos[i][0] === producto) {
        precio = productos[i][1];
        break; 
    }
}

if (precio !== null) {
    alert("El precio de " + producto + " es: " + precio + "€");
} else {
    alert("Producto no encontrado.");
}
