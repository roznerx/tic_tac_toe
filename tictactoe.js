const playerOneName = document.getElementById("player1name");
const playerOneScore = document.getElementById("playeronescore");

const playerTwoName = document.getElementById("player2name");
const playerTwoScore = document.getElementById("playertwoscore");

let playerOneTurn = "";
let playerTwoTurn = "";

const box = document.getElementsByClassName("box");
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", () => {
        if (box[i].innerHTML == "") {
            if (playerOneTurn == "ON" && playerTwoTurn == "OFF") {
                box[i].innerHTML = "X";
                playerOneTurn = "OFF";
                playerTwoTurn = "ON";
            } else if (playerTwoTurn == "ON" && playerOneTurn == "OFF") {
                box[i].innerHTML = "O";
                playerOneTurn = "ON";
                playerTwoTurn = "OFF";
            }
        }
    });
}

const box0 = document.getElementById("box0");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");

const gameBoard = {
    board: [
    box0, box1, box2, 
    box3, box4, box5, 
    box6, box7, box8
    ],
    winConditions: [
        //horizontal
        [box0, box1, box2],
        [box3, box4, box5],
        [box6, box7, box8],
        //vertical
        [box0, box3, box6],
        [box1, box4, box7],
        [box2, box5, box8],
        //diagonal
        [box0, box4, box8],
        [box6, box4, box2]
    ]
};

function createPlayer(name) {
    return {
        name: name,
        addScore(score) {
            return score += 1;
        },
    }
};

function cleanBoard() {
    for (let i = 0; i < box.length; i++) {
        box[i].innerHTML = "";
    }
};

function winningConditions() {
    if (box0.innerHTML == "X" && box1.innerHTML == "X" && box2.innerHTML == "X") {
        console.log("OK");
        alert("WORKINGOK");
    }
};

function vsPlayerTwoMode(p1, p2) {

    cleanBoard()
    
    p1 = createPlayer();
    p1.name = prompt("Insert Player 1 name");
    playerOneName.innerHTML = p1.name;
    playerOneScore.innerHTML = "0";

    p2 = createPlayer();
    p2.name = prompt("Insert Player 2 name");
    playerTwoName.innerHTML = p2.name;
    playerTwoScore.innerHTML = "0";

    if (playerOneTurn == "" && playerTwoTurn == "") {
        playerOneTurn = "ON";
        playerTwoTurn = "OFF";
    }

    winningConditions();

};

const vsPlayerTwo = document.getElementById("vsplayer2");
vsPlayerTwo.addEventListener("click", () => {
    
    vsPlayerTwoMode();
        
});

function vsCPUMode() {
    cleanBoard()
    console.log("NOTYETCODED");
}

const vsCPU = document.getElementById("vsCPU");
vsCPU.addEventListener("click", () => {

    vsCPUMode();

})

