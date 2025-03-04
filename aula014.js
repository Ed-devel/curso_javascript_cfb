// Vídeo 15 - Comando Switch Case em Javascript - Aula 14

/** Através  do Switch, uma  expressão  é avaliada  e de  acordo com
 * o resultado dessa  expressão, essas  são comparadas como os Cases
 * que estão programados  pra  retornar resultados , como comparação
 * positiva dessa expressão. Se alguma Case coincida com a avaliação
 * da expressão , então o bloco de comando desse Case é executado.
 * Se nenhum Caso tiver correspondência , então cairá em um bloco de
 * execução chamado default e esse é executado.  */

"use strict"

let colocacao = 2;

switch(colocacao){
    case 1:
        console.log("Primeiro lugar");
        break;
    case 2:
        console.log("Segundo lugar");
        break;
    case 3:
        console.log("Terceiro lugar");
        break;
    case 4: case 5: case 6:
        console.log("Prêmio de participação");
        break;
    default:
        console.log("Não subiu ao pódio");
        break;
}


/** OUTPUT
 * Segundo lugar
 */