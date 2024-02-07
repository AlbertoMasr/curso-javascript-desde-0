const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        ciudad: 'Buenos Aires',
        calle: 'Av. Siempreviva',
        numero: 123
    },
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.direccion.ciudad);
console.log(persona.saludar());

persona.despedir = () => {
    console.log('Adios');
}

console.log(persona.despedir());

delete persona.direccion;

console.log(persona);

// Función constructora
function Persona(nombre, apellido, edad, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.direccion = direccion;
}

const persona1 = new Persona('Juan', 'Perez', 25, {ciudad: 'Buenos Aires', calle: 'Av. Siempreviva', numero: 123});
const persona2 = new Persona('Maria', 'Gomez', 30, {ciudad: 'Cordoba'});

console.log(persona1);
console.log(persona2);

/** ESTO NO FUNCIONA **/
// persona1.saludar = function() {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
// };

// persona1.saludar();
/**********************/

/** ESTO SÍ FUNCIONA **/
Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
};

persona1.saludar();
/**********************/