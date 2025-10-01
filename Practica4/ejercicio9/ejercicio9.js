/*
9. En un supermercado, la lista de la compra se almacena en un array donde cada
elemento es “producto:” precio. Por ejemplo: “manzana”: 2, “pera”: 3, “platano”: 1,5.
Crea un array con varios productos y precios. Diseña un programa que sume el
precio total de la compra.
*/

let productos = [
    { nombre: "manzana", precio: 2 },
    { nombre: "pera", precio: 3 },
    { nombre: "platano", precio: 1.5 },
    { nombre: "naranja", precio: 2.5 }
];


let total = 0;

for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio;
}

alert("El precio total de la compra es: " + total + "€");
