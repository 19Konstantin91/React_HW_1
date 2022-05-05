import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { List, Button } from "@mui/material";
import { useStyles } from "./use-styles";
import { Chat } from "./chat";
import {
  createConversation,
  deleteConversation,
  createConversationFB,
} from "../../store/conversations";
import ClearIcon from '@mui/icons-material/Clear';

export function ChatList() {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const conversations = useSelector(
    (state) => state.conversations.conversations
  );

  const create = () => {
    const name = prompt("Введите название комнаты!");
    const isValidName = !conversations.includes(name);
    if (!!name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Не правильное название или такая комната уже существует.");
    }
  };

  const deleteCon = (conversation) => {
    dispatch(deleteConversation(conversation));
    navigate("/chat");
  };

  const styles = useStyles();

  return (
    <List component="nav">
      <Button onClick={create} className={styles.button}>
        create room
      </Button>

      {conversations.map((chat, index) => (
        <div 
        key={index} 
        style={{ display: "flex"}}>
          <Button 
          className={styles.buttonDelete}
          onClick={ () => deleteCon(chat)}>
            <ClearIcon fontSize="small"/>
          </Button>
          <Link
          className={styles.link}
          to={`/chat/${chat}`}>
            <Chat
            title={chat} selected={roomId === chat} />
          </Link>
        </div>
      ))}
    </List>
  );
}


