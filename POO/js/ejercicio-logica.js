/*CASO 1. CUATRO ATLETAS*/
/*de cuatro corredores de atletismo se sabe que C ha llegado inmediatamente
detrás de B, y D ha llegado en medio de A y C. ¿Podrías calcular el orden de llegada?*/

var a = {
  A:0,
  B:0,
  C:0,
  D:0,

  resultado: function () {
    if (a.C > a.B &&
        a.D > a.B &&
        a.D > a.C &&
        a.D < a.A) {
      return true;
    }
    return false;
  },

  intervalo: setInterval(function() {
    a.A = Math.ceil(Math.random()*4);
    a.B = Math.ceil(Math.random()*4)
    a.C = Math.ceil(Math.random()*4)
    a.D = Math.ceil(Math.random()*4)

    if (a.resultado()) {
      clearInterval(a.intervalo);
      console.log("atleta A", a.A);
      console.log("atleta B", a.B);
      console.log("atleta C", a.C);
      console.log("atleta D", a.D);
    }
  },10)
}

/*CASO 2. CABALLOS*/
var b = {
  Mac: {edad:0, velocidad:0, tono:0},
  Smith: {edad:0, velocidad:0, tono:0},
  Jack: {edad:0, velocidad:0, tono:0},
  Willy: {edad:0, velocidad:0, tono:0},
  resultado: function () {
    if (b.Mac.tono > b.Smith.tono &&
        b.Mac.velocidad > b.Jack.velocidad &&
        b.Mac.edad > b.Jack.edad &&
        b.Willy.velocidad > b.Jack.velocidad &&
        b.Mac.edad > b.Willy.edad &&
        b.Mac.edad > b.Smith.edad &&
        b.Willy.tono > b.Smith.tono &&
        b.Smith.velocidad > b.Jack.velocidad &&
        b.Jack.tono > b.Smith.tono){

          return true;
    }
    return false;
  },
  intervalo: setInterval(function() {
    b.Mac.tono = Math.ceil(Math.random()*2);
    b.Mac.edad = Math.ceil(Math.random()*2);
    b.Mac.velocidad = Math.ceil(Math.random()*2);

    b.Smith.tono = Math.ceil(Math.random()*2);
    b.Smith.edad = Math.ceil(Math.random()*2);
    b.Smith.velocidad = Math.ceil(Math.random()*2);

    b.Jack.tono = Math.ceil(Math.random()*2);
    b.Jack.edad = Math.ceil(Math.random()*2);
    b.Jack.velocidad = Math.ceil(Math.random()*2);

    b.Willy.tono = Math.ceil(Math.random()*2);
    b.Willy.edad = Math.ceil(Math.random()*2);
    b.Willy.velocidad = Math.ceil(Math.random()*2);

    if (b.resultado()) {
      clearInterval(a.intervalo);
      console.log("Caballo Mac ", b.Mac);
      console.log("Caballo Smith ", b.Smith);
      console.log("Caballo Jack ", b.Jack);
      console.log("Caballo Willy ", b.Willy);
    }
  },1)
}
