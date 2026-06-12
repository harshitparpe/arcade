let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let mode = "light";
let lightMode = document.querySelector("#light-mode");
let darkMode = document.querySelector("#dark-mode");

let turnO = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    for(box of boxes){
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner} wins`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winningConditions){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner" ,pos1Val);
                showWinner(pos1Val);
                disableBoxes();
            }
        }
    };
};

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click", resetGame);

modeBtn.addEventListener("click", () => {
    if(mode === "light"){
        mode === "dark";
        for(box of boxes){
            box.style.backgroundColor = "#14213d";
            box.style.color = "#219ebc";
        }
        body.style.backgroundColor = "#293761";
        document.querySelector("h1").style.color = "#219ebc"
        msg.style.color = "#219ebc";
        lightMode.style.display = "flex";
        darkMode.style.display = "none";
        modeBtn.style.backgroundColor = "white";

    }
    else{
        mode === "light";
        for(box of boxes){
            box.style.backgroundColor = "#acd3e5";
            box.style.color = "#14213d";
        }
        body.style.backgroundColor = "#219ebc";
        document.querySelector("h1").style.color = "#14213d"
        msg.style.color = "#14213d";
        lightMode.style.display = "none";
        darkMode.style.display = "flex";
        modeBtn.style.backgroundColor = "#14213d";
    }
});

