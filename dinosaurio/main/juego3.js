// Función para realizar una operación matemática básica
function calcular() {
    // Obtiene el valor del primer número del campo de entrada con id "num1" y lo convierte a número decimal
    let num1 = parseFloat(document.getElementById("num1").value);
    
    // Obtiene el valor del segundo número del campo de entrada con id "num2" y lo convierte a número decimal
    let num2 = parseFloat(document.getElementById("num2").value);
    
    // Obtiene la operación matemática seleccionada del campo de entrada con id "operacion"
    let operacion = document.getElementById("operacion").value;
    
    // Variable para almacenar el resultado de la operación
    let resultado;

    // Realiza la operación matemática basada en el valor de la operación seleccionada
    switch (operacion) {
        case "+":
            // Si la operación es suma, calcula la suma de num1 y num2
            resultado = num1 + num2;
            break;
        case "-":
            // Si la operación es resta, calcula la resta de num1 y num2
            resultado = num1 - num2;
            break;
        case "*":
            // Si la operación es multiplicación, calcula el producto de num1 y num2
            resultado = num1 * num2;
            break;
        case "/":
            // Si la operación es división, calcula el cociente de num1 y num2
            resultado = num1 / num2;
            break;
        default:
            // Si la operación no coincide con ninguno de los casos anteriores, muestra un mensaje de error
            resultado = "Operación no válida";
    }

    // Muestra el resultado de la operación en el elemento con id "resultadoCalculo"
    document.getElementById("resultadoCalculo").innerText = "Resultado: " + resultado;
}
