/** Vídeo 18 - Loop While em Javascript - Aula 17 */

/* While é um loop indefinido. Isso porque NÃO se sabe o número
de vezes que os comandos do bloco  serão iterados(repetidos) no
Loop. */

"use strict"

const FUNCAO = require('./separador.js');

let n = 0;
while (n < 10) {
    console.log(n);
    n++;
}

FUNCAO.separador(); // -----------------------------------------------------

// Cálculo do Fatorial

n = 5;
let fat = 1;

while( n >= 1 ){
    fat *= n;
    n--;
}

console.log(fat); 





/* OUTPUT
0
1
2
3
4
5
6
7
8
9
-------------------------------------------------------
120
*/