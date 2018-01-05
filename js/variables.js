var numero = 5;
console.log("numero", numero);

//booleanas
var booleana = true;
console.log("booleana", booleana);

//Arreglo
var colores = ["rojo", "amarillo"]
console.log("colores", colores[0]);

//tipo objeto
var jugo = {ingrediente1:"fresa",
            ingrediente2:"vainilla",
            ingrediente3:"chocolate"}
console.log("juego", jugo.ingrediente1);

//aqui van las variables DOM
var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

var cajas = document.querySelectorAll(".cajas");
console.log("cajas: ", cajas);
