const txtNumero1 = document.getElementById("txtNumero1");
const txtNumero2 = document.getElementById("txtNumero2");
const txtOperador = document.getElementById("txtResultado");
const btnCalcular = document.getElementById("btnCalcular");
const pResultado = document.getElementById("Resultado");

btnCalcular.addEventListener("click", Calcular);

function Calcular()
{
    let Operador = txtOperador.value;
    let Numero = parseFloat(txtNumero1.value);
    let Numero2 = parseFloat(txtNumero2.value);

    if((Operador == "+" || Operador == "-" || Operador == "*" || Operador == "/") && (!isNaN(Numero) && !isNaN(Numero2)))
    {
        let resultado;
        switch(Operador)
        {
            case "+":
                resultado = Numero + Numero2;
                break;
            case "-":
                resultado = Numero - Numero2;
                break;
            case "*":
                resultado = Numero * Numero2;
                break;
            case "/":
                resultado = Numero / Numero2;
                break;
        }

        pResultado.style = "Color: Black";
        pResultado.innerText = "Resultado: " + resultado;

    } else{
        pResultado.style = "Color: Red";
        pResultado.innerText = "Calculo no posible";
    }
}