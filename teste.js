"use strict"

const FUNCAO = require('./separador.js');
FUNCAO.separador();

let val_a = 15;
let val_b = 30;
let val_c = 15;

console.log("val_a <  val_b | " + (val_a < val_b) );
console.log("val_a >  val_b | " + (val_a > val_b) );
console.log("val_a <= val_c | " + (val_a <= val_c) );
console.log("!(val_a == val_c) | " + !(val_a == val_c) );