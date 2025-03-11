// Vídeo 24 - Parâmetros REST em funções Javascript P4 - Aula 23

"use strict"
const FUNCAO = require('./separador.js');

/** Parâmetro REST é uma forma de parâmetro onde não é necessário definir
 * uma quantidade de parâmetros que serão enviados para dentro da função.
 */


/* Ao digitar ...valores, indicamos que são parâmetros  REST, ou seja , é
possível  passar uma  quantidade  INDEFINIDA de  parâmetros.  O parâmetro
...valores  é  na  verdade um array  spread. Os  valores desse  array são
espalhados dentro da função . */
function soma(...valores) {

    let res = 0;
    /* .lenht indica a quantidade de parâmetros passados na chamada da
    função, ou seja, o tamanho do Array */
    for (let i = 0; i < valores.length; i++) {
        res += valores[i];        
    }

    return res;
}

console.log(soma(10,5,6,3,1,77));

FUNCAO.separador("----------------------------------------------");

function soma_for_of(...valores) {

    let res = 0;
    
    for (const v of valores) {        
        res += v;        
    }
    return res;
}

console.log(soma_for_of( 1,2,3,4,5) );

/** OUTPUT
 102
----------------------------------------------
15
 */