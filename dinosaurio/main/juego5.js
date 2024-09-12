const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreValue = document.getElementById('scoreValue');
let score = 0;
let jumping = false;
let isGameOver = false;

// Mover el cactus
function moveCactus() {
    let cactusPosition = window.innerWidth;
    let interval = setInterval(() => {
        if (cactusPosition < -30) {
            cactusPosition = window.innerWidth;
            score++;
            scoreValue.textContent = score;
        }
        if (cactusPosition > 0 && cactusPosition < 50 && !jumping) {
            if (parseInt(window.getComputedStyle(dino).bottom) <= 50) {
                gameOver();
                clearInterval(interval);
            }
        }
        cactusPosition -= 5;
        cactus.style.left = cactusPosition + 'px';
    }, 20);
}

// Hacer saltar el dinosaurio
function jump() {
    if (jumping) return;
    jumping = true;
    let jumpHeight = 0;
    let jumpInterval = setInterval(() => {
        if (jumpHeight >= 100) {
            clearInterval(jumpInterval);
            let fallInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    jumping = false;
                    clearInterval(fallInterval);
                }
                jumpHeight -= 5;
                dino.style.bottom = (20 + jumpHeight) + 'px';
            }, 20);
        }
        jumpHeight += 5;
        dino.style.bottom = (20 + jumpHeight) + 'px';
    }, 20);
}

// Manejar el fin del juego
function gameOver() {
    isGameOver = true;
    alert('¡Juego terminado! Tu puntuación es ' + score);
}

// Manejar la tecla de salto
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

// Iniciar el juego
function startGame() {
    moveCactus();
}

startGame();
