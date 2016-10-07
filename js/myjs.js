
function Consola() 
{
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    console.log(input1, input2);
}

function Calcular()
{
    var operando1 = document.calc.input1.value;
    var operando2 = document.calc.input2.value;
    var operacion=document.getElementById("example").value;

    var result = eval(operando1 + operacion + operando2);
    document.calc.resultado.value = result;

    localStorage.setItem("Resultado", result);
}

function Mostrar()
{
	var res = localStorage.getItem("Resultado");
	document.getElementById("resultado").value = res;
}   