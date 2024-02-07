const casaNueva = {
    nombrePerro: 'Tommy'
}

function nuevoSaludarPerro(propietario, domicilio) {
    console.log(`Hola, mi nombre es ${this.nombrePerro}, y mi propietario es ${propietario} y vivo en ${domicilio}`);
}

const nombre = 'Juan';
const domicilio = 'Calle 123';
const nacionalidad = 'Mexicano';

nuevoSaludarPerro.call(casaNueva, nombre, domicilio);

const valores = [nombre, domicilio];
nuevoSaludarPerro.apply(casaNueva, valores);

const nuevoSaludarPerroTommy = nuevoSaludarPerro.bind(casaNueva, nombre, domicilio);
nuevoSaludarPerroTommy();