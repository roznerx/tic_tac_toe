import { ChangeEvent } from "react";
import { Button, TextField } from "@mui/material";
import { 
    inputPropStyle, modalBtnStyle, textFieldStyle 
} from "@/styles/welcomeModal";
import { PlayerInputProps } from "@/interfaces";

export default function PlayerInput({ 
    player, value, setPlayerOne, setPlayerTwo, setPlayerOneName, 
    gameMode, setPlayerTwoName, setOpenWelcomeModal
}: PlayerInputProps) {
    
    const playerChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (player === 1) {
            setPlayerOne(e.target.value);
        } else {
            setPlayerTwo(e.target.value);
        };
    };

    return (
        <>
            <TextField
                value={value}
                onChange={playerChange}
                variant="outlined" 
                sx={textFieldStyle}
                inputProps={inputPropStyle}
                InputLabelProps={{shrink: false}}
            />
            <Button 
                sx={{...modalBtnStyle, width: "110px"}}
                onClick={() => {
                    if (player === 1) {
                        setPlayerOneName(value)
                        if (gameMode === "VSCPU") {
                            setPlayerTwoName("CPU");
                            setOpenWelcomeModal(false);
                        };
                    } else {
                        setPlayerTwoName(value)
                        setOpenWelcomeModal(false);
                    }
                }}
            >
                OK
            </Button>
        </>
    );
};
