"use client"
import { Grid } from '@mui/material'
import PlayerData from './components/PlayerData';
import Board from './components/Board';
import GameModes from './components/GameModes';

export default function Home() {
  return (
    <Grid container sx={{display: "flex", flexDirection: "row", marginTop: "3rem"}}>
      <Grid item xs={3}>
        <PlayerData />
      </Grid>
      <Grid item xs={6}>
        <Board />
      </Grid>
      <Grid item xs={3}>
        <GameModes />
      </Grid>
    </Grid>
  );
};
