var capa1,capa2,info,icono,texto;
var flecha_izq,flecha_der;
var n_opciones;
var seleccion = 0;
var transicion = false;

function inicializa_elementos(){
	capa1 = document.getElementById("capa1");
	capa2 = document.getElementById("capa2");
	info = document.getElementById("info");
	texto = document.getElementById("texto");
	icono = document.getElementById("icono");
	flecha_izq = document.getElementById("flecha_izquierda");
	flecha_der = document.getElementById("flecha_derecha");
	n_opciones = document.getElementsByTagName("li").length;
	carga_imagen(1);
}

function carga_imagen(img_sig){
	if(!transicion && img_sig != seleccion){
		transicion = true;
		seleccion = img_sig;
		capa2.style.backgroundImage="url(./img/"+img_sig+".jpg)";
		actualiza_info();
		desvanece();
		actualiza_flechas();
	}
}

function desvanece(){
	if(capa1.style.opacity>=0){
		capa1.style.opacity = (capa1.style.opacity-.01);
		setTimeout("desvanece()",10);
	}
	else{
		capa1.style.backgroundImage = "url(./img/"+seleccion+".jpg)";
		capa1.style.opacity = 1.0;
		desliza_info();
	}
}

function desliza_info(){
	var posicion_x = info.offsetLeft;

	if(posicion_x<2){
		info.style.left = (posicion_x+1)+"px";
		setTimeout("desliza_info()",2);
	}
	else{
		info.style.backgroundImage = "url(./img/difuminado-"+seleccion+".jpg)";
		info.style.opacity = 1.0;
		transicion = false;
	}
}

function adelante(){
	if(seleccion<n_opciones)
		carga_imagen(seleccion+1);
}

function atras(){
	if(seleccion>1)
		carga_imagen(seleccion-1);
}

function actualiza_flechas(){
	if(seleccion == 1){
		flecha_izq.style.visibility = "hidden";
	}
	else if(seleccion == n_opciones){
		flecha_der.style.visibility = "hidden";
	}
	else{
		flecha_izq.style.visibility = "visible";
		flecha_der.style.visibility = "visible";
	}
}

function actualiza_info(){
	var txt;

	info.style.left = "-250px";
	info.style.opacity = 0.3;
	info.style.backgroundImage = "none";
	icono.style.backgroundImage = "url(./img/icono"+seleccion+".png)";

	switch(seleccion)
	{
		case 1:
			txt = "The London eye is a giant and one amazing "+
				  "structure to celebrate, and is considered to be "+
				  "the Arsenal of London's attraction. The London eye "+
				  "catches every individual eyes more quickly as it is "+
				  "the most prominent and visible architecture of London.";
		break;
		case 2:
			txt = "The first royal palace was built on the site of the "+
				  "eleventh century, and Westminster was the primary London "+
				  "residence of the Kings of England until a fire destroyed "+
				  "much of the complex in 1512.";
		break;
		case 3:
			txt = "After that, it served as the home of the Parliament, "+
				  "which had been meetingsince the thirteenth century, and "+
				  "the seat of the Royal Courts of Justice, based in "+
				  "and around Westminster Hall.";
		break;
		case 4:
			txt = "The bridge consist of two towers tied together at the upper "+
				  "level by means of two horizontal walkways, designed to withstand "+
				  "the horizontal forces exerted by the suspend section of the bridge "+
				  "ont he landward sides of the towers.";
		break;
	}

	texto.innerHTML = txt;
}
