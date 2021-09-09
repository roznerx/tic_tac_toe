//PLAYER CREATOR

const playerCreator = {
    names: [
        playerOneName = document.getElementById("player1name"),
        playerTwoName = document.getElementById("player2name"),
    ],
    scores: [
        playerOneScore = document.getElementById("playeronescore"),
        playerTwoScore = document.getElementById("playertwoscore"),
    ],
    turns: [
        playerOneTurn = "",
        playerTwoTurn = "",
    ],
    createPlayer(name) {
        return {
            name: name,
        }
    },
};

//BOARD & RULES

const gameBoard = {
    board: document.getElementsByClassName("box"),
    boxes: [
        box0 = document.getElementById("box0"),
        box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8")
    ],
    cleanBoard() {
        for (let i = 0; i < gameBoard.board.length; i++) {
            gameBoard.board[i].innerHTML = "";
        }
    },
};

const rules = {
    turnChanger() {
        if (playerCreator.turns[0] == "" && playerCreator.turns[1] == "") {
            playerCreator.turns[0] = "ON";
            playerCreator.turns[1] = "OFF";
        }
    },
    resultPopUp(result, player) {
        let resultDivOverlay = document.createElement("div");
        resultDivOverlay.id = "resultDivOverlay";
        document.body.appendChild(resultDivOverlay);
        let resultDiv = document.createElement("div");
        resultDiv.id = "resultDiv";
        resultDivOverlay.appendChild(resultDiv);
        let resultDivTitleBar = document.createElement("div");
        resultDivTitleBar.id = "resultDivTitleBar";
        resultDiv.appendChild(resultDivTitleBar);
        let resultDivTitle = document.createElement("span");
        resultDivTitle.id = "resultDivTitle";
        resultDivTitle.innerHTML = "RESULT";
        resultDivTitleBar.appendChild(resultDivTitle);
        let resultDivContent = document.createElement("div");
        resultDivContent.id = "resultDivContent";
        resultDivContent.innerHTML = "";
        resultDiv.appendChild(resultDivContent);
        let resultOkButton = document.createElement("h3");
        resultOkButton.id = "resultOkButton";
        resultOkButton.type = "button";
        resultOkButton.innerHTML = "OK";
        resultDiv.appendChild(resultOkButton);
        resultOkButton.addEventListener("click", () => {
            document.body.removeChild(resultDivOverlay);
            gameBoard.cleanBoard();
        });
        if (result === "win") {
            resultDivContent.innerHTML = player + " WINS";
        } else if (result === "draw") {
            resultDivContent.innerHTML = "DRAW";
        };
    },
    winCon() {
        if (
            //horizontal
            gameBoard.boxes[0].innerHTML == "X" && gameBoard.boxes[1].innerHTML == "X" && gameBoard.boxes[2].innerHTML == "X" ||
            gameBoard.boxes[3].innerHTML == "X" && gameBoard.boxes[4].innerHTML == "X" && gameBoard.boxes[5].innerHTML == "X" ||
            gameBoard.boxes[6].innerHTML == "X" && gameBoard.boxes[7].innerHTML == "X" && gameBoard.boxes[8].innerHTML == "X" ||
            //vertical
            gameBoard.boxes[0].innerHTML == "X" && gameBoard.boxes[3].innerHTML == "X" && gameBoard.boxes[6].innerHTML == "X" ||
            gameBoard.boxes[1].innerHTML == "X" && gameBoard.boxes[4].innerHTML == "X" && gameBoard.boxes[7].innerHTML == "X" ||
            gameBoard.boxes[2].innerHTML == "X" && gameBoard.boxes[5].innerHTML == "X" && gameBoard.boxes[8].innerHTML == "X" ||
            //diagonal
            gameBoard.boxes[0].innerHTML == "X" && gameBoard.boxes[4].innerHTML == "X" && gameBoard.boxes[8].innerHTML == "X" ||
            gameBoard.boxes[6].innerHTML == "X" && gameBoard.boxes[4].innerHTML == "X" && gameBoard.boxes[2].innerHTML == "X") {
                rules.resultPopUp("win", playerCreator.names[0].innerHTML);
                playerCreator.scores[0].innerHTML = parseInt(playerCreator.scores[0].innerHTML) + 1;
                playerCreator.turns[0] = "ON";
                playerCreator.turns[1] = "OFF";
        } else if (
            //horizontal
            //horizontal
            gameBoard.boxes[0].innerHTML == "O" && gameBoard.boxes[1].innerHTML == "O" && gameBoard.boxes[2].innerHTML == "O" ||
            gameBoard.boxes[3].innerHTML == "O" && gameBoard.boxes[4].innerHTML == "O" && gameBoard.boxes[5].innerHTML == "O" ||
            gameBoard.boxes[6].innerHTML == "O" && gameBoard.boxes[7].innerHTML == "O" && gameBoard.boxes[8].innerHTML == "O" ||
            //vertical
            gameBoard.boxes[0].innerHTML == "O" && gameBoard.boxes[3].innerHTML == "O" && gameBoard.boxes[6].innerHTML == "O" ||
            gameBoard.boxes[1].innerHTML == "O" && gameBoard.boxes[4].innerHTML == "O" && gameBoard.boxes[7].innerHTML == "O" ||
            gameBoard.boxes[2].innerHTML == "O" && gameBoard.boxes[5].innerHTML == "O" && gameBoard.boxes[8].innerHTML == "O" ||
            //diagonal
            gameBoard.boxes[0].innerHTML == "O" && gameBoard.boxes[4].innerHTML == "O" && gameBoard.boxes[8].innerHTML == "O" ||
            gameBoard.boxes[6].innerHTML == "O" && gameBoard.boxes[4].innerHTML == "O" && gameBoard.boxes[2].innerHTML == "O") {
                rules.resultPopUp("win", playerCreator.names[1].innerHTML);
                playerCreator.scores[1].innerHTML = parseInt(playerCreator.scores[1].innerHTML) + 1;
                playerCreator.turns[0] = "ON";
                playerCreator.turns[1] = "OFF";
        } else if (
            gameBoard.boxes[0].innerHTML !== "" && gameBoard.boxes[1].innerHTML !== "" && gameBoard.boxes[2].innerHTML !== "" &&
            gameBoard.boxes[3].innerHTML !== "" && gameBoard.boxes[4].innerHTML !== "" && gameBoard.boxes[5].innerHTML !== "" &&
            gameBoard.boxes[6].innerHTML !== "" && gameBoard.boxes[7].innerHTML !== "" && gameBoard.boxes[8].innerHTML !== "") {
                rules.resultPopUp("draw");
                playerCreator.turns[0] = "ON";
                playerCreator.turns[1] = "OFF";
        }
    },
}

// MOVEMESETS

const movements = {
    movement() {
        for (let i = 0; i < gameBoard.board.length; i++) {
            gameBoard.board[i].addEventListener("click", () => {
                if (gameBoard.board[i].innerHTML == "") {
                if (playerCreator.turns[0] == "ON" && playerCreator.turns[1] == "OFF") {
                    gameBoard.board[i].innerHTML = "X";
                        playerCreator.turns[0] = "OFF";
                        playerCreator.turns[1] = "ON";
                    } else if (playerCreator.turns[1] == "ON" && playerCreator.turns[0] == "OFF") {
                        gameBoard.board[i].innerHTML = "O";
                        playerCreator.turns[0] = "ON";
                        playerCreator.turns[1] = "OFF";
                    }
                }
            rules.winCon();    
            });
        }
    },
    vsCpuMovement() {
        function computerPlay() {
            let random = [
                gameBoard.boxes[0], gameBoard.boxes[1], gameBoard.boxes[2], gameBoard.boxes[3], gameBoard.boxes[4],
                gameBoard.boxes[5], gameBoard.boxes[6], gameBoard.boxes[7], gameBoard.boxes[8]];
            let randomBox = random[Math.floor(Math.random() * random.length)];
            if (
                gameBoard.boxes[0].innerHTML !== "" && gameBoard.boxes[1].innerHTML !== "" && gameBoard.boxes[2].innerHTML !== "" &&
                gameBoard.boxes[3].innerHTML !== "" && gameBoard.boxes[4].innerHTML !== "" && gameBoard.boxes[5].innerHTML !== "" &&
                gameBoard.boxes[6].innerHTML !== "" && gameBoard.boxes[7].innerHTML !== "" && gameBoard.boxes[8].innerHTML !== "") {
                return;
                } else if (randomBox.innerHTML == "X" || randomBox.innerHTML == "O") {
                    computerPlay();
                } else if (randomBox.innerHTML == "") {
                    randomBox.innerHTML = "O";
                }
            }
            for (let i = 0; i < gameBoard.board.length; i++) {
                gameBoard.board[i].addEventListener("click", () => {
                if (gameBoard.board[i].innerHTML == "") {
                    gameBoard.board[i].innerHTML = "X";               
                    computerPlay();
                } else {
                    return
                }
                rules.winCon();
            });
        }
    },
};

const modeSelector = {
    constants: [
        /* 0 */ modalOverlay = document.getElementById("modal-overlay"),
        /* 1 */ modalWindow = document.getElementById("modal-window"),
        /* 2 */ modalContent = document.getElementById("modal-content"),
        /* 3 */ gameButtons = document.getElementById("game-buttons"),
        /* 4 */ popUpVs = document.getElementById("popUpVs"),
        /* 5 */ popUpCpu = document.getElementById("popUpCpu"),       
    ],
    gameMode(mode) {
        if (mode === "vsPlayerTwoMode") {
            gameBoard.cleanBoard();
            p1 = playerCreator.createPlayer();
            p1.name = playerCreator.names[0].innerHTML;
            playerCreator.scores[0].innerHTML = "0";
            p2 = playerCreator.createPlayer();
            p2.name = playerCreator.names[1].innerHTML;
            playerCreator.scores[1].innerHTML = "0";
            movements.movement();
            rules.turnChanger();
        } else if (mode === "vsCPUMode") {
            gameBoard.cleanBoard();
            p1 = playerCreator.createPlayer();
            p1.name = playerCreator.names[0].innerHTML;
            playerCreator.scores[0].innerHTML = "0";
            p2 = playerCreator.createPlayer();
            p2.name = "CPU"
            playerCreator.names[1].innerHTML = p2.name;
            playerCreator.scores[1].innerHTML = "0";
            movements.vsCpuMovement();
            rules.turnChanger();
        } else {
            return
        }
    },
    popUpVsMode() {
        modeSelector.constants[2].innerHTML = "Insert Player 1 name";
        modeSelector.constants[2].style.marginLeft = "130px";
        modeSelector.constants[4].remove();
        modeSelector.constants[5].remove();
        let p1NameBar = document.createElement("input");
        p1NameBar.id = "p1NameBar";
        p1NameBar.maxLength = "6";
        modeSelector.constants[3].appendChild(p1NameBar);
        let p1NameOk = document.createElement("h2");
        p1NameOk.className = "popUpButton";
        p1NameOk.type = "button";
        p1NameOk.id = "popUpP1NameOk";
        p1NameOk.innerHTML = "OK";
        modeSelector.constants[3].appendChild(p1NameOk);
        p1NameOk.addEventListener("click", () => {
            playerCreator.names[0].innerHTML = p1NameBar.value;
            modeSelector.constants[2].innerHTML = "Insert Player 2 name";
            modeSelector.constants[2].style.marginLeft = "130px";
            p1NameBar.remove();
            p1NameOk.remove();
            let p2NameBar = document.createElement("input");
            p2NameBar.id = "p2NameBar";
            p2NameBar.maxLength = "6";
            modeSelector.constants[3].appendChild(p2NameBar);
            let p2NameOk = document.createElement("h2");
            p2NameOk.className = "popUpButton";
            p2NameOk.type = "button";
            p2NameOk.id = "popUpP2NameOk";
            p2NameOk.innerHTML = "OK";
            modeSelector.constants[3].appendChild(p2NameOk);
            p2NameOk.addEventListener("click", () => {
                playerCreator.names[1].innerHTML= p2NameBar.value;
                document.body.removeChild(modalOverlay);
                modeSelector.gameMode("vsPlayerTwoMode");
            })
        });
    },
    popUpCPUMode() {
        modeSelector.constants[2].innerHTML = "Insert Player name";
        modeSelector.constants[2].style.marginLeft = "130px";
        modeSelector.constants[4].remove();
        modeSelector.constants[5].remove();
        let p1NameBar = document.createElement("input");
        p1NameBar.id = "p1NameBar";
        p1NameBar.maxLength = "6";
        modeSelector.constants[3].appendChild(p1NameBar);
        let p1NameOk = document.createElement("h2");
        p1NameOk.class = "popUpButton";
        p1NameOk.type = "button";
        p1NameOk.id = "popUpP1NameOk";
        p1NameOk.innerHTML = "OK";
        modeSelector.constants[3].appendChild(p1NameOk);
        p1NameOk.addEventListener("click", () => {
            playerCreator.names[0].innerHTML = p1NameBar.value;
            document.body.removeChild(modalOverlay);
            modeSelector.gameMode("vsCPUMode");
        });
    },
};

popUpVs.addEventListener("click", () => {
    modeSelector.popUpVsMode();
});

popUpCpu.addEventListener("click", () => {
    modeSelector.popUpCPUMode();
});

//REFACTOR THIS WITH A FUNCTION THAT TAKES DIFFERENT PARAMETERS FOR EACH GAME MODE!

const vsPlayerTwo = document.getElementById("vsplayer2");
vsPlayerTwo.addEventListener("click", () => {
    gameBoard.cleanBoard();
    modeSelector.gameMode("");
    playerCreator.names[0].innerHTML = "0";
    playerCreator.names[1].innerHTML = "0";
    playerCreator.scores[0].innerHTML = "0";
    playerCreator.scores[1].innerHTML = "0";
    let vsPlayerTwoOverlay = document.createElement("div");
    vsPlayerTwoOverlay.id = "vsPlayerTwoOverlay";
    vsPlayerTwoOverlay.className = "modal-overlay";
    document.body.appendChild(vsPlayerTwoOverlay);
    let vsPlayerTwoWindow = document.createElement("div");
    vsPlayerTwoWindow.className ="modal-window";
    vsPlayerTwoWindow.id = "vsPlayerTwoWindow";
    vsPlayerTwoOverlay.appendChild(vsPlayerTwoWindow);
    let vsPlayerTwoTitlebar = document.createElement("div");
    vsPlayerTwoTitlebar.className ="modal-titlebar";
    vsPlayerTwoTitlebar.id = "vsPlayerTwoWTitlebar";
    vsPlayerTwoWindow.appendChild(vsPlayerTwoTitlebar);
    let vsPlayerTwoTitle = document.createElement("span");
    vsPlayerTwoTitle.className = "modal-title";
    vsPlayerTwoTitle.id = "vsPlayerTwoTitle";
    vsPlayerTwoTitle.innerHTML = "VS Player 2 Mode";
    vsPlayerTwoTitle.style.marginLeft = "160px";
    vsPlayerTwoTitlebar.appendChild(vsPlayerTwoTitle);
    let vsPlayerTwoContent = document.createElement("div");
    vsPlayerTwoContent.className = "modal-content";
    vsPlayerTwoContent.id = "vsPlayerTwoContent";
    vsPlayerTwoContent.innerHTML = "Insert Player 1 name";
    vsPlayerTwoContent.style.marginLeft = "120px";
    vsPlayerTwoWindow.appendChild(vsPlayerTwoContent);
    let vsPlayerTwoButtons = document.createElement("div");
    vsPlayerTwoButtons.className = "modal-buttons";
    vsPlayerTwoButtons.id = "vsPlayerTwoButtons";
    vsPlayerTwoWindow.appendChild(vsPlayerTwoButtons);
    let vsPlayerTwoP1NameBar = document.createElement("input");
    vsPlayerTwoP1NameBar.id = "p1NameBar";
    vsPlayerTwoP1NameBar.maxLength = "6";
    vsPlayerTwoButtons.appendChild(vsPlayerTwoP1NameBar);
    let vsPlayerTwoP1NameOk = document.createElement("h2");
    vsPlayerTwoP1NameOk.className = "popUpButton";
    vsPlayerTwoP1NameOk.type = "button";
    vsPlayerTwoP1NameOk.id = "popUpP1NameOk";
    vsPlayerTwoP1NameOk.innerHTML = "OK";
    vsPlayerTwoButtons.appendChild(vsPlayerTwoP1NameOk);
    let vsPlayerTwoInfo = document.createElement("div");
    vsPlayerTwoInfo.id = "modal-info";
    vsPlayerTwoInfo.innerHTML = "You can reset the game mode during the match by clicking on any of the buttons to the right";
    vsPlayerTwoWindow.appendChild(vsPlayerTwoInfo);
    vsPlayerTwoP1NameOk.addEventListener("click", () => {
        playerCreator.names[0].innerHTML = vsPlayerTwoP1NameBar.value;
        vsPlayerTwoContent.innerHTML = "Insert Player 2 name";
        vsPlayerTwoContent.style.marginLeft = "130px";
        vsPlayerTwoP1NameBar.remove();
        vsPlayerTwoP1NameOk.remove();
        let vsPlayerTwoP2NameBar = document.createElement("input");
        vsPlayerTwoP2NameBar.id = "p2NameBar";
        vsPlayerTwoP2NameBar.maxLength = "6";
        vsPlayerTwoButtons.appendChild(vsPlayerTwoP2NameBar);
        let vsPlayerTwoP2NameOk = document.createElement("h2");
        vsPlayerTwoP2NameOk.className = "popUpButton";
        vsPlayerTwoP2NameOk.type = "button";
        vsPlayerTwoP2NameOk.id = "popUpP2NameOk";
        vsPlayerTwoP2NameOk.innerHTML = "OK";
        vsPlayerTwoButtons.appendChild(vsPlayerTwoP2NameOk);
        vsPlayerTwoP2NameOk.addEventListener("click", () => {
            playerCreator.names[1].innerHTML= vsPlayerTwoP2NameBar.value;
            document.body.removeChild(vsPlayerTwoOverlay);
            modeSelector.gameMode("vsPlayerTwoMode");
            
        })
    });
});


const vsCPU = document.getElementById("vsCPU");
vsCPU.addEventListener("click", () => {
    gameBoard.cleanBoard();
    modeSelector.gameMode("");
    playerCreator.names[0].innerHTML = "0";
    playerCreator.names[1].innerHTML = "0";
    playerCreator.scores[0].innerHTML = "0";
    playerCreator.scores[1].innerHTML = "0";
    let vsCPUOverlay = document.createElement("div");
    vsCPUOverlay.id = "vsCPUOverlay";
    vsCPUOverlay.className = "modal-overlay";
    document.body.appendChild(vsCPUOverlay);
    let vsCPUWindow = document.createElement("div");
    vsCPUWindow.className ="modal-window";
    vsCPUWindow.id = "vsCPUWindow";
    vsCPUOverlay.appendChild(vsCPUWindow);
    let vsCPUTitlebar = document.createElement("div");
    vsCPUTitlebar.className ="modal-titlebar";
    vsCPUTitlebar.id = "vsCPUTitlebar";
    vsCPUWindow.appendChild(vsCPUTitlebar);
    let vsCPUTitle = document.createElement("span");
    vsCPUTitle.className = "modal-title";
    vsCPUTitle.id = "vsCPUTitle";
    vsCPUTitle.innerHTML = "VS CPU Mode";
    vsCPUTitle.style.marginLeft = "160px";
    vsCPUTitlebar.appendChild(vsCPUTitle);
    let vsCPUContent = document.createElement("div");
    vsCPUContent.className = "modal-content";
    vsCPUContent.id = "vsCPUContent";
    vsCPUContent.innerHTML = "Insert Player 1 name";
    vsCPUContent.style.marginLeft = "120px";
    vsCPUWindow.appendChild(vsCPUContent);
    let vsCPUButtons = document.createElement("div");
    vsCPUButtons.className = "modal-buttons";
    vsCPUButtons.id = "vsCPUButtons";
    vsCPUWindow.appendChild(vsCPUButtons);
    let vsCPUP1NameBar = document.createElement("input");
    vsCPUP1NameBar.id = "p1NameBar";
    vsCPUP1NameBar.maxLength = "6";
    vsCPUButtons.appendChild(vsCPUP1NameBar);
    let vsCPUP1NameOk = document.createElement("h2");
    vsCPUP1NameOk.className = "popUpButton";
    vsCPUP1NameOk.type = "button";
    vsCPUP1NameOk.id = "popUpP1NameOk";
    vsCPUP1NameOk.innerHTML = "OK";
    vsCPUButtons.appendChild(vsCPUP1NameOk);
    let vsCPUInfo = document.createElement("div");
    vsCPUInfo.id = "modal-info";
    vsCPUInfo.innerHTML = "You can reset the game mode during the match by clicking on any of the buttons to the right";
    vsCPUWindow.appendChild(vsCPUInfo);
    vsCPUP1NameOk.addEventListener("click", () => {
        playerCreator.names[0].innerHTML = vsCPUP1NameBar.value;
            document.body.removeChild(vsCPUOverlay);
            modeSelector.gameMode("vsCPUMode");
    });
});