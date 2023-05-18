import { useState } from "react";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { WelcomeModalProps } from "@/interfaces";
import { flexColumn } from "@/styles";
import { 
    inputContainer, instructionsStyle, modalBtnStyle, 
    modalStyle, modalTitleStyle, titleTypographyStyle 
} from "@/styles/welcomeModal";
import PlayerInput from "./PlayerInput";

export default function WelcomeModal({ 
    openWelcomeModal, setOpenWelcomeModal, gameMode, setGameMode, 
    playerOneName, setPlayerOneName, setPlayerTwoName
}: WelcomeModalProps) {
    const [playerOne, setPlayerOne] = useState<string>("");
    const [playerTwo, setPlayerTwo] = useState<string>("");

    return (
        <Modal open={openWelcomeModal} >
            <Box sx={modalStyle}>
                <Grid container sx={{...flexColumn}}>
                    <Grid item container sx={modalTitleStyle}>
                        <Typography sx={titleTypographyStyle}>
                            WELCOME TO TIC-TAC-TOE
                        </Typography>
                    </Grid>
                    <Grid 
                        item 
                        container 
                        sx={{flexDirection: "row", gap: "1rem"}}
                    >
                        <Grid item container sx={{justifyContent: "center"}}>
                            <Typography sx={instructionsStyle}>
                                {
                                    // REVIEW CPU LOGIC
                                    gameMode === "" ? "Please select a game mode" : 
                                    playerOneName === "" ? "Insert Player 1 name" :
                                    "Insert Player 2 name"
                                }
                            </Typography>
                        </Grid>
                        <Grid 
                            item 
                            container 
                            sx={{display: "row", justifyContent: "center"}}
                        >
                            <Grid item xs={gameMode === "" ? 2: 3} />
                            <Grid 
                                item 
                                xs={gameMode === "" ? 8 : 6} 
                                container 
                                sx={inputContainer}
                            >
                                {
                                    gameMode === "" ?
                                    <>
                                        <Button 
                                            sx={modalBtnStyle} 
                                            onClick={() => setGameMode("VSP2")}
                                        >
                                            VS Player 2
                                        </Button>
                                        <Button 
                                            sx={modalBtnStyle} 
                                            onClick={() => setGameMode("VSCPU")}
                                        >
                                            VS CPU
                                        </Button>
                                    </> :
                                    playerOneName === "" ?
                                    <PlayerInput 
                                        player={1}
                                        value={playerOne}
                                        setPlayerOne={setPlayerOne}
                                        setPlayerTwo={setPlayerTwo}
                                        gameMode={gameMode}
                                        setPlayerOneName={setPlayerOneName}
                                        setPlayerTwoName={setPlayerTwoName}
                                        setOpenWelcomeModal={setOpenWelcomeModal}
                                    /> :
                                    <PlayerInput 
                                        player={2}
                                        value={playerTwo}
                                        setPlayerOne={setPlayerOne}
                                        setPlayerTwo={setPlayerTwo}
                                        gameMode={gameMode}
                                        setPlayerOneName={setPlayerOneName}
                                        setPlayerTwoName={setPlayerTwoName}
                                        setOpenWelcomeModal={setOpenWelcomeModal}
                                    />
                                }
                            </Grid>
                            <Grid item xs={gameMode === "" ? 2: 3} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};
