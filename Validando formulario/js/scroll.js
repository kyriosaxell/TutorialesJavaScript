/*=============================================
OBJETO CON LAS PROPIEDADES DEL SCROLL
=============================================*/

var ps = {
	posicionScroll: 0,
	articulos: document.querySelectorAll("#scroll article"),
	cajaScroll: document.querySelector("#scroll"),
	cabezote: document.querySelector('header'),
	botonera: document.querySelectorAll('nav ul li a'),
	ruta: null,
	intervalo: null,
	destinoScroll: 0,
	padding:0
}

/*=============================================
METODOS CON LAS PROPIEDADES DEL SCROLL
=============================================*/

var ms = {
	inicioScroll: function(argument) {
		document.addEventListener("scroll", ms.efectoParallax);
		for (var i = 0; i < ps.botonera.length; i++) {
			ps.botonera[i].addEventListener('click', ms.desplazamiento);
		}
	},

	efectoParallax: function(argument) {
		ps.posicionScroll = window.pageYOffset;

		if (ps.posicionScroll > 99) {
			ps.cabezote.style.position = 'fixed';
			ps.cabezote.style.zIndex = 10;
			ps.padding = 80;
		} else {
			ps.cabezote.style.position = 'relative';
			ps.cabezote.style.zIndex = 0;
			ps.padding = 160;
		}

		if (ps.posicionScroll > ps.cajaScroll.offsetTop - 199) {
			for (var i = 0; i < ps.articulos.length; i++) {
				ps.articulos[i].style.marginLeft = '0%';
			}
		} else {
			for (var i = 0; i < ps.articulos.length; i++) {
				ps.articulos[i].style.marginLeft = ps.posicionScroll / 22.81 - 100 + "%";
			}
		}
	},

	desplazamiento: function(ruta) {
		ruta.preventDefault();
		ps.ruta = ruta.target.getAttribute('href');
		ps.destinoScroll = document.querySelector(ps.ruta).offsetTop-ps.padding;

		ps.intervalo = setInterval(function(){

			if (ps.posicionScroll < ps.destinoScroll) {
				ps.posicionScroll+=100;
				if (ps.posicionScroll >= ps.destinoScroll) {
					ps.posicionScroll = ps.destinoScroll;

					clearInterval(ps.intervalo);
				}
			}else {
					ps.posicionScroll-=100;
					if (ps.posicionScroll <= ps.destinoScroll) {
						ps.posicionScroll = ps.destinoScroll;
						clearInterval(ps.intervalo);
					}
				}
			window.scrollTo(0,ps.posicionScroll);

	},50)
}
}

ms.inicioScroll();
