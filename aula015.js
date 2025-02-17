/** Vídeo 16 - Loop FOR em Javascript  - Aula 15 */

"use strict"

/** As repetições  executadas em um loop são  chamadas de iterações.
 * Se  foi executada uma repetição, então foi  realzada uma iteração
 * de uma sequência ou  um bloco de comando(s). Nós  podemos definir
 * os Loop's em 'Definidos' e 'Indefinidos'. Os Loops  Definidos são
 * os que tem a quantidade de vezes em que os bloco serão repetidos.
 * Os Loops indefinidos são os que não se sabe ao certo a quantidade
 * de vezes que haverá iteração de um determinado bloco de comando.
 * 
 * Loops Definidos - |for|
 * Loops indefinidos - |while|do while|
 * 
 * for(inicialização ; condição ; controle){} 
 */

const FUNCAO = require('./separador.js');

for (let i = 0; i < 10; i++) {
    console.log("i = "+ i);    
}
console.log("Fim do loop !");

FUNCAO.separador();

// Exemplo de Loop com If
for (let i = 0; i < 10; i++) {
    if( !(i%2) )
        console.log("i = "+i+" | é par");
    else
    console.log("i = "+i+" | é ímpar");
}
console.log("Fim do loop !");

