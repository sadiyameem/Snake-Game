const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d')

let speed = 7;

// game function
function drawGame() {

    setTimeout(drawGame, 1000/speed);
}