"use client"
import { Grid } from '@mui/material'
import PlayerData from './components/playerData/PlayerData';
import Board from './components/Board';
import GameModes from './components/GameModes';
import WelcomeModal from './components/modals/WelcomeModal';
import { useState } from 'react';
import { flexRow } from '@/styles';

export default function Home() {
  const [openWelcomeModal, setOpenWelcomeModal] = useState<boolean>(true);
  const [gameMode, setGameMode] = useState<string>("");
  const [playerOneName, setPlayerOneName] = useState<string>("");
  const [playerTwoName, setPlayerTwoName] = useState<string>("");
  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);

  return (
    <>
      <WelcomeModal 
        openWelcomeModal={openWelcomeModal} 
        setOpenWelcomeModal={setOpenWelcomeModal} 
        gameMode={gameMode} 
        setGameMode={setGameMode}
        playerOneName={playerOneName}
        setPlayerOneName={setPlayerOneName}
        setPlayerTwoName={setPlayerTwoName}
      />
      <Grid container sx={{...flexRow, marginTop: "3rem"}}>
        <Grid item xs={3}>
          <PlayerData 
            playerOneName={playerOneName} 
            playerTwoName={playerTwoName} 
            playerOneScore={playerOneScore}
            playerTwoScore={playerTwoScore}
          />
        </Grid>
        <Grid item xs={6}>
          <Board />
        </Grid>
        <Grid item xs={3}>
          <GameModes />
        </Grid>
      </Grid>
    </>
  );
};
