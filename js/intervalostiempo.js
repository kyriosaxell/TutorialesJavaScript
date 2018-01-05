var tiempo = document.querySelector("#tiempo");
var segundos = 0;

//INTERVALO DE TIEMPO
setInterval(function(){
  segundos++;
  tiempo.innerHTML = segundos;
}, 1000)
