/* Vídeo 29 - Aprendendo sobre o método MAP em Javascript - Aula 28*/

"use strict"

// const FUNCAO = require('./separador.js');

/** Função  MAP têm  a funcionalidade  de percorrer  arrays, ou seja,
 * percorrer  coleções. Basicamente é usado  quando se faz necessário
 * trabalhar  elemento por  elemento de  uma coleção . Diferente  das
 * estruturas de  repetição como 'For' ou 'while', o  Map vai  iterar
 * toda a coleção,não havendo a opção de parar no meio.É usado quando
 * é necessário operar por completo os elementos de uma coleção e com
 * isso retornar algum valor ou alterar algum ou todos elementos,etc.
 */

const cursos = ['HTML', 'CSS', 'Jaascript', 'PHP', 'React'];

/** Para usar o Map é possível passar 1, 2 ou até 3 parâmetros:
 * 
 * variavel.map( (<elemento>, <índice>) => {retorno} )
 * 
 * - elemento coleção:   cada   elemento  da coleção  vai   para esse
 * parâmetro em cada iteração.
 * 
 * - índice do elemento, ou seja , a posição desse na coleção no Map.
 * vale lembrar que aqui ele está recebendo esses valores.
 * 
 * Para executar alguma coisa dentro do Map , é necessário uma função
 * dentro dos  parâmetros do  Map . Então é  possível usar  uma Arrow
 * Function para essa função anônima, 
 */
cursos.map( (el, i) => {
    console.log("curso "+ el +"  -  Posição do curso: "+ i);
});

/** Aqui seria possível usar o FOR, porém nesse caso esse seria usado
 * de uma maneira diferente.Quando for necessário percorrer a coleção
 * inteira , trabalhar  com os  elemento , ou trabalhar e retornar ou
 * trabalhar ou retornar esses, sem interrupção então é mais indicado
 * usar  o Map . Esse  é  um  método  otimizado  quando se  têm essas
 * coleções ,  ele  é  próprio  pra  isso . Esse  faz parte das novas
 * especificações de javascript. */

separador("----------------------------------------------");

/** No  trecho abaixo a  variável 'c' recebe o retorno  do metodo MAP
 * que são os  elementos da Coleção acima . Ele retornou exatamente o
 * que foi retornado por 'cursos'.                                 */
let c = cursos.map( (el, i) => {
    return el;
});

console.log(c);

separador("----------------------------------------------");

/** No  caso abaixo , a variável  recebe dodos  os elementos 'DIV' do
 * código HTML. Isso já é uma função de manipulação de DOM.A variável
 * elem recebe valores do tipo HTMLCollection. Porém se usar o método
 * MAP da maneira convencional, informando os parâmetros de elemento,
 * índice e a Arrow Function,então haverá um erro, que indica que não
 * é uma função iterável. 
 * 
 * const elem = document.getElementsByTagName("div");
 * 
 * elem.map( (e, i) => {
 *     console.log(e);
 * });
 * 
 * Uncaught TypeError: elem.map is not a function
 * 
 * Uma maneira para resolver isso seria usar o operador spread:    */

const elem = [...document.getElementsByTagName("div")];
console.log(elem);

elem.map( (e, i) => {
    e.innerHTML = i +" "+e.innerHTML;
});

elem.map( (e, i) => {
    console.log(e);
});

separador("----------------------------------------------");

/** A outra  alternativa  seria  usar a  classe Array  com  o  método
 * call:
 * Array.prototype.map.call                                        */

const elm = document.getElementsByTagName("div");

const val = Array.prototype.map.call(elm, ({innerHTML})=> innerHTML);

console.log(val);

separador("----------------------------------------------");

/** Uma última forma de utilização  seria utilizar uma Arraw Function
 * e  retornar  parseInt(elemento) , em que vai  pegar os  valores do
 * HTMLCollection,converter para inteiro e retornar para uma variável
 * */

const converterInt  = (elm) => parseInt(elm);

let num = ['1','2','3', '4', '5'];

console.log(num);

num = ['1','2','3', '4', '5'].map(converterInt);

console.log(num);

separador("----------------------------------------------");

const dobrar = (elm) => elm * 2;
num = ['1','2','3', '4', '5'].map(dobrar);

console.log(num);

/* aula028.html

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aula 28 de javascript</title>
    </head>
    <body>
        <div id="c1">HTML</div>
        <div id="c2">CSS</div>
        <div id="c3">Javascript</div>
        <div id="c4">PHP</div>
        <div id="c5">React</div>
        <div id="c6">MySQL</div>
    </body>
    <script src="separador.js"></script>
    <!--script src="teste.js"></script-->
    <script src="aula028.js"></script>
</html>


OUTPUT 

curso HTML  -  Posição do curso: 0
curso CSS  -  Posição do curso: 1
curso Jaascript  -  Posição do curso: 2
curso PHP  -  Posição do curso: 3
curso React  -  Posição do curso: 4
----------------------------------------------
(5) ['HTML', 'CSS', 'Jaascript', 'PHP', 'React']
----------------------------------------------
(6) [div#c1, div#c2, div#c3, div#c4, div#c5, div#c6]
<div id=​"c1">​0 HTML​</div>​
<div id=​"c2">​1 CSS​</div>​
<div id=​"c3">​2 Javascript​</div>​
<div id=​"c4">​3 PHP​</div>​
<div id=​"c5">​4 React​</div>​
<div id=​"c6">​5 MySQL​</div>​
----------------------------------------------
(6) ['0 HTML', '1 CSS', '2 Javascript', '3 PHP', '4 React', '5 MySQL']
----------------------------------------------
(5) ['1', '2', '3', '4', '5']
(5) [1, 2, 3, 4, 5]
----------------------------------------------
(5) [2, 4, 6, 8, 10]
*/