// Vídeo 19 - WHILE  e DO WHILE  em Javascript , entenda a  diferença
// Aula 18

/** Aqui será verificada a diferença entre o Loop While e o Do While.
 * Ambos são usados em situações  indefinidas, ou seja, quando não se
 * sabe a quantidade de vezes que serão iterados o bloco de comandos.
 * No 'While' primeiro é executada uma expressão entre  parênteses, e
 * enquanto  essa expressão for  verdadeira  o  bloco  de comandos  é
 * executado. Na primeira  iteração, se a expressão  for falsa, então
 * o bloco NÃO chega a ser executado nenhuma vez.
 * Já o 'Do While' inicialmente o bloco de comandos é  executado e só
 * no fim da  estrutura é que a expressão lógica com as condições são
 * executadas. Enquanto for  verdadeira o laço se  repete. O bloco de
 * comando  é executado  pelo menos  uma vez  pois  a expressão  só é
 * verificada no final da extrutura e mesmo que for falso na primeira
 * verificação, o primeiro laço já foi executado.
 * 
 * No 'Do While' há a garantia de que o bloco seja executado pelo
 * menos uma vez. Já no 'While' NÃO há essa garantia. */

"use strict"

const FUNCAO = require('./separador.js');

let n = 10;

while (n < 10) {
    console.log("CFB cursos");
    n++;
}
console.log("Fim do Loop While");

FUNCAO.separador(); // ----------------------------------------------s

do{
    console.log("CFB cursos");
    n++;
}while (n < 10) 
console.log("Fim do Loop Do While");




/* OUTPUT
Fim do Loop While
-------------------------------------------------------
CFB cursos
Fim do Loop Do While
*/