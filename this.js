// Enlace implícito
const casa = {
    nombrePerro: 'Coco',
    saludoPerro: function () {
        console.log(`Hola, mi nombre es ${this.nombrePerro}`);
    }
}

casa.saludoPerro();

function saludarPerro() {
    console.log(`Hola, mi nombre es ${this.nombrePerro}`);
}

const otraCasa = {
    nombrePerro: 'Firulais',
    saludoPerro: saludarPerro
}

otraCasa.saludoPerro();

// Enlace implícito

const casaNueva = {
    nombrePerro: 'Tommy'
}

saludarPerro.call(casaNueva);

function nuevoSaludarPerro(propietario, domicilio) {
    console.log(`Hola, mi nombre es ${this.nombrePerro}, y mi propietario es ${propietario} y vivo en ${domicilio}`);
}

nuevoSaludarPerro.call(casaNueva, 'Juan', 'Calle 123');