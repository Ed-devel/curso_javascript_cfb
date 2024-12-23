/**Vídeo 8 - Operadores Lógicos em Javascript - Aula 07 */

//  && (AND)   || (OR)   ! (NOT)

"use strict"

const FUNCAO = require('./separador.js');

let n1, n2, n3, n4;

n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log("n1 = "+n1+"   n2 = "+n2+"   n3 = "+n3+"   n4 = "+n4 ); 

console.log("(n1 > n2) "+(n1 > n2)+"   (n1 > n3) "+(n1 > n3)); 
console.log("(n1>n2)&&(n1>n3) "+((n1>n2)&&(n1>n3))); 
console.log("(n1>n2)||(n1>n3) "+( (n1>n2)||(n1>n3) ) ); 

console.log("\n!(n1>n2)&&(n1>n3) "+!((n1>n2)&&(n1>n3))); 
console.log("!(n1>n2)||(n1>n3) "+!( (n1>n2)||(n1>n3) ) ); 

FUNCAO.separador();
// ----------------------------------------------------

if (n1 > n2) {
    console.log(n1+" é MAIOR que "+n2)
} else {
    console.log(n1+" é MENOR que "+n2)
}

FUNCAO.separador();
// ----------------------------------------------------

if ( (n1 > n2 && n3 > n4)  ) {
    console.log("("+n1+" > "+n2+" && "+n3+" > "+n4+")  VERDADEIRO");
} else {
    console.log(console.log("("+n1+" > "+n2+" && "+n3+" > "+n4+")  FALSO"));
}

FUNCAO.separador();
// ----------------------------------------------------

if ( !(n1 > n2 || n3 > n4)  ) {
    console.log("!("+n1+" > "+n2+" || "+n3+" > "+n4+")  VERDADEIRO");
} else {
    console.log("!("+n1+" > "+n2+" || "+n3+" > "+n4+")  FALSO");
}