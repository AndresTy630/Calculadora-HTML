)
🧮 Descripción del proyecto

Este proyecto es una calculadora web básica desarrollada con HTML, CSS y JavaScript.
Permite ingresar dos números, elegir un operador matemático (+, -, *, /) y obtener un resultado directamente en la página.

📂 Estructura del proyecto

El proyecto está compuesto por tres archivos:

index.html → Contiene la estructura de la calculadora.

Aula-digital.css → Estilos visuales.

Aula-digital.js → Lógica de la calculadora.

🏗️ Explicación del HTML

El archivo HTML define la interfaz del usuario:

Un título principal (CALCULADORA).

Un contenedor <div> con tres campos:

Número 1

Operador (+, -, *, /)

Número 2

Un botón Calcular.

Un <p> donde se muestra el resultado.

<input type="text" id="txtNumero1">
<input type="text" id="txtResultado">   <!-- acá se ingresa el operador -->
<input type="text" id="txtNumero2">
<input type="submit" id="btnCalcular" value="Calcular">
<p id="Resultado"></p>


El archivo también vincula el CSS y el JavaScript.

🎨 Explicación del CSS

Los estilos se enfocan en:

Centrar el título y aplicar una tipografía agradable.

Darle forma al cuadro de la calculadora (ancho, altura y bordes).

Estilizar los inputs:

Bordes redondeados.

Espaciado entre elementos.

Cambio de color al enfocarlos (:focus).

Estilo para el texto del resultado.

Ejemplo del estilo de un input:

.txtCalculo {
    font-size: larger;
    border-radius: 6px;
    margin-bottom: 30px;
}

⚙️ Explicación del JavaScript

El JavaScript se encarga de realizar las operaciones matemáticas.

Captura los elementos del HTML usando getElementById.

Escucha el clic del botón Calcular.

Toma:

Número 1

Operador

Número 2

Verifica que:

El operador sea válido (+, -, *, /)

Los valores ingresados sean números.

Si todo está bien, realiza la operación usando un switch.

Muestra el resultado en el <p id="Resultado">.

Si hay un error, muestra “Calculo no posible” en rojo.

Código principal:

btnCalcular.addEventListener("click", Calcular);

function Calcular() {
    let Operador = txtOperador.value;
    let Numero = parseFloat(txtNumero1.value);
    let Numero2 = parseFloat(txtNumero2.value);

    if ((Operador == "+" || Operador == "-" || Operador == "*" || Operador == "/") &&
        (!isNaN(Numero) && !isNaN(Numero2))) {

        let resultado;
        switch (Operador) {
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

▶️ Cómo usarla

Ingresar un número en el primer campo.

Escribir un operador válido (+, -, *, /).

Ingresar el segundo número.

Hacer clic en Calcular.

El resultado aparece debajo.

📌 Extras posibles para mejorar (opcional)

Validar que no se pueda dividir por cero.

Cambiar el input del operador por un <select>.

Estilizar el diseño para que sea más atractivo.
