//Pop-Up constants

const modalOverlay = document.getElementById("modal-overlay");
const modalWindow = document.getElementById("modal-window");
const modalContent = document.getElementById("modal-content");
const gameButtons = document.getElementById("game-buttons");
const popUpVs = document.getElementById("popUpVs");
const popUpCpu = document.getElementById("popUpCpu");

//Gameboard constants

const box = document.getElementsByClassName("box");

const box0 = document.getElementById("box0");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");

//Player info constants & variables

const playerOneName = document.getElementById("player1name");
let playerOneScore = document.getElementById("playeronescore");

const playerTwoName = document.getElementById("player2name");
let playerTwoScore = document.getElementById("playertwoscore");

let playerOneTurn = "";
let playerTwoTurn = "";

//GAME

function cleanBoard() {
    for (let i = 0; i < box.length; i++) {
        box[i].innerHTML = "";
    }
};

function createPlayer(name) {
    return {
        name: name,
        addScore(score) {
            return score += 1;
        },
    }
};

function turnChanger() {
    if (playerOneTurn == "" && playerTwoTurn == "") {
        playerOneTurn = "ON";
        playerTwoTurn = "OFF";
    }
};

/*
THE ODIN PROJECT recommends/asks "to store the gameboard as an array inside of a Gameboard object", but I didn't know exactly how to
make it work within the DOM logic, so it was useless in my code:

const gameBoard = {
    board: [
        box0, box1, box2, 
        box3, box4, box5, 
        box6, box7, box8
    ]
};

Instead, I went for a more straightforward yet repetitive working method. I'm sure it does not follow DRY correctly, but it works.
*/

//RESULT POPUP

function resultPopUp(result, player) {

    let resultDivOverlay = document.createElement("div");
    resultDivOverlay.style = "position: fixed;	width: 100vw; height: 100vh; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center";
    document.body.appendChild(resultDivOverlay);

    let resultDiv = document.createElement("div");
    resultDiv.style = "width: 300px; height: 200px; background: #565a75; border: 1px solid #fafbf6; font-size: 16px; box-shadow: 0 0 15px  #0f0f1b;";
    resultDivOverlay.appendChild(resultDiv);

    let resultDivTitleBar = document.createElement("div");
    resultDivTitleBar.style = "height: 70px; background: #0f0f1b; display: flex; align-items: center; justify-content: space-between;";
    resultDiv.appendChild(resultDivTitleBar);
    
    let resultDivTitle = document.createElement("span");
    resultDivTitle.style = "margin-left: 45px; margin-bottom: 10px; font-family: '8-bit_arcade_inmedium'; font-size: 70px; color: #565a75;";
    resultDivTitle.innerHTML = "RESULT";
    resultDivTitleBar.appendChild(resultDivTitle);
    
    let resultDivContent = document.createElement("div");
    resultDivContent.style = "line-height: 35px; text-align: center; margin-left: 10px; margin-top: -10px; padding: 15px; font-family: '8-bit_arcade_inmedium'; font-size: 45px; color: #0f0f1b;";
    resultDivContent.innerHTML = "";
    resultDiv.appendChild(resultDivContent);

    let resultOkButton = document.createElement("h3");
    resultOkButton.type = "button";
    resultOkButton.innerHTML = "OK";
    resultOkButton.style = "cursor: pointer; margin-left: 130px; margin-top: -5px; height: 30px; width: 40px; font-family: '8-bit_arcade_inmedium'; font-size: 25px; text-align: center; color: #565a75; border: 1px solid #c6b7be; background-color: #0f0f1b;";
    resultDiv.appendChild(resultOkButton);

    resultOkButton.addEventListener("click", () => {
        document.body.removeChild(resultDivOverlay);
        cleanBoard();
    });

    if (result === "win") {
        resultDivContent.innerHTML = player + " WINS";
    } else if (result === "draw") {
        resultDivContent.innerHTML = "DRAW";
    };
}

function winCon() {
    if (
        //horizontal
        box0.innerHTML == "X" && box1.innerHTML == "X" && box2.innerHTML == "X" ||
        box3.innerHTML == "X" && box4.innerHTML == "X" && box5.innerHTML == "X" ||
        box6.innerHTML == "X" && box7.innerHTML == "X" && box8.innerHTML == "X" ||
        //vertical
        box0.innerHTML == "X" && box3.innerHTML == "X" && box6.innerHTML == "X" ||
        box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X" ||
        box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X" ||
        //diagonal
        box0.innerHTML == "X" && box4.innerHTML == "X" && box8.innerHTML == "X" ||
        box6.innerHTML == "X" && box4.innerHTML == "X" && box2.innerHTML == "X") {
            resultPopUp("win", playerOneName.innerHTML);
            playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
            //cleanBoard();
            playerOneTurn = "ON";
            playerTwoTurn = "OFF";
    } else if (
        //horizontal
        box0.innerHTML == "O" && box1.innerHTML == "O" && box2.innerHTML == "O" ||
        box3.innerHTML == "O" && box4.innerHTML == "O" && box5.innerHTML == "O" ||
        box6.innerHTML == "O" && box7.innerHTML == "O" && box8.innerHTML == "O" ||
        //vertical
        box0.innerHTML == "O" && box3.innerHTML == "O" && box6.innerHTML == "O" ||
        box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O" ||
        box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O" ||
        //diagonal
        box0.innerHTML == "O" && box4.innerHTML == "O" && box8.innerHTML == "O" ||
        box6.innerHTML == "O" && box4.innerHTML == "O" && box2.innerHTML == "O") {
            resultPopUp("win", playerTwoName.innerHTML);
            playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
            //cleanBoard();
            playerOneTurn = "ON";
            playerTwoTurn = "OFF";
    } else if (
        box0.innerHTML !== "" && box1.innerHTML !== "" && box2.innerHTML !== "" &&
        box3.innerHTML !== "" && box4.innerHTML !== "" && box5.innerHTML !== "" &&
        box6.innerHTML !== "" && box7.innerHTML !== "" && box8.innerHTML !== "") {
            resultPopUp("draw");
            playerOneTurn = "ON";
            playerTwoTurn = "OFF";
    }
};

function movement() {
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
        winCon();    
        });
    }
};

function computerPlay() {
    let random = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
    let randomBox = random[Math.floor(Math.random() * random.length)];
    if (randomBox.innerHTML == "") {
        randomBox.innerHTML = "O";
    } else if (randomBox.innerHTML == "X" || randomBox.innerHTML == "O") {
        computerPlay();
    } else {
        //TOO MUCH RECURSION, solucionar que ocurre cuando el tablero está lleno
    }
};

function vsCpuMovement() {
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("click", () => {
            if (box[i].innerHTML == "") {
                box[i].innerHTML = "X";               
                computerPlay();
            }
        winCon();
        });
    }
};




/*

let random = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
let randomBox = random[Math.floor(Math.random() * random.length)];
if (randomBox.innerHTML == "") {
    randomBox.innerHTML = "O";
}


function computerPlay() {

    return 
    
};
*/

//POPUP

popUpVs.addEventListener("click", () => {
    modalContent.innerHTML = "Insert Player 1 name";
    modalContent.style.marginLeft = "130px";
    popUpVs.remove();
    popUpCpu.remove();
    
    let p1NameBar = document.createElement("input");
    p1NameBar.id = "p1NameBar";
    p1NameBar.maxLength = "6";
    gameButtons.appendChild(p1NameBar);
    
    let p1NameOk = document.createElement("h2");
    p1NameOk.class = "popUpButton";
    p1NameOk.type = "button";
    p1NameOk.id = "popUpP1NameOk";
    p1NameOk.innerHTML = "OK";
    gameButtons.appendChild(p1NameOk);

    p1NameOk.addEventListener("click", () => {
        playerOneName.innerHTML = p1NameBar.value;

        modalContent.innerHTML = "Insert Player 2 name";
        modalContent.style.marginLeft = "130px";
        p1NameBar.remove();
        p1NameOk.remove();

        let p2NameBar = document.createElement("input");
        p2NameBar.id = "p2NameBar";
        p2NameBar.maxLength = "6";
        gameButtons.appendChild(p2NameBar);
        
        let p2NameOk = document.createElement("h2");
        p2NameOk.class = "popUpButton";
        p2NameOk.type = "button";
        p2NameOk.id = "popUpP2NameOk";
        p2NameOk.innerHTML = "OK";
        gameButtons.appendChild(p2NameOk);

        p2NameOk.addEventListener("click", () => {
            playerTwoName.innerHTML= p2NameBar.value;
            document.body.removeChild(modalOverlay);
            vsPlayerTwoMode();
        })
    });
});

popUpCpu.addEventListener("click", () => {

    modalContent.innerHTML = "Insert Player name";
    modalContent.style.marginLeft = "130px";
    popUpVs.remove();
    popUpCpu.remove();
    
    let p1NameBar = document.createElement("input");
    p1NameBar.id = "p1NameBar";
    p1NameBar.maxLength = "6";
    gameButtons.appendChild(p1NameBar);
        
    let p1NameOk = document.createElement("h2");
    p1NameOk.class = "popUpButton";
    p1NameOk.type = "button";
    p1NameOk.id = "popUpP1NameOk";
    p1NameOk.innerHTML = "OK";
    gameButtons.appendChild(p1NameOk);

    p1NameOk.addEventListener("click", () => {
        playerOneName.innerHTML = p1NameBar.value;
        document.body.removeChild(modalOverlay);
        vsCPUMode();
    });
});

//Game modes

function vsPlayerTwoMode(p1, p2) {

    cleanBoard()
    
    p1 = createPlayer();
    p1.name = playerOneName.innerHTML;
    playerOneScore.innerHTML = "0";

    p2 = createPlayer();
    p2.name = playerTwoName.innerHTML;
    playerTwoScore.innerHTML = "0";

    movement();
    turnChanger();

};

const vsPlayerTwo = document.getElementById("vsplayer2");
vsPlayerTwo.addEventListener("click", () => {
    
    vsPlayerTwoMode();
    
});

function vsCPUMode() {

    cleanBoard()
    
    p1 = createPlayer();
    p1.name = playerOneName.innerHTML;
    playerOneScore.innerHTML = "0";

    p2 = createPlayer();
    p2.name = "CPU"
    playerTwoName.innerHTML = p2.name;
    playerTwoScore.innerHTML = "0";

    vsCpuMovement();
    turnChanger();

}

const vsCPU = document.getElementById("vsCPU");
vsCPU.addEventListener("click", () => {

    cleanBoard();
    vsCPUMode();

})