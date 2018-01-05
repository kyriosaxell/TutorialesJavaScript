//Funciones sin parametros
function saludo() {
  console.log("Hola");
}

saludo();

//Funciones con parametros
function operacion(digito1, digito2) {
  var resultado = digito1 + digito2;
  console.log("resultado:", resultado);
}

operacion(5, 7);

//Funciones con retorno sin parametros
function retorno1() {
  var numero = 5;
  return numero;
}

console.log("numero:", retorno1());

//Funciones con retorno con parametros
function retorno2(numero) {
  return numero;
}

console.log("resultado:",retorno2(10));
console.log("resultado:",retorno2(30));
