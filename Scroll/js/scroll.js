/*=============================================
OBJETO CON LAS PROPIEDADES DEL SCROLL
=============================================*/

var ps = {
	posicionScroll: 0,
	articulos: document.querySelectorAll("#scroll article"),
	cajaScroll: document.querySelector("#scroll"),
	cabezote: document.querySelector('header')
}

/*=============================================
METODOS CON LAS PROPIEDADES DEL SCROLL
=============================================*/

var ms = {
	inicioScroll: function(argument) {
		document.addEventListener("scroll", ms.efectoParallax);
	},

	efectoParallax: function(argument) {
		ps.posicionScroll = window.pageYOffset;

		if (ps.posicionScroll > 99) {
			ps.cabezote.style.position = 'fixed';
			ps.cabezote.style.zIndex = 10;
		} else {
			ps.cabezote.style.position = 'relative';
			ps.cabezote.style.zIndex = 0;
		}

		if (ps.posicionScroll > ps.cajaScroll.offsetTop - 199) {
			for (var i = 0; i < ps.articulos.length; i++) {
				ps.articulos[i].style.marginLeft = '0%';
			}
		} else {
			for (var i = 0; i < ps.articulos.length; i++) {
				ps.articulos[i].style.marginLeft = ps.posicionScroll / 25 - 100 + "%";
			}
		}
	}
}

ms.inicioScroll();