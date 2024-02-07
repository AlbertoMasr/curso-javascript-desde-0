// Null
const tipoNulo = null;
console.log(tipoNulo);
console.log(typeof tipoNulo);

// Undefined
let tipoIndefinido;
console.log(tipoIndefinido);
console.log(typeof tipoIndefinido);

// Symbol
const simbolo = Symbol('id');
console.log(simbolo);
console.log(typeof simbolo);
const simolo1 = Symbol(1);
const simbolo2 = Symbol(1);
console.log(simolo1 === simbolo2);

// BigInt
const numeroGrande = 9007199254740991n;
console.log(numeroGrande);
const numeroGrande2 = BigInt(9007199254740991);
console.log(numeroGrande2);