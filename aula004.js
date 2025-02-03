/**Vídeo 5 - Aprenda sobre os Operadores Matemáticos em Javascript
 * Curso de Javascript Moderno - Aula 04 */

// OPERADORES: + - * / % ++ -- += -=

"use strict"

/** Para IMPORTAR a função 'separador()' do arquivo separador.js, através do Node Js
 * OBSERVAÇÃO: Esse método é exclusivo no Node Js. Pode ocorrer erro ao usar
 * o código no navegador ou typescript.
*/
const FUNCAO = require('./separador.js');


// let num1, num2 = 10;
// undefined   10

let num1 = 15, num2 = 10;
// 15   10

console.log(num1+"  "+num2);

FUNCAO.separador();
// ----------------------------------------------------

let num3, num4, num5;
num3 = num4 = num5 = 33;

console.log(num3+"\n"+num4+"\n"+num5);

FUNCAO.separador();
// ----------------------------------------------------

var res = num1 + num2;
console.log("res = "+res);

console.log(" (num1 + num3) * 2 = "+(num1 + num3)*2);
console.log(" (num1 + num3 * 2) = "+(num1 + num3*2) );

FUNCAO.separador();
// ----------------------------------------------------

res = num1 / num2;
console.log(" num1 / num2 = "+res);

res = num1 % num2;
console.log(" num1 % num2 = "+res);

FUNCAO.separador();
// ----------------------------------------------------

console.log("num1 = "+num1);

// Operador de Incremento: Adiciona 1 ao valor da variável
num1++; // num1 = num1 + 1
console.log("num1++;\nnum1 = "+num1);

num1--;  // num1 = num1 - 1
num1--;
console.log("\nnum1--;\nnum1--;\nnum1 = "+num1);

console.log("\nnum2 = "+num2);
num2 += 5;  // num2 = num2 + 5
console.log("num2 += 5;\nnum2 = "+num2);

num2 *= 2;  // num2 = num2 * 2
console.log("\nnum2 *= 2;\nnum2 = "+num2);

num2 /= 2;  // num2 = num2 / 2
console.log("\nnum2 /= 2;\nnum2 = "+num2);