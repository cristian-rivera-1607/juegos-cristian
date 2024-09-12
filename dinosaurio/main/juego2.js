// Genera un número secreto aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Inicializa el contador de intentos
let intentos = 0;

// Función para adivinar el número secreto
function adivinar() {
    // Obtiene el valor ingresado por el usuario en el campo de entrada, lo convierte a un número entero
    let intento = parseInt(document.getElementById("numero").value);

    // Incrementa el contador de intentos cada vez que se llama a la función
    intentos++;

    // Compara el número ingresado con el número secreto
    if (intento === numeroSecreto) {
        // Si el número ingresado es correcto, muestra un mensaje de éxito con el número de intentos
        document.getElementById("resultado").innerText = "¡Correcto! Adivinaste en " + intentos + " intentos.";
    } else if (intento < numeroSecreto) {
        // Si el número ingresado es menor que el número secreto, muestra un mensaje indicando que el número es mayor
        document.getElementById("resultado").innerText = "El número es mayor. Inténtalo de nuevo.";
    } else {
        // Si el número ingresado es mayor que el número secreto, muestra un mensaje indicando que el número es menor
        document.getElementById("resultado").innerText = "El número es menor. Inténtalo de nuevo.";
    }
}
