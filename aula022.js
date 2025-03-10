// Vídeo 23 - FUNÇÕES parametrizadas em Javascript P3 

"use strict"

const FUNCAO = require('./separador.js');

function mostraVar(p1) {
    console.log(p1);
}

mostraVar("Codigo");
mostraVar(2022);
mostraVar(5.2);

FUNCAO.separador("----------------------------------------------");

function soma(p1, p2) {
    console.log(p1 + p2);
}

/**A ordem dos valores inseridos na chamada da função é a mesma ordem
 * dos parâmetros na declaração da função.
 */
soma(10, 15);

soma("a",1);
soma(true,2);
soma(25);   // Vai retornar NaN pois p2 não foi indicado

FUNCAO.separador("----------------------------------------------");

/**Valor padrão : pode ser  definido  nos parâmetros na  declaração  da
 * função. Nesse caso se o valor não for informado na chamada da função
 * então a variável será preenchida com o valor padrão.  */
function soma2(n1 = 0, n2 = 0) {
    return n1 + n2;
}

console.log(soma2(3));
 
FUNCAO.separador("----------------------------------------------");

const VALOR_PADRAO = 2;

function mult(v1 = VALOR_PADRAO, v2 = VALOR_PADRAO) {
    return v1 * v2;
}

console.log( mult() );
console.log( mult(3) );

FUNCAO.separador("----------------------------------------------");

let valor = 0;

console.log("antes  da função add(v) - valor = "+valor);
function add(v) {
    return valor + v;
}

add(10);
valor = add(10);
console.log("depois da função add(v) - valor = "+valor);

FUNCAO.separador("----------------------------------------------");

valor = add(5);
console.log("depois da função add(v) - valor = "+valor);

FUNCAO.separador("----------------------------------------------");

let val = 0;

console.log("antes  da função adiciona(v) - val = "+val);

/** Em javascript é possível operar uma variável externa dentro de uma
 *  função.   */
function adiciona(v) {
    val += v;
}

adiciona(10);
console.log("depois da função adiciona(v) - val = "+val);

adiciona(6);
console.log("depois da função adiciona(v) - val = "+val);

/* OUTPUT
 
Codigo
2022
5.2
----------------------------------------------
25
a1
3
NaN
----------------------------------------------
3
----------------------------------------------
4
6
----------------------------------------------
antes  da função add(v) - valor = 0
depois da função add(v) - valor = 10
----------------------------------------------
depois da função add(v) - valor = 15
----------------------------------------------
antes  da função adiciona(v) - val = 0
depois da função adiciona(v) - val = 10
depois da função adiciona(v) - val = 16
 */