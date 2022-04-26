import { useDispatch } from "react-redux";
import { Button} from "@mui/material";
import { deleteMessage } from "../../../store/messages";
import stylesMod from "./message.module.css";
import ClearIcon from '@mui/icons-material/Clear';
import { useStyles } from "./use-styles";
import cls from "classnames";

export const Message =({ message, children, roomId }) => {
  const dispatch = useDispatch();

  const styles = useStyles();

  return (
    <div
      className={cls(stylesMod.message, {
        [stylesMod.currentMessage]: message.author === "User",
      })}
    >
      <div>
        <h3>{message.author}</h3>
        <p>{message.message}</p>
        {children}
        <p>{message.date}</p>
      </div>
      
      <Button
      onClick={() => dispatch(deleteMessage(roomId, message.id))}
      className={styles.buttonDelete}
      >
        <ClearIcon 
        fontSize="small"/>
      </Button>

    </div>
  );
};