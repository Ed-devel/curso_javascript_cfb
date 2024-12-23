/** Vídeo 7 - Respondendo Perguntas dos Inscritos Parte 1 (aulas de 1 a 5) 
 *  Aula 06.(aula006.js) */

// const = require('./separador.js');


let n1 = 1;
let n2 = "1";

console.log(n1 == n2);
/** A comparação acima é feita a nível do "VALOR" da variável e NÃO do
 * TIPO. Nessa caso vai retornar 'true' . */

console.log(n1 === n2);
/** A comparação acima é feita a nível do TIPO vas variáveis. Nessa caso
 * uma variável é do tipo string, a outra do tipo inteiro, sendo assim vai
 * retornar 'false' . */

separador();
// ----------------------------------------------------

let o1 = {nome:"Maria"};
let o2 = {nome:"Maria"};

console.log(o1 == o2);
console.log(o1 === o2);
/** No caso acima foram criados dois Objetos diferentes. Apesar deterem
 * o mesmo CONTEÚDO, porrque têm diferentes referências, ou seja, as comparações
 * acima também levam em consideração o endereço de memória, que nesse caso são
 * distintas. 
 */

separador();
// ----------------------------------------------------

o2 = o1;
console.log(o1 == o2);
console.log(o1 === o2);
/**No caso acima o Objeto o2 recebe a referencia de o1. Agora
 * os dois objetos apontam para o mesmo endereço de memório, 
 * portanto as comparações acima serão verdadeiras.
 */

separador();
// ----------------------------------------------------

// ENTRADA DE DADOS DE USUÁRIOS
/**É possível fazer a entrada de dados pegando as referencias
 * nos Objetos de input do DOM, ou então pode ser utilizado o
 * prompt. Ambas as maneira é necessário o uso de interface
 * gráfica. É possível fazer a entrada de dados de usuários,
 * mas não direamente rodando a aplicação pelo Node Js. É 
 * necessário o uso do prompt do navegador.
 * Exemplo: */

let nome = prompt("Digite seu nome: ");
console.log(nome);
/** O comando 'prompt("Digite seu nome: ");' DEVE ser usado
 * pelo NAVEGADOR. 
 */

separador();
// ----------------------------------------------------

/**  PARA SABER SE O CÓDIGO JAVASCRIPT ESTÁ SENDO EXECUTADO EM
 * UM DISPOSITÍVO MOBILE OU DESKTOP * 
*/

/** Dá para descobrir o tipo de dispositivo pelo pŕoprio HTML,
 * sen necessariamente usar o javascript. 
*/

if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
)
    console.log("Dispositivo Mobile");
else
    console.log("Desktop");
/** É possível alterar o dispositivo através do inspetor de
 * elementos do navegador. Nesse caso será identificado o 
 * dispositivo definido no 'Toogle device toolbar'.
 */

separador();
// ----------------------------------------------------
 
// NOMENCLATURA DE VARIÁVEIS, ESCOPO E BLOCOS DE CÓGIGO

// Variável global - Vai ocupar espaço de memória até o fim
// da execução do código.
let sobrenome = "Altemir";

{
    // Variável local - Vai ocupar espaço de memória só  até o fim
    // da execução do BLOCO. Após o término o espaço de meméria é
    // liberado.
    let siglaCurso = "JS";
    console.log(siglaCurso);
}

// Na função abaixo há uma variável. Nesse casoa  função estará
// disponível para ser executada quando ela for chamada. Quando
// ela for chamada a variável ocupará espaço na memória até o fim
// da execução da função. 
const curso =()=> {
    let curso = "Javascript";
    console.log(curso);
}

curso();