// Map
const numeros = [1, 2, 3, 4, 5]
const numerosCuadrado = numeros.map(numero => numero * numero)

console.log(numeros)
console.log(numerosCuadrado)

// ForEach
const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Morado"]
const coloresObtenidos = colores.forEach(color => console.log(color))

console.log(colores)
console.log(coloresObtenidos)

// Filter
const edades = [8, 12, 15, 18, 20, 25, 30]
const mayoresEdad = edades.filter(edad => edad >= 18);

console.log(edades)
console.log(mayoresEdad)

// Reduce
const numeros2 = [1, 2, 3, 4, 5]
const suma = numeros2.reduce((acumulador, numero) => acumulador + numero, 0)

console.log(numeros2)
console.log(suma)

const palabras = ["Hola", "Mundo", "JS", "ES6", "Hola", "Hola"]

const contadorPalabras = palabras.reduce((acumulador, palabra) => {
    if(acumulador[palabra]) {
        acumulador[palabra]++
    } else {
        acumulador[palabra] = 1
    }

    return acumulador
}, {});

console.log(palabras)
console.log(contadorPalabras)