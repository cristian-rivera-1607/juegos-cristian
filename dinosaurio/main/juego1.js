// Función para viajar a una URL aleatoria 
function viajarConSuerte() {
    // Genera un número aleatorio entre 0 y 10
    var x = Math.random() * 10;
    var URL;

    // Determina la URL a la que redirigir basándose en el valor de x
    if (x <= 3) {
        URL = 'https://www.hotmail.com'; // URL para x entre 0 y 3
    } else if (x <= 6) {
        URL = 'https://www.gmail.com'; // URL para x entre 3 y 6
    } else {
        URL = 'https://www.yahoo.com'; // URL para x entre 6 y 10
    }

    // Redirige al navegador a la URL seleccionada
    location.assign(URL);
}

// Variables para el pase de imágenes
var contador = 1; // Contador para rastrear la imagen actual
var temporizador; // Variable para almacenar el identificador del temporizador

// Función para iniciar el pase de imágenes
function iniciar() {
    // Establece un intervalo que llama a rotarImagenes cada 3000 milisegundos (3 segundos)
    temporizador = setInterval(rotarImagenes, 3000);
}

// Función para rotar las imágenes
function rotarImagenes() {
    // Reinicia el contador a 0 si alcanza el valor 10
    if (contador >= 10) {
        contador = 0;
    }

    // Obtiene el elemento de imagen con el id 'imgSlide'
    var img = document.getElementById('imgSlide');

    // Actualiza la fuente de la imagen a la ruta correspondiente con el número de contador
    img.src = './images/img' + contador + '.jpg';

    // Incrementa el contador para la próxima imagen
    contador++;
}


