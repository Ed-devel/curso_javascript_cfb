// Vídeo 32 - getElementsByTagName. Manipulando DOM #P2 - Aula 31

"use strict"

// document.getElementsByTagName

/** Com o método  getElementsByTagName() é possível obter uma coleção
 * de elementos. A diferença entre  esse  método e o getElementById()
 * é que esse último retorna apenas um elemento que é um HTMLElement,
 * onde é especificado o Id.Já o getElementsByTagName() é informado o
 * nome de uma tag,o método pode retornar vários elementos, sendo uma
 * coleção HTMLCollectionOf<HTMLElement.                           */

const dc1 = document.getElementById("c1");
const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");
const dc6 = document.getElementById("c6");

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6];

const colecaoHTML = document.getElementsByTagName("div");

/** Ao imprimir  as variáveis  verifica-se que  'arrayElementos' é do
 * tipo array, enquanto 'colecaoHTML' é  do tipo HTMLCollection. Como
 * discutido  antes , com o  Array, é possível  trabalhar  com muitos
 * métodos como MAP, PUSH, POP, FILTER , entre muitos  outros. Já com
 * HTMLCollection há poucos métodos para se trabalhar.             */
console.log(arrayElementos);
console.log(colecaoHTML);

separador("----------------------------------------------");

/** NÃO é possível usar os métodos  do topo Array  no HTMLCollection,
 * mas é possível converter o  esse último em Array, para aí sim usar
 * seus mais variádos métodos.
 * 
 * EXEMPLO:
 * colecaoHTML.map( (e) => { console.log(e) } );
 * Uncaught TypeError: colecaoHTML.map is not a function
 * 
 * colecaoHTML é uma HTMLCollection e essa não possuí o método map().
 * Pra resolver  esse erro uma  alternativa  simples  seria converter
 * essa coleção em array através do operador Spread.Se essa conversão
 * for feita  diretamente há a vantagem de que a variável que  recebe
 * esse array é uma constante e constantes são imutáveis. Sendo assim
 * não há risco de alterar os valores dessa variável no código, sendo
 * isso uma questão de seguraça.                                   */

const colecaoTipoArray = [...document.getElementsByTagName("div")];
console.log(colecaoTipoArray);

separador("----------------------------------------------");

/** Outra maneira seria: */

let colecaoConvertidaArray = [...colecaoHTML];
console.log(colecaoConvertidaArray);

separador("----------------------------------------------");

colecaoConvertidaArray.map( (e) => { console.log(e) } );

/* OUTPUT

[div#c1, div#c2, div#c3, div#c4, div#c5, div#c6]
HTMLCollection(6)[div#c1, div#c2, div#c3, div#c4, div#c5, div#c6]
separador.js:2 ----------------------------------------------
[div#c1, div#c2, div#c3, div#c4, div#c5, div#c6]
----------------------------------------------
[div#c1, div#c2, div#c3, div#c4, div#c5, div#c6]
separador.js:2 ----------------------------------------------
<div id=​"c1">​HTML​</div>​
<div id=​"c2">​CSS​</div>​
<div id=​"c3">​Javascript​</div>​
<div id=​"c4">​PHP​</div>​
<div id=​"c5">​React​</div>​
<div id=​"c6">​MySQL​</div>​

*/