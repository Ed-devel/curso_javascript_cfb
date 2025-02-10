/** Vídeo 11 - Aprendendo sobre operador ternário  - Aula 10 */

/** Operador ternário ou condição ternária é uma forma de reduzir ou
 * de simplificar uma operação com uma condicional. É possível utilizar
 * os operadores relacionais, os operadoes lógicos para obter um resultado
 * e mostrar esse resultado de uma forma melhor ao invés de true - false,
 * e por ai vai. Seria um tratamento desse resultado. */

"use strict"

const FUNCAO = require('./separador.js');

let num1 = 13;

let res = num1 % 2;

if(res == 0){
    console.log("Par");
}else{
    console.log("Impar");
}

FUNCAO.separador();

// USANDO OPERAÇÃO TERNÁRIA

/** No código abaixo o resultado da operação ( res = num % 2 ) é 0.
 * No javascript 0 é a mesma coisa que FALSE.
 *                              0 == FALSE
 * Qualquer número diferente de 0 == TRUE
 * 
 * Então o resultado da operação ternária abaixo será contrária ao que
 * se espera.  */
res = num1 % 2? "Par" : "Impar";
console.log(res);

FUNCAO.separador();

/**Isso pode ser resolvido colocando uma atribuição de negação na variável:
 * res = !(num % 2)
 * OBS: é necessario colocar a operação dentro de um bloco entre parênteses
 * e o operados de negação ! fica fora do bloco para que isso funcione.
 */
res =  !(num1 % 2) ? "Par" : "Impar";
console.log(res);

// SINTAXE DA OPERAÇÃO TERNÁRIA

/** Teste Lógico ? Se Verdadeiro : Se Falso  
 * Isso pode ser útil no DOM para teste de verificação em Radio Button e CheckBox
*/
let num2 = 7;
res = (num1 > num2? "VERDADEIRO": "FALSO");
FUNCAO.separador();
console.log(res);