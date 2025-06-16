// Vídeo 30 - Usando o operador THIS dentro de funções - Aula 29

// "use strict"

const FUNCAO = require('./separador.js');

/** É possível  usar this  dentro  de funções desde  uma  atualização
 * recente do javascript. As funções podem ser tratadas como objetos.
 * Pode haver parte do código com funcionalidades de POO também parte
 * do código com programação estrutural ou funcional.
 * 
 * O 'this'  faz referência à um  elemente dentro  da função. No caso
 * abaixo, 'this.nome' é uma variável  de dentro da função e recebe o
 * valor do parâmetro nome. Ambas têm o mesmo nome, mas o this indica
 * que a variável é de dentro da função. 
 * OBSERVAÇÃO:A função abaixo NÃO funciona quando se usa "use strict"
 * */

function aluno_medio(nome, nota) {
     this.nome = nome;
     this.nota = nota;

     console.log(this.nome);
     console.log(this.nota);
}

aluno_medio('Alves', 8);

FUNCAO.separador("----------------------------------------------");

/** Na função abaixo é usada  uma função anônima comum. Após executar
 * a função  aluno , haverá uma  pausa de 2 segundo. Isso  ocorre por
 * causa da  função 'setTimeout()' que faz uma pausa  na execução. Em
 * seguida a  função anônima é executada , o nome e nota deveriam ser
 * impressos na tela. */
function aluno(nome, nota) {
     this.nome = nome;
     this.nota = nota;

     this.dados_anonimos = function () {
        
        // gera um atraso na execução
        setTimeout(function (){
                    console.log(this.nome);
                    console.log(this.nota);
        }, 2000);
     }

    this.dados_arrow = function () {
                
        /** gera um atraso na execução
         * Com o  uso de Arrow  function o  this.nome  é referenciado
         * como this da função dados, e não de 'setTimeout()'
        */
        setTimeout( ()=> {
                    console.log(this.nome);
                    console.log(this.nota);
        }, 2000);
     }
}

/** Como a função aluno será tratada como um Objeto, então nesse caso
 * será  usado  o 'new' . O resultado  será 'undefined'. Isso  ocorre
 * porque o a função  setTimeout() sombreia a variável 'this.nome' da
 * função  aluno . O  'this' da função  'setTimeout()' é diferente do
 * 'this' da função aluno. */
const al1 = new aluno('Ferreira', 9);
al1.dados_anonimos();


/** Esse problema pode ser resolvido com o uso de Arrow Function */
al1.dados_arrow();

/* RESULTADO

Alves
8
----------------------------------------------
undefined
undefined
Ferreira
9

*/