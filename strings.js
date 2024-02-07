const primerString = 'Hola';
const segundoString = 'Mundo';
const saludo = [primerString, segundoString];

// Join()
console.log(saludo.join(' '));

// Concat()
console.log(''.concat(primerString, ' ', segundoString));

// String primitivo
const stringPrimitivo = 'Hola mundo primitivo';
const otroStringPrimitivo = String('Hola mundo primitivo de nuevo');

console.log(typeof stringPrimitivo);
console.log(typeof otroStringPrimitivo);

// String objeto
const stringObjeto = new String('Hola mundo objeto');

console.log(typeof stringObjeto);