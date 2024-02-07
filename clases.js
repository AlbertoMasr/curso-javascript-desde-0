class Persona {
    constructor(nombre, apellido, edad, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona('Juan', 'Perez', 25, {ciudad: 'Buenos Aires', calle: 'Av. Siempreviva', numero: 123});
const persona2 = new Persona('Maria', 'Gomez', 30, {ciudad: 'Cordoba'});

console.log(persona1);
console.log(persona2);

persona1.saludar();
persona2.saludar();