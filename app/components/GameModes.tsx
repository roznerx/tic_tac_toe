import { Grid, Typography } from "@mui/material";
import { textStyle } from "@/styles";

export default function GameModes() {
    return (
        <Grid container sx={{display: "flex", flexDirection: "row", height: "100%"}}>
            <Grid item xs={1} />
            <Grid item container xs={9} sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Grid container>
                    <Typography sx={textStyle}>Game Mode</Typography>
                </Grid>
                <Grid container sx={{display: "flex", flexDirection: "row"}}>
                    <Grid item xs={1} />
                    <Grid item container xs={11} sx={{display: "flex", flexDirection: "column"}}>
                        <Typography sx={textStyle}>VS Player 2</Typography>
                        <Typography sx={textStyle}>VS CPU </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    );
};
