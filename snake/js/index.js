//Game Constants and Variables

let inputDir = {x: 0, y: 0};
const foodSound = new Audio('snake bite.mp3');
const gameOverSound = new Audio('game over.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('bgmusic.mp3');
const scoreValue = document.querySelector("#score-value");
const start = document.querySelector("#modal");
const play = document.querySelector("#start-game");
const soundBtn = document.querySelector("#sound");
let sound = true;
let speed = 17;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
    
]; 
food = {x: 9 ,y: 9};

//Game functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snakeArr){
    
    //Bumping snake into itself
    for (let i = 1; i < snakeArr.length; i++) {
        if(snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y){
            return true;
        }
    }
    
    //Bumping snake into the wall
    if(snakeArr[0].x >= 18 || snakeArr[0].x <= 0 || snakeArr[0].y >= 18 || snakeArr[0].y <= 0){
        return true;
    }
}

function gameEngine(){
    // Part 1: Updating the snake array & food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y:0};
        alert("Game Over\nPress any key to play again!");
        snakeArr = [{x: 13, y: 15}];
        musicSound.play();
        score = 0;
    }

    // If you have eaten the food, increment the score and regenrate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        let a = 2;
        let b = 16;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y})
        food = {x:Math.round(a + (b - a)*Math.random()), y: Math.round(a + (b - a)*Math.random())};
        score++;
        console.log("score =" ,score);
        scoreValue.innerHTML = score;
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i+1] = {...snakeArr[i]};
        
    };

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //Part 2: Display the snake & food
    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    //Display the food
    foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
}


// Main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = {x: 0, y: 1} //start the game
    moveSound.play();
    musicSound.play();

    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
        break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
        break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
        break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0 ;
        break;

        default:
            break;
    }
});

//Features
play.addEventListener("click", () => {
    start.innerHTML = "";
    start.style.backdropFilter = "none";
    musicSound.play();
});

// soundBtn.addEventListener("click" ,() => {
//     if(sound = true){
//         musicSound.pause();
//         moveSound.pause();
//         gameOverSound.pause();
//         foodSound.pause();
//         soundBtn.innerText = "SOUND ON";
//     }
//     else{
//         musicSound.play();
//         moveSound.play();
//         gameOverSound.play();
//         foodSound.play();
//         soundBtn.innerText = "SOUNF OFF";
//     }
// });