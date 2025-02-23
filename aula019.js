// Vídeo 20 - declarações BREAK e CONTINUE - Aula 19

"use strict"
const FUNCAO = require('./separador.js');

/** O BREAK é um comando que vai causar uma interrupção  na execução.
 * Se for  encontrado no bloco do Loop , a execução é  interrompida e 
 * continua FORA do Loop. 
 * O CONTINUE  quando é executado  dentro do Loop, ele para  apenas a
 * iteração em que ele foi chamado e pula pra próxima iteração.Depois
 * continua normalmente a execução do Loop.                        */

let n = 0;
let max = 10;

while(n<max){
    console.log("iteração Num. "+n);
    if (n > 10)
        break;
    
    n++;
}
console.log("Fim do Loop WHILE");

FUNCAO.separador(); // ----------------------------------------------

// Se o valor de i for 6, pula para próxima iteração
for (let i = 0; i < max; i++) {    
    if (i==6)
        continue;
    console.log("iteração Num. "+i);
}
console.log("Fim do Loop FOR");

FUNCAO.separador(); // ----------------------------------------------

let pares = 0;

// Imprime números pares e quantidade de números pares
for (let i = 0; i <= max; i++) {    
    if (i%2 != 0){                
        continue;
    }
    pares++;
    console.log(i);    
}
console.log("Fim do Loop FOR\n"+pares+" Números pares");






/* OUTPUT

iteração Num. 0
iteração Num. 1
iteração Num. 2
iteração Num. 3
iteração Num. 4
iteração Num. 5
iteração Num. 6
iteração Num. 7
iteração Num. 8
iteração Num. 9
Fim do Loop WHILE
-------------------------------------------------------
iteração Num. 0
iteração Num. 1
iteração Num. 2
iteração Num. 3
iteração Num. 4
iteração Num. 5
iteração Num. 7
iteração Num. 8
iteração Num. 9
Fim do Loop FOR
-------------------------------------------------------
0
2
4
6
8
10
Fim do Loop FOR
6 Números pares

*/