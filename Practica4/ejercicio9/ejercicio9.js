/*
9. En un supermercado, la lista de la compra se almacena en un array donde cada
elemento es “producto:” precio. Por ejemplo: “manzana”: 2, “pera”: 3, “platano”: 1,5.
Crea un array con varios productos y precios. Diseña un programa que sume el
precio total de la compra.
*/

let productos = {Manzana: 2, Pera: 3, Platano: 1.5, Sandia: 12.5, Fresas: 4.65};
let precioFinal = 0;
let eleccion = prompt("Indique lo que desea comprar: ");


for(let i = 0; i < productos.lenght; i ++){
    precioFinal += productos[i][1];
}

console.log("El precio de su compra es de ", precioFinal);

