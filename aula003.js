/* Vídeo 4 - Diferença entre LET, VAR e CONST em Javascript
   Curso de Javascript Moderno - Aula 03
*/

"use strict"

const FUNCAO = require('./separador.js');
FUNCAO.separador();

/**Quando uma variável é declarada, há uma política no javascript de fazer a
 * elevação dessa variável até o topo, onde essa variável foi implementada.
 * Do escopo inicial até o topo onde ela foi implementada. 
 * 
 * Se usar a palavra reservada 'var' então em qualquer bloco, desde que NÃO seja function(), a variável
 * declarada por ela estará acessível. 
 */

/**O 'var' têm algumas falhas e isso pode causar problemas no código. */

/** No exemplo abaixo a variável 'var nome' foi declarada dentro do escopo
 * do bloco if(). Como ela foi declarada com uso de 'var', ela pode ser
 * acessada fora do bloco, nesse caso, pelo console.log(nome).
 * Isso não é interessante pois a variável 'nome' foi declarada um nível
 * acima e isso pode causar problemas.
 */
if (true) { 
    var nome = "Maria";
}
console.log(nome);

FUNCAO.separador(); // ----------------------------------------------

/** Apesar da variável 'a' ser declarada como 'var' e é permitido acessa-la
 * fora do bloco, nesse caso isso NÃO vai ser possível pois nesse código está
 * tentando acessa-la fora da função 'testeVar(). Não ocorrerá erro mas ... '
 */
function testeVar() {

    if (true) {
        var a = "<variável a>";    
    }
    console.log("Fora do if() e dento da função testeVar() " + a);    
}
testeVar();
//console.log("Fora da função 'testeVar()' " + a);

FUNCAO.separador(); // ----------------------------------------------

/** No código abaixo a variável 'let texto', que foi declarada com a palavra
 * reservada 'let', não é permitido acessa-la fora do escopo. Nesse caso haverá
 * um erro: ReferenceError: texto is not defined
 * É um erro de referência pois em 'console.log(texto);' a declaração da variável
 * texto não foi encontrada. 
 */
// if (true) { 
//     let texto = "Alô mundo";
// }
// console.log(texto);
// separador(); // ----------------------------------------------

/**No código abaixo a variável 'let texto2' foi declarada dentro do escopo da função
 * teste(). Então ela pode ser acessada no mesmo nível(dentro da função) e em níveis 
 * acima (outros blocos dentro da função). Porém ocorrerá um erro caso tentar acessar
 * a variável texto2 um nível abaixo da função, que é onde a variável 'texto2' foi
 * declarada, ou seja, nesse caso não é possível acessar a variável 'texto2' fora da
 * função.
*/
function teste() {
    let texto2 = "Texto aqui";

    if (true) { 
        console.log("Dentro do if() da função teste() : "+texto2);
    }
    console.log("Fora do if() e dentro da função teste() : "+texto2);
}

teste();
// console.log("Fora da função teste() : "+texto2);

FUNCAO.separador(); // ----------------------------------------------

/**Ao declarar uma variável como 'var' ou 'let' com ou sem valor inicial,
 * é possível atualizar os valores, inclusive com TIPOS diferentes. No
 * código abaixo apesar da variável 'info' ser inicializada com uma string,
 * na sua útima atualização essa recebeu o valor 10. Foi feito um cast de
 * conversão de forma automática. A função 'typeof()' é usada para descobrir
 * o tipo de uma variável.
 */

let info = "Texto inicial";
info = "Alô mundo";
console.log("info = " + info + "   Tipo|" + typeof(info) + "|");
info = 15;
console.log("info = " + info + "   Tipo|" + typeof(info) + "|");

FUNCAO.separador(); // ----------------------------------------------

/**Ao declarar uma variável com valor inicial como constante, esse valor não
 * poderá mais ser alterado ao longo do código. Assim é possível garantir que
 * o valor da constante sempre será o mesmo.
*/

const CURSO = "javascript";
// curso = "python"; // haverá um erro: 'TypeError: Assignment to constant variable.'
console.log(curso);

/**OBSERVAÇÃO: É importante dar preferência ao uso de 'let' ao invés de 'var' ao declarar 
 * variáveis. 
*/