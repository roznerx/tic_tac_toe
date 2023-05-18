"use client"
import { Grid, Typography } from "@mui/material";

const headerStyles = {
    backgroundColor: "#0f0f1b",
    borderBottom: "5px solid #565a75",
    display: "flex", 
    flexDirection: "row"
};

const titleContainerStyles = {
    display: "flex",
    justifyContent: "center"
};

const titleStyles = {
    fontFamily: "8-bit_arcade_inmedium !important",
    color: "#565a75",
    fontSize: "5rem",
};

export default function Header() {
    return (
        <Grid container sx={headerStyles}>
            <Grid item xs={3} />
            <Grid item xs={6} sx={titleContainerStyles}>
                <Typography sx={titleStyles}>
                    TIC-TAC-TOE
                </Typography>
            </Grid>
            <Grid item xs={3} />
        </Grid>
    );
};
