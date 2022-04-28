import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles (() => {
    return {
        input: {
           color: "#000000",
           padding: "10px 15px",
           fontSize: "15px",
           "&.MuiInput-root:after": {
               borderBottom: "none",
           }
        },
        iconSend: {
            cursor: "pointer"
        }
    }
});