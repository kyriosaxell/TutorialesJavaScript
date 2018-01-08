/*OBJETOS*/

var object = {
    nombre:"Axell",
    edad:22,

    descripcion: function() {
      console.log("su nombre es " + object.nombre + " y tiene " + object.edad);
    },
    saludar: function(saludo) {
      console.log(saludo+" "+object.nombre);
    }
}
console.log("Nombre", object.nombre);
console.log("Edad", object.edad);
object.descripcion();
object.saludar("Hola");

/*OBJETOS PRIMITIVOS*/
var d = new Date();
console.log("d ", d);
var y = d.getFullYear();
console.log(y);
