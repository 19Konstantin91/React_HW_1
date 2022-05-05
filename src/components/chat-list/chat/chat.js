import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((ctx) => {

  return {
    item: {
      "&.Mui-selected": {
        borderRadius: "10px",
        backgroundColor: "#cca525",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#cc8425",
      },
    },
    acc: {
      "&.MuiListItem-root": {
        width: "auto",
      }
    }
  };
});

export function Chat({ title, selected}) {
  const styles = useStyles();

  return (
    <ListItemButton
      className={styles.item}
      selected={selected}
      data-testid="wrapper"
    >
      <ListItem
      className={styles.acc}
      >
        <AccountCircle
        fontSize="large"/>
      </ListItem>
      <ListItemText primary={title} />
    </ListItemButton>
  );
} 
