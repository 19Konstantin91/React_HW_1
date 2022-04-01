import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
// import st from "./chat.module.css";

const useStyles = makeStyles((ctx) => {

  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#cca525",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#cc8425",
      },
    },
  };
});

export function Chat({ title, selected, handleListItemClick }) {
  const styles = useStyles();

  return (
    <ListItemButton
      onClick={handleListItemClick}
      className={styles.item}
      selected={selected}
    >
      <ListItem>
        <AccountCircle fontSize="large" />
      </ListItem>
      <ListItemText primary={title} />
    </ListItemButton>
  );
} 
