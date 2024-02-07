// Retorno explícito
const saludar = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar('Juan'));

// Retorno implícito
const saludar2 = (nombre) => `Hola, ${nombre}`;
console.log(saludar2('Juan'));

// Enlace léxico
const personajes = {
    nombre: 'Bruce Wayne',
    saludar: function(saludo) {
        console.log(`${this.nombre} dice: ${saludo}`);
    },
    saludar2: (saludo) => {
        console.log(`${this.nombre} dice: ${saludo}`);
    }
}

personajes.saludar('Soy Batman');
personajes.saludar2('Soy Batman de nuevo');