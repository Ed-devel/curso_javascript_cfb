// Vídeo 21 - Aprendendo sobre FUNÇÕES em Javascript P1 - Aula 20

"use strict"

// const FUNCAO = require('./separador.js');

/** FUNÇÃO é um bloco de comandos que pode ser executado em um momento
 * oportuno, em  um momento que que  o programador desejar executar em
 * algum momento do código, quantas vezes forem necessárias.  
 */


// Forma tradicional para criar uma função
function nome() {
    console.log("Execução da função");
}

/* é necessário chamar a função para que ela seja executada.
Chamada tradicional da função: */
nome();
nome();
nome();
nome();

separador();

for (let i = 0; i < 3; i++) {
    nome();    
}

separador();

function soma_2_10() {
    let n1 = 2;
    let n2 = 10;
    console.log(n1 + n2);
}

for (let i = 0; i < 5; i++) {
    soma_2_10();
}

separador();

/** A função abaixo NÃO poderá  ser executada no lado servidor com
 * NodeJs pois há elementos do DOM e esses só podem ser executados
 * no navegador no modo cliente. */
function mudarTexto() {
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    let d4 = document.getElementById("d4");

    d1.innerHTML = "texto de d1";
    d2.innerHTML = "texto de d2";
    d3.innerHTML = "texto de d3";
    d4.innerHTML = "texto de d4";
}

/* aula020.html

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aula de javascript - CFB cursos</title>
    </head>
    <body>
        <div id="d1">Roberto</div>    
        <div id="d2">CFB Cursos</div>
        <div id="d3">Aula 12 de javascript</div>
        <div id="d4">03 mar 2025</div>
        <button onclick="mudarTexto()">Mudar texto</button>
    </body>
    <script src="separador.js"></script>
    <script src="aula020.js"></script>
</html>    */

/* OUTPUT
Execução da função
Execução da função
Execução da função
Execução da função
-------------------------------------------------------
Execução da função
Execução da função
Execução da função
-------------------------------------------------------
12
12
12
12
12
*/
