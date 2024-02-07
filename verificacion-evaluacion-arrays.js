const edades = [21, 25, 30, 19, 22];

// Every
const sonAdultos = edades.every(edad => edad >= 18);

console.log(sonAdultos);

// Some
const hayMayoresDe20 = edades.some(edad => edad > 20);
const hayMenoresDe20 = edades.some(edad => edad < 20);

console.log(hayMayoresDe20);
console.log(hayMenoresDe20);
