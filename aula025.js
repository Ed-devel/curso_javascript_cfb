/*  Vídeo 26 - Arrow Function em Javascript.
    Aprenda o que é e como usar! - Aula 25 */

"use strict"

const FUNCAO = require('./separador.js');

FUNCAO.separador("----------------------------------------------");

/** Arrow  Function ou Função Lambda , nomes usados  para representar
 * funções anônimas. Resumindo,funções lambda são mecanismos concisos
 * para  representar  funções anônimas. Arrow Function  é um tipo  de 
 * declaração de função anônima. */

/** As funções  anônimas  são  associadas  à  uma  variável , podendo
 * inclusive ser uma constante.  */

// const soma = function(v1, v2){return v1 + v2};

/** Para usar  o Arrow Function é usada a mesma estrutura de montagem
 * de uma função anônima, porêm  usando o padrão abaixo, com o uso de
 * seta =>  . Por isso o  nome Arrow Function (Função de Seta). É uma
 * forma de leitura muito dinâmica e interessante. 
 * 
 * cons variavel = () => {}
 */

// Função abaixo representada no padrão Arrow Function
const soma = (v1, v2) => {return v1 + v2}

console.log(soma(5, 8));

/** DETALHES A SEREM OBSERVADOS:
 * 
 * - Se for  uma função  onde há somente  um parâmetro, então  não há
 * necessidade de colocar entre parênteses. Porém as chaves devem ser
 * colocadas para representar o corpo da função:                   */

const nome = n => {return n}

console.log(nome("Manly"));

/** No padrão Arrow Function  não há necessidade de usar o  return. E
 * quando não se usa o return não há necessidade de usar as chaves {} 
 */

const add = n => n + 10;

console.log( add(5) );

/* Porém isso só é correto quando há APENAS UMA LINHA dentro da Arrow
* Function. Se for uma função mais elaborada com várias linhas, então
* há necessidade de usar o return e as chaves. */

const multiplos = (vMult, n) =>{

    let res = 1;
    for (let i = 0; i <= n; i++) {
        res *= vMult;
    }

    return res;
}

console.log( multiplos(2,5) );

// ------------------------------------------------------------------
// OUTPUT

// 13
// Manly
// 15
// 64