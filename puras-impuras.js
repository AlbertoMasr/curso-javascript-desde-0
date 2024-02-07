// Funciones puras
function suma(a, b) {
    return a + b;
}

// Funciones impuras
function suma(a, b) {
    console.log('Sumando ' + a + ' + ' + b);
    return a + b;
}

let total = 0;

function suma(a, b) {
    total = a + b;
    return total;
}

function raizCuadrada(numero) {
    return Math.sqrt(numero);
}

const numero1 = 4;
const numero2 = 9;

const resultado = suma(numero1, raizCuadrada(numero2));

console.log(resultado);

// Efectos secundarios
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual