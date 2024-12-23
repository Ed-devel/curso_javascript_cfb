/** Vídeo 6 - Operadores Relacionais em Javascript - Aula 05. */

/** OPERARORES RELACIONAIS
 * Eles vão realizar uma operação e vão retornar um valor VERDADEITO OU FALSO
 * diante da operação relacional, que nada mais é do que uma comparação. Ou seja,
 * nós vamos utilizar operadores de comparação que são > , >= , < , <= , == e !=.
 */

"use strict"

let num1 = 10;
let num2 = 5;
let num3 = 10;

/** O valor da operação relacional será TRUE caso a condição seja satisfeita,
 * caso contrário retornará FALSE.
 * 
 * OBSERVAÇÃO: não confundir o operador diferente (!=) com o NOT (!):
 * (num1 != num3) - num1 é diferente de num3 e é retornado FALSE
 * !(num1 == num3)  - num1 é igual à num3 e é retornado TRUE, 
 * porém o valor é convertido para FALSE por causa do NOT .
 *  */

console.log("num1 = 10; num2 = 5; num3 = 10\n"); 
console.log(" (num1 > num2) = " + (num1 > num2));
console.log(" (num1 < num2) = "+ (num1 < num2));
console.log(" (num1 >= num3) = "+ (num1 >= num3));
console.log(" (num1 <= num3) = "+ (num1 <= num3));
console.log(" (num1 <= num2) = "+ (num1 <= num2));
console.log(" (num1 == num3) = "+ (num1 == num3));
console.log(" (num1 != num3) = "+ (num1 != num3));
console.log(" (num1 != num2) = "+ (num1 != num2));
console.log(" !(num1 == num3) = "+ !(num1 == num3));