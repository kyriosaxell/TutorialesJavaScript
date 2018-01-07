/*
<!--//CLASES//-->
ejemplo: new String()

<!--//CLASES PRMITIVAS//-->
*/

var string = new String("");

<!--//CLASES CREADAS//-->
function Persona() {
  this.nombre;
  this.edad;
}

var yo = new Persona();
yo.nombre="Axell";
yo.edad="22 años";
console.log("yo", yo);

//Clase con parametros
function Animales(nombre, raza) {
  this.nomre = nombre;
  this.raza = raza;
}
var mascota = new Animales("perro", "pitbull");
console.log(mascota);
