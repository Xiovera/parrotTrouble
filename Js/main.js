var hora = document.getElementById("hora");
var pSalida = document.getElementById("salida");
var img = document.getElementById("img");

function evaluar()
{	
	var talking = document.getElementById("talking").value;
	var parrot = false;
	var phora = hora.value;

	if(talking == "1"){
		parrot = true;
	}
	if (parrot) {
		if (phora>=7 && phora<=20) {
			pSalida.innerHTML = "No";
			img.innerHTML = '<img src="../img/lorotalking.png" alt="">';
		}
		else{
			pSalida.innerHTML = "Si";
			img.innerHTML = '<img src="../img/nottalking.png" alt="">'
		}
	}else{
		pSalida.innerHTML = "No";
		img.innerHTML = '';
	}
}