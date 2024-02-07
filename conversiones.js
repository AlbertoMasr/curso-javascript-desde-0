// Conversión explícita
const cadena = "5";
const entero = parseInt(cadena);
console.log(entero);
console.log(typeof entero);
console.log(cadena);
console.log(typeof cadena);

const cadena2 = "5.5";
const flotante = parseFloat(cadena2);
console.log(flotante);
console.log(typeof flotante);
console.log(cadena2);
console.log(typeof cadena2);

const cadena3 = "1011";
const binario = parseInt(cadena3, 2);
console.log(binario);
console.log(typeof binario);
console.log(cadena3);
console.log(typeof cadena3);

// Conersión implícita
const suma = '9' + 3;
console.log(suma);
console.log(typeof suma);

const booleanoCadena = '9' + true;
console.log(booleanoCadena);
console.log(typeof booleanoCadena);

const booleanoNumero = 9 + true;
console.log(booleanoNumero);
console.log(typeof booleanoNumero);

//
const valorCadena = '9';
const valorNumero = 3;
const valorBooleano = true;

console.log('');
console.log(valorCadena + valorCadena);
console.log(valorCadena + valorNumero);
console.log(valorCadena + valorBooleano);
console.log(valorNumero + valorNumero);
console.log(valorNumero + valorBooleano);
console.log(valorBooleano + valorBooleano);