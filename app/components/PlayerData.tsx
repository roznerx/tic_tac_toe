import { Grid, Typography } from "@mui/material";
import { textStyle } from "@/styles";

export default function PlayerData() {
    return (
        <Grid container sx={{display: "flex", flexDirection: "row", height: "100%"}}>
            <Grid item xs={2} />
            <Grid item container xs={10} sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Grid container>
                    <Typography sx={textStyle}>Player 1</Typography>
                </Grid>
                <Grid container sx={{display: "flex", flexDirection: "row"}}>
                    <Grid item xs={1} />
                    <Grid item container xs={11} sx={{display: "flex", flexDirection: "column"}}>
                        <Typography sx={textStyle}>Name - </Typography>
                        <Typography sx={textStyle}>Score - </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Typography sx={textStyle}>Player 1</Typography>
                </Grid>
                <Grid container sx={{display: "flex", flexDirection: "row"}}>
                    <Grid item xs={1} />
                    <Grid item container xs={11} sx={{display: "flex", flexDirection: "column"}}>
                        <Typography sx={textStyle}>Name - </Typography>
                        <Typography sx={textStyle}>Score - </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
