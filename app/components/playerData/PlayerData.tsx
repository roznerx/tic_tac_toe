import { Grid } from "@mui/material";
import { PlayerDataProps } from "@/interfaces";
import { playerDataContainer, playersContainer } from "@/styles/playerData";
import PlayerInfo from "./PlayerInfo";

export default function PlayerData({ 
    playerOneName, playerTwoName, playerOneScore, playerTwoScore 
}: PlayerDataProps) {
    return (
        <Grid container sx={playerDataContainer}>
            <Grid item xs={2} />
            <Grid item container xs={10} sx={playersContainer}>
                <PlayerInfo 
                    title={"Player 1"} 
                    name={playerOneName} 
                    score={playerOneScore} 
                />
                <PlayerInfo 
                    title={"Player 2"} 
                    name={playerTwoName} 
                    score={playerTwoScore} 
                />
            </Grid>
        </Grid>
    );
};
