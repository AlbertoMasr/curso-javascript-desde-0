function despegueCompleto(informacionAdicional) {
    console.log(`El cohete despegó ${informacionAdicional}`);
}

function Cohete(nombre, despegue) {
    this.nombre = nombre;
    this.despegue = despegue;
    this.despegar = function(mensajeDespegue, informacionAdicional) {
        mensajeDespegue(informacionAdicional);
    }
}

const Falcon9 = new Cohete('Falcon 9', '2021-05-15');
const FalconHeavy = new Cohete('Falcon Heavy', '2021-05-15');

Falcon9.despegar(despegueCompleto, 'con éxito');
FalconHeavy.despegar(despegueCompleto, 'sin éxito');