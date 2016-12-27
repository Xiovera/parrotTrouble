function calcular()
{	
	var numero = document.getElementById("numer1").value;
	var diferencia = document.getElementById("diff").value;
	


	if(numer1>21)
	{	
		document.getElementById("salida").innerHTML = "Muy bien Squad!";
	}else{
		document.getElementById("salida").innerHTML = "Pueden hacerlo mejor";
	}

}



function evaluar ()
{
	var aSmile = document.getElementById("mono_a").checked;
	var bSmile = document.getElementById("mono_b").checked;
	var salida = document.getElementById("salida");

	if(aSmile == bSmile)
	{
		salida.innerHTML = "1";
	}else{
		salida.innerHTML = "0";
	}
}