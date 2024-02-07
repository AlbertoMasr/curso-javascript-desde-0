class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    
    hacerRuido() {
        console.log(this.nombre + ' hace un ruido.');
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, 'Perro');
        this.raza = raza;
    }
    
    hacerRuido() {
        console.log(this.nombre + ' ladra.');
    }
}

class Gato extends Animal {
    constructor(nombre, raza) {
        super(nombre, 'Gato');
        this.raza = raza;
    }
    
    hacerRuido() {
        console.log(this.nombre + ' maulla.');
    }
}

const perro1 = new Perro('Coco', 'Xoloitzcuintle');
const gato1 = new Gato('Gary', 'Siames');

console.log(perro1);
console.log(gato1);

perro1.hacerRuido();
gato1.hacerRuido();

Animal.prototype.jugar = function() {
    console.log(this.nombre + ' está jugando.');
};

perro1.jugar();
gato1.jugar();