// For tradicional
console.log('For tradicional');

const frutasArreglo = ["banana", "manzana", "uva", "pera", "naranja"];
const frutasObjeto = {
    banana: {
        cantidad: 10,
    },
    manzana: {
        cantidad: 5,
    },
    uva: {
        cantidad: 20,
    },
    pera: {
        cantidad: 15,
    },
    naranja: {
        cantidad: 25,
    }
};

for (let i = 0; i < frutasArreglo.length; i++) {
    console.log(frutasArreglo[i]);
}

console.log('---------------------');

console.log('ForEach');

// ForEach
frutasArreglo.forEach(fruta => console.log(fruta));

console.log('---------------------');

console.log('For Of');

// ForOf
for(const fruta of frutasArreglo) {
    console.log(fruta);
}

console.log('---------------------');

console.log('For In');

// ForIn
for(const fruta in frutasObjeto) {
    console.log(`La fruta es ${fruta} y la cantidad es ${frutasObjeto[fruta].cantidad}`);
}