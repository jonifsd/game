const gameArea = document.getElementById('gameArea');
const paddle = document.getElementById('paddle');
const scoreBoard = document.getElementById('scoreBoard');
let score = 0;
let paddleLeft = window.innerWidth / 2 - 50;

function createFallingObject() {
    const fallingObject = document.createElement('div');
    fallingObject.classList.add('fallingObject');
    fallingObject.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    fallingObject.style.top = '-50px';
    gameArea.appendChild(fallingObject);

    let fallInterval = setInterval(() => {
        let top = parseFloat(fallingObject.style.top);
        if (top > window.innerHeight - 70 && top < window.innerHeight - 50 &&
            parseFloat(fallingObject.style.left) > paddleLeft - 25 && parseFloat(fallingObject.style.left) < paddleLeft + 125) {
            clearInterval(fallInterval);
            gameArea.removeChild(fallingObject);
            score++;
            scoreBoard.textContent = `Score: ${score}`;
        } else if (top > window.innerHeight) {
            clearInterval(fallInterval);
            gameArea.removeChild(fallingObject);
        } else {
            fallingObject.style.top = `${top + 5}px`;
        }
    }, 20);
}

function movePaddle(event) {
    if (event.key === 'ArrowLeft') {
        paddleLeft = Math.max(0, paddleLeft - 20);
    } else if (event.key === 'ArrowRight') {
        paddleLeft = Math.min(window.innerWidth - 100, paddleLeft + 20);
    }
    paddle.style.left = `${paddleLeft}px`;
}

setInterval(createFallingObject, 1000);
document.addEventListener('keydown', movePaddle);
