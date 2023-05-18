import { PlayerInfoProps } from "@/interfaces";
import { textStyle, flexRow, flexColumn } from "@/styles";
import { Grid, Typography } from "@mui/material";

export default function PlayerInfo(
    { title, name, score}: PlayerInfoProps
) {
    return (
        <>
            <Grid container>
                <Typography sx={textStyle}>
                    {title}
                </Typography>
            </Grid>
            <Grid container sx={flexRow}>
                <Grid item xs={0.5} />
                <Grid 
                    item 
                    container 
                    xs={11.5} 
                    sx={flexColumn}
                >
                    <Typography sx={textStyle}>
                        Name - {name}
                    </Typography>
                    <Typography sx={textStyle}>
                        Score - {score}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};
