var tiempo = document.querySelector("#tiempo");
var segundos = 0;

//INTERVALO DE TIEMPO
var intervalo = setInterval(function(){
  segundos++;
  tiempo.innerHTML = segundos;
}, 1000)

//SET TIMEOUT(RETARDO DE TIEMPO)

setTimeout(function() {
  alert("Se cumplió el tiempo")
  clearInterval(intervalo); //"detieme"
},5000)
