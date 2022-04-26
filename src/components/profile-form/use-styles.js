import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles (() => {
    return {
        box: {
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            margin: "0 auto",
            width: 300,
            backgroundColor: "#fbdecd",
            color: "darkred",
            borderRadius: "5px"
        },

        input: {
           padding: "5px",
           margin: "10px",
           fontSize: "15px",
           color: "red",
           "&.MuiInput-root:after": {
               borderBottom: "none",
           }
        },
        button: {
            color: "#b18800",
        },
    }
});
