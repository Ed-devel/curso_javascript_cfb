// Vídeo 22 - FUNÇÕES com retorno em Javascript P2 - Aula 21

"use strict"

const FUNCAO = require('./separador.js');

function canal() {
    return "função Canal ...";
}

console.log( canal() );
console.log( canal() );
console.log( canal() );

FUNCAO.separador("----------------------------------------------");

/* Não possível 2 return's. É possível apenas um retorno. Caso haja
   mais de um return, então será retornado o primeiro encontrado. */
function mult() {
    let n1 = 10;
    let n2 = 2;
    let res = n1 * n2;;    

    if (!(res % 2))
        return "par";
    else
        return "ímpar";
}

console.log( mult() );

FUNCAO.separador("----------------------------------------------");

let num = mult();
console.log( "num é "+num );

/* OUTPUT

função Canal ...
função Canal ...
função Canal ...
-------------------------------------------------------
par
-------------------------------------------------------
num é par
*/