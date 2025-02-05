/** Vídeo 10 - Diferença entre Pré Incremento e Pós Incremento - Aula 9 */

"use strict"

const FUNCAO = require('./separador.js');

let n = 10;
console.log(n);   // imprime 10 

/**
 * n++ - Sempre que a atribuição estiver à DIREITA da variável,
 * significa que é uma operação de pós-incremento. Ocorre que
 * primeiro o valor é usado e depois incrementado em 1. 
 */

n++;               //             n == 11
console.log(n);    // imprime 11

/* Primeiro imprime o valor, depois incrementa. Nesse caso
vai mostrar o valor antes de incrementar. */
console.log(n++);  // imprime 11 | n == 12
console.log(n);    // imprime 12

console.log(n--);  // imprime 12 | n == 11
console.log(n);    // imprime 11

FUNCAO.separador();

/**
 * ++n - Sempre que a atribuição estiver à ESQUERDA da variável,
 * significa que é uma operação de pré-incremento. Ocorre que
 * primeiro o valor é incrementado e depois usado em alguma
 * operação. 
 */

n = 10;
console.log(n);   //           imprime 10

++n; // n == 11
console.log(n);   //           imprime 11

/* Primeiro incrementa o valor, depois ele é usado. Nesse caso
vai mostrar o valor depois de ter sido  incrementado. */
console.log(++n); // n == 12 | imprime 12 
console.log(n);   //           imprime 12 

console.log(--n); // n == 11 | imprime 11 
console.log(n);   //           imprime 11 

FUNCAO.separador();

// OPERAÇÕES DE ATRIBUIÇÃO JUNTO DE OPERAÇÃO

n = 10;

let x =-n;  
console.log(x); // imprime -10
/* O sinal - é um operador de inversão, ou negação. Ele inverte
o valor para negativo. */

FUNCAO.separador();

// CONCATENAÇÃO

let n2 = 20;

console.log(n + n2); // imprime 30. O valores são somados pois são numéricos
console.log(n +""+ n2); /* imprime 1020. Nesse caso o + é um operador
                            de concatenação */
                            