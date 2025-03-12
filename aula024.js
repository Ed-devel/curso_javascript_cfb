// Vídeo 25 - Funções Anônimas em Javascript P1 - Aula 24

"use strict"

const FUNCAO = require('./separador.js');

/**Função  anônima não  possue um  nome  atribuido  à ela , ou ao  seu
 * conteúdo. São funções que são chamadas em tempo de execução.
 * É o contrário de uma função comum, que ao ser declarada,fica parada
 * esperando  até  que  seja  chamada . Já as funções anônimas têm  um
 * comportamento diferente. Elas são criadas mas não estão na memória,
 * ela só será carregada no momento da execução. Elas também podem ser
 * parametrizadas, como também podem ter retorno de valor.          */

/** Para criar uma  função anônima, a estrutura é  similar à estrutura
 * de uma função convencional,porém o nome da função deve ser omitido.
 * Essa função  também deve ser associada  à uma variável , ou seja, a
 * variável recebe o retorno da função anônima:
 * var f = function(){} 
 * 
 * Assim quando a variável for chamada , então a função é executada em
 * tempo real.                                                      */

let f = function(v1, v2) { return v1 + v2; }

f(12, 6);
console.log(f); // Nesse caso vai imprimir [Function: f]

FUNCAO.separador("----------------------------------------------");

console.log(f(5, 13)); // imprime 18

FUNCAO.separador("----------------------------------------------");

let somaArray = function(...valores) {

    let res = 0;
    for (const v of valores) {
        res += v;
    }

    return res;
}

console.log( somaArray(11,22,33,44) );

FUNCAO.separador("----------------------------------------------");

/**FUNÇÃO ANÔNIMA COM CONTRUTOR
 * 
 * Toda vez que for falar de  contrutor, ou de classes, é necessário o
 * uso do operador new. Também devemos  mudar a construção da  função.
 * Uso de funções anônimas com contrutor são  usados para códigos mais
 * simples, com escopo resumido.
 * 
 * Para declarar uma função anônima é necessário:
 * - A palavra  reservada Function deve ter a  primeira letra, que é o
 *   F maiúscula;
 * - as variáveis e  todo o código devem  estar entre parênteses, onde
 *   ficam os parâmetros;
 * - Sempre  o ÚLTIMO parâmetro , que deve estar  entre aspas , será o
 *   corpo da função;
 * - NÃO há escopo dentro de chaves {};
 * - variáveis , códigos e  operações devem estar entre aspas, como se
 *   fossem strings;
 * - é necessário o uso da palavra reservada new antes de Function  */

// Função Contrutor Anônima
let funcaoContrutor = new Function("v1", "v2", "return v1 + v2");

console.log(funcaoContrutor(10, 22));

/* OUTPUT

[Function: f]
----------------------------------------------
18
----------------------------------------------
110
----------------------------------------------
32

*/
