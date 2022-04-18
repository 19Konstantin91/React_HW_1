import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    button: {
      color: "#8D0000",
      margin: "0 auto 10px",
      fontSize: "15px",
      display: "flex",
      borderRadius: "10px",
      "&.MuiInput-root:after": {
        borderBottom: "none",
      },
    },
    buttonDelete: {
        color: "#8D0000",
        borderRadius: "10px",
    },
    link: {
      borderRadius: "10px",
      color: "#875a5a",
      margin: "left",
      borderBottom: "none",
    },
  };
});
