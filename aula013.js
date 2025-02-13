/** Vídeo 14 - Comando condicional IF e IF ELSE em Javascript - Aula 13 */

"use strict"

const FUNCAO = require('./separador.js');

let num = 40;

if (num > 10) {
    console.log("Numeral maior que 10");

    // Exemplo de If aninhado, que seria um If dentro de outro
    if (num > 50) {
        console.log("Numeral maior que 50");
    }
}else if(num > 5){
    console.log("Numeral entre 6 e 10");
}else{
    console.log("Numeral menor ou igual à 5");
}

console.log("Fim do código ");

FUNCAO.separador();

let energia = 71;
let clima = "sol";

if (energia > 70 && clima == "sol") {
    console.log("Vou a praia");
} else {
    console.log("Vou ao cinema");
}











// OUTPUT

// Numeral maior que 10
// Fim do código 
// -------------------------------------------------------
// Vou a praia