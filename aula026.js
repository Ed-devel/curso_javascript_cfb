/*  Vídeo 27 -  Funções  aninhadas . Funções  dentro  de  funções  em
                Javascript. - Aula 26 */

"use strict"

const FUNCAO = require('./separador.js');

/** O uso  de Funções dentro de  funções é válido e podemos  utilizar
 * normalmente. No exemplo abaixo será usado o padrão Arrow Function.
 * Também será usado um parâmetro spread na função principal.
 */

const soma = (...valores) => {

    const somar = val => {
        let res = 0;

        for (const v of val)
            res += v;
        
        return res;
    }

    return somar(valores);
}

console.log(soma(10,5,15));

FUNCAO.separador("----------------------------------------------");

/** No exemplo abaixo usamoso mesmo exemplo, porém uma função fora da
 * outra: */

const somar2 = val2 => {
    let res = 0;

    for (const v2 of val2)
        res += v2;
    
    return res;
}

const soma2 = (...valores2) => {
    return somar2(valores2);
}

let valor = [11,22,33];

console.log(soma2( ...valor ));

// OUTPUT

// 30
// ----------------------------------------------
// 66