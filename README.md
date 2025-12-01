.

🧮 Calculadora Web Básica
Este proyecto consta de tres archivos: index.html, Aula-digital.css, y Aula-digital.js.

🏗️ Código HTML (index.html)
Este archivo contiene la estructura de la calculadora, incluyendo los campos de entrada para los números y el operador, el botón de cálculo y el área donde se mostrará el resultado.

HTML

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
🎨 Código CSS (Aula-digital.css)
Este archivo se encarga de dar estilo y formato a la calculadora.

CSS

#Titulo{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: indigo;
    text-align: center;
}

#Cuadro{
    background-color: transparent;
    width: 400px;
    height: 200px; /* Es posible que este alto necesite ajustarse */
    border-radius: 1ch;
    margin: auto;
    margin-top: 20px;
}

.txtCalculo{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: larger;
    /* Para centrar los inputs: quitar display: flex y usar margin: auto en su lugar.
       Además, necesitarán un ancho definido para centrarse correctamente. */
    width: 80%; /* Añadido ancho para mejor visualización y centrado */
    display: block; /* Asegura que cada input ocupe su propia línea */
    border-radius: 6px;
    text-align: center; /* Centrar el texto dentro del input */
    margin: 10px auto; /* Centrar el bloque */
    padding: 8px; /* Añadir un poco de padding */
}

.txtCalculo:focus{
    outline: none;
    border-color: blueviolet;
}

#Resultado{
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: black;
    margin-top: 20px; /* Ajustar el margen superior para separarlo del botón */
}
⚙️ Código JavaScript (Aula-digital.js)
Este archivo contiene la lógica para manejar la entrada, realizar el cálculo y mostrar el resultado.

Nota: Es crucial modificar la función Calcular para que prevenga el comportamiento por defecto del botón de tipo submit dentro del formulario. La función debe recibir el objeto del evento (e) y llamar a e.preventDefault().

JavaScript

const txtNumero1 = document.getElementById("txtNumero1");
const txtNumero2 = document.getElementById("txtNumero2");
// Renombramos la variable a un nombre más descriptivo:
const txtOperador = document.getElementById("txtResultado"); 
const btnCalcular = document.getElementById("btnCalcular");
const pResultado = document.getElementById("Resultado");
// Seleccionar el formulario para adjuntar un listener de submit (más robusto)
const formulario = document.querySelector("#Cuadro form");


// Adjuntamos el listener al evento 'submit' del formulario
formulario.addEventListener("submit", Calcular);

function Calcular(e) // Recibe el objeto del evento
{
    // *** CLAVE: Prevenir el comportamiento por defecto (recarga de página) ***
    e.preventDefault(); 
    
    // Obtener los valores
    let Operador = txtOperador.value.trim(); // Usar trim para limpiar espacios
    let Numero1 = parseFloat(txtNumero1.value);
    let Numero2 = parseFloat(txtNumero2.value);

    // Validación: Verifica que el operador sea válido Y que ambos números sean números
    if((Operador === "+" || Operador === "-" || Operador === "*" || Operador === "/") &&
       (!isNaN(Numero1) && !isNaN(Numero2)))
    {
        let resultado;
        switch(Operador)
        {
            case "+": 
                resultado = Numero1 + Numero2; 
                break;
            case "-": 
                resultado = Numero1 - Numero2; 
                break;
            case "*": 
                resultado = Numero1 * Numero2; 
                break;
            case "/": 
                // Manejar la división por cero
                if (Numero2 === 0) {
                    pResultado.style.color = "red";
                    pResultado.innerText = "Error: División por cero";
                    return; // Termina la función aquí
                }
                resultado = Numero1 / Numero2; 
                break;
        }

        pResultado.style.color = "black";
        // Mostrar el resultado con una precisión razonable
        pResultado.innerText = "Resultado: " + resultado.toFixed(2); 

    } else {
        // En caso de operador inválido o entrada no numérica
        pResultado.style.color = "red";
        pResultado.innerText = "Cálculo no posible. Verifique números y operador.";
    }
}
▶️ Cómo usar la calculadora
Crea un archivo llamado index.html y pega el contenido del primer cuadro de código.

Crea un archivo llamado Aula-digital.css en la misma carpeta y pega el contenido del segundo cuadro de código.

Crea un archivo llamado Aula-digital.js en la misma carpeta y pega el contenido del tercer cuadro de código.

Abre index.html en tu navegador.

Ingresa un número en el primer campo.

Escribe un operador válido (+, -, *, o /) en el segundo campo.

Ingresa el segundo número en el tercer campo.

Presiona "Calcular".

Verás el resultado o un mensaje de error debajo del botón.
