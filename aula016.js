/** Vídeo 17 - Loops FOR IN e FOR OF em Javascript  - Aula 16 */

/** Há duas variações do Loop For, que são o For in e For Of. */

"use strict"

//const FUNCAO = require('./separador.js');

let num = [10,20,30,40,50];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

separador(); // -----------------------------------------------------


/** No  FOR IN  é criada uma  variável que  vai receber os  elementos
 * retornados  da coleção que  deve-se  iterar. Essa variável  criada
 * recebe o valor de cada índice da coleção.
 * 
 * No  FOR IN e  FOR OF a variável  que representa o índice  do Array
 * DEVE  ser declara  com let ou  var, fora e antes  do FOR ou  entre
 * parênteses. Mas isso APENAS se for definido "use strict" no início
 * do código. Se esse  código NÃO for  estrito, não há necessidade de
 * declarar a variável do índice . 
 */
for(let n in num){
    console.log(num[n]);
}

separador(); // -----------------------------------------------------

let x;

/** O FOR OF  itera  diretamente os  VALORES dos elementos dentro  da
 * coleção . Não  é necessário  colocar  o Array com  o índice  entre
 * colchetes. No  laço abaixo apenas o  valor de 'x' já  representa o
 * valor do elemento do Array na posição referênte à iteração do Laço
 */
for(x of num){
    console.log(x);
}

separador(); // -----------------------------------------------------

const OBJS = document.getElementsByTagName("div");

for(let i of OBJS){
    console.log(i.innerHTML = "valor");
}

separador(); // -----------------------------------------------------

for(let o in OBJS){
    console.log(OBJS[o].innerHTML);
}

/** For  In e  For Of são  indicados  pra  percorrer  coleções . Eles
 * têm  uma  estrutura  mais  simplificada  comparando-se  com  o For
 * convencional. */

/* OUTPUT
10
20
30
40
50
-------------------------------------------------------
10
20
30
40
50
-------------------------------------------------------
10
20
30
40
50
-------------------------------------------------------
valor
-------------------------------------------------------
valor
undefined
*/