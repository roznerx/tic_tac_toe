export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '500px',
    background: "#565a75",
	border: "1px solid #fafbf6",
	fontSize: "1rem",
	boxShadow: "0 0 15px #0f0f1b",
};

export const modalBtnStyle = {
    fontSize: "1rem",
    fontFamily: "8-bit_arcade_inmedium !important",
    textAlign: "center",
    width: "220px",
    height: "50px",
    border: "1px solid #c6b7be",
    color:"#0f0f1b",
    backgroundColor: "#565a75",
    '&:hover': {
        border: "3px solid #c6b7be",
        color: "#565a75",
        backgroundColor: "#0f0f1b",
    }
};

export const modalTitleStyle = {
    backgroundColor: "#0f0f1b", 
    height: "20%", 
    justifyContent: "center",
};

export const titleTypographyStyle = {
    fontSize: "3rem", 
    color: "#565a75"
};

export const instructionsStyle = {
    fontSize: "3rem", 
    color: "#0f0f1b"
};

export const textFieldStyle = {
    fontSize: "2rem",
    backgroundColor: "#0f0f1b",
    width: "220px",
    height: "50px",
    border: "1px solid #c6b7be",
    "& fieldset": { border: 'none' },
};

export const inputPropStyle = { 
    style: { 
        color: "#c6b7be", 
        fontSize: "2rem",
        padding: 0,
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem"
    } 
};

export const inputContainer = {
    justifyContent: "space-around", 
    alignItems: "center"
};