function separador( line= "----------------------------------------------"){
    console.log( line ); 
}

/** Para exportar  a função 'separador()' para  outros arquivos pelo Node Js
 * OBSERVAÇÃO: Esse método é exclusivo no Node Js. Pode ocorrer erro ao usar
 * o código no navegador ou typescript.  */

module.exports = {
    separador
};
