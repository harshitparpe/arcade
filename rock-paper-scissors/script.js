let userScore = 0;
let compScore = 0;

let lol = document.querySelector("#computer-container");
let meriChoice = document.querySelector("#mera-container");
let winner = document.querySelector("#winner");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * 3);
    return options[num];
};

const drawGame = () => {
    console.log("DRAW");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "rgb(39, 24, 126)";
    winner.innerText = "=";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("you win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
        winner.innerText = ">";
    }
    else{
        console.log("you lose");
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
        winner.innerText = "<";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

    displayCompChoice(compChoice);
    displayUserChoice(userChoice);

};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

const displayCompChoice = (compChoice) => {
    if(compChoice === "rock"){
        lol.innerHTML = "<div class='hi'><p>Comp</p><img id='comp-rock' class='lol' src='https://cdn-icons-png.freepik.com/256/6223/6223796.png?ga=GA1.1.382695037.1698058756&semt=ais'></div>";
    }
    else if(compChoice === "paper"){
        lol.innerHTML = "<div class='hi'><p>Comp</p><img id='comp-paper' class='lol' src='https://cdn-icons-png.freepik.com/256/2541/2541984.png?ga=GA1.1.382695037.1698058756&semt=ais'></div>";
    }
    else{
        lol.innerHTML = "<div class='hi'><p>Comp</p><img id='comp-scissors' class='lol' src='https://cdn-icons-png.freepik.com/256/1151/1151147.png?ga=GA1.1.382695037.1698058756&semt=ais'></div>";
    }
};

const displayUserChoice = (userChoice) => {
    if(userChoice === "rock"){
        meriChoice.innerHTML = "<div class='hi'><p>You</p><img id='comp-rock' class='lol' src='https://cdn-icons-png.freepik.com/256/6223/6223796.png?ga=GA1.1.382695037.1698058756&semt=ais'></div>";
    }
    else if(userChoice === "paper"){
        meriChoice.innerHTML = "<div class='hi'><p>You</p><img id='comp-paper' class='lol' src='https://cdn-icons-png.freepik.com/256/2541/2541984.png?ga=GA1.1.382695037.1698058756&semt=ais'></div>";
    }
    else{
        meriChoice.innerHTML = "<div class='hi'><p>You</p><img id='comp-scissors' class='lol' src='https://cdn-icons-png.freepik.com/256/1151/1151147.png?ga=GA1.1.382695037.1698058756&semt=ais'></div>";
    }
};