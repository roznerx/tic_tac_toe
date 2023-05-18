import { Box, Grid } from "@mui/material";

const boardStyles = {
    position: "relative",
    backgroundColor: "#fafbf6",
    border: "6px solid #565a75",
    borderRadius: "10px",
    minWidth: "35rem",
    minHeight: "35rem",
    maxWidth: "35rem",
    maxHeight: "35rem",
    display: "flex",
}

let boxStyles = {
    border: "6px solid #565a75",
    borderRadius: "2px",
    fontWeight: "bold",
    fontSize: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#c6b7be",
};

export default function Board() {

    const gameBoard = [
        {value: ""}, {value: ""}, {value: ""},
        {value: ""}, {value: ""}, {value: ""},
        {value: ""}, {value: ""}, {value: ""}
    ];

    const cleanBoard = () => gameBoard.forEach(g => g.value = "");

    return (
        <Grid container mt={"3rem"}>
            <Grid item xs={2} />
            <Grid item xs={8} container sx={boardStyles}>
            {
                gameBoard.map((g, index) => {
                    return (
                        <Grid
                            key={index}
                            sx={boxStyles}
                            xs={4}
                        >
                            {g.value}
                        </Grid>
                    )
                })
            }
            </Grid>
            <Grid item xs={2} />
        </Grid>
    );
};
