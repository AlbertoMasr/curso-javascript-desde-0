const array1d = [1, 2, 3, 4, 5];
const array2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(array1d);
console.log(array2d);

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz);

matriz[1][2] = 10;

console.log(matriz);

function duplicarMatriz(matriz) {
    let newMatriz = [];

    for(let i = 0; i < matriz.length; i++) {
        newMatriz[i] = [...matriz[i]];
    }

    return newMatriz;
}

const matrizDuplicada = duplicarMatriz(matriz);

console.log(matriz);
console.log(matrizDuplicada);