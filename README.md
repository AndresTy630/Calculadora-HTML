🧮 Descripción

Este es un proyecto de una calculadora web básica hecha con HTML, CSS y JavaScript.
Permite realizar operaciones matemáticas simples.

📂 Estructura del proyecto
Archivos incluidos:

index.html

Aula-digital.css

Aula-digital.js

🏗️ Código HTML
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula Digital</title>
    <link rel="stylesheet" href="Aula-digital.css">
</head>
<body>
    <main>
        <h1 id="Titulo">CALCULADORA</h1>

        <div id="Cuadro">
            <form action="" method="dialog">
                <input type="text" class="txtCalculo" id="txtNumero1" placeholder="Ingrese numero 1">
                <input type="text" class="txtCalculo" id="txtResultado" placeholder="+ - * /">
                <input type="text" class="txtCalculo" id="txtNumero2" placeholder="Ingrese numero 2">
                <input type="submit" class="txtCalculo" id="btnCalcular" value="Calcular">
            </form>
            <p id="Resultado"></p>
        </div>
    </main>
    <script src="./Aula-digital.js"></script>
</body>
</html>

🎨 Código CSS
#Titulo{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: indigo;
    text-align: center;
}

#Cuadro{
    background-color: transparent;
    width: 400px;
    height: 200px;
    border-radius: 1ch;
    margin: auto;
    margin-top: 20px;
}

.txtCalculo{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: larger;
    display: flex;
    border-radius: 6px;
    text-align: left;
    margin: auto;
    margin-bottom: 30px;
}

.txtCalculo:focus{
    outline: none;
    border-color: blueviolet;
}

#Resultado{
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: black;
    margin: auto;
}

⚙️ Código JavaScript
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

    if((Operador == "+" || Operador == "-" || Operador == "*" || Operador == "/") &&
       (!isNaN(Numero) && !isNaN(Numero2)))
    {
        let resultado;
        switch(Operador)
        {
            case "+": resultado = Numero + Numero2; break;
            case "-": resultado = Numero - Numero2; break;
            case "*": resultado = Numero * Numero2; break;
            case "/": resultado = Numero / Numero2; break;
        }

        pResultado.style = "color: black";
        pResultado.innerText = "Resultado: " + resultado;

    } else {
        pResultado.style = "color: red";
        pResultado.innerText = "Calculo no posible";
    }
}

▶️ Cómo usar la calculadora

Ingresá un número en el primer campo

Escribí un operador válido (+, -, *, /)

Ingresá el segundo número

Presioná Calcular

Mirá el resultado debajo
