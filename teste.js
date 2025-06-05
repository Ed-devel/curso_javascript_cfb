"use strict"

const FUNCAO = require('./separador.js');

let soma = function(...params){
    let res = 0;

    for (const e of params)
        res += e;

    return res;
}

console.log(soma(2,2,3,3,4));

FUNCAO.separador("----------------------------------------------");

let mult = new Function("a","b","return a * b");

console.log(mult(2,5));
