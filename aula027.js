/* Vídeo 28 - Funções Geradoras em Javascript - Aula 27 */

"use strict"

const FUNCAO = require('./separador.js');

/** Uma função geradora têm o seu retorno adiado até o momento em que
 * esse retorno  seja requisitado (necessário). É importante observar
 * que  a função  geradora  é o  pilar da  programação  assíncrona em
 * javascript. Quando uma função convencional é chamada, quem fica no
 * controle dessa função é  a própria função. Ela terá o seu controle
 * até o momento em que ela é finalizada retornando um valor. 
 * Com as funções geradoras , a própria função pode ter esse controle
 * quando se quer retornar alguma coisa.Ao chamar uma função geragora
 * NÃO é necessário  todo o processamento  para retornar algum valor.
 * É possível retornar valores ao longo da execução dela. 
 * 
 * Basicamente  quando  uma função  geradora é chamada , no  primeiro
 * momento é retornado  um iterador , a partir do segundo momento ela
 * vai entrar  na sua  execução e  vai retornar um  valor  sempre que 
 * houver um YIELD,um comando ou uma declaração YIELD. Sempre que for
 * encontrada uma declaração YIELD,então a função geradora deve parar
 * a execução  e retornar  um valor . A execução ou  a  iteração deve
 * continuar quando a função for chamada novamente. 
 * 
 * Para indicar que uma função é geradora, basta incluir um asterísco
 * após a palavra reservada function:
 * 
 * function* exemplo(){}
 */

function* cores() {
    yield 'vermelho';
    yield 'verde';
    yield 'azul';
}

let iterator = cores();
console.log(iterator.next().value); // Retorna o valor do 1º yield

/** A função têm o controle, é identificado que foi retornado o valor
 * do  1° yield . Então da próxima  vez  que  chamar  a  função  será
 * retornado  o  valor  do  2° yield, no caso 'verde'. Porém primeiro
 * retornará o 'vermelho' novamente, depois o 'verde'.             */
console.log(iterator.next().value); // Retorna o valor do 2º yield

// Nesse caso, na tereira execução retornará o valor dos três yields 
console.log(iterator.next().value); // Retorna o valor do 3º yield

/** Após o retorno  dos três yields , a partir da próxima execução da
 * função será retornado 'undefined'.                              */
console.log(iterator.next().value); // Retorna undefined

/**Para executar a função e retornar os yields novamente é necessário
 * que a variável (não deve ser declarada como const) receba a função
 * geradora novamente, nesse caso a função cores():                */
iterator = cores();
console.log(iterator.next().value); // retorna vermelho

FUNCAO.separador("----------------------------------------------");

/** Na função abaixo são criadas variáveis constantes, e é permitido
 * que se armazene valores nessas constantes. Isso ocorre no momento
 * de chamada da função. Também foi incluído um 'return'. */
 function* perguntas() {
    const nome = yield 'Qual o seu nome?';
    const esporte = yield 'Qual o seu esporte favorito?';

    return "Seu nome é "+ nome+ ', seu esporte favorito é '+ esporte;
 }

 const itr = perguntas();

 // É necessária a 1º execução para o iterador
 console.log( itr.next().value ); 

 /** As  demais  execuções  são par  preencher  as variáveis . Após a
  * execução do último yield, será executado o 'return'.           */
 console.log( itr.next('Oliver').value );
 console.log( itr.next('Futebol').value );
 
FUNCAO.separador("----------------------------------------------");

/** É possível usar as  funções geradoras dentro de um Loop, e a cada
 * iteração  obter  os retornos  dessa função. Esse Loop deve aceitar
 * o iterator, como o FOR OF por exemplo. Ex:           */

/** Sempre que a função abaixo for chamada ela vai retornar um número
 * que, no caso, é o valor do yield. 
 */
function* contador() {
    let i = 0;

    /* No Loop  abaixo primeiro  retorna o valor , depois incrementa,
    pois  está   sendo   usado  o  pós-incremento . O loop  abaixo  é 
    infinito porém  como é usado o  yield, então a  execução é parada
    momentaneamente cada vez que a função for chamada. */
    while (true) {
        yield i++; 
    }
}

const itc = contador();

console.log( itc.next().value );
console.log( itc.next().value );
console.log( itc.next().value );

FUNCAO.separador("----------------------------------------------");

/** Para cada iteração do FOR,será retornado o valor do yield do loop
 * dentro da função geradora.                                      */
for (let i = 0; i <= 7; i++) {
    console.log( itc.next().value );    
}

FUNCAO.separador("----------------------------------------------");

/** No caso  abaixo  foi usado uma  condição com a  finalidade  de um
 * limitador . Caso a contagem  seja  igual o  valor da  condição , o
 * loop é parado com o comando break.                              */
function* contador_cLimite() {
    let it = 0;
 
    while (true) {
        yield it++; 
        if(it >=8)
            break;
    }
}

const itcl = contador_cLimite();

/** Teoricamente o  loop abaixo  seria infinito , porém ele  é parado
 *  quando for executado o comando break no Loop da função geradora.
 * */
for (const e of itcl) {
    console.log(e);
}

FUNCAO.separador("----------------------------------------------");

/* OUTPUT

vermelho
verde
azul
undefined
vermelho
----------------------------------------------
Qual o seu nome?
Qual o seu esporte favorito?
Seu nome é Oliver, seu esporte favorito é Futebol
----------------------------------------------
0
1
2
----------------------------------------------
3
4
5
6
7
8
9
10
----------------------------------------------
0
1
2
3
4
5
6
7
*/