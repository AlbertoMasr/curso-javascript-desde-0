// Objeto
console.log("Objeto")
const frutas = new Array("Manzana", "Pera", "Uva", "Sandía", "Melón", "Plátano")
console.log(frutas)

// Literal sinaxis
console.log("Literal sintaxis")
const frutas2 = ["Manzana", "Pera", "Uva", "Sandía", "Melón", "Plátano"]
console.log(frutas2)

// Valores mixtos
console.log("Valores mixtos")
const mixto = ["Manzana", 1, true, null, undefined, {nombre: "Juan", edad: 25}]
console.log(mixto)

// Mutabilidad
console.log("Mutabilidad")
frutas.push("Mango")
console.log(frutas)

// Inmutabilidad
console.log("Inmutabilidad")
const nuevoArregloFrutas = frutas.concat("Coco")
console.log(frutas)
console.log(nuevoArregloFrutas)

// Validar si es un arreglo
console.log("Validar si es un arreglo")
console.log(Array.isArray(frutas))

// Pop
console.log("Pop")
frutas.pop()
console.log(frutas)

// Push
console.log("Push")
frutas.push("Mango")
console.log(frutas)

// Shift
console.log("Shift")
frutas.shift()
console.log(frutas)

// Unshift
console.log("Unshift")
frutas.unshift("Manzana")
console.log(frutas)

// Splice
console.log("Splice")
console.log(frutas)
console.log(frutas.splice(2, 1))
console.log(frutas)

// Slice
console.log("Slice")
console.log(frutas)
console.log(frutas.slice(2, 4))
console.log(frutas)
console.log(frutas.slice(-1))

// Reverse
console.log("Reverse")
console.log(frutas)
console.log(frutas.reverse())
console.log(frutas)

// Sort
console.log("Sort numeros")
const numeros = [1, 3, 18, 2, 34, 29, 33, 10]
console.log(numeros)
console.log(numeros.sort())
console.log(numeros)
console.log(numeros.sort((a, b) => a - b))
console.log(numeros)

console.log("Sort letras")
console.log(frutas)
console.log(frutas.sort())
console.log(frutas)

// Fill
console.log("Fill")
const edades = [25, 30, 40, 50, 60, 70]
console.log(edades)
console.log(edades.fill(0, 3))
console.log(edades)