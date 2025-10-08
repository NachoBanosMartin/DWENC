/*
11. Una ferretería almacena sus productos en un array donde cada elemento es
“producto:” precio. Por ejemplo: “martillo”: 3,5, “alicate”: 1,5, “destornillador”: 2,5.
Crea un array con varios productos y precios. Diseña un programa que pida al
usuario cuántos productos ha comprado de cada elemento del array y calcule el
precio total de la compra.
*/

let productos = {
    martillo: 3.5,
    alicate: 1.5,
    destornillador: 2.5,
    taladro: 45,
    tornillos: 0.1
}

let total = 0;

for(let producto in productos){
    let cantidad = parseInt(prompt("Cuántos productos has comprado de " + producto + "?"));

    if(!isNaN(cantidad) && cantidad > 0){
        total += cantidad * productos[producto];
    }
}