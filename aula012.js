/** Vídeo 13 - Operador Spread, aprendendo sobre o espalhador em Javascript - Aula 12 */

/** A funcionalidade do operador Spread é quebrar um Array. Uma das
 * facilidades que o Spred oferece ocorre quando queremos copiar um
 * array. 
 */

"use strict"

//const FUNCAO = require('./separador.js');

let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];
let n3 = n1;

console.log("n1: "+ n1);
console.log("n2: "+ n2);
console.log("n3: "+ n3);

n3 = [...n1];
console.log("n3: "+ n3);

separador();

/** No caso abaixo houve uma concatenação de elementos de n1 e n2 para o n3 */
n3 = [n1, n2];
console.log("n3: "+ n3); // n3: 10,20,30,11,22,33,44,55
console.log("Tipo de n3: "+ typeof(n3) ); // Tipo de n3: object

separador();

n3 = [...n1, ...n2];
console.log("n3: "+ n3);

separador();

/** É possível usar o Spread pra fazer cópias de Objetos.  */

let JOGADOR1 = { nome:"Alberto", posicao:"zagueiro", partidas: 40 };
let JOGADOR2 = { nome:"Ze Roberto", posicao:"atacante", partidas: 55 };
let JOGADOR3 = {...JOGADOR1, ...JOGADOR2};

console.log(JOGADOR3);
/** Imprime apenas os elemento e valores de JOGADOR2 :
 * { nome: 'Ze Roberto', posicao: 'atacante', partidas: 55 } 
 * 
 * Isso ocorre porque as variáveis dos Objetos são iguais, então os nomes
 * das dessas são impressos, porém apenas com os valores do último Objeto.*/

separador();

JOGADOR1 = { nome:"Alberto", posicao:"zagueiro", partidas: 40, idade: 20};
JOGADOR2 = { nome:"Ze Roberto", posicao:"atacante", partidas: 55, clube: "Sao Paulo"};
JOGADOR3 = {...JOGADOR1, ...JOGADOR2};

console.log(JOGADOR3);
/** SAÌDA:
 * 
 * {
 *   nome: 'Ze Roberto',
 *   posicao: 'atacante',
 *   partidas: 55,
 *   idade: 20,
 *   clube: 'Sao Paulo'
 * }
 * 
 * Nesse  caso imprime  o VALORES das  variáveis  do último  Objeto , pois
 * ambos os Objetos têm os mesmos nomes de variáveis . Porém são impressos
 * os valores das variáveis exclusivas que são diferentes, em cada Objeto.
 */

separador();

/** Outra vantagem do operador Spread é quando é usado em funções. */

const SOMA = (v1, v2, v3)=>{
    return v1 + v2 + v3 ;
}

let valores = [1, 5, 4, 8];

/** Na chamada da  função  SOMA()  é  possível passar  um  array com
 * valores de entrada  e espalhar os elemento :    SOMA(...valores).
 * Porém  pra isso dar certo é necessário  ESPALHAR os elementos com
 * o operador Spread . Então cada valor da array será atribuída para
 * cada um dos parâmetros de entrada da função. 
 * Caso  haja  mais valores no Array  em relação aos  parâmetros  de
 * entrada , então a função vai funcionar do mesmo jeito. Nesse caso
 * são 4 elementos no array  e três parâmetros de entrada na função.
 * Então serão  usados apenas os três  primeiros parâmetros do Array
 * que serão relacionados com as três propriedades da função. 
 */
console.log( SOMA(...valores) );

separador();

// ABAIXO HÁ ALGUNS COMANDO DE MANIPULAÇÃO DE ELEMENTOS DO DOM

/** A função getElementsByTagName(div) iŕa pegar uma coleção de elementos
 * HTML. Nesse caso selecionará uma coleção de elementos com tag <div></div>.
 * 
 */
let objs1 = document.getElementsByTagName("div");

console.log(objs1);
/**No console do navegador será impresso HTMLCollection:
 * HTMLCollection(3) [div, div, div]  */

separador();

let objs2 = [...document.getElementsByTagName("div")];

console.log(objs2);
/**No console do navegador será impresso um Array de elementos HTML:
 *  (3) [div, div, div] */

/** Aparentemente  é a  mesma coisa .  Porém no  HTML  Collection essa coleção
 * só recebe elementos HTML .  No caso do Array , é possível  adicionar outros
 * tipos de elementos que NÃO são HTML. É possível adicionar valores , strings
 * ou qualquer outra coisa dentro do Array . As função  que existem pra operar 
 * com essas coleções também são diferentes .  No caso do HTML Collection , há
 * apenas 3 métodos .  No caso da variável  que recebe o Objeto Array , há uma
 * grande quantidade  de métodos dentro  dela para trabalhar com os elementos.
 * É uma quantidade de métodos muito maior ,  que são os mesmos usados para se
 * trabalhar com Array. Então compensa espalhar os elementos em Array usando o
 * Spread.  */

separador();

// objs1.forEach( element => {
//     console.log(element);
// });

/** Na função acima foi retornado o seguinte erro:
 * Uncaught TypeError: objs1.forEach is not a function 
 * forEach não é reconhecido como uma função do objs1.
 * 
 * Isso  ocorre  porque essa função só funciona em  Array e  objs1 é  um HTML
 * Collection. Já objs2 é um Array então o forEach irá funcionar normalmente.
*/
objs2.forEach( element => {
    console.log(element);
});

separador();

/** Usando Array atrabés de Spread é possível trabalhar com os elementos  do HTML.
 * Por exemplo , através do innerHTML  é possível  redefinir  o texto de  todos os
 * elementos <div> do HTML .  É possível iterar  elemento por elemento  da coleção
 * de elementos diversos espalhados no Array.
*/

objs2.forEach( element => {
    element.innerHTML = "curso";
});
