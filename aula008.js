/** Vídeo 9 - Operadores Bitwise em Javascript */

/**
 *  & (AND)   |(OR)   ^ (XOR)
 *  << (DESLOCAMENTO BIT À ESQUERDA)  >> (DESLOCAMENTO BIT À DIREITA)
 */

"use strict"

/** Operadores bitwise são operadores bit a bit. Eles trabalham nos
 * bit dos valores, deslocando ou operando esses valores.  */

const FUNCAO = require('./separador.js');

let n1 = 10;
let n2 = 11;
let res = n1 & n2;  // n1 E n2

/**
 *  Com o operador &, onde houver equivalencia de bit 1, o resultado é 1.
 * 
 *  TABELA DA VERDADE A & B
 *  A & B    
 *  0   0 | 0
 *  0   1 | 0
 *  1   0 | 0
 *  1   1 | 1
 * 
 *   1010
 * & 1011
 *   ----
 *   1010
 * 
 * 1010 bin = 10 dec * 
 */

console.log("res = "+ res);

FUNCAO.separador();

console.log("(11 & 14) = "+  (11 & 14) );

/**
 *  1011
 * &1110
 *  ----
 *  1010   
 */

FUNCAO.separador();

/** Com o operador |, se houver pelo menos um bit -1-, o resultado será 1.
 *  Se ambos os bits forem 0, então o resultado é 0.
 * 
 *  TABELA DA VERDADE A | B
 *  A | B    
 *  0   0 | 0
 *  0   1 | 1
 *  1   0 | 1
 *  1   1 | 1
*/

console.log("(10 | 11) = "+  (10 | 11) ); // 1010 OU 1011

/**
 *  1010
 * |1011
 *  ----
 *  1011   1011 bin = 11 dec *    
 */

FUNCAO.separador();

/**
 * XOR   ^    OU EXCLUSIVO
 * Se houver equivalencia é retornado 0.
 * Onde NÃO houver equivalencia (ambos são 0) é retornado 0.
 * Se NÃO houver equivalencia e houver apenas um bit 1, é retornado 1. 
 * 
 * ou seja, o resultado só é 1 quando houver apenas um 1 e ou outro é 0.
 * 
 *  TABELA DA VERDADE A ^ B
 *  A ^ B    
 *  0   0 | 0
 *  0   1 | 1
 *  1   0 | 1
 *  1   1 | 0
 * 
 *   1010
 *  ^1011
 *   ----
 *   0001
 */

// 1010 XOR 1011 - OU EXCLUSIVO
console.log("(10 ^ 11) = "+  (10 ^ 11) ); // 1010 ^ 1011 = 0001 bin

FUNCAO.separador();
console.log("(13 ^ 14) = "+  (13 ^ 14) ); // 1101 ^ 1110 = 0011 bin

/**
 *  13 XOR 14 = 3 dec
 *   1101
 *  ^1110
 *   ----
 *   0011
 */

FUNCAO.separador();

/**
 * OPERAÇÕES DE DESLOCAMENTO DE BIT
 *  
 *  O exemplo abaixo mostra como deslocar 1 bit à esquerda. O espaço que
 *  sobra (primeiro bit deslocado) é completado com 0.
 * 
 *  EXEMPLO:
 *  n1  - 00001010 bin  - 10 dec
 * 
 *  res = n1 << 1
 * 
 *  res - 00010100 bin  - 20 dec
 */

console.log("res = "+ res);
res = n1 << 1;
console.log("(res = n1 << 1) = "+ res);

/** Para deslocar 2 bits à esquerda
 *  
 *  n1  - 00010100 bin - 20 dec
 *  res = n1 << 2
 *  res = 00101000 bin - 40 dec
 */

console.log("\nres = "+res);

res = n1 << 2;
console.log("(res = n1 << 2) = "+ res);

/** Com o BITWISE é facil dobrar um valor, deslocando 1 bit à esquerda,
 *  ou pegar a metade de um valor, deslocando 1 bit à direita. 
  */

FUNCAO.separador();

/** Para deslocar 3 bits à direita
 *  
 *  n1  - 00101000 bin - 40 dec
 *  res = n1 << 2
 *  res = 00000101 bin - 5 dec
 */

n1 = 40; 

console.log("\nres = "+res);

res = n1 >> 3;
console.log("(res = n1 >> 3) = "+ res);
