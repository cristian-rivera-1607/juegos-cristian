// Función para cambiar el color del semáforo
function cambiarColor(color) {
    // Cambia el color de la luz roja
    // Si el color pasado es 'rojo', establece el color de fondo a rojo, de lo contrario, a gris
    document.getElementById("rojo").style.backgroundColor = color === 'rojo' ? 'red' : 'grey';
    
    // Cambia el color de la luz amarilla
    // Si el color pasado es 'amarillo', establece el color de fondo a amarillo, de lo contrario, a gris
    document.getElementById("amarillo").style.backgroundColor = color === 'amarillo' ? 'yellow' : 'grey';
    
    // Cambia el color de la luz verde
    // Si el color pasado es 'verde', establece el color de fondo a verde, de lo contrario, a gris
    document.getElementById("verde").style.backgroundColor = color === 'verde' ? 'green' : 'grey';
}

// Función para iniciar el semáforo
function iniciarSemaforo() {
    // Cambia a rojo al iniciar
    setTimeout(() => cambiarColor('rojo'), 0);
    
    // Cambia a amarillo después de 3000 milisegundos (3 segundos)
    setTimeout(() => cambiarColor('amarillo'), 3000);
    
    // Cambia a verde después de 6000 milisegundos (6 segundos)
    setTimeout(() => cambiarColor('verde'), 6000);
    
    // Vuelve a iniciar el ciclo después de 9000 milisegundos (9 segundos), repitiendo el ciclo
    setTimeout(iniciarSemaforo, 9000);
}
