// Vídeo 3 - Javascript em Modo Estrito, você sabe o que é? - Curso de Javascript Moderno - Aula 02

/**
O modo estrito serve pra deixar o código mais limpo, evitando "sujeiras" e coisas inutilizadas. 
Exemplo: No modo estrito NÃO é possível utilizar uma variável que NÃO tenha sido declarada.
Ou então criar variáveis e depois não utilizar essas variáveis. Assim é possível ter um código
mais limpo, funcinal e elegante.
*/

"use strict" // Modo RESTRITO

/**
 * nome = "Maria"; 
 * 
 * A variável 'nome' acima NÃO está declarada com as palavras reservadas
 * let, var ou const. No modo restrito isso NÃO é possível. Será retornada
 * uma mensagem de erro indicando que algum valor está sendo atribuído
 * à uma variável que não foi declarada. Mas esse erro só ocorre no modo
 * 'restrito':
 * ReferenceError: nome is not defined at Object.<anonymous>
 */

let nome = "Maria";

console.log("IDENTIFICAÇÃO");
console.log(nome);
console.log("Nome: " + nome);

/** Existe uma série de outras restrições que o 'strict mode' vai alertar. 
 *  Alguma linguagens baseadas em javascript vão obrigar o uso de 'strict mode'.
 */
