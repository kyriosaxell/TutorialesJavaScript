var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numeroM = document.querySelector("#numeroMenorR");
var numeroMayor = document.querySelector("#numeroMayorR");

var numero=0;
var floo=0;
var cel=0;
/*
INTERVALOS Y RETARDOS DE TIEMPO
*/
numero = Math.random();
numeroAleatorio.innerHTML = numero;

floo = Math.floor(Math.random()*10);
numeroM.innerHTML = floo;

cel = Math.ceil(Math.random()*10);
numeroMayor.innerHTML = cel;
