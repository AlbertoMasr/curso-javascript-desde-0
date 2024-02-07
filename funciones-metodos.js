/*
// Callback
function a() {}
function b(callback){
    callback();
}

// Declaración de funciones
function c() {
    function d(){}
    return d;
}

// Expresiones de funciones
const e = function(){}

// Propiedades y métodos
function f() {}
const obj = {}
f.call(obj);

// Funciones anidadas
function g() {
    function h() {
        function i() {}
        i();
    }
    h();
}
g();
*/

// Almacenar funcones en objetos
const cohete = {
    nombre: 'Falcon 9',
    lanzar: function lanzarMensaje() {
        console.log('Lanzando ' + this.nombre);
    }
}
cohete.lanzar();