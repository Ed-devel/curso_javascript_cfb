// Vídeo 31 - Aprendendo o Método getElementById. Manipulando DOM #P1
// - Aula 30

"use strict"

/** Função getElementById() para operar e obter elementos do DOM.Para
 * manipular  elementos do DOM e  necessário usar o navergador. Com o
 * NodeJs não  é  possível  pois  com ele  não há  funcionalidade  de
 * manipular elementos  do DOM , elementos do lado cliente . O NodeJs
 * só executa códigos do lado servidor.
 * 
 * Há várias  funções pata pegar ou  apontar para os elementos do DOM
 * (Document Object Model),ou seja, os elementos que estão na página.
 * Um código HTML é estruturado  como uma árvore , uma árvore.
 * O nó raiz  é identificado pela  tag <html>, dentro dela há as tags
 * diretas  <head> e <body>. Dentro de  cada uma delas há outras tags
 * específica como <div> ou <p> e assim por diante. 
 * 
 * Com a  função  getElementById()  é  possível  apontar ou  obter um
 * elemento específico no javascript. Para isso é necessário passar o
 * nome do Id do  elemento como  parâmetro de entrada  do  método. Os
 * nomes de Id não se repetem no código  HTML, ou seja, só pode haver
 * um nome para cada Id.                                           */

// const FUNCAO = require('./separador.js');

// Pega o elemento com id = "c1"
const dc1 = document.getElementById("c1");

console.log(dc1); // Imprime a tag e o conteúdo desse elemento
console.log(dc1.id); // Imprime o Id do elemento
console.log(dc1.innerHTML); // Imprime o conteúdo do elemento

dc1.innerHTML = "Rust"; // Altera o valor do elemento

separador("----------------------------------------------");

const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");
const dc6 = document.getElementById("c6");

/** É possível criar um Array com as variáveis desses elementos */

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6];

console.log(arrayElementos);

for(const a of arrayElementos)
    a.innerHTML = "Elementos Alterados";

/**Sempre  que precisar  percorrer  e  iterar  TODOS os  elementos, é
 * interesante  dar  preferência  para  o método  map() , pois  é uma
 * estrutura  mais simples e mais  moderna pra operar elementos de um
 * Array .*/
arrayElementos.map( (e)=> {
    console.log(e);
} );

/* OUTPUT

<div id="c1">
c1
HTML
---------------------------------------------- 
Array(6) [ div#c1, div#c2, div#c3, div#c4, div#c5, div#c6 ]

*/
