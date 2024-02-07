const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 10];

// Find
const numeroMayor5 = numeros.find(numero => numero > 5);

console.log(numeros);
console.log(numeroMayor5);

// FindIndex
const indiceNumeroMayor5 = numeros.findIndex(numero => numero > 5);

console.log(numeros);
console.log(indiceNumeroMayor5);

// Includes
const incluyeNumero5 = numeros.includes(5);

console.log(incluyeNumero5);

// IndexOf
const indiceNumero5 = numeros.indexOf(5);
const ultimoIndiceNumero5 = numeros.lastIndexOf(5);
const indiceNumero11 = numeros.indexOf(11);

console.log(indiceNumero5);
console.log(ultimoIndiceNumero5);
console.log(indiceNumero11);